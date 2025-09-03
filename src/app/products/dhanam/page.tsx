import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Wallet, TrendingUp, PiggyBank, Target, CreditCard, Shield, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { GlassPanel } from '@/components/ui/GlassPanel'

export const metadata: Metadata = {
  title: 'Dhanam - AI-Powered Financial Wellness Platform | Aureo Labs',
  description: 'Personal finance management with AI-driven insights and automated budgeting. Take control of your financial future with intelligent recommendations.',
}

const features = [
  {
    icon: Wallet,
    title: 'Smart Budgeting',
    description: 'AI-powered budget recommendations based on your spending patterns and financial goals.',
  },
  {
    icon: TrendingUp,
    title: 'Investment Insights',
    description: 'Personalized investment recommendations aligned with your risk profile and objectives.',
  },
  {
    icon: PiggyBank,
    title: 'Automated Savings',
    description: 'Intelligent savings rules that automatically set aside money based on your habits.',
  },
  {
    icon: Target,
    title: 'Goal Planning',
    description: 'Set and track financial goals with AI-optimized paths to achieve them faster.',
  },
  {
    icon: CreditCard,
    title: 'Expense Tracking',
    description: 'Automatic categorization and analysis of all your transactions across accounts.',
  },
  {
    icon: Shield,
    title: 'Fraud Detection',
    description: 'Real-time monitoring and alerts for suspicious transactions and unusual activity.',
  },
]

const stats = [
  { value: '$2,450', label: 'Average Annual Savings' },
  { value: '850+', label: 'Credit Score Improvement' },
  { value: '23%', label: 'Debt Reduction Rate' },
  { value: '4.2M', label: 'Active Users' },
]

const testimonials = [
  {
    quote: "Dhanam helped me save for my dream home 18 months faster than I expected. The AI insights are game-changing!",
    author: "Sarah Chen",
    role: "Software Engineer",
    rating: 5,
  },
  {
    quote: "Finally, a financial app that understands my unique situation and provides actionable advice, not generic tips.",
    author: "Marcus Rodriguez",
    role: "Small Business Owner",
    rating: 5,
  },
  {
    quote: "The automated savings feature alone has helped me build a 6-month emergency fund without even thinking about it.",
    author: "Priya Patel",
    role: "Marketing Manager",
    rating: 5,
  },
]

