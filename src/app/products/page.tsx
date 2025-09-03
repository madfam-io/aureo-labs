import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ExternalLink, Star, Users, Zap } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { GlassPanel } from '@/components/ui/GlassPanel'

export const metadata: Metadata = {
  title: 'AI-Powered Products | Aureo Labs',
  description: 'Discover our suite of enterprise AI solutions: PENNY AI Assistant, Forge Sight pricing intelligence, Cotiza quotation system, and more.',
}

const products = [
  {
    name: 'PENNY',
    fullName: 'AI Assistant Platform',
    description: 'Intelligent conversational AI that understands context and provides accurate responses.',
    features: ['Natural Language Processing', 'Multi-language Support', 'API Integration', 'Custom Training'],
    metrics: { users: '25K+', rating: 4.9, uptime: '99.9%' },
    status: 'Production',
    href: '/products/penny',
    color: 'gold',
    icon: '🧠',
  },
  {
    name: 'Forge Sight',
    fullName: 'Pricing Intelligence',
    description: 'Real-time market analysis and competitive pricing optimization for maximum profitability.',
    features: ['Market Monitoring', 'Price Optimization', 'Competitive Analysis', 'Revenue Forecasting'],
    metrics: { users: '5K+', rating: 4.8, uptime: '99.95%' },
    status: 'Production',
    href: '/products/forge-sight',
    color: 'electric',
    icon: '📊',
  },
  {
    name: 'Cotiza Studio',
    fullName: 'Quotation System',
    description: 'Automated quotation generation with smart pricing and professional document creation.',
    features: ['Smart Templates', 'Dynamic Pricing', 'Multi-currency', 'PDF Generation'],
    metrics: { users: '12K+', rating: 4.7, uptime: '99.8%' },
    status: 'Production',
    href: '/products/cotiza',
    color: 'default',
    icon: '📝',
  },
  {
    name: 'Dhanam',
    fullName: 'Financial Wellness',
    description: 'Personal finance management with AI-driven insights and automated budgeting.',
    features: ['Expense Tracking', 'Budget Planning', 'Investment Advice', 'Goal Setting'],
    metrics: { users: '8K+', rating: 4.6, uptime: '99.7%' },
    status: 'Beta',
    href: '/products/dhanam',
    color: 'default',
    icon: '💰',
  },
  {
    name: 'AVALA',
    fullName: 'Training Platform',
    description: 'Enterprise learning management system with adaptive content and progress tracking.',
    features: ['Adaptive Learning', 'Progress Analytics', 'Content Management', 'Certification'],
    metrics: { users: '3K+', rating: 4.8, uptime: '99.9%' },
    status: 'Production',
    href: '/products/avala',
    color: 'default',
    icon: '🎓',
  },
  {
    name: 'Factlas',
    fullName: 'Geographic Intelligence',
    description: 'Location-based analytics and insights for strategic business decision making.',
    features: ['Geospatial Analysis', 'Market Mapping', 'Location Intelligence', 'Territory Planning'],
    metrics: { users: '2K+', rating: 4.5, uptime: '99.6%' },
    status: 'Beta',
    href: '/products/factlas',
    color: 'default',
    icon: '🗺️',
  },
]

export default function ProductsPage() {
  return (
    <main className="pt-32 pb-16">
      <div className="container-phi">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-neutral-100">AI-Powered </span>
            <span className="gold-text">Products</span>
          </h1>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Transform your business operations with our comprehensive suite of intelligent platforms,
            designed for enterprise scale and real-world deployment.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {products.map((product) => (
            <Card
              key={product.name}
              variant={product.color as any}
              interactive
              className="h-full group"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="text-2xl">{product.icon}</div>
                  <div className="flex items-center gap-1 text-xs">
                    <div className={`h-2 w-2 rounded-full ${
                      product.status === 'Production' ? 'bg-green-500' : 'bg-yellow-500'
                    }`} />
                    <span className="text-neutral-400">{product.status}</span>
                  </div>
                </div>
                <CardTitle className="group-hover:text-gold-300 transition-colors">
                  {product.name}
                </CardTitle>
                <CardDescription className="text-neutral-400">
                  {product.fullName}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-neutral-300">{product.description}</p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div>
                    <div className="flex items-center gap-1 text-neutral-400">
                      <Users className="h-3 w-3" />
                      <span>Users</span>
                    </div>
                    <p className="font-semibold text-neutral-200">{product.metrics.users}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-neutral-400">
                      <Star className="h-3 w-3" />
                      <span>Rating</span>
                    </div>
                    <p className="font-semibold text-neutral-200">{product.metrics.rating}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-neutral-400">
                      <Zap className="h-3 w-3" />
                      <span>Uptime</span>
                    </div>
                    <p className="font-semibold text-neutral-200">{product.metrics.uptime}</p>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-sm font-medium text-neutral-200 mb-2">Key Features</h4>
                  <ul className="space-y-1">
                    {product.features.slice(0, 3).map((feature) => (
                      <li key={feature} className="text-xs text-neutral-400 flex items-center gap-2">
                        <div className="h-1 w-1 bg-gold-500 rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>

              <div className="flex items-center justify-between p-6 pt-0">
                <Button asChild variant="link" size="sm">
                  <Link href={`${product.href}/demo` as any}>
                    Try Demo
                  </Link>
                </Button>
                <Button asChild variant="ghost" size="sm">
                  <Link href={product.href as any}>
                    Learn More
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <GlassPanel variant="gold" className="text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-100 mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-neutral-300 mb-8">
              Get started with our AI platforms today. Request a personalized demo 
              or explore our developer documentation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href={"/" as any}>
                  Request Enterprise Demo
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/developers">
                  View Documentation
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </GlassPanel>
      </div>
    </main>
  )
}