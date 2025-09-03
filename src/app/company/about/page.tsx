import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Rocket, Target, Users, Award, Globe, Zap } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { GlassPanel } from '@/components/ui/GlassPanel'

export const metadata: Metadata = {
  title: 'About Aureo Labs | Our Mission, Vision, and Team',
  description: 'Learn about Aureo Labs, our mission to democratize AI, and the team building intelligent platforms that transform businesses worldwide.',
}

const values = [
  {
    icon: Rocket,
    title: 'Innovation First',
    description: 'We push the boundaries of what&apos;s possible with AI, constantly exploring new frontiers in machine learning and automation.',
  },
  {
    icon: Users,
    title: 'Human-Centered',
    description: 'Technology should enhance human capabilities, not replace them. We design AI that empowers people to do their best work.',
  },
  {
    icon: Target,
    title: 'Results-Driven',
    description: 'Every solution we build is measured by the real-world impact it creates for our customers and their businesses.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We maintain the highest standards in everything we do, from code quality to customer support.',
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'Our solutions are designed to scale globally while respecting local contexts and cultural nuances.',
  },
  {
    icon: Zap,
    title: 'Speed & Agility',
    description: 'We move fast, iterate quickly, and adapt to changing market needs without compromising quality.',
  },
]

const milestones = [
  { year: '2023', event: 'Aureo Labs founded with a vision to democratize AI' },
  { year: '2023', event: 'PENNY AI Assistant launched, serving first 100 customers' },
  { year: '2024', event: 'Forge Sight and Cotiza platforms released' },
  { year: '2024', event: 'Reached 10,000+ active users across all platforms' },
  { year: '2024', event: 'Expanded to 25+ countries with multi-language support' },
  { year: '2025', event: 'Launched Dhanam, AVALA, and Factlas platforms' },
]

const stats = [
  { value: '50K+', label: 'Active Users' },
  { value: '25+', label: 'Countries Served' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '4.9/5', label: 'Customer Rating' },
]

const team = [
  {
    name: 'Dr. Maria Rodriguez',
    role: 'CEO & Co-Founder',
    bio: 'Former AI researcher at Stanford with 15+ years in machine learning',
  },
  {
    name: 'James Chen',
    role: 'CTO & Co-Founder',
    bio: 'Ex-Google engineer, architect of distributed AI systems',
  },
  {
    name: 'Sarah Williams',
    role: 'Head of Product',
    bio: 'Product leader with experience at Amazon and Microsoft',
  },
  {
    name: 'Ahmed Hassan',
    role: 'Head of Engineering',
    bio: 'Led engineering teams at Uber and Netflix',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 py-24">
        <div className="absolute inset-0 bg-grid-white/5" />
        <div className="container relative mx-auto px-4">
          <div className="text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-yellow-500 bg-opacity-10 px-4 py-2 text-sm text-gold-500">
              <Rocket className="h-4 w-4" />
              <span>Our Story</span>
            </div>
            
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-neutral-100 md:text-6xl lg:text-7xl">
              Building the Future of
              <span className="text-gold-500"> Intelligent Business</span>
            </h1>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto mb-8">
              At Aureo Labs, we&apos;re on a mission to democratize artificial intelligence 
              and make it accessible to businesses of all sizes.
            </p>

            {/* Stats */}
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

      {/* Mission Section */}
      <section className="py-24 bg-neutral-950">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl font-bold text-neutral-100 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-neutral-400 mb-6">
                We believe that artificial intelligence should be a force multiplier 
                for human potential, not a replacement for it. Our mission is to create 
                AI-powered platforms that augment human capabilities and enable 
                businesses to achieve outcomes they never thought possible.
              </p>
              <p className="text-lg text-neutral-400 mb-8">
                From intelligent assistants that understand context to predictive 
                analytics that anticipate market changes, we&apos;re building the tools 
                that will define the next generation of business intelligence.
              </p>
              <Button asChild size="lg">
                <Link href={"/products" as any}>
                  Explore Our Products
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <GlassPanel className="p-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-yellow-500 bg-opacity-10 flex items-center justify-center shrink-0">
                      <span className="text-gold-500 font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-100 mb-2">Democratize AI</h3>
                      <p className="text-sm text-neutral-400">Make advanced AI accessible to businesses of all sizes</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-yellow-500 bg-opacity-10 flex items-center justify-center shrink-0">
                      <span className="text-gold-500 font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-100 mb-2">Drive Innovation</h3>
                      <p className="text-sm text-neutral-400">Push the boundaries of what&apos;s possible with technology</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-yellow-500 bg-opacity-10 flex items-center justify-center shrink-0">
                      <span className="text-gold-500 font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-100 mb-2">Create Impact</h3>
                      <p className="text-sm text-neutral-400">Deliver measurable results that transform businesses</p>
                    </div>
                  </div>
                </div>
              </GlassPanel>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-100 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              The principles that guide everything we do at Aureo Labs
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {values.map((value) => (
              <GlassPanel key={value.title} className="p-6">
                <div className="mb-4">
                  <value.icon className="h-10 w-10 text-gold-500" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-100 mb-2">
                  {value.title}
                </h3>
                <p className="text-neutral-400">
                  {value.description}
                </p>
              </GlassPanel>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-neutral-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-100 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              From a bold vision to a global AI platform provider
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-px bg-neutral-800"></div>
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-center mb-8">
                  <div className="absolute left-8 h-4 w-4 rounded-full bg-gold-500 -translate-x-1/2"></div>
                  <div className="ml-20">
                    <div className="text-sm text-gold-500 mb-1">{milestone.year}</div>
                    <div className="text-neutral-300">{milestone.event}</div>
                  </div>
                </div>
              ))}
              <div className="absolute left-8 bottom-0 h-4 w-4 rounded-full bg-green-500 -translate-x-1/2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-100 mb-4">
              Leadership Team
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              Meet the visionaries building the future of AI
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
            {team.map((member) => (
              <GlassPanel key={member.name} className="p-6 text-center">
                <div className="h-24 w-24 rounded-full bg-gradient-to-br from-gold-500 to-yellow-400 mx-auto mb-4"></div>
                <h3 className="text-lg font-semibold text-neutral-100 mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-gold-500 mb-3">{member.role}</p>
                <p className="text-sm text-neutral-400">{member.bio}</p>
              </GlassPanel>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-24 bg-neutral-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-neutral-100 mb-6">
              Join Our Mission
            </h2>
            <p className="text-lg text-neutral-400 mb-8">
              We&apos;re always looking for talented individuals who share our passion 
              for AI and want to make a real impact on the world. If you&apos;re ready 
              to work on cutting-edge technology with a team that values innovation, 
              collaboration, and excellence, we want to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href={"/" as any}>
                  View Open Positions
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href={"/company/contact" as any}>
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-t from-neutral-950 to-neutral-900">
        <div className="container mx-auto px-4 text-center">
          <GlassPanel className="max-w-4xl mx-auto p-12">
            <h2 className="text-4xl font-bold text-neutral-100 mb-4">
              Ready to Experience the Future?
            </h2>
            <p className="text-lg text-neutral-400 mb-8 max-w-2xl mx-auto">
              Discover how Aureo Labs can transform your business with 
              intelligent AI platforms designed for real-world impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href={"/" as any}>
                  Request Demo
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href={"/products" as any}>
                  Explore Products
                </Link>
              </Button>
            </div>
          </GlassPanel>
        </div>
      </section>
    </div>
  )
}