// Accessibility utilities and helpers

/**
 * Enhanced focus management for keyboard navigation
 */
export class FocusManager {
  private focusableSelectors = [
    'a[href]:not([disabled])',
    'button:not([disabled])',
    'textarea:not([disabled])',
    'input[type="text"]:not([disabled])',
    'input[type="radio"]:not([disabled])',
    'input[type="checkbox"]:not([disabled])',
    'select:not([disabled])',
    '[tabindex]:not([tabindex="-1"]):not([disabled])',
    '[contenteditable]',
    'audio[controls]',
    'video[controls]',
  ].join(', ')

  getFocusableElements(container: HTMLElement): HTMLElement[] {
    return Array.from(container.querySelectorAll(this.focusableSelectors))
      .filter((el) => this.isVisible(el)) as HTMLElement[]
  }

  private isVisible(el: Element): boolean {
    const style = window.getComputedStyle(el)
    return (
      style.display !== 'none' &&
      style.visibility !== 'hidden' &&
      style.opacity !== '0' &&
      (el as HTMLElement).offsetParent !== null
    )
  }

  trapFocus(container: HTMLElement): () => void {
    const focusableElements = this.getFocusableElements(container)
    const firstFocusable = focusableElements[0]
    const lastFocusable = focusableElements[focusableElements.length - 1]

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstFocusable) {
            lastFocusable?.focus()
            e.preventDefault()
          }
        } else {
          if (document.activeElement === lastFocusable) {
            firstFocusable?.focus()
            e.preventDefault()
          }
        }
      }

      if (e.key === 'Escape') {
        this.returnFocus()
      }
    }

    document.addEventListener('keydown', handleTabKey)
    firstFocusable?.focus()

    return () => {
      document.removeEventListener('keydown', handleTabKey)
    }
  }

  private previousActiveElement: HTMLElement | null = null

  saveFocus(): void {
    this.previousActiveElement = document.activeElement as HTMLElement
  }

  returnFocus(): void {
    if (this.previousActiveElement && this.isVisible(this.previousActiveElement)) {
      this.previousActiveElement.focus()
    }
  }
}

/**
 * Screen reader announcements
 */
export class ScreenReaderAnnouncer {
  private liveRegion: HTMLElement | null = null

  constructor() {
    this.createLiveRegion()
  }

  private createLiveRegion(): void {
    if (typeof window === 'undefined') return

    this.liveRegion = document.createElement('div')
    this.liveRegion.setAttribute('aria-live', 'polite')
    this.liveRegion.setAttribute('aria-atomic', 'true')
    this.liveRegion.style.position = 'absolute'
    this.liveRegion.style.left = '-10000px'
    this.liveRegion.style.width = '1px'
    this.liveRegion.style.height = '1px'
    this.liveRegion.style.overflow = 'hidden'
    document.body.appendChild(this.liveRegion)
  }

  announce(message: string, priority: 'polite' | 'assertive' = 'polite'): void {
    if (!this.liveRegion) return

    this.liveRegion.setAttribute('aria-live', priority)
    this.liveRegion.textContent = message

    // Clear after announcement
    setTimeout(() => {
      if (this.liveRegion) {
        this.liveRegion.textContent = ''
      }
    }, 1000)
  }

  announceRouteChange(routeName: string): void {
    this.announce(`Navigated to ${routeName}`, 'polite')
  }

  announceError(error: string): void {
    this.announce(`Error: ${error}`, 'assertive')
  }

  announceSuccess(message: string): void {
    this.announce(`Success: ${message}`, 'polite')
  }
}

/**
 * Keyboard navigation helpers
 */
