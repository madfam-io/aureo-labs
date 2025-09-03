import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, GraduationCap, Users, Award, BookOpen, Video, Brain, CheckCircle, BarChart3 } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { GlassPanel } from '@/components/ui/GlassPanel'

export const metadata: Metadata = {
  title: 'AVALA - Enterprise Learning Management Platform | Aureo Labs',
  description: 'Enterprise learning management system with adaptive content and progress tracking. Empower your workforce with intelligent training solutions.',
}

const features = [
  {
    icon: Brain,
    title: 'Adaptive Learning',
    description: 'AI-powered content delivery that adapts to each learner&apos;s pace, style, and knowledge level.',
  },
  {
    icon: Video,
    title: 'Interactive Content',
    description: 'Engaging multimedia courses with videos, simulations, quizzes, and hands-on exercises.',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Foster peer learning with discussion forums, group projects, and knowledge sharing.',
  },
  {
    icon: Award,
    title: 'Certifications',
    description: 'Issue verifiable digital certificates and badges for completed courses and achievements.',
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Comprehensive insights into learning progress, engagement, and knowledge retention.',
  },
  {
    icon: BookOpen,
    title: 'Content Library',
    description: 'Access thousands of pre-built courses or create custom content for your organization.',
  },
]

const benefits = [
  { metric: '87%', label: 'Knowledge Retention', desc: 'Improvement in long-term retention' },
  { metric: '3.5x', label: 'Faster Onboarding', desc: 'New employee time-to-productivity' },
  { metric: '92%', label: 'Completion Rate', desc: 'Average course completion' },
  { metric: '45%', label: 'Cost Reduction', desc: 'In training expenses' },
]

const useCases = [
  {
    title: 'Employee Onboarding',
    description: 'Streamline new hire training with structured learning paths and progress tracking.',
    icon: '👥',
  },
  {
    title: 'Compliance Training',
    description: 'Ensure regulatory compliance with automated training assignments and certification.',
    icon: '📋',
  },
  {
    title: 'Skills Development',
    description: 'Upskill your workforce with personalized learning recommendations and career paths.',
    icon: '🚀',
  },
  {
    title: 'Customer Education',
    description: 'Train customers and partners on your products with branded learning portals.',
    icon: '🎓',
  },
  {
    title: 'Sales Enablement',
    description: 'Equip sales teams with product knowledge and selling skills training.',
    icon: '💼',
  },
  {
    title: 'Leadership Development',
    description: 'Develop future leaders with executive coaching and management training programs.',
    icon: '👔',
  },
]

