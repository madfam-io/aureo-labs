# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Aureo Labs is a Next.js 14+ enterprise website showcasing AI-powered platforms with a focus on performance, accessibility, and conversion. The site implements a golden ratio (φ) based design system with glassmorphism aesthetics.

### Core Products
- **PENNY**: AI Assistant Platform
- **Forge Sight**: Pricing Intelligence
- **Cotiza Studio**: Quotation System
- **Dhanam**: Financial Wellness
- **AVALA**: Training Platform
- **Factlas**: Geographic Intelligence

## Essential Commands

```bash
# Development
pnpm dev                 # Start dev server (http://localhost:3000)
pnpm build              # Build for production
pnpm start              # Start production server

# Code Quality
pnpm typecheck          # TypeScript type checking
pnpm lint               # ESLint checking
pnpm format             # Prettier formatting
pnpm ci                 # Full CI check (typecheck + lint + build + test)

# Testing
pnpm test               # Run all unit tests (Vitest)
pnpm test:watch         # Run tests in watch mode
pnpm test:coverage      # Generate coverage report
pnpm test:e2e           # Run E2E tests (Playwright)
pnpm test:e2e --ui      # Open Playwright UI mode
pnpm test:e2e --debug   # Debug E2E tests

# Component Development
pnpm storybook          # Start Storybook (http://localhost:6006)
pnpm storybook:build    # Build Storybook static site

# Analysis
pnpm analyze            # Analyze bundle size with visual report
```

## Architecture & Design Patterns

### Golden Ratio Design System
The entire design system is mathematically based on φ (1.618):
- **Spacing**: Fibonacci-based scale (8, 13, 21, 34, 54, 88px)
- **Typography**: φ-modular scale for font sizes
- **Layout**: `.grid-phi` utility creates 1:φ column layouts
- **Aspect Ratios**: `.aspect-phi` for golden rectangle proportions

### Glassmorphism Implementation
Glass effects use CSS variables for performance optimization:
- `--glass-bg`: Translucent background with controllable opacity
- `--glass-blur`: Backdrop filter (reduced for performance/accessibility)
- `--glass-stroke`: Border with subtle highlight
- Utility classes: `.glass`, `.panel-glass`

### Component Architecture
- **Server Components by default** (App Router)
- **Client Components** only when needed (interactions, hooks)
- **Radix UI primitives** for accessibility
- **shadcn/ui pattern** for component customization
- **CVA (class-variance-authority)** for variant management

### Performance Constraints
Strict budgets enforced:
- JavaScript: ≤ 200KB per route
- CSS: ≤ 100KB per route
- LCP: ≤ 2.5s
- INP: ≤ 200ms
- CLS: ≤ 0.1

### State Management
- **Zustand** for client-side global state
- **TanStack Query** for server state caching
- **React Hook Form + Zod** for form management

## Critical Files & Their Purposes

### Design System Core
- `src/styles/tokens.css`: CSS variables for golden ratio values, colors, spacing
- `src/styles/globals.css`: Global styles, utility classes, component bases
- `tailwind.config.ts`: Custom utilities (`.glass`, `.gold-text`, `.grid-phi`)

### Configuration
- `next.config.mjs`: Security headers, image optimization, experimental features
- `vitest.config.ts`: Test setup with path aliases matching tsconfig
- `.env.example`: All required environment variables documented

### Type Safety
- `tsconfig.json`: Strict mode enabled with all checks
- Path aliases configured (`@/*`, `@/components/*`, etc.)

## Development Workflow

### Branch Strategy
- `main`: Production-ready code
- `develop`: Integration branch
- Feature branches: `feat/<scope>-<description>`

### Pre-commit Checks
Husky + lint-staged runs automatically:
1. ESLint fixes
2. Prettier formatting
3. TypeScript compilation check

### CI/CD Pipeline
GitHub Actions runs on every PR:
1. Lint & format check
2. TypeScript validation
3. Unit tests with coverage
4. E2E tests (Chromium)
5. Build verification
6. Lighthouse performance audit
7. Security scanning

### Deployment
- **Preview**: Automatic on PRs via Vercel
- **Production**: Automatic on merge to main
- Environment-specific configs via Vercel Edge Config

## Important Patterns

### Accessibility
- All interactive elements must have focus states
- Use semantic HTML and ARIA labels
- Test with keyboard navigation
- Respect `prefers-reduced-motion`
- Maintain WCAG 2.2 AA compliance

### SEO & Metadata
- Use Next.js metadata API in layouts
- Implement JSON-LD structured data
- Dynamic OG images for social sharing
- Canonical URLs for all pages

### Error Handling
- Use error boundaries for graceful failures
- Log errors to Sentry with context
- Provide user-friendly error messages
- Implement retry logic for API calls

### Analytics
- PostHog for product analytics
- Vercel Analytics for web vitals
- Custom events must include context
- Respect user privacy preferences

## Testing Philosophy

### Unit Tests (Vitest)
- Test business logic and utilities
- Mock external dependencies
- Aim for 80% coverage minimum
- Use Testing Library for components

### E2E Tests (Playwright)
- Test critical user journeys
- Cover multiple viewports
- Include accessibility checks
- Run against preview deployments

### Visual Testing (Storybook)
- Document component variations
- Test interaction states
- Verify responsive behavior
- Check theme variations

## Performance Optimization

### Image Handling
- Use Next.js Image component
- Provide AVIF/WebP formats
- Implement responsive sizing
- Lazy load below the fold

### Code Splitting
- Route-based splitting automatic
- Dynamic imports for heavy components
- Separate vendor bundles
- Tree-shake unused code

### Caching Strategy
- ISR for content pages
- Edge caching for API routes
- Redis for hot data paths
- Client-side caching with TanStack Query

## Security Considerations

### Headers
- Strict CSP with nonces
- HSTS preloading enabled
- X-Frame-Options: SAMEORIGIN
- Permissions-Policy restrictive

### Data Handling
- Never log sensitive data
- Sanitize user inputs
- Use environment variables for secrets
- Implement rate limiting

### Authentication (when implemented)
- JWT with short expiry
- Refresh token rotation
- MFA for admin surfaces
- Session management

## Monitoring & Observability

### Error Tracking
- Sentry for runtime errors
- Source maps in production
- User context collection
- Performance monitoring

### Analytics Events
- Page views automatic
- Custom events for interactions
- Funnel tracking for conversions
- A/B test variant tracking

### Performance Monitoring
- Core Web Vitals tracking
- Custom performance marks
- Resource timing analysis
- Long task detection