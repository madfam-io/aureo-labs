import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Map, Globe2, MapPin, Layers, Navigation, BarChart3, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { GlassPanel } from '@/components/ui/GlassPanel'

export const metadata: Metadata = {
  title: 'Factlas - Geographic Intelligence Platform | Aureo Labs',
  description: 'Location-based analytics and insights for strategic business decision making. Unlock the power of geographic data for competitive advantage.',
}

const features = [
  {
    icon: Map,
    title: 'Interactive Mapping',
    description: 'Visualize complex data on dynamic maps with multiple layers, filters, and real-time updates.',
  },
  {
    icon: MapPin,
    title: 'Location Analytics',
    description: 'Analyze customer behavior, market trends, and competitive landscapes based on geographic data.',
  },
  {
    icon: Layers,
    title: 'Data Layering',
    description: 'Combine multiple data sources including demographics, traffic, weather, and custom datasets.',
  },
  {
    icon: Navigation,
    title: 'Route Optimization',
    description: 'Plan efficient delivery routes, optimize field service operations, and reduce transportation costs.',
  },
  {
    icon: Globe2,
    title: 'Territory Management',
    description: 'Design and optimize sales territories, franchise zones, and service areas for maximum efficiency.',
  },
  {
    icon: BarChart3,
    title: 'Predictive Modeling',
    description: 'Forecast market potential, site performance, and expansion opportunities with AI-powered models.',
  },
]

const industries = [
  { name: 'Retail', icon: '🛍️', desc: 'Site selection and market analysis' },
  { name: 'Real Estate', icon: '🏢', desc: 'Property valuation and development' },
  { name: 'Logistics', icon: '🚚', desc: 'Route planning and fleet management' },
  { name: 'Banking', icon: '🏦', desc: 'Branch optimization and ATM placement' },
  { name: 'Insurance', icon: '🛡️', desc: 'Risk assessment and pricing' },
  { name: 'Healthcare', icon: '🏥', desc: 'Patient catchment and facility planning' },
  { name: 'Government', icon: '🏛️', desc: 'Urban planning and public services' },
  { name: 'Telecommunications', icon: '📡', desc: 'Network planning and coverage' },
]

const capabilities = [
  { metric: '10TB+', label: 'Geographic Data', desc: 'Processed monthly' },
  { metric: '250M', label: 'Location Points', desc: 'Analyzed in real-time' },
  { metric: '&lt;100ms', label: 'Query Response', desc: 'Average latency' },
  { metric: '99.9%', label: 'Uptime SLA', desc: 'Guaranteed availability' },
]

