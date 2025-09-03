import { HeroSection } from '@/components/sections/HeroSection'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Globe, Shield, Zap } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { GlassPanel } from '@/components/ui/GlassPanel'

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Sub-second response times with edge-optimized infrastructure.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'SOC 2 Type II, GDPR, and HIPAA compliant by design.',
  },
  {
    icon: Globe,
    title: 'Global Scale',
    description: '99.9% uptime with deployment across 50+ regions worldwide.',
  },
]

const products = [
  {
    name: 'PENNY',
    description: 'AI Assistant Platform',
    href: '/products/penny',
    stats: '25K+ users',
  },
  {
    name: 'Forge Sight',
    description: 'Pricing Intelligence',
    href: '/products/forge-sight',
    stats: '$2.3M optimized',
  },
  {
    name: 'Cotiza Studio',
    description: 'Quotation System',
    href: '/products/cotiza',
    stats: '12K+ quotations',
  },
]

export default function HomePage() {
  return (
    <>
      <HeroSection />
      
      <main className="pb-16">
        <div className="container-phi">
          {/* Features Section */}
          <section className="mb-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                <span className="text-neutral-100">Built for </span>
                <span className="gold-text">Enterprise Reality</span>
              </h2>
              <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
                Our AI platforms are designed from the ground up for production environments,
                delivering the reliability and performance your business demands.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {features.map((feature) => {
                const Icon = feature.icon
                return (
                  <Card key={feature.title} className="text-center">
                    <CardHeader>
                      <div className="mx-auto h-16 w-16 rounded-2xl bg-yellow-500 bg-opacity-10 flex items-center justify-center mb-4">
                        <Icon className="h-8 w-8 text-gold-500" />
                      </div>
                      <CardTitle>{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </section>

          {/* Products Showcase */}
          <section className="mb-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                <span className="text-neutral-100">Our </span>
                <span className="gold-text">AI Platforms</span>
              </h2>
              <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
                Discover how our suite of intelligent solutions can transform 
                different aspects of your business operations.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {products.map((product) => (
                <GlassPanel 
                  key={product.name}
                  interactive
                  className="group cursor-pointer hover:shadow-aureo2 transition-all"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold group-hover:text-gold-300 transition-colors">
                      {product.name}
                    </h3>
                    <ArrowRight className="h-5 w-5 text-gold-500 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                  <p className="text-neutral-300 mb-4">{product.description}</p>
                  <div className="flex items-center gap-2 text-sm text-neutral-400">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>{product.stats}</span>
                  </div>
                  <Link href={product.href as any} className="absolute inset-0" aria-label={`Learn more about ${product.name}`} />
                </GlassPanel>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg">
                <Link href="/products">
                  View All Products
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </section>

          {/* CTA Section */}
          <section>
            <GlassPanel variant="gold" className="text-center">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl lg:text-4xl font-bold text-neutral-100 mb-4">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-lg text-neutral-300 mb-8">
                  Join thousands of businesses already using our AI platforms to drive 
                  innovation, efficiency, and growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg">
                    <Link href={"/" as any}>
                      Request Demo
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="secondary" size="lg">
                    <Link href="/developers">
                      Explore APIs
                    </Link>
                  </Button>
                </div>
              </div>
            </GlassPanel>
          </section>
        </div>
      </main>
    </>
  )
}