export default function AvalaPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 py-24">
        <div className="absolute inset-0 bg-grid-white/5" />
        <div className="container relative mx-auto px-4">
          <div className="text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-yellow-500 bg-opacity-10 px-4 py-2 text-sm text-gold-500">
              <GraduationCap className="h-4 w-4" />
              <span>Enterprise Learning Platform</span>
            </div>
            
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-neutral-100 md:text-6xl lg:text-7xl">
              AVALA
            </h1>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto mb-8">
              Transform your organization with AI-powered learning that adapts to every 
              individual while scaling to thousands of learners.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button asChild size="lg">
                <Link href="/products">
                  <>
                    Request Demo
                    <ArrowRight className="h-4 w-4" />
                  </>
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/developers">
                  Explore Courses
                </Link>
              </Button>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {benefits.map((benefit) => (
                <GlassPanel key={benefit.label} className="p-6">
                  <div className="text-3xl font-bold text-gold-500 mb-2">{benefit.metric}</div>
                  <div className="text-sm font-semibold text-neutral-100 mb-1">{benefit.label}</div>
                  <div className="text-xs text-neutral-500">{benefit.desc}</div>
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
              Everything You Need for Modern Learning
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              Comprehensive features designed to create engaging, effective, and measurable learning experiences
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

      {/* Use Cases Section */}
      <section className="py-24 bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-100 mb-4">
              Built for Every Learning Need
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              From onboarding to leadership development, AVALA adapts to your organization&apos;s unique requirements
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {useCases.map((useCase) => (
              <GlassPanel key={useCase.title} className="p-6 hover:shadow-aureo2 transition-all cursor-pointer">
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-lg font-semibold text-neutral-100 mb-2">
                  {useCase.title}
                </h3>
                <p className="text-sm text-neutral-400">
                  {useCase.description}
                </p>
              </GlassPanel>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path Section */}
      <section className="py-24 bg-neutral-950">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-neutral-100 mb-6">
                Personalized Learning Paths
                <span className="text-gold-500"> That Work</span>
              </h2>
              <p className="text-lg text-neutral-400 mb-8">
                Our AI analyzes each learner&apos;s progress, preferences, and goals to create 
                optimal learning journeys that maximize engagement and retention.
              </p>
              
              <div className="space-y-6">
                {[
                  'Pre-assessment to identify knowledge gaps',
                  'Customized content recommendations',
                  'Adaptive difficulty based on performance',
                  'Microlearning modules for busy schedules',
                  'Spaced repetition for better retention',
                  'Real-world projects and simulations'
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
                      See Platform Demo
                      <ArrowRight className="h-4 w-4" />
                    </>
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <GlassPanel className="p-6">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-neutral-100">Your Learning Path</span>
                    <span className="text-xs text-gold-500">Level 2</span>
                  </div>
                  <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-gold-500 to-yellow-400 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    { title: 'Foundation', status: 'completed', modules: 8 },
                    { title: 'Intermediate Concepts', status: 'in-progress', modules: 12 },
                    { title: 'Advanced Techniques', status: 'locked', modules: 10 },
                    { title: 'Expert Certification', status: 'locked', modules: 6 },
                  ].map((stage) => (
                    <div key={stage.title} className={`p-3 rounded-lg ${
                      stage.status === 'completed' ? 'bg-green-500 bg-opacity-10 border border-green-500 border-opacity-20' :
                      stage.status === 'in-progress' ? 'bg-yellow-500 bg-opacity-10 border border-yellow-500 border-opacity-20' :
                      'bg-neutral-800 opacity-50'
                    }`}>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-neutral-100">{stage.title}</span>
                        <span className="text-xs text-neutral-400">{stage.modules} modules</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 p-3 bg-yellow-500 bg-opacity-10 rounded-lg">
                  <p className="text-xs text-neutral-300">
                    <span className="font-semibold">Next up:</span> Complete &quot;API Integration&quot; module to unlock advanced features
                  </p>
                </div>
              </GlassPanel>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Section */}
      <section className="py-24 bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-100 mb-4">
              Data-Driven Learning Insights
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              Make informed decisions with comprehensive analytics and reporting
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
            {[
              { label: 'Engagement Metrics', desc: 'Track login frequency, time spent, and content interactions' },
              { label: 'Performance Analytics', desc: 'Monitor quiz scores, completion rates, and skill progression' },
              { label: 'ROI Measurement', desc: 'Connect learning outcomes to business KPIs and performance' },
              { label: 'Predictive Insights', desc: 'Identify at-risk learners and recommend interventions' },
              { label: 'Custom Reports', desc: 'Generate detailed reports for stakeholders and compliance' },
              { label: 'Real-time Dashboards', desc: 'Monitor organizational learning health at a glance' },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <h3 className="text-lg font-semibold text-neutral-100 mb-2">{item.label}</h3>
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
              Flexible Pricing for Organizations of All Sizes
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              Choose the plan that fits your learning and development needs
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            {[
              {
                name: 'Starter',
                price: '$49',
                period: '/user/month',
                description: 'For small teams',
                features: [
                  'Up to 50 users',
                  '100+ course library',
                  'Basic analytics',
                  'Email support',
                  'Mobile app access',
                  'Completion certificates',
                ],
                popular: false,
              },
              {
                name: 'Professional',
                price: '$29',
                period: '/user/month',
                description: 'For growing organizations',
                features: [
                  'Up to 500 users',
                  '1000+ course library',
                  'Advanced analytics',
                  'Priority support',
                  'Custom branding',
                  'API access',
                  'SSO integration',
                  'Custom learning paths',
                ],
                popular: true,
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                period: '',
                description: 'For large enterprises',
                features: [
                  'Unlimited users',
                  'Custom content creation',
                  'Dedicated success manager',
                  'SLA guarantee',
                  'Advanced integrations',
                  'White-label options',
                  'On-premise deployment',
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
                      Best Value
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
                  {tier.name === 'Professional' && (
                    <p className="text-xs text-green-500 mt-2">Save 40% with annual billing</p>
                  )}
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
              Transform Your Organization Through Learning
            </h2>
            <p className="text-lg text-neutral-400 mb-8 max-w-2xl mx-auto">
              Join thousands of organizations using AVALA to build skilled, engaged, 
              and high-performing teams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/">
                  <>
                    Schedule Demo
                    <ArrowRight className="h-4 w-4" />
                  </>
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/developers">
                  Download Whitepaper
                </Link>
              </Button>
            </div>
            <p className="text-sm text-neutral-500 mt-6">
              14-day free trial • No credit card required • Full platform access
            </p>
          </GlassPanel>
        </div>
      </section>
    </div>
  )
}