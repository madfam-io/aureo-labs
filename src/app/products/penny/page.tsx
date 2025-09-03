import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, MessageSquare, Zap, Shield, Globe, Code, BarChart } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { GlassPanel } from '@/components/ui/GlassPanel'

export const metadata: Metadata = {
  title: 'PENNY - AI Assistant Platform | Aureo Labs',
  description: 'PENNY is an advanced AI assistant platform that provides intelligent, contextual responses with enterprise-grade security and scalability.',
}

const features = [
  {
    icon: MessageSquare,
    title: 'Natural Conversation',
    description: 'Engage in human-like conversations with advanced context understanding.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Sub-second response times with optimized AI model inference.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'SOC 2 compliant with end-to-end encryption and data privacy.',
  },
  {
    icon: Globe,
    title: 'Multi-Language',
    description: 'Support for 25+ languages with cultural context awareness.',
  },
  {
    icon: Code,
    title: 'Developer Friendly',
    description: 'RESTful API with comprehensive SDKs for all major platforms.',
  },
  {
    icon: BarChart,
    title: 'Analytics & Insights',
    description: 'Detailed conversation analytics and performance metrics.',
  },
]

const useCases = [
  {
    title: 'Customer Support',
    description: 'Automate tier-1 support with intelligent ticket routing and resolution.',
    metrics: '85% resolution rate',
  },
  {
    title: 'Sales Assistance',
    description: 'Qualify leads and provide product information 24/7.',
    metrics: '3x lead conversion',
  },
  {
    title: 'Internal Help Desk',
    description: 'Answer employee questions about policies, procedures, and systems.',
    metrics: '60% ticket reduction',
  },
  {
    title: 'Content Creation',
    description: 'Generate marketing copy, documentation, and social media content.',
    metrics: '10x faster creation',
  },
]

const pricingTiers = [
  {
    name: 'Starter',
    price: '$99',
    period: '/month',
    description: 'Perfect for small teams getting started with AI assistance.',
    features: [
      '10,000 messages/month',
      'Email support',
      'Basic analytics',
      '1 integration',
    ],
  },
  {
    name: 'Professional',
    price: '$299',
    period: '/month',
    description: 'Advanced features for growing businesses.',
    features: [
      '100,000 messages/month',
      'Priority support',
      'Advanced analytics',
      'Unlimited integrations',
      'Custom training',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Tailored solutions for large organizations.',
    features: [
      'Unlimited messages',
      'Dedicated support',
      'Custom deployment',
      'SLA guarantee',
      'White-label options',
    ],
  },
]

export default function PennyPage() {
  return (
    <main className="pt-32 pb-16">
      <div className="container-phi">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm mb-6">
            <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-neutral-300">Now available: PENNY 2.0 with GPT-4 Turbo</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-neutral-100">Meet </span>
            <span className="gold-text">PENNY</span>
          </h1>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto mb-8">
            The AI assistant that understands your business context and provides 
            intelligent responses that feel genuinely helpful.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button asChild size="lg">
              <Link href="/products/penny">
                <>
                  Try Interactive Demo
                  <ArrowRight className="h-4 w-4" />
                </>
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="/developers">
                View API Docs
              </Link>
            </Button>
          </div>

          {/* Live Demo Preview */}
          <GlassPanel className="max-w-4xl mx-auto">
            <div className="aspect-video rounded-xl bg-neutral-900 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="h-16 w-16 bg-gradient-to-br from-gold-300 to-gold-500 rounded-full mx-auto flex items-center justify-center">
                  <MessageSquare className="h-8 w-8 text-neutral-900" />
                </div>
                <div>
                  <p className="text-neutral-300 mb-2">
                    &quot;What&apos;s our current customer satisfaction rate?&quot;
                  </p>
                  <p className="text-gold-300 text-sm">
                    → Based on the latest data, your CSAT is 94.2%, up 3.1% from last quarter...
                  </p>
                </div>
                <div className="flex items-center justify-center gap-2 text-xs text-neutral-500">
                  <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse" />
                  <span>Responding in real-time</span>
                </div>
              </div>
            </div>
          </GlassPanel>
        </div>

        {/* Features Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-neutral-100">Powerful Features for </span>
            <span className="gold-text">Every Use Case</span>
          </h2>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <Card key={feature.title} className="text-center">
                  <CardHeader>
                    <div className="mx-auto h-12 w-12 rounded-xl bg-yellow-500 bg-opacity-10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-gold-500" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-neutral-100">Proven </span>
            <span className="gold-text">Use Cases</span>
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {useCases.map((useCase) => (
              <GlassPanel key={useCase.title} className="hover:shadow-aureo2 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-neutral-100">{useCase.title}</h3>
                  <div className="text-sm font-medium text-gold-500 bg-yellow-500 bg-opacity-10 px-2 py-1 rounded">
                    {useCase.metrics}
                  </div>
                </div>
                <p className="text-neutral-300">{useCase.description}</p>
              </GlassPanel>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-neutral-100">Simple, </span>
            <span className="gold-text">Transparent Pricing</span>
          </h2>

          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            {pricingTiers.map((tier) => (
              <Card 
                key={tier.name} 
                variant={Boolean(tier.popular) ? 'gold' : 'default'}
                className={Boolean(tier.popular) ? 'relative scale-105' : 'relative'}
              >
                {Boolean(tier.popular) && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-gradient-to-r from-gold-300 to-gold-500 text-neutral-900 px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <CardTitle>{tier.name}</CardTitle>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-3xl font-bold text-neutral-100">{tier.price}</span>
                    <span className="text-sm text-neutral-400">{tier.period}</span>
                  </div>
                  <CardDescription>{tier.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-2">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-neutral-300">
                        <div className="h-1 w-1 bg-gold-500 rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    asChild 
                    variant={Boolean(tier.popular) ? 'default' : 'secondary'} 
                    className="w-full mt-6"
                  >
                    <Link href={`/?plan=${tier.name.toLowerCase()}`}>
                      {tier.price === 'Custom' ? 'Contact Sales' : 'Start Free Trial'}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <GlassPanel variant="gold" className="text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-100 mb-4">
              Ready to Get Started with PENNY?
            </h2>
            <p className="text-neutral-300 mb-8">
              Join thousands of businesses already using PENNY to transform 
              their customer interactions and operational efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/">
                  <>
                    Request Demo
                    <ArrowRight className="h-4 w-4" />
                  </>
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/developers">
                  Developer Docs
                </Link>
              </Button>
            </div>
          </div>
        </GlassPanel>
      </div>
    </main>
  )
}