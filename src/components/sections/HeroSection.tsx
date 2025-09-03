'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, Play, Star, Users, Building } from 'lucide-react'
import { cn } from '@/lib/utils'

const stats = [
  { label: 'Active Users', value: '50K+', icon: Users },
  { label: 'Enterprise Clients', value: '500+', icon: Building },
  { label: 'Customer Rating', value: '4.9/5', icon: Star },
]

const testimonialHighlight = {
  quote: "Aureo Labs transformed our operations with AI that actually works in the real world.",
  author: "Sarah Chen",
  role: "CTO, TechCorp",
}

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Golden spiral background overlay - only visible in debug */}
      <svg 
        className="absolute inset-0 pointer-events-none opacity-[0.03] hidden lg:block"
        aria-hidden="true"
        viewBox="0 0 1920 1080"
      >
        <defs>
          <linearGradient id="spiralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FCD34D" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
        </defs>
        <path
          d="M960,540 A200,200 0 0,1 760,340 A400,400 0 0,1 1360,340 A600,600 0 0,1 560,940 A800,800 0 0,1 1560,140"
          stroke="url(#spiralGradient)"
          strokeWidth="2"
          fill="none"
        />
      </svg>

      <div className="container-phi relative z-10">
        <div className="grid-phi items-center gap-12 lg:gap-20">
          {/* Left column - Main content */}
          <div className={cn(
            "space-y-8 transition-all duration-[var(--dur-5)] ease-[var(--ease-standard)]",
            isVisible ? "animate-fade-up opacity-100" : "opacity-0 translate-y-10"
          )}>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm">
                <div className="h-2 w-2 bg-gold-500 rounded-full animate-pulse" />
                <span className="text-neutral-300">New: PENNY 2.0 with Advanced Reasoning</span>
                <ArrowRight className="h-3 w-3 text-gold-500" />
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="text-neutral-100">Where AI </span>
                <span className="gold-text">Innovation</span>
                <br />
                <span className="text-neutral-100">Meets Enterprise </span>
                <span className="gold-text">Reality</span>
              </h1>

              <p className="text-xl text-neutral-300 max-w-2xl leading-relaxed">
                Transform your business with AI-powered platforms built for real-world impact. 
                From intelligent assistants to pricing optimization, we deliver solutions that 
                actually work in production.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products" className="btn-gold group">
                Explore Our Platforms
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              
              <button className="glass px-6 py-3 rounded-2xl flex items-center gap-2 text-neutral-100 transition-all hover:shadow-aureo2">
                <Play className="h-4 w-4" />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-neutral-800">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div
                    key={stat.label}
                    className={cn(
                      "transition-all duration-[var(--dur-4)] ease-[var(--ease-standard)]",
                      isVisible 
                        ? "opacity-100 translate-y-0" 
                        : "opacity-0 translate-y-4"
                    )}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Icon className="h-4 w-4 text-gold-500" />
                      <span className="text-2xl font-bold text-neutral-100">{stat.value}</span>
                    </div>
                    <p className="text-sm text-neutral-400">{stat.label}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right column - Interactive showcase */}
          <div className={cn(
            "relative transition-all duration-[var(--dur-5)] ease-[var(--ease-standard)] delay-300",
            isVisible ? "animate-fade-up opacity-100" : "opacity-0 translate-y-10"
          )}>
            <div className="aspect-phi relative">
              <div className="absolute inset-0 glass rounded-3xl p-8 overflow-hidden">
                {/* Product preview cards */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 bg-gold-500 rounded-full animate-pulse" />
                    <span className="text-sm text-neutral-300">Live Product Demo</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { name: 'PENNY', status: 'Active', metric: '99.9%' },
                      { name: 'Forge Sight', status: 'Processing', metric: '$2.3M' },
                      { name: 'Cotiza', status: 'Generating', metric: '847' },
                      { name: 'Dhanam', status: 'Analyzing', metric: '4.8★' },
                    ].map((product, index) => (
                      <div
                        key={product.name}
                        className={cn(
                          "glass p-4 rounded-xl border border-neutral-700 border-opacity-50 transition-all duration-300",
                          isVisible && `animate-scale-in`,
                        )}
                        style={{ animationDelay: `${500 + index * 100}ms` }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-sm font-medium text-neutral-100">{product.name}</h4>
                          <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse" />
                        </div>
                        <p className="text-xs text-neutral-400 mb-1">{product.status}</p>
                        <p className="text-lg font-bold gold-text">{product.metric}</p>
                      </div>
                    ))}
                  </div>

                  {/* Testimonial */}
                  <div className="mt-6 p-4 border border-gold-500 border-opacity-20 rounded-xl bg-yellow-500 bg-opacity-5">
                    <p className="text-sm text-neutral-300 italic mb-2">&quot;{testimonialHighlight.quote}&quot;</p>
                    <div className="flex items-center gap-2">
                      <div className="h-6 w-6 bg-gradient-to-br from-gold-300 to-gold-500 rounded-full" />
                      <div className="text-xs">
                        <p className="text-neutral-200 font-medium">{testimonialHighlight.author}</p>
                        <p className="text-neutral-400">{testimonialHighlight.role}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 h-8 w-8 bg-gold-500 rounded-full blur-sm animate-float opacity-60" />
                <div className="absolute -bottom-2 -left-2 h-6 w-6 bg-electric-500 rounded-full blur-sm animate-float opacity-40" 
                     style={{ animationDelay: '1s' }} />
              </div>
            </div>

            {/* Golden accent lines */}
            <div className="absolute -inset-4 -z-10">
              <div className="absolute inset-0 bg-gradient-to-r from-gold-500/20 to-transparent rounded-3xl blur-xl" />
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-gold-500 to-transparent" />
              <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-gold-500 to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 h-32 w-32 bg-yellow-500 bg-opacity-10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-10 h-48 w-48 bg-blue-500 bg-opacity-10 rounded-full blur-3xl animate-float" 
             style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 bg-yellow-500 bg-opacity-5 rounded-full blur-3xl" />
      </div>
    </section>
  )
}