import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.aureolabs.dev'

  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/products/',
          '/developers/',
          '/company/',
          '/solutions/',
          '/resources/',
          '/blog/',
          '/legal/',
        ],
        disallow: [
          '/api/',
          '/admin/',
          '/private/',
          '/_next/',
          '/sandbox/private/',
          '/developers/sandbox/private/',
        ],
      },
      {
        userAgent: 'GPTBot',
        disallow: ['/api/', '/sandbox/', '/developers/sandbox/'],
      },
      {
        userAgent: 'ChatGPT-User',
        disallow: ['/api/', '/sandbox/', '/developers/sandbox/'],
      },
      {
        userAgent: 'CCBot',
        disallow: ['/api/', '/sandbox/', '/developers/sandbox/'],
      },
      {
        userAgent: 'anthropic-ai',
        disallow: ['/api/', '/sandbox/', '/developers/sandbox/'],
      },
      {
        userAgent: 'ClaudeBot',
        disallow: ['/api/', '/sandbox/', '/developers/sandbox/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}