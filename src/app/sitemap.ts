import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.aureolabs.dev'
  const lastModified = new Date()

  const routes = [
    // Core pages
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/products`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/developers`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/company/about`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/company/contact`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },

    // Product pages
    {
      url: `${baseUrl}/products/penny`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/products/forge-sight`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/products/cotiza`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/products/dhanam`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/products/avala`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/products/factlas`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },

    // Developer resources
    {
      url: `${baseUrl}/developers/docs`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/developers/api`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/developers/sdks`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/developers/sandbox`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },

    // Solutions
    {
      url: `${baseUrl}/solutions`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/solutions/industry`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/solutions/use-case`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },

    // Resources
    {
      url: `${baseUrl}/resources`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified,
      changeFrequency: 'daily' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources/case-studies`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },

    // Legal pages
    {
      url: `${baseUrl}/legal/privacy`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/legal/terms`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/security`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.4,
    },
  ]

  return routes
}