import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, FileText, Calculator, Send, Clock, Users, Shield, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { GlassPanel } from '@/components/ui/GlassPanel'

export const metadata: Metadata = {
  title: 'Cotiza Studio - Intelligent Quotation System | Aureo Labs',
  description: 'Automated quotation generation with smart pricing and professional document creation. Streamline your sales process with intelligent proposals.',
}

const features = [
  {
    icon: FileText,
    title: 'Professional Templates',
    description: 'Beautiful, customizable quotation templates that reflect your brand identity and impress clients.',
  },
  {
    icon: Calculator,
    title: 'Smart Pricing Engine',
    description: 'Intelligent pricing calculations with margin protection, discounts, and multi-currency support.',
  },
  {
    icon: Send,
    title: 'One-Click Distribution',
    description: 'Send quotations instantly via email, WhatsApp, or generate shareable links for easy client access.',
  },
  {
    icon: Clock,
    title: 'Real-Time Tracking',
    description: 'Know when clients view, download, or accept your quotations with detailed activity tracking.',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Work together on complex quotations with approval workflows and version control.',
  },
  {
    icon: Shield,
    title: 'Digital Signatures',
    description: 'Secure electronic signatures and legal compliance for binding agreements.',
  },
]

const benefits = [
  { metric: '75%', label: 'Faster Quote Generation' },
  { metric: '45%', label: 'Higher Conversion Rate' },
  { metric: '90%', label: 'Reduction in Errors' },
  { metric: '2hrs', label: 'Average Time Saved Daily' },
]

const industries = [
  'Manufacturing', 'Construction', 'Professional Services', 'IT Services',
  'Wholesale & Distribution', 'Healthcare', 'Education', 'Real Estate',
  'Automotive', 'Hospitality', 'Retail', 'Logistics'
]

export default function CotizaPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 py-24">
        <div className="absolute inset-0 bg-grid-white/5" />
        <div className="container relative mx-auto px-4">
          <div className="text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-yellow-500 bg-opacity-10 px-4 py-2 text-sm text-gold-500">
              <FileText className="h-4 w-4" />
              <span>Intelligent Quotation System</span>
            </div>
            
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-neutral-100 md:text-6xl lg:text-7xl">
              Cotiza Studio
            </h1>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto mb-8">
              Create professional quotations in minutes, not hours. Automate your sales 
              process with intelligent pricing and beautiful proposals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button asChild size="lg">
                <Link href="/products">
                  <>
                    Try Free for 30 Days
                    <ArrowRight className="h-4 w-4" />
                  </>
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/developers">
                  Watch Demo
                </Link>
              </Button>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {benefits.map((benefit) => (
                <GlassPanel key={benefit.label} className="text-center p-6">
                  <div className="text-3xl font-bold text-gold-500 mb-2">{benefit.metric}</div>
                  <div className="text-sm text-neutral-400">{benefit.label}</div>
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
              Everything You Need to Win More Deals
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              Powerful features designed to streamline your quotation process and 
              impress your clients at every step.
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

      {/* Workflow Section */}
      <section className="py-24 bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-neutral-100 mb-6">
                Streamlined Workflow,
                <span className="text-gold-500"> Maximum Efficiency</span>
              </h2>
              <p className="text-lg text-neutral-400 mb-8">
                From initial request to signed contract, Cotiza Studio manages your entire 
                quotation lifecycle with intelligent automation and seamless integrations.
              </p>
              
              <div className="space-y-6">
                {[
                  'Import products and services from your catalog',
                  'Apply dynamic pricing rules and discounts',
                  'Generate professional PDF documents instantly',
                  'Track client engagement and follow up automatically',
                  'Convert accepted quotes to invoices with one click'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-neutral-300">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button asChild size="lg">
                  <Link href="/products">
                    <>
                      Start Creating Quotations
                      <ArrowRight className="h-4 w-4" />
                    </>
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <GlassPanel className="p-8">
                <div className="space-y-4">
                  <div className="h-3 bg-neutral-800 rounded w-3/4"></div>
                  <div className="h-3 bg-neutral-800 rounded w-full"></div>
                  <div className="h-3 bg-neutral-800 rounded w-5/6"></div>
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="h-20 bg-neutral-800 rounded"></div>
                    <div className="h-20 bg-neutral-800 rounded"></div>
                  </div>
                  <div className="h-3 bg-neutral-800 rounded w-2/3"></div>
                  <div className="h-3 bg-neutral-800 rounded w-4/5"></div>
                  <div className="mt-6 flex gap-4">
                    <div className="h-10 bg-gold-500 bg-opacity-20 rounded flex-1"></div>
                    <div className="h-10 bg-neutral-800 rounded flex-1"></div>
                  </div>
                </div>
              </GlassPanel>
              <div className="absolute -top-4 -right-4 bg-gold-500 text-neutral-900 px-3 py-1 rounded-full text-sm font-semibold">
                Live Preview
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-neutral-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-100 mb-4">
              Built for Every Industry
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              Customizable templates and workflows for your specific business needs
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {industries.map((industry) => (
              <div
                key={industry}
                className="glass rounded-xl px-6 py-3 text-sm text-neutral-300 hover:bg-yellow-500 hover:bg-opacity-10 transition-colors cursor-pointer"
              >
                {industry}
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
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              No hidden fees. No surprises. Just powerful quotation software that scales with your business.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            {[
              {
                name: 'Freelancer',
                price: '$19',
                period: '/month',
                description: 'Perfect for individuals',
                features: [
                  'Up to 50 quotations/month',
                  '5 custom templates',
                  'Basic CRM integration',
                  'Email support',
                  'Mobile app access',
                ],
                popular: false,
              },
              {
                name: 'Business',
                price: '$79',
                period: '/month',
                description: 'For growing teams',
                features: [
                  'Unlimited quotations',
                  'Unlimited templates',
                  'Advanced CRM integration',
                  'Priority support',
                  'Team collaboration',
                  'Custom branding',
                  'API access',
                ],
                popular: true,
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                period: '',
                description: 'For large organizations',
                features: [
                  'Everything in Business',
                  'Dedicated account manager',
                  'Custom integrations',
                  'SLA guarantee',
                  'Advanced security',
                  'Training & onboarding',
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
                      Recommended
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
              Start Creating Professional Quotations Today
            </h2>
            <p className="text-lg text-neutral-400 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses that have transformed their sales process 
              with Cotiza Studio&apos;s intelligent quotation system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/">
                  <>
                    Start 30-Day Free Trial
                    <ArrowRight className="h-4 w-4" />
                  </>
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/developers">
                  Book a Demo
                </Link>
              </Button>
            </div>
            <p className="text-sm text-neutral-500 mt-6">
              No credit card required • Setup in 5 minutes • Cancel anytime
            </p>
          </GlassPanel>
        </div>
      </section>
    </div>
  )
}