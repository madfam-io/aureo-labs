import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import HomePage from '@/app/page'

describe('HomePage', () => {
  it('renders the main heading', () => {
    render(<HomePage />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('Aureo Labs')
  })

  it('renders the tagline', () => {
    render(<HomePage />)
    const tagline = screen.getByText(/Where AI innovation meets enterprise reality/i)
    expect(tagline).toBeInTheDocument()
  })

  it('renders the CTA buttons', () => {
    render(<HomePage />)
    const exploreButton = screen.getByRole('button', { name: /Explore Products/i })
    const docsButton = screen.getByRole('button', { name: /View Documentation/i })
    
    expect(exploreButton).toBeInTheDocument()
    expect(docsButton).toBeInTheDocument()
  })

  it('renders the feature sections', () => {
    render(<HomePage />)
    const aiSection = screen.getByText(/AI-Powered Platforms/i)
    const enterpriseSection = screen.getByText(/Enterprise Ready/i)
    
    expect(aiSection).toBeInTheDocument()
    expect(enterpriseSection).toBeInTheDocument()
  })
})