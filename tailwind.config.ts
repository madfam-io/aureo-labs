import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          900: 'var(--gold-900)',
          700: 'var(--gold-700)',
          500: 'var(--gold-500)',
          300: 'var(--gold-300)',
          200: 'var(--gold-200)'
        },
        neutral: {
          950: 'var(--neutral-950)',
          900: 'var(--neutral-900)',
          800: 'var(--neutral-800)',
          700: 'var(--neutral-700)',
          500: 'var(--neutral-500)',
          300: 'var(--neutral-300)',
          100: 'var(--neutral-100)',
          50:  'var(--neutral-50)'
        },
        electric: { 
          500: 'var(--electric-500)' 
        }
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)']
      },
      fontSize: {
        xs: 'var(--text-xs)',
        sm: 'var(--text-sm)',
        base: 'var(--text-base)',
        md: 'var(--text-md)',
        lg: 'var(--text-lg)',
        xl: 'var(--text-xl)',
        '2xl': 'var(--text-2xl)',
        '3xl': 'var(--text-3xl)'
      },
      spacing: {
        1: 'var(--space-1)',
        2: 'var(--space-2)',
        3: 'var(--space-3)',
        4: 'var(--space-4)',
        5: 'var(--space-5)',
        6: 'var(--space-6)'
      },
      boxShadow: {
        aureo1: 'var(--shadow-1)',
        aureo2: 'var(--shadow-2)',
        aureo3: 'var(--shadow-3)'
      },
      animation: {
        'gold-shimmer': 'goldShimmer 1.8s linear infinite',
        'fade-in': 'fadeIn var(--dur-3) var(--ease-standard)',
        'fade-up': 'fadeUp var(--dur-3) var(--ease-standard)',
        'scale-in': 'scaleIn var(--dur-2) var(--ease-standard)',
      },
      keyframes: {
        goldShimmer: {
          to: { backgroundPosition: '200% 0' }
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' }
        },
        fadeUp: {
          from: { 
            opacity: '0',
            transform: 'translateY(10px)'
          },
          to: { 
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        scaleIn: {
          from: { transform: 'scale(0.95)' },
          to: { transform: 'scale(1)' }
        }
      }
    }
  },
  plugins: [
    function ({ addUtilities }: any) {
      addUtilities({
        '.glass': {
          background: 'var(--glass-bg)',
          backdropFilter: 'blur(var(--glass-blur))',
          WebkitBackdropFilter: 'blur(var(--glass-blur))',
          border: '1px solid var(--glass-stroke)',
          boxShadow: 'var(--shadow-2)',
          borderRadius: 'var(--glass-radius)'
        },
        '.gold-border': {
          borderImage: 'linear-gradient(120deg, var(--gold-500), var(--gold-300)) 1',
          borderWidth: '1px',
          borderStyle: 'solid'
        },
        '.gold-text': {
          background: 'linear-gradient(180deg, var(--gold-300), var(--gold-500))',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent'
        },
        '.gold-shimmer': {
          backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,.06), rgba(252,211,77,.25), rgba(255,255,255,.06))',
          backgroundSize: '200% 100%',
        },
        '.grid-phi': {
          display: 'grid',
          gridTemplateColumns: '1fr calc(1fr * var(--phi))'
        },
        '.aspect-phi': {
          aspectRatio: '1 / var(--phi)'
        }
      })
    }
  ]
}

export default config