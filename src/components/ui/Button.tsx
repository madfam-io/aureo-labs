import { forwardRef, type ButtonHTMLAttributes } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl text-sm font-medium ring-offset-background transition-all duration-[var(--dur-3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-gradient-to-b from-gold-300 to-gold-500 text-neutral-900 hover:shadow-aureo3 hover:scale-105 active:scale-100',
        secondary: 'glass text-neutral-100 hover:shadow-aureo2 hover:bg-neutral-800 bg-opacity-50',
        outline: 'border border-gold-500 border-opacity-50 bg-transparent text-gold-500 hover:bg-gold-500 hover:bg-opacity-10 hover:border-gold-500',
        ghost: 'bg-transparent text-neutral-300 hover:bg-neutral-800 bg-opacity-50 hover:text-neutral-100',
        destructive: 'bg-red-600 text-neutral-100 hover:bg-red-700',
        link: 'text-gold-500 underline-offset-4 hover:underline p-0 h-auto',
      },
      size: {
        default: 'h-11 px-6 py-2',
        sm: 'h-9 px-4 py-1.5 text-xs',
        lg: 'h-12 px-8 py-3 text-base',
        icon: 'h-11 w-11 p-0',
      },
      shimmer: {
        true: 'relative overflow-hidden',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      shimmer: false,
    },
  }
)

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, shimmer, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, shimmer }), className)}
        ref={ref}
        {...props}
      >
        {children}
        {shimmer && variant === 'default' && (
          <span className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 gold-shimmer transition-opacity duration-300" />
        )}
      </Comp>
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }