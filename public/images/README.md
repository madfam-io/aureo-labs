# Public Images Directory

This directory contains images and assets for the Aureo Labs website.

## Required Assets

### Logo Files
- `logo.svg` - ✅ SVG logo (created)
- `logo.png` - PNG logo for OpenGraph (1200x630 recommended)

### OpenGraph Images (1200x630px)
All OG images should be 1200x630px for optimal social media sharing.

- `og/default.jpg` - Default OG image for homepage
- `og/penny.jpg` - PENNY product OG image
- `og/forge-sight.jpg` - Forge Sight product OG image
- `og/cotiza.jpg` - Cotiza Studio product OG image
- `og/dhanam.jpg` - Dhanam product OG image
- `og/avala.jpg` - AVALA product OG image
- `og/factlas.jpg` - Factlas product OG image

### Product Images
Product-specific images should be placed in the `products/` subdirectory.

## Creating Assets

### Logo PNG
Convert the SVG logo to PNG:
```bash
# Using ImageMagick (if installed)
convert -background none -density 300 logo.svg -resize 512x512 logo.png

# Or use an online tool like:
# - https://cloudconvert.com/svg-to-png
# - Figma/Sketch export
```

### OpenGraph Images
Use design tools (Figma, Canva, etc.) to create 1200x630px images featuring:
- Golden ratio design system
- Glassmorphism aesthetic
- Product-specific imagery
- Clear, readable text
- Brand colors (gold accents on dark background)

## Favicon
Add `favicon.ico` to the root `/public` directory.

## Guidelines
- Use AVIF/WebP formats when possible for better performance
- Optimize images before committing
- Follow the golden ratio design system
- Maintain consistent branding across all images
