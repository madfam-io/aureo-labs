import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import '@/styles/globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Aureo Labs | Where AI Innovation Meets Enterprise Reality',
  description: 'Aureo Labs builds AI-powered platforms that transform how enterprises operate. Explore our suite of intelligent solutions including PENNY, Forge Sight, and more.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  openGraph: {
    title: 'Aureo Labs | AI Innovation Laboratory',
    description: 'Transform your enterprise with AI-powered platforms built for real-world impact.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Aureo Labs',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aureo Labs | AI Innovation Laboratory',
    description: 'Transform your enterprise with AI-powered platforms built for real-world impact.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}