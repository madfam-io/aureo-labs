'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Mail, Phone, MapPin, Clock, Send, MessageSquare, Briefcase } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { GlassPanel } from '@/components/ui/GlassPanel'

const contactReasons = [
  { value: 'demo', label: 'Request a Demo' },
  { value: 'sales', label: 'Talk to Sales' },
  { value: 'support', label: 'Technical Support' },
  { value: 'partnership', label: 'Partnership Inquiry' },
  { value: 'media', label: 'Media Inquiry' },
  { value: 'other', label: 'Other' },
]

const offices = [
  {
    city: 'Mexico City',
    address: 'Torre Reforma\nPaseo de la Reforma 483\nCuauhtémoc, 06500',
    phone: '+52 55 1234 5678',
    email: 'mexico@aureolabs.dev',
  },
  {
    city: 'San Francisco',
    address: '535 Mission Street\n14th Floor\nSan Francisco, CA 94105',
    phone: '+1 415 555 0123',
    email: 'sf@aureolabs.dev',
  },
  {
    city: 'London',
    address: '1 Canada Square\nCanary Wharf\nLondon E14 5AB',
    phone: '+44 20 7123 4567',
    email: 'london@aureolabs.dev',
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    reason: 'demo',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setSubmitStatus('success')
    
    // Reset form after success
    setTimeout(() => {
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        reason: 'demo',
        message: '',
      })
      setSubmitStatus('idle')
    }, 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 py-24">
        <div className="absolute inset-0 bg-grid-white/5" />
        <div className="container relative mx-auto px-4">
          <div className="text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-yellow-500 bg-opacity-10 px-4 py-2 text-sm text-gold-500">
              <MessageSquare className="h-4 w-4" />
              <span>Get in Touch</span>
            </div>
            
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-neutral-100 md:text-6xl lg:text-7xl">
              Contact Us
            </h1>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto mb-8">
              Have questions about our AI platforms? Want to see a demo? 
              We&apos;re here to help you transform your business.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-neutral-950">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-neutral-100 mb-6">
                Send Us a Message
              </h2>
              <p className="text-neutral-400 mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-neutral-300 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-lg text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-neutral-300 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-lg text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-lg text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-neutral-300 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-lg text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    placeholder="Acme Inc."
                  />
                </div>

                <div>
                  <label htmlFor="reason" className="block text-sm font-medium text-neutral-300 mb-2">
                    How can we help? *
                  </label>
                  <select
                    id="reason"
                    name="reason"
                    required
                    value={formData.reason}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-lg text-neutral-100 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  >
                    {contactReasons.map(reason => (
                      <option key={reason.value} value={reason.value}>
                        {reason.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-lg text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-500 bg-opacity-10 border border-green-500 border-opacity-20 rounded-lg">
                    <p className="text-green-500 text-sm">
                      Thank you for your message! We&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-500 bg-opacity-10 border border-red-500 border-opacity-20 rounded-lg">
                    <p className="text-red-500 text-sm">
                      Something went wrong. Please try again or email us directly at hello@aureolabs.dev
                    </p>
                  </div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  {!isSubmitting && <Send className="h-4 w-4" />}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <GlassPanel className="p-6">
                <h3 className="text-xl font-semibold text-neutral-100 mb-4">
                  Direct Contact
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-gold-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-neutral-300">Email</p>
                      <a href="mailto:hello@aureolabs.dev" className="text-neutral-100 hover:text-gold-500 transition-colors">
                        hello@aureolabs.dev
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-gold-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-neutral-300">Phone</p>
                      <a href="tel:+1-555-123-4567" className="text-neutral-100 hover:text-gold-500 transition-colors">
                        +1 (555) 123-4567
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-gold-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-neutral-300">Business Hours</p>
                      <p className="text-neutral-100">Mon-Fri 9:00 AM - 6:00 PM PST</p>
                    </div>
                  </div>
                </div>
              </GlassPanel>

              <GlassPanel className="p-6">
                <h3 className="text-xl font-semibold text-neutral-100 mb-4">
                  Quick Links
                </h3>
                <div className="space-y-3">
                  <Link 
                    href={"/developers" as any}
                    className="flex items-center gap-2 text-neutral-300 hover:text-gold-500 transition-colors"
                  >
                    <ArrowRight className="h-4 w-4" />
                    Developer Documentation
                  </Link>
                  <Link 
                    href={"/products" as any}
                    className="flex items-center gap-2 text-neutral-300 hover:text-gold-500 transition-colors"
                  >
                    <ArrowRight className="h-4 w-4" />
                    Product Overview
                  </Link>
                  <Link 
                    href={"/" as any}
                    className="flex items-center gap-2 text-neutral-300 hover:text-gold-500 transition-colors"
                  >
                    <ArrowRight className="h-4 w-4" />
                    Schedule Demo
                  </Link>
                  <Link 
                    href={"/" as any}
                    className="flex items-center gap-2 text-neutral-300 hover:text-gold-500 transition-colors"
                  >
                    <ArrowRight className="h-4 w-4" />
                    Support Center
                  </Link>
                </div>
              </GlassPanel>

              <GlassPanel className="p-6">
                <h3 className="text-xl font-semibold text-neutral-100 mb-4">
                  Enterprise Solutions
                </h3>
                <p className="text-neutral-400 mb-4">
                  Looking for custom AI solutions for your enterprise? 
                  Our team of experts is ready to help you transform your business.
                </p>
                <Button asChild variant="secondary" className="w-full">
                  <Link href={"/" as any}>
                    Talk to Enterprise Sales
                    <Briefcase className="h-4 w-4" />
                  </Link>
                </Button>
              </GlassPanel>
            </div>
          </div>
        </div>
      </section>

      {/* Offices Section */}
      <section className="py-24 bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-100 mb-4">
              Our Global Offices
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              Visit us at any of our offices around the world
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            {offices.map((office) => (
              <GlassPanel key={office.city} className="p-6">
                <MapPin className="h-8 w-8 text-gold-500 mb-4" />
                <h3 className="text-xl font-semibold text-neutral-100 mb-3">
                  {office.city}
                </h3>
                <address className="text-neutral-400 not-italic space-y-2">
                  <p className="whitespace-pre-line text-sm">{office.address}</p>
                  <p className="text-sm">
                    <a href={`tel:${office.phone}`} className="hover:text-gold-500 transition-colors">
                      {office.phone}
                    </a>
                  </p>
                  <p className="text-sm">
                    <a href={`mailto:${office.email}`} className="hover:text-gold-500 transition-colors">
                      {office.email}
                    </a>
                  </p>
                </address>
              </GlassPanel>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-t from-neutral-950 to-neutral-900">
        <div className="container mx-auto px-4 text-center">
          <GlassPanel className="max-w-4xl mx-auto p-12">
            <h2 className="text-4xl font-bold text-neutral-100 mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-neutral-400 mb-8 max-w-2xl mx-auto">
              Join thousands of companies using Aureo Labs AI platforms to 
              drive innovation and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href={"/" as any}>
                  Get Started Today
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