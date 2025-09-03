import Link from 'next/link'
import { 
  Twitter, 
  Github, 
  Linkedin, 
  Youtube,
  Mail,
  MapPin,
  Phone
} from 'lucide-react'

const footerLinks = {
  products: [
    { name: 'PENNY', href: '/products/penny' },
    { name: 'Forge Sight', href: '/products/forge-sight' },
    { name: 'Cotiza Studio', href: '/products/cotiza' },
    { name: 'Dhanam', href: '/products/dhanam' },
    { name: 'AVALA', href: '/products/avala' },
    { name: 'Factlas', href: '/products/factlas' },
  ],
  developers: [
    { name: 'Documentation', href: '/developers/docs' },
    { name: 'API Reference', href: '/developers/api' },
    { name: 'SDKs', href: '/developers/sdks' },
    { name: 'Sandbox', href: '/developers/sandbox' },
    { name: 'Status', href: 'https://status.aureolabs.dev' },
    { name: 'Changelog', href: '/developers/changelog' },
  ],
  company: [
    { name: 'About', href: '/company/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/company/careers' },
    { name: 'Press', href: '/company/press' },
    { name: 'Partners', href: '/company/partners' },
    { name: 'Contact', href: '/company/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/legal/privacy' },
    { name: 'Terms of Service', href: '/legal/terms' },
    { name: 'Cookie Policy', href: '/legal/cookies' },
    { name: 'Security', href: '/security' },
    { name: 'Compliance', href: '/compliance' },
    { name: 'Trust Center', href: '/trust' },
  ],
}

const socialLinks = [
  { name: 'Twitter', href: 'https://twitter.com/aureolabs', icon: Twitter },
  { name: 'GitHub', href: 'https://github.com/aureolabs', icon: Github },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/aureolabs', icon: Linkedin },
  { name: 'YouTube', href: 'https://youtube.com/@aureolabs', icon: Youtube },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative mt-24 border-t border-neutral-800 bg-neutral-950">
      {/* Golden accent line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
      
      <div className="container-phi py-12 lg:py-16">
        <div className="xl:grid xl:grid-cols-5 xl:gap-8">
          {/* Brand section */}
          <div className="space-y-8 xl:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-gold-300 to-gold-500 shadow-aureo2" />
              <span className="text-xl font-bold gold-text">Aureo Labs</span>
            </Link>
            
            <p className="text-sm text-neutral-400 max-w-md">
              Where AI innovation meets enterprise reality. Building intelligent platforms 
              that transform how businesses operate, compete, and grow.
            </p>

            <div className="space-y-3 text-sm text-neutral-400">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gold-500" />
                <span>Mexico City, MX | San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gold-500" />
                <a href="mailto:hello@aureolabs.dev" className="hover:text-neutral-300 transition-colors">
                  hello@aureolabs.dev
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gold-500" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>

            <div className="flex space-x-4">
              {socialLinks.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-neutral-500 hover:text-gold-500 transition-colors"
                    aria-label={item.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Links sections */}
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-3 xl:mt-0 md:grid-cols-4">
            <div>
              <h3 className="text-sm font-semibold text-neutral-100">Products</h3>
              <ul role="list" className="mt-4 space-y-3">
                {footerLinks.products.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-neutral-400 hover:text-neutral-100 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-neutral-100">Developers</h3>
              <ul role="list" className="mt-4 space-y-3">
                {footerLinks.developers.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-neutral-400 hover:text-neutral-100 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-neutral-100">Company</h3>
              <ul role="list" className="mt-4 space-y-3">
                {footerLinks.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-neutral-400 hover:text-neutral-100 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-neutral-100">Legal</h3>
              <ul role="list" className="mt-4 space-y-3">
                {footerLinks.legal.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-neutral-400 hover:text-neutral-100 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 border-t border-neutral-800 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <p className="text-xs text-neutral-500">
              © {currentYear} Innovaciones MADFAM S.A.S. de C.V. All rights reserved.
            </p>
            <div className="mt-4 flex items-center gap-4 text-xs text-neutral-500 md:mt-0">
              <span>Part of the MADFAM ecosystem</span>
              <span>•</span>
              <Link href="/" className="hover:text-neutral-400 transition-colors">
                SOC 2 Type II
              </Link>
              <span>•</span>
              <Link href="/" className="hover:text-neutral-400 transition-colors">
                ISO 27001
              </Link>
              <span>•</span>
              <Link href="/" className="hover:text-neutral-400 transition-colors">
                GDPR
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}