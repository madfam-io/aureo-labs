import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Book, Code, Shield, Terminal, Play, Download } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { GlassPanel } from '@/components/ui/GlassPanel'

export const metadata: Metadata = {
  title: 'Developer Portal | Aureo Labs',
  description: 'Comprehensive developer resources, API documentation, SDKs, and tools to integrate Aureo Labs AI platforms into your applications.',
}

const quickStartSteps = [
  {
    step: '01',
    title: 'Get API Key',
    description: 'Sign up and get your API credentials in seconds.',
    code: 'curl -H "Authorization: Bearer YOUR_API_KEY"',
  },
  {
    step: '02',
    title: 'Choose SDK',
    description: 'Install our SDK for your preferred language.',
    code: 'npm install @aureolabs/sdk',
  },
  {
    step: '03',
    title: 'Make First Call',
    description: 'Send your first request to any of our APIs.',
    code: 'const result = await client.penny.chat("Hello!")',
  },
]

const sdks = [
  {
    name: 'JavaScript/TypeScript',
    description: 'Full-featured SDK with TypeScript support',
    install: 'npm install @aureolabs/sdk',
    docs: '/developers/sdks/javascript',
    popular: true,
  },
  {
    name: 'Python',
    description: 'Pythonic SDK with async/await support',
    install: 'pip install aureolabs',
    docs: '/developers/sdks/python',
    popular: true,
  },
  {
    name: 'Go',
    description: 'High-performance SDK for Go applications',
    install: 'go get github.com/aureolabs/go-sdk',
    docs: '/developers/sdks/go',
    popular: false,
  },
  {
    name: 'PHP',
    description: 'Easy-to-use SDK for PHP applications',
    install: 'composer require aureolabs/php-sdk',
    docs: '/developers/sdks/php',
    popular: false,
  },
]

const apiEndpoints = [
  {
    name: 'PENNY Chat API',
    method: 'POST',
    endpoint: '/v1/penny/chat',
    description: 'Send messages to PENNY AI assistant',
    rateLimit: '100 req/min',
  },
  {
    name: 'Forge Sight Pricing',
    method: 'GET',
    endpoint: '/v1/forge-sight/analyze',
    description: 'Get pricing intelligence and market data',
    rateLimit: '50 req/min',
  },
  {
    name: 'Cotiza Generator',
    method: 'POST',
    endpoint: '/v1/cotiza/generate',
    description: 'Generate professional quotations',
    rateLimit: '25 req/min',
  },
  {
    name: 'Dhanam Insights',
    method: 'GET',
    endpoint: '/v1/dhanam/insights',
    description: 'Get financial wellness recommendations',
    rateLimit: '75 req/min',
  },
]

const resources = [
  {
    icon: Book,
    title: 'API Documentation',
    description: 'Complete API reference with examples',
    href: '/developers/api',
    external: false,
  },
  {
    icon: Terminal,
    title: 'Interactive Sandbox',
    description: 'Test APIs in your browser',
    href: '/developers/sandbox',
    external: false,
  },
  {
    icon: Code,
    title: 'Code Examples',
    description: 'Ready-to-use code snippets',
    href: '/developers/examples',
    external: false,
  },
  {
    icon: Play,
    title: 'Tutorials',
    description: 'Step-by-step integration guides',
    href: '/developers/tutorials',
    external: false,
  },
  {
    icon: Download,
    title: 'OpenAPI Spec',
    description: 'Download complete API specification',
    href: '/api/openapi.json',
    external: true,
  },
  {
    icon: Shield,
    title: 'Security Guide',
    description: 'Best practices for secure integration',
    href: '/developers/security',
    external: false,
  },
]