export const KeyboardNavigation = {
  KEYS: {
    ENTER: 'Enter',
    SPACE: ' ',
    ARROW_UP: 'ArrowUp',
    ARROW_DOWN: 'ArrowDown',
    ARROW_LEFT: 'ArrowLeft',
    ARROW_RIGHT: 'ArrowRight',
    ESCAPE: 'Escape',
    TAB: 'Tab',
    HOME: 'Home',
    END: 'End',
  } as const,

  isActionKey(key: string): boolean {
    return key === this.KEYS.ENTER || key === this.KEYS.SPACE
  },

  isArrowKey(key: string): boolean {
    return [
      this.KEYS.ARROW_UP,
      this.KEYS.ARROW_DOWN,
      this.KEYS.ARROW_LEFT,
      this.KEYS.ARROW_RIGHT,
    ].includes(key as any)
  },

  handleArrowNavigation(
    event: KeyboardEvent,
    elements: HTMLElement[],
    currentIndex: number,
    options: { loop?: boolean; vertical?: boolean } = {}
  ): number {
    const { loop = true, vertical = false } = options
    let newIndex = currentIndex

    if (vertical) {
      if (event.key === this.KEYS.ARROW_UP) {
        newIndex = loop && currentIndex === 0 ? elements.length - 1 : Math.max(0, currentIndex - 1)
        event.preventDefault()
      } else if (event.key === this.KEYS.ARROW_DOWN) {
        newIndex = loop && currentIndex === elements.length - 1 ? 0 : Math.min(elements.length - 1, currentIndex + 1)
        event.preventDefault()
      }
    } else {
      if (event.key === this.KEYS.ARROW_LEFT) {
        newIndex = loop && currentIndex === 0 ? elements.length - 1 : Math.max(0, currentIndex - 1)
        event.preventDefault()
      } else if (event.key === this.KEYS.ARROW_RIGHT) {
        newIndex = loop && currentIndex === elements.length - 1 ? 0 : Math.min(elements.length - 1, currentIndex + 1)
        event.preventDefault()
      }
    }

    if (event.key === this.KEYS.HOME) {
      newIndex = 0
      event.preventDefault()
    } else if (event.key === this.KEYS.END) {
      newIndex = elements.length - 1
      event.preventDefault()
    }

    if (newIndex !== currentIndex) {
      elements[newIndex]?.focus()
    }

    return newIndex
  },
}

/**
 * Color contrast utilities
 */
export const ColorContrast = {
  // Convert hex to RGB
  hexToRgb(hex: string): { r: number; g: number; b: number } | null {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null
  },

  // Calculate relative luminance
  getLuminance(r: number, g: number, b: number): number {
    const [rs, gs, bs] = [r, g, b].map((c) => {
      c = c / 255
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
    })
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs
  },

  // Calculate contrast ratio between two colors
  getContrastRatio(color1: string, color2: string): number {
    const rgb1 = this.hexToRgb(color1)
    const rgb2 = this.hexToRgb(color2)

    if (!rgb1 || !rgb2) return 1

    const lum1 = this.getLuminance(rgb1.r, rgb1.g, rgb1.b)
    const lum2 = this.getLuminance(rgb2.r, rgb2.g, rgb2.b)

    const brightest = Math.max(lum1, lum2)
    const darkest = Math.min(lum1, lum2)

    return (brightest + 0.05) / (darkest + 0.05)
  },

  // Check if contrast meets WCAG standards
  meetsWCAG(foreground: string, background: string, level: 'AA' | 'AAA' = 'AA'): boolean {
    const ratio = this.getContrastRatio(foreground, background)
    const threshold = level === 'AAA' ? 7 : 4.5
    return ratio >= threshold
  },
}

/**
 * Motion preferences
 */
export const MotionPreferences = {
  prefersReducedMotion(): boolean {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  },

  watchMotionPreference(callback: (reducedMotion: boolean) => void): () => void {
    if (typeof window === 'undefined') return () => {}

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handler = (e: MediaQueryListEvent) => callback(e.matches)

    mediaQuery.addEventListener('change', handler)
    
    // Call initially
    callback(mediaQuery.matches)

    return () => mediaQuery.removeEventListener('change', handler)
  },

  getAnimationDuration(normalDuration: number): number {
    return this.prefersReducedMotion() ? 0 : normalDuration
  },
}

// Singleton instances
export const focusManager = new FocusManager()
export const announcer = new ScreenReaderAnnouncer()

// ARIA helpers
export const ARIA = {
  generateId(): string {
    return `aureo-${Math.random().toString(36).substr(2, 9)}`
  },

  setAriaLive(element: HTMLElement, value: 'off' | 'polite' | 'assertive'): void {
    element.setAttribute('aria-live', value)
  },

  setAriaExpanded(element: HTMLElement, expanded: boolean): void {
    element.setAttribute('aria-expanded', expanded.toString())
  },

  setAriaSelected(element: HTMLElement, selected: boolean): void {
    element.setAttribute('aria-selected', selected.toString())
  },

  setAriaChecked(element: HTMLElement, checked: boolean | 'mixed'): void {
    element.setAttribute('aria-checked', checked.toString())
  },

  setAriaHidden(element: HTMLElement, hidden: boolean): void {
    if (hidden) {
      element.setAttribute('aria-hidden', 'true')
    } else {
      element.removeAttribute('aria-hidden')
    }
  },

  associateLabel(input: HTMLElement, label: HTMLElement): void {
    const labelId = label.id || this.generateId()
    label.id = labelId
    input.setAttribute('aria-labelledby', labelId)
  },

  associateDescription(input: HTMLElement, description: HTMLElement): void {
    const descriptionId = description.id || this.generateId()
    description.id = descriptionId
    input.setAttribute('aria-describedby', descriptionId)
  },
}