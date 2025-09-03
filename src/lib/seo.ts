import type { Metadata } from 'next'

export interface SEOConfig {
  title: string
  description: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article' | 'product'
  publishedTime?: string
  modifiedTime?: string
  authors?: string[]
  section?: string
  tags?: string[]
}

const defaultSEO = {
  siteName: 'Aureo Labs',
  defaultTitle: 'Aureo Labs | Where AI Innovation Meets Enterprise Reality',
  titleTemplate: '%s | Aureo Labs',
  defaultDescription: 'Transform your enterprise with AI-powered platforms built for real-world impact. Explore PENNY, Forge Sight, Cotiza, and more intelligent solutions.',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.aureolabs.dev',
  defaultImage: '/images/og/default.jpg',
  twitterHandle: '@aureolabs',
  linkedinHandle: 'aureolabs',
  githubHandle: 'aureolabs',
}

export function generateMetadata(config: SEOConfig): Metadata {
  const {
    title,
    description,
    keywords = [],
    image,
    url,
    type = 'website',
    publishedTime,
    modifiedTime,
    authors,
    section,
    tags,
  } = config

  const fullTitle = title === defaultSEO.defaultTitle 
    ? title 
    : `${title} | ${defaultSEO.siteName}`

  const fullUrl = url != null && url !== '' ? `${defaultSEO.siteUrl}${url}` : defaultSEO.siteUrl
  const fullImage = image != null && image !== '' ? `${defaultSEO.siteUrl}${image}` : `${defaultSEO.siteUrl}${defaultSEO.defaultImage}`

  const baseKeywords = [
    'AI platforms',
    'artificial intelligence',
    'enterprise AI',
    'machine learning',
    'automation',
    'intelligent assistants',
    'pricing intelligence',
    'quotation systems',
    'financial wellness',
    'training platforms',
    'geographic intelligence',
  ]

  const allKeywords = [...baseKeywords, ...keywords].join(', ')

  return {
    title: fullTitle,
    description,
    keywords: allKeywords,
    authors: authors ? authors.map(author => ({ name: author })) : [{ name: 'Aureo Labs' }],
    creator: 'Aureo Labs',
    publisher: 'Aureo Labs',
    metadataBase: new URL(defaultSEO.siteUrl),
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      type: type as 'website' | 'article' | 'profile',
      title: fullTitle,
      description,
      url: fullUrl,
      siteName: defaultSEO.siteName,
      images: [
        {
          url: fullImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      locale: 'en_US',
      ...(type === 'article' && {
        publishedTime,
        modifiedTime,
        authors,
        section,
        tags,
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      creator: defaultSEO.twitterHandle,
      images: [fullImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
      yandex: process.env.YANDEX_VERIFICATION,
      yahoo: process.env.YAHOO_VERIFICATION,
    },
  }
}

export function generateStructuredData(config: SEOConfig) {
  const { title, description, image, url, type, publishedTime, authors } = config
  
  const baseUrl = defaultSEO.siteUrl
  const fullUrl = url != null && url !== '' ? `${baseUrl}${url}` : baseUrl
  const fullImage = image != null && image !== '' ? `${baseUrl}${image}` : `${baseUrl}${defaultSEO.defaultImage}`

  // Organization Schema
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Aureo Labs',
    alternateName: 'Innovaciones MADFAM S.A.S. de C.V.',
    url: baseUrl,
    logo: `${baseUrl}/images/logo.png`,
    description: defaultSEO.defaultDescription,
    foundingDate: '2023',
    founders: [
      {
        '@type': 'Person',
        name: 'MADFAM Team',
      },
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'MX',
      addressLocality: 'Mexico City',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-123-4567',
      contactType: 'customer service',
      email: 'hello@aureolabs.dev',
    },
    sameAs: [
      'https://twitter.com/aureolabs',
      'https://linkedin.com/company/aureolabs',
      'https://github.com/aureolabs',
    ],
  }

  // WebSite Schema
  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: defaultSEO.siteName,
    url: baseUrl,
    description: defaultSEO.defaultDescription,
    publisher: {
      '@type': 'Organization',
      name: 'Aureo Labs',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }

  const schemas: Record<string, unknown>[] = [organization, website]

  // Add specific schemas based on page type
  if (type === 'article' && publishedTime != null && publishedTime !== '' && authors != null) {
    const article = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: title,
      description,
      image: fullImage,
      url: fullUrl,
      datePublished: publishedTime,
      dateModified: publishedTime,
      author: authors.map(author => ({
        '@type': 'Person',
        name: author,
      })),
      publisher: {
        '@type': 'Organization',
        name: 'Aureo Labs',
        logo: {
          '@type': 'ImageObject',
          url: `${baseUrl}/images/logo.png`,
        },
      },
    }
    schemas.push(article)
  }

  if (type === 'product') {
    const product = {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: title,
      description,
      image: fullImage,
      url: fullUrl,
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      provider: {
        '@type': 'Organization',
        name: 'Aureo Labs',
      },
      offers: {
        '@type': 'Offer',
        priceCurrency: 'USD',
        price: '99',
        priceValidUntil: '2024-12-31',
        availability: 'https://schema.org/InStock',
      },
    }
    schemas.push(product)
  }

  return schemas
}

export const productSEO = {
  penny: {
    title: 'PENNY - AI Assistant Platform',
    description: 'Advanced AI assistant with natural language processing, multi-language support, and enterprise-grade security. Transform customer interactions with intelligent automation.',
    keywords: ['AI assistant', 'chatbot', 'natural language processing', 'customer support', 'automation'],
  },
  forgeSight: {
    title: 'Forge Sight - Pricing Intelligence',
    description: 'Real-time market analysis and competitive pricing optimization. Maximize profitability with AI-driven pricing strategies and market insights.',
    keywords: ['pricing intelligence', 'market analysis', 'competitive pricing', 'revenue optimization', 'price monitoring'],
  },
  cotiza: {
    title: 'Cotiza Studio - Quotation System',
    description: 'Automated quotation generation with smart pricing and professional document creation. Streamline your sales process with intelligent proposals.',
    keywords: ['quotation system', 'proposal generation', 'sales automation', 'pricing tools', 'document generation'],
  },
  dhanam: {
    title: 'Dhanam - Financial Wellness Platform',
    description: 'Personal finance management with AI-driven insights and automated budgeting. Take control of your financial future with intelligent recommendations.',
    keywords: ['financial wellness', 'personal finance', 'budgeting', 'investment advice', 'financial planning'],
  },
  avala: {
    title: 'AVALA - Training Platform',
    description: 'Enterprise learning management system with adaptive content and progress tracking. Empower your workforce with intelligent training solutions.',
    keywords: ['learning management', 'enterprise training', 'adaptive learning', 'employee development', 'educational technology'],
  },
  factlas: {
    title: 'Factlas - Geographic Intelligence',
    description: 'Location-based analytics and insights for strategic business decision making. Unlock the power of geographic data for competitive advantage.',
    keywords: ['geographic intelligence', 'location analytics', 'geospatial analysis', 'market mapping', 'territory planning'],
  },
}