export default function DevelopersPage() {
  return (
    <main className="pt-32 pb-16">
      <div className="container-phi">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm mb-6">
            <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-neutral-300">API Status: All systems operational</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-neutral-100">Developer </span>
            <span className="gold-text">Portal</span>
          </h1>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto mb-8">
            Integrate powerful AI capabilities into your applications with our 
            comprehensive APIs, SDKs, and developer tools.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href={"/developers" as any}>
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href={"/developers" as any}>
                Try Sandbox
                <Play className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Quick Start */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-neutral-100">Get Started in </span>
              <span className="gold-text">3 Steps</span>
            </h2>
            <p className="text-lg text-neutral-300">
              Integrate our AI platforms into your application in minutes.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {quickStartSteps.map((step) => (
              <GlassPanel key={step.step} className="text-center">
                <div className="mb-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500 bg-opacity-10 text-gold-500 font-bold text-lg mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-100 mb-2">{step.title}</h3>
                  <p className="text-neutral-300 mb-4">{step.description}</p>
                </div>
                <div className="bg-neutral-900 rounded-lg p-3 text-left">
                  <code className="text-sm text-green-400 font-mono">{step.code}</code>
                </div>
              </GlassPanel>
            ))}
          </div>
        </section>

        {/* SDKs */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-neutral-100">Official </span>
              <span className="gold-text">SDKs</span>
            </h2>
            <p className="text-lg text-neutral-300">
              Choose from our collection of officially maintained SDKs.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {sdks.map((sdk) => (
              <Card key={sdk.name} variant={sdk.popular ? 'gold' : 'default'} className="relative">
                {sdk.popular && (
                  <div className="absolute -top-3 -right-3">
                    <div className="bg-gold-500 text-neutral-900 px-2 py-1 rounded-full text-xs font-medium">
                      Popular
                    </div>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="h-5 w-5 text-gold-500" />
                    {sdk.name}
                  </CardTitle>
                  <CardDescription>{sdk.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-neutral-900 rounded-lg p-3 mb-4">
                    <code className="text-sm text-green-400 font-mono">{sdk.install}</code>
                  </div>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={sdk.docs as any}>
                      View Documentation
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* API Endpoints */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-neutral-100">API </span>
              <span className="gold-text">Endpoints</span>
            </h2>
            <p className="text-lg text-neutral-300">
              Core endpoints available across all our AI platforms.
            </p>
          </div>

          <div className="space-y-4">
            {apiEndpoints.map((endpoint) => (
              <GlassPanel key={endpoint.endpoint} className="hover:shadow-aureo2 transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-2 py-1 rounded text-xs font-mono ${
                        endpoint.method === 'GET' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'
                      }`}>
                        {endpoint.method}
                      </span>
                      <code className="text-sm text-neutral-300 font-mono">{endpoint.endpoint}</code>
                    </div>
                    <h3 className="text-lg font-semibold text-neutral-100">{endpoint.name}</h3>
                    <p className="text-neutral-400 text-sm">{endpoint.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-neutral-500 mb-2">Rate Limit</div>
                    <div className="text-sm text-neutral-300">{endpoint.rateLimit}</div>
                  </div>
                </div>
              </GlassPanel>
            ))}
          </div>
        </section>

        {/* Resources */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-neutral-100">Developer </span>
              <span className="gold-text">Resources</span>
            </h2>
            <p className="text-lg text-neutral-300">
              Everything you need to build with our AI platforms.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource) => {
              const Icon = resource.icon
              return (
                <Card key={resource.title} interactive className="text-center">
                  <CardHeader>
                    <div className="mx-auto h-12 w-12 rounded-xl bg-yellow-500 bg-opacity-10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-gold-500" />
                    </div>
                    <CardTitle className="text-lg">{resource.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">{resource.description}</CardDescription>
                    <Button asChild variant="ghost" size="sm" className="group">
                      <Link href={resource.href as any} {...(resource.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                        {resource.external ? 'Download' : 'View'}
                        <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* CTA Section */}
        <GlassPanel variant="gold" className="text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-100 mb-4">
              Ready to Build?
            </h2>
            <p className="text-neutral-300 mb-8">
              Join our developer community and start building intelligent applications today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href={"/" as any}>
                  Get API Key
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href={"/" as any}>
                  Join Discord
                </Link>
              </Button>
            </div>
          </div>
        </GlassPanel>
      </div>
    </main>
  )
}