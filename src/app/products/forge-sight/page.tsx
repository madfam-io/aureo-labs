import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, TrendingUp, BarChart3, DollarSign, Shield, Globe, Zap, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { GlassPanel } from '@/components/ui/GlassPanel'

export const metadata: Metadata = {
  title: 'Forge Sight - AI-Powered Pricing Intelligence | Aureo Labs',
  description: 'Real-time market analysis and competitive pricing optimization. Maximize profitability with AI-driven pricing strategies and market insights.',
}

const features = [
  {
    icon: TrendingUp,
    title: 'Real-Time Market Analysis',
    description: 'Monitor competitor prices and market trends instantly with our advanced web scraping and data aggregation technology.',
  },
  {
    icon: BarChart3,
    title: 'Dynamic Pricing Optimization',
    description: 'Automatically adjust prices based on demand, competition, and inventory levels to maximize revenue.',
  },
  {
    icon: DollarSign,
    title: 'Profit Margin Protection',
    description: 'Set intelligent pricing rules that protect your margins while remaining competitive in the market.',
  },
  {
    icon: Shield,
    title: 'Price War Prevention',
    description: 'Smart algorithms prevent destructive price wars while maintaining your market position.',
  },
  {
    icon: Globe,
    title: 'Multi-Market Support',
    description: 'Track and optimize prices across different regions, currencies, and market conditions.',
  },
  {
    icon: Zap,
    title: 'Instant Alerts',
    description: 'Get notified immediately when competitors change prices or market conditions shift.',
  },
]

const pricingTiers = [
  {
    name: 'Starter',
    price: '$299',
    period: '/month',
    description: 'Perfect for small businesses',
    features: [
      'Up to 1,000 SKUs',
      '5 competitor tracking',
      'Daily price updates',
      'Basic analytics dashboard',
      'Email alerts',
      'API access',
    ],
    popular: false,
  },
  {
    name: 'Professional',
    price: '$799',
    period: '/month',
    description: 'For growing businesses',
    features: [
      'Up to 10,000 SKUs',
      'Unlimited competitor tracking',
      'Real-time price updates',
      'Advanced analytics & reporting',
      'Custom pricing rules',
      'Priority support',
      'Webhook integrations',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large organizations',
    features: [
      'Unlimited SKUs',
      'Custom data sources',
      'Machine learning models',
      'Dedicated account manager',
      'Custom integrations',
      'SLA guarantee',
      'On-premise deployment option',
    ],
    popular: false,
  },
]

const integrations = [
  'Shopify', 'WooCommerce', 'Magento', 'BigCommerce',
  'Amazon', 'eBay', 'Walmart', 'Google Shopping',
  'SAP', 'Oracle', 'Microsoft Dynamics', 'NetSuite'
]

export default function ForgeSightPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 py-24">
        <div className="absolute inset-0 bg-grid-white/5" />
        <div className="container relative mx-auto px-4">
          <div className="text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-yellow-500 bg-opacity-10 px-4 py-2 text-sm text-gold-500">
              <TrendingUp className="h-4 w-4" />
              <span>AI-Powered Pricing Intelligence</span>
            </div>
            
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-neutral-100 md:text-6xl lg:text-7xl">
              Forge Sight
            </h1>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto mb-8">
              Stay ahead of the competition with real-time pricing intelligence that adapts 
              to market conditions and maximizes your profitability.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button asChild size="lg">
                <Link href="/products">
                  <>
                    Start Free Trial
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

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <GlassPanel className="text-center p-6">
                <div className="text-3xl font-bold text-gold-500 mb-2">15%</div>
                <div className="text-sm text-neutral-400">Average Revenue Increase</div>
              </GlassPanel>
              <GlassPanel className="text-center p-6">
                <div className="text-3xl font-bold text-gold-500 mb-2">2.5M+</div>
                <div className="text-sm text-neutral-400">Prices Tracked Daily</div>
              </GlassPanel>
              <GlassPanel className="text-center p-6">
                <div className="text-3xl font-bold text-gold-500 mb-2">&lt; 1min</div>
                <div className="text-sm text-neutral-400">Price Update Latency</div>
              </GlassPanel>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-neutral-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-100 mb-4">
              Intelligent Pricing at Scale
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              Leverage machine learning and real-time data to optimize your pricing strategy
              across all channels and markets.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <GlassPanel key={feature.title} className="p-6">
                <div className="mb-4">
                  <feature.icon className="h-10 w-10 text-gold-500" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-100 mb-2">
                  {feature.title}
                </h3>
                <p className="text-neutral-400">
                  {feature.description}
                </p>
              </GlassPanel>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-100 mb-4">
              How Forge Sight Works
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              Our four-step process ensures you always have the optimal pricing strategy
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            {[
              { step: '1', title: 'Connect', desc: 'Integrate with your existing systems and data sources' },
              { step: '2', title: 'Monitor', desc: 'Track competitor prices and market conditions in real-time' },
              { step: '3', title: 'Analyze', desc: 'AI algorithms identify optimal pricing opportunities' },
              { step: '4', title: 'Optimize', desc: 'Automatically adjust prices to maximize revenue' }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-yellow-500 bg-opacity-10 text-2xl font-bold text-gold-500">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-neutral-100 mb-2">{item.title}</h3>
                <p className="text-sm text-neutral-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-24 bg-neutral-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-100 mb-4">
              Seamless Integrations
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              Connect Forge Sight with your existing e-commerce and ERP platforms
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {integrations.map((integration) => (
              <div
                key={integration}
                className="glass rounded-xl px-6 py-3 text-sm text-neutral-300"
              >
                {integration}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-100 mb-4">
              Transparent Pricing
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              Choose the plan that fits your business needs
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            {pricingTiers.map((tier) => (
              <Card 
                key={tier.name} 
                className={`relative ${tier.popular ? 'border-gold-500 shadow-aureo2' : ''}`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gold-500 text-neutral-900 text-sm font-semibold px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pb-8 pt-8">
                  <CardTitle className="text-2xl mb-2">{tier.name}</CardTitle>
                  <CardDescription className="mb-4">{tier.description}</CardDescription>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-neutral-100">{tier.price}</span>
                    <span className="text-neutral-400 ml-1">{tier.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm text-neutral-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    asChild 
                    variant={tier.popular ? 'default' : 'secondary'} 
                    className="w-full"
                  >
                    <Link href={`/?plan=${tier.name.toLowerCase()}`}>
                      {tier.price === 'Custom' ? 'Contact Sales' : 'Start Free Trial'}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-t from-neutral-950 to-neutral-900">
        <div className="container mx-auto px-4 text-center">
          <GlassPanel className="max-w-4xl mx-auto p-12">
            <h2 className="text-4xl font-bold text-neutral-100 mb-4">
              Ready to Optimize Your Pricing?
            </h2>
            <p className="text-lg text-neutral-400 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses using Forge Sight to stay competitive and maximize revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/">
                  <>
                    Start 14-Day Free Trial
                    <ArrowRight className="h-4 w-4" />
                  </>
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/developers">
                  Schedule Demo
                </Link>
              </Button>
            </div>
          </GlassPanel>
        </div>
      </section>
    </div>
  )
}