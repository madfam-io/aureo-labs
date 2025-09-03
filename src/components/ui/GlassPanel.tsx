import { forwardRef, type HTMLAttributes } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const glassPanelVariants = cva(
  'relative overflow-hidden transition-all duration-[var(--dur-3)] ease-[var(--ease-standard)]',
  {
    variants: {
      variant: {
        default: 'glass',
        subtle: 'bg-neutral-950 bg-opacity-30 backdrop-blur-sm border border-neutral-700 border-opacity-30',
        strong: 'bg-neutral-900 bg-opacity-60 backdrop-blur-lg border border-neutral-600 border-opacity-40 shadow-aureo2',
        gold: 'glass border-gold-500 border-opacity-20 shadow-aureo2',
        electric: 'glass border-blue-500 border-opacity-20 shadow-[0_8px_24px_rgba(0,0,0,.35),0_0_24px_rgba(59,130,246,.12)]',
      },
      size: {
        sm: 'p-4 rounded-lg',
        default: 'p-6 rounded-2xl',
        lg: 'p-8 rounded-3xl',
      },
      glow: {
        none: '',
        soft: 'shadow-aureo1',
        medium: 'shadow-aureo2',
        strong: 'shadow-aureo3',
      },
      interactive: {
        true: 'cursor-pointer hover:shadow-aureo2 hover:-translate-y-0.5',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      glow: 'none',
      interactive: false,
    },
  }
)

export interface GlassPanelProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof glassPanelVariants> {
  withTopGradient?: boolean
  withFloatingElements?: boolean
}

const GlassPanel = forwardRef<HTMLDivElement, GlassPanelProps>(
  ({ 
    className, 
    variant, 
    size, 
    glow, 
    interactive, 
    withTopGradient = true,
    withFloatingElements = false,
    children,
    ...props 
  }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(glassPanelVariants({ variant, size, glow, interactive }), className)}
        {...props}
      >
        {/* Top gradient accent */}
        {withTopGradient && (
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-300/60 to-transparent" />
        )}
        
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>

        {/* Floating elements */}
        {withFloatingElements && (
          <>
            <div className="absolute -top-2 -right-2 h-4 w-4 bg-yellow-500 bg-opacity-40 rounded-full blur-sm animate-float" />
            <div className="absolute -bottom-1 -left-1 h-3 w-3 bg-blue-500 bg-opacity-30 rounded-full blur-sm animate-float" 
                 style={{ animationDelay: '1s' }} />
          </>
        )}
      </div>
    )
  }
)
GlassPanel.displayName = 'GlassPanel'

export { GlassPanel, glassPanelVariants }