export default function DhanamPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 py-24">
        <div className="absolute inset-0 bg-grid-white/5" />
        <div className="container relative mx-auto px-4">
          <div className="text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-yellow-500 bg-opacity-10 px-4 py-2 text-sm text-gold-500">
              <Wallet className="h-4 w-4" />
              <span>Financial Wellness Platform</span>
            </div>
            
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-neutral-100 md:text-6xl lg:text-7xl">
              Dhanam
            </h1>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto mb-8">
              Your AI-powered financial companion that helps you save more, invest smarter, 
              and achieve your financial goals with personalized insights.
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
                  Download App
                </Link>
              </Button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat) => (
                <GlassPanel key={stat.label} className="text-center p-6">
                  <div className="text-3xl font-bold text-gold-500 mb-2">{stat.value}</div>
                  <div className="text-sm text-neutral-400">{stat.label}</div>
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
              Complete Financial Management in One App
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              Everything you need to take control of your finances and build lasting wealth
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

      {/* AI Insights Section */}
      <section className="py-24 bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <GlassPanel className="p-8">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-neutral-400">Monthly Savings Goal</span>
                    <span className="text-sm text-gold-500">85% Complete</span>
                  </div>
                  <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-gold-500 to-yellow-400 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between py-3 border-b border-neutral-800">
                    <span className="text-neutral-300">Groceries</span>
                    <span className="text-neutral-100">$450.00</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-neutral-800">
                    <span className="text-neutral-300">Transportation</span>
                    <span className="text-neutral-100">$120.00</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-neutral-800">
                    <span className="text-neutral-300">Entertainment</span>
                    <span className="text-neutral-100">$85.00</span>
                  </div>
                </div>

                <div className="bg-yellow-500 bg-opacity-10 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <TrendingUp className="h-5 w-5 text-gold-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-neutral-100 mb-1">AI Insight</p>
                      <p className="text-xs text-neutral-400">
                        You could save $127 this month by switching to the suggested meal plan
                      </p>
                    </div>
                  </div>
                </div>
              </GlassPanel>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-neutral-100 mb-6">
                AI That Understands
                <span className="text-gold-500"> Your Money</span>
              </h2>
              <p className="text-lg text-neutral-400 mb-8">
                Our advanced AI analyzes your financial behavior to provide personalized 
                recommendations that actually make a difference in your financial life.
              </p>
              
              <div className="space-y-6">
                {[
                  'Predictive cash flow analysis',
                  'Personalized saving strategies',
                  'Optimal debt payoff plans',
                  'Investment opportunity alerts',
                  'Subscription optimization'
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
                      See How It Works
                      <ArrowRight className="h-4 w-4" />
                    </>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-neutral-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-100 mb-4">
              Loved by Millions Worldwide
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              See how Dhanam is helping people achieve their financial dreams
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <GlassPanel key={index} className="p-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <svg key={i} className="h-5 w-5 text-gold-500 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-neutral-300 mb-6 italic">&quot;{testimonial.quote}&quot;</p>
                <div>
                  <p className="font-semibold text-neutral-100">{testimonial.author}</p>
                  <p className="text-sm text-neutral-500">{testimonial.role}</p>
                </div>
              </GlassPanel>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-24 bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-100 mb-4">
              Bank-Level Security
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              Your financial data is protected with enterprise-grade security
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4 max-w-4xl mx-auto">
            {[
              { icon: '🔐', title: '256-bit Encryption', desc: 'Military-grade encryption for all data' },
              { icon: '🏦', title: 'Bank Integration', desc: 'Secure read-only access to accounts' },
              { icon: '🛡️', title: 'SOC 2 Certified', desc: 'Independently audited security' },
              { icon: '🔑', title: '2FA Protection', desc: 'Multi-factor authentication' },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-neutral-100 mb-2">{item.title}</h3>
                <p className="text-sm text-neutral-400">{item.desc}</p>
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
              Choose Your Financial Freedom Plan
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              Start free and upgrade as you grow your wealth
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            {[
              {
                name: 'Basic',
                price: 'Free',
                period: 'forever',
                description: 'Get started with essential features',
                features: [
                  'Connect 2 bank accounts',
                  'Basic budgeting tools',
                  'Expense tracking',
                  'Monthly insights',
                  'Mobile app access',
                ],
                popular: false,
              },
              {
                name: 'Premium',
                price: '$9.99',
                period: '/month',
                description: 'Advanced tools for serious savers',
                features: [
                  'Unlimited bank accounts',
                  'AI-powered insights',
                  'Investment tracking',
                  'Custom savings rules',
                  'Priority support',
                  'Advanced analytics',
                  'Bill negotiation',
                ],
                popular: true,
              },
              {
                name: 'Wealth',
                price: '$29.99',
                period: '/month',
                description: 'Complete wealth management',
                features: [
                  'Everything in Premium',
                  'Personal financial advisor',
                  'Tax optimization',
                  'Estate planning tools',
                  'Crypto portfolio tracking',
                  'Family accounts',
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
                    {tier.price !== 'Free' && (
                      <span className="text-neutral-400 ml-1">{tier.period}</span>
                    )}
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
                      {tier.price === 'Free' ? 'Get Started Free' : 'Start 7-Day Trial'}
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
              Your Financial Future Starts Today
            </h2>
            <p className="text-lg text-neutral-400 mb-8 max-w-2xl mx-auto">
              Join over 4 million people who are taking control of their finances 
              with Dhanam&apos;s AI-powered platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/">
                  <>
                    Start Free Today
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
            <p className="text-sm text-neutral-500 mt-6">
              No credit card required • 256-bit encryption • Cancel anytime
            </p>
          </GlassPanel>
        </div>
      </section>
    </div>
  )
}