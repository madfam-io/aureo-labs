'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const navigation = [
  {
    name: 'Products',
    href: '/products',
    dropdown: [
      { name: 'PENNY - AI Assistant', href: '/products/penny' },
      { name: 'Forge Sight - Pricing Intelligence', href: '/products/forge-sight' },
      { name: 'Cotiza Studio - Quotations', href: '/products/cotiza' },
      { name: 'Dhanam - Financial Wellness', href: '/products/dhanam' },
      { name: 'AVALA - Training Platform', href: '/products/avala' },
      { name: 'Factlas - Geographic Intelligence', href: '/products/factlas' },
    ],
  },
  {
    name: 'Solutions',
    href: '/solutions',
    dropdown: [
      { name: 'By Industry', href: '/solutions/industry' },
      { name: 'By Use Case', href: '/solutions/use-case' },
      { name: 'By Company Size', href: '/solutions/company-size' },
    ],
  },
  {
    name: 'Developers',
    href: '/developers',
    dropdown: [
      { name: 'Documentation', href: '/developers/docs' },
      { name: 'API Reference', href: '/developers/api' },
      { name: 'SDKs & Tools', href: '/developers/sdks' },
      { name: 'Sandbox', href: '/developers/sandbox' },
    ],
  },
  {
    name: 'Resources',
    href: '/resources',
    dropdown: [
      { name: 'Blog', href: '/blog' },
      { name: 'Case Studies', href: '/resources/case-studies' },
      { name: 'Whitepapers', href: '/resources/whitepapers' },
      { name: 'Webinars', href: '/resources/webinars' },
    ],
  },
  {
    name: 'Company',
    href: '/company',
    dropdown: [
      { name: 'About', href: '/company/about' },
      { name: 'Team', href: '/company/team' },
      { name: 'Careers', href: '/company/careers' },
      { name: 'Contact', href: '/company/contact' },
    ],
  },
]

export function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-[var(--dur-3)]',
        scrolled ? 'glass shadow-aureo2' : 'bg-neutral-950/80'
      )}
    >
      <nav className="container-phi flex h-20 items-center justify-between" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Aureo Labs</span>
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-gold-300 to-gold-500 shadow-aureo2" />
              <span className="text-xl font-bold gold-text">Aureo Labs</span>
            </div>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-neutral-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={item.href as any}
                className={cn(
                  'inline-flex items-center gap-1 text-sm font-medium transition-colors',
                  pathname.startsWith(item.href)
                    ? 'text-gold-500'
                    : 'text-neutral-300 hover:text-neutral-100'
                )}
              >
                {item.name}
                {item.dropdown && (
                  <ChevronDown
                    className={cn(
                      'h-3 w-3 transition-transform',
                      activeDropdown === item.name && 'rotate-180'
                    )}
                    aria-hidden="true"
                  />
                )}
              </Link>

              {item.dropdown && activeDropdown === item.name && (
                <div className="absolute left-0 top-full mt-2 w-64 origin-top-left animate-fade-up">
                  <div className="glass overflow-hidden rounded-2xl shadow-aureo3">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href as any}
                        className="block px-4 py-3 text-sm text-neutral-300 transition-colors hover:bg-yellow-500 bg-opacity-10 hover:text-neutral-100"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-4">
          <Link
            href={"/" as any}
            className="text-sm font-medium text-neutral-300 transition-colors hover:text-neutral-100"
          >
            Sign In
          </Link>
          <Link href={"/" as any} className="btn-gold text-sm">
            Request Demo
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-neutral-950 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-neutral-800">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Aureo Labs</span>
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-gold-300 to-gold-500" />
                  <span className="text-lg font-bold gold-text">Aureo Labs</span>
                </div>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-neutral-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-neutral-800">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      <Link
                        href={item.href as any}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-neutral-100 hover:bg-neutral-900"
                      >
                        {item.name}
                      </Link>
                      {item.dropdown && (
                        <div className="ml-4 mt-2 space-y-1">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href as any}
                              className="block rounded-lg px-3 py-2 text-sm text-neutral-400 hover:bg-neutral-900"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    href={"/" as any}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-neutral-100 hover:bg-neutral-900"
                  >
                    Sign In
                  </Link>
                  <Link href={"/" as any} className="btn-gold mt-4 w-full text-center">
                    Request Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}