export default function FactlasPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 py-24">
        <div className="absolute inset-0 bg-grid-white/5" />
        <div className="container relative mx-auto px-4">
          <div className="text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-yellow-500 bg-opacity-10 px-4 py-2 text-sm text-gold-500">
              <Globe2 className="h-4 w-4" />
              <span>Geographic Intelligence Platform</span>
            </div>
            
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-neutral-100 md:text-6xl lg:text-7xl">
              Factlas
            </h1>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto mb-8">
              Transform location data into strategic insights. Make smarter decisions 
              with AI-powered geographic intelligence for your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button asChild size="lg">
                <Link href={"/products" as any}>
                  Explore Platform
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href={"/developers" as any}>
                  View Live Demo
                </Link>
              </Button>
            </div>

            {/* Capabilities Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {capabilities.map((capability) => (
                <GlassPanel key={capability.label} className="p-6">
                  <div className="text-3xl font-bold text-gold-500 mb-2">{capability.metric}</div>
                  <div className="text-sm font-semibold text-neutral-100 mb-1">{capability.label}</div>
                  <div className="text-xs text-neutral-500">{capability.desc}</div>
                </GlassPanel>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-neutral-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-100 mb-4">
              Powerful Geographic Intelligence Tools
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              Everything you need to analyze, visualize, and act on location-based data
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

      {/* Industries Section */}
      <section className="py-24 bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-100 mb-4">
              Solutions for Every Industry
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              Tailored geographic intelligence solutions for your specific industry needs
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
            {industries.map((industry) => (
              <GlassPanel key={industry.name} className="p-6 text-center hover:shadow-aureo2 transition-all cursor-pointer">
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-lg font-semibold text-neutral-100 mb-2">
                  {industry.name}
                </h3>
                <p className="text-sm text-neutral-400">
                  {industry.desc}
                </p>
              </GlassPanel>
            ))}
          </div>
        </div>
      </section>

      {/* Use Case Section */}
      <section className="py-24 bg-neutral-950">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <GlassPanel className="p-6">
                  {/* Map Visualization Mock */}
                  <div className="aspect-square bg-neutral-900 rounded-lg relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent"></div>
                    <div className="absolute top-1/4 left-1/4 h-3 w-3 bg-gold-500 rounded-full animate-pulse"></div>
                    <div className="absolute top-1/3 right-1/3 h-3 w-3 bg-gold-500 rounded-full animate-pulse delay-100"></div>
                    <div className="absolute bottom-1/3 left-1/3 h-3 w-3 bg-gold-500 rounded-full animate-pulse delay-200"></div>
                    <div className="absolute top-1/2 right-1/4 h-3 w-3 bg-green-500 rounded-full"></div>
                    <div className="absolute bottom-1/4 right-1/3 h-3 w-3 bg-green-500 rounded-full"></div>
                    <div className="absolute top-10 left-10 glass px-3 py-1 rounded text-xs text-neutral-100">
                      High Potential Zone
                    </div>
                    <div className="absolute bottom-10 right-10 glass px-3 py-1 rounded text-xs text-neutral-100">
                      Market Penetration: 78%
                    </div>
                  </div>
                  
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    <div className="text-center p-2 bg-neutral-900 rounded">
                      <div className="text-xs text-neutral-400">Locations</div>
                      <div className="text-sm font-semibold text-neutral-100">247</div>
                    </div>
                    <div className="text-center p-2 bg-neutral-900 rounded">
                      <div className="text-xs text-neutral-400">Coverage</div>
                      <div className="text-sm font-semibold text-neutral-100">84%</div>
                    </div>
                    <div className="text-center p-2 bg-neutral-900 rounded">
                      <div className="text-xs text-neutral-400">Growth</div>
                      <div className="text-sm font-semibold text-green-500">+23%</div>
                    </div>
                  </div>
                </GlassPanel>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-neutral-100 mb-6">
                Make Data-Driven Decisions
                <span className="text-gold-500"> With Location Intelligence</span>
              </h2>
              <p className="text-lg text-neutral-400 mb-8">
                Factlas combines multiple data sources with advanced analytics to help you 
                understand market dynamics, optimize operations, and identify growth opportunities.
              </p>
              
              <div className="space-y-6">
                {[
                  'Identify optimal locations for expansion',
                  'Analyze competitor presence and market gaps',
                  'Optimize delivery routes and service territories',
                  'Predict site performance before investment',
                  'Monitor real-time foot traffic and mobility patterns',
                  'Integrate with existing business intelligence tools'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-neutral-300">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button asChild size="lg">
                  <Link href={"/products" as any}>
                    See Use Cases
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Sources Section */}
      <section className="py-24 bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-100 mb-4">
              Comprehensive Data Coverage
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              Access premium location data from trusted sources worldwide
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-yellow-500 bg-opacity-10">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-lg font-semibold text-neutral-100 mb-2">Global Coverage</h3>
              <p className="text-sm text-neutral-400">
                Data from 195+ countries with regular updates and validation
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-yellow-500 bg-opacity-10">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-lg font-semibold text-neutral-100 mb-2">Rich Datasets</h3>
              <p className="text-sm text-neutral-400">
                Demographics, POIs, traffic, weather, social media, and more
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-yellow-500 bg-opacity-10">
                <span className="text-2xl">🔄</span>
              </div>
              <h3 className="text-lg font-semibold text-neutral-100 mb-2">Real-Time Updates</h3>
              <p className="text-sm text-neutral-400">
                Live data feeds for dynamic analysis and instant insights
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              'Census Data', 'Mobile Location', 'Social Media', 'Weather Patterns',
              'Traffic Flow', 'Consumer Spending', 'Business Listings', 'Real Estate',
              'Crime Statistics', 'Public Transit', 'Satellite Imagery', 'IoT Sensors'
            ].map((source) => (
              <div
                key={source}
                className="glass rounded-xl px-4 py-2 text-sm text-neutral-300"
              >
                {source}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-neutral-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-100 mb-4">
              Flexible Plans for Every Business
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              From startups to enterprises, we have the right solution for you
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            {[
              {
                name: 'Explorer',
                price: '$499',
                period: '/month',
                description: 'For small businesses',
                features: [
                  'Up to 10,000 queries/month',
                  'Basic mapping tools',
                  'Standard data layers',
                  'Email support',
                  'API access',
                  'Export to CSV/PDF',
                ],
                popular: false,
              },
              {
                name: 'Professional',
                price: '$1,999',
                period: '/month',
                description: 'For growing companies',
                features: [
                  'Up to 100,000 queries/month',
                  'Advanced analytics',
                  'Premium data layers',
                  'Priority support',
                  'Custom visualizations',
                  'Team collaboration',
                  'White-label reports',
                  'API webhooks',
                ],
                popular: true,
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                period: '',
                description: 'For large organizations',
                features: [
                  'Unlimited queries',
                  'Custom data integration',
                  'Dedicated infrastructure',
                  'SLA guarantee',
                  'Professional services',
                  'On-premise option',
                  'Custom ML models',
                ],
                popular: false,
              },
            ].map((tier) => (
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
                    <Link href={`/?plan=${tier.name.toLowerCase()}` as any}>
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
              See Your Business Through a Geographic Lens
            </h2>
            <p className="text-lg text-neutral-400 mb-8 max-w-2xl mx-auto">
              Start making smarter location-based decisions with Factlas. 
              Transform your geographic data into competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href={"/" as any}>
                  Request Demo
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href={"/developers" as any}>
                  Explore Platform
                </Link>
              </Button>
            </div>
            <p className="text-sm text-neutral-500 mt-6">
              14-day free trial • No credit card required • Full API access
            </p>
          </GlassPanel>
        </div>
      </section>
    </div>
  )
}