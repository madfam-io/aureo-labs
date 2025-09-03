// Analytics configuration and utilities
export interface AnalyticsEvent {
  name: string
  properties?: Record<string, any>
  userId?: string
  timestamp?: Date
}

export interface PageViewEvent {
  path: string
  title: string
  referrer?: string
  userId?: string
}

class Analytics {
  private isEnabled: boolean
  private userId: string | null = null

  constructor() {
    this.isEnabled = typeof window !== 'undefined' && 
                    process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true'
  }

  init(userId?: string) {
    if (!this.isEnabled) return
    
    this.userId = userId || null

    // Initialize PostHog
    if (process.env.NEXT_PUBLIC_POSTHOG_KEY) {
      this.initPostHog()
    }

    // Initialize Vercel Analytics
    this.initVercelAnalytics()
  }

  private initPostHog() {
    // PostHog initialization would go here
    // This is a placeholder for the actual implementation
    console.log('PostHog initialized')
  }

  private initVercelAnalytics() {
    // Vercel Analytics initialization would go here
    // This is a placeholder for the actual implementation
    console.log('Vercel Analytics initialized')
  }

  track(event: AnalyticsEvent) {
    if (!this.isEnabled) return

    const eventData = {
      ...event,
      userId: event.userId || this.userId || undefined,
      timestamp: event.timestamp || new Date(),
    }

    // Send to PostHog
    this.sendToPostHog(eventData)
    
    // Send to other analytics providers
    this.sendToVercel(eventData)
  }

  page(event: PageViewEvent) {
    if (!this.isEnabled) return

    const pageData = {
      ...event,
      userId: event.userId || this.userId || undefined,
      timestamp: new Date(),
    }

    // Track page view
    this.sendPageView(pageData)
  }

  identify(userId: string, traits?: Record<string, any>) {
    if (!this.isEnabled) return

    this.userId = userId
    
    // Send identification to analytics providers
    this.sendIdentification(userId, traits)
  }

  private sendToPostHog(event: AnalyticsEvent) {
    // PostHog event tracking implementation
    console.log('PostHog event:', event)
  }

  private sendToVercel(event: AnalyticsEvent) {
    // Vercel Analytics event tracking implementation
    console.log('Vercel event:', event)
  }

  private sendPageView(event: PageViewEvent) {
    // Page view tracking implementation
    console.log('Page view:', event)
  }

  private sendIdentification(userId: string, traits?: Record<string, any>) {
    // User identification implementation
    console.log('User identified:', userId, traits)
  }
}

// Export singleton instance
export const analytics = new Analytics()

// Event tracking helpers
export const trackEvent = {
  // Product interactions
  productView: (productName: string) => {
    analytics.track({
      name: 'product_viewed',
      properties: { product: productName }
    })
  },

  demoStart: (productName: string) => {
    analytics.track({
      name: 'demo_started',
      properties: { product: productName }
    })
  },

  demoComplete: (productName: string, duration: number) => {
    analytics.track({
      name: 'demo_completed',
      properties: { product: productName, duration }
    })
  },

  // CTA interactions
  ctaClick: (ctaText: string, location: string) => {
    analytics.track({
      name: 'cta_clicked',
      properties: { cta_text: ctaText, location }
    })
  },

  // API interactions
  apiKeyGenerated: () => {
    analytics.track({
      name: 'api_key_generated'
    })
  },

  documentationViewed: (section: string) => {
    analytics.track({
      name: 'documentation_viewed',
      properties: { section }
    })
  },

  // Contact and conversion
  contactFormSubmitted: (formType: string) => {
    analytics.track({
      name: 'contact_form_submitted',
      properties: { form_type: formType }
    })
  },

  newsletterSignup: (source: string) => {
    analytics.track({
      name: 'newsletter_signup',
      properties: { source }
    })
  },
}

// Page tracking helper
export const trackPage = (path: string, title: string) => {
  analytics.page({ path, title })
}