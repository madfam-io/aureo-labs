# =============================================================================
# AUREO-LABS - Production Dockerfile
# =============================================================================
# Multi-stage build for Next.js standalone output
# Optimized for MADFAM ecosystem deployment
# =============================================================================

# Stage 1: Dependencies
FROM node:20-alpine AS deps
WORKDIR /app

# Install dependencies needed for native modules
RUN apk add --no-cache libc6-compat

# Copy package files
COPY package.json pnpm-lock.yaml* ./

# Install pnpm and dependencies
RUN corepack enable pnpm && pnpm install --frozen-lockfile

# Stage 2: Builder
FROM node:20-alpine AS builder
WORKDIR /app

# Copy dependencies from deps stage
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Set environment variables for build
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

# Enable standalone output for Next.js
RUN corepack enable pnpm && \
    echo '/** @type {import("next").NextConfig} */' > next.config.standalone.mjs && \
    echo 'import nextConfig from "./next.config.mjs";' >> next.config.standalone.mjs && \
    echo 'export default { ...nextConfig, output: "standalone" };' >> next.config.standalone.mjs && \
    mv next.config.mjs next.config.original.mjs && \
    mv next.config.standalone.mjs next.config.mjs && \
    pnpm build

# Stage 3: Runner
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Create non-root user for security
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copy necessary files from builder
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost:3000/api/health || exit 1

CMD ["node", "server.js"]
