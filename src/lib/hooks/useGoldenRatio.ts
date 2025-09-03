import { useMemo } from 'react'

const PHI = 1.61803398875

export interface GoldenRatioValues {
  phi: number
  spacing: {
    xs: number    // 8px
    sm: number    // 13px
    md: number    // 21px
    lg: number    // 34px
    xl: number    // 55px
    xxl: number   // 89px
  }
  typography: {
    xs: number    // 0.79rem
    sm: number    // 0.94rem
    base: number  // 1rem
    md: number    // 1.31rem
    lg: number    // 1.62rem
    xl: number    // 2.12rem
    xxl: number   // 2.74rem
    display: number // 4.45rem
  }
  aspectRatios: {
    golden: string      // '1 / 1.618'
    inverseGolden: string // '1.618 / 1'
    square: string      // '1 / 1'
  }
}

export function useGoldenRatio(): GoldenRatioValues {
  return useMemo(() => ({
    phi: PHI,
    spacing: {
      xs: 8,
      sm: Math.round(8 * PHI),      // ~13px
      md: Math.round(8 * PHI * PHI), // ~21px
      lg: Math.round(8 * Math.pow(PHI, 3)), // ~34px
      xl: Math.round(8 * Math.pow(PHI, 4)), // ~55px
      xxl: Math.round(8 * Math.pow(PHI, 5)), // ~89px
    },
    typography: {
      xs: 0.79,   // base / φ²
      sm: 0.94,   // base / φ
      base: 1.0,
      md: 1.31,   // base * φ⁰·⁵
      lg: 1.62,   // base * φ
      xl: 2.12,   // base * φ¹·³
      xxl: 2.74,  // base * φ¹·⁷
      display: 4.45, // base * φ²·⁷
    },
    aspectRatios: {
      golden: `1 / ${PHI}`,
      inverseGolden: `${PHI} / 1`,
      square: '1 / 1',
    },
  }), [])
}

export function calculateGoldenSpacing(base: number, power: number = 1): number {
  return Math.round(base * Math.pow(PHI, power))
}

export function getGoldenGridColumns(totalColumns: number): string {
  const smallerPart = Math.round(totalColumns / (1 + PHI))
  const largerPart = totalColumns - smallerPart
  return `${smallerPart}fr ${largerPart}fr`
}