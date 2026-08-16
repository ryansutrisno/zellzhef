---
name: Precision Tech Core
colors:
  surface: '#faf8ff'
  surface-dim: '#d9d9e4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3fd'
  surface-container: '#ededf8'
  surface-container-high: '#e7e7f2'
  surface-container-highest: '#e1e2ec'
  on-surface: '#191b23'
  on-surface-variant: '#424654'
  inverse-surface: '#2e3038'
  inverse-on-surface: '#f0f0fb'
  outline: '#737785'
  outline-variant: '#c3c6d6'
  surface-tint: '#0856cf'
  primary: '#0041a2'
  on-primary: '#ffffff'
  primary-container: '#0b57d0'
  on-primary-container: '#ced9ff'
  inverse-primary: '#b2c5ff'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e2dfde'
  on-secondary-container: '#636262'
  tertiary: '#802b00'
  on-tertiary: '#ffffff'
  tertiary-container: '#a83b00'
  on-tertiary-container: '#ffcfbe'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2ff'
  primary-fixed-dim: '#b2c5ff'
  on-primary-fixed: '#001847'
  on-primary-fixed-variant: '#0040a1'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1b1b1c'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#ffdbce'
  tertiary-fixed-dim: '#ffb599'
  on-tertiary-fixed: '#370e00'
  on-tertiary-fixed-variant: '#7f2b00'
  background: '#faf8ff'
  on-background: '#191b23'
  surface-variant: '#e1e2ec'
  success-mint: '#C4EED0'
  surface-warm: '#F2EFE9'
  electric-blue: '#2073F7'
  circuit-gray: '#E0E2E6'
typography:
  headline-xl:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
  max-width: 1280px
---

## Brand & Style
The brand personality is rooted in technical expertise, transparency, and high-performance reliability. It targets tech-savvy consumers and professionals who value precision and "right-to-repair" ethics. The UI should evoke a sense of safety—reassuring the user that their expensive hardware is in capable hands.

The chosen aesthetic is **Corporate / Modern** with a **Minimalist** edge. It utilizes high-quality whitespace to suggest the "clean room" environment of professional repair. The style avoids excessive decoration in favor of a systematic, efficient presentation that prioritizes fast load times on Astro JS. Visual cues are taken from industrial hardware packaging: clear labeling, structured grids, and a focus on specification-driven data.

## Colors
This design system uses a palette that balances deep "logic" blues with neutral grays to establish trust. 

- **Primary:** A deep, authoritative blue used for action-oriented elements and branding.
- **Secondary:** A near-black for high-contrast typography and deep structural elements.
- **Surface Warm:** Used sparingly for backgrounds to prevent the UI from feeling sterile, providing a subtle "high-end" paper-like quality.
- **Success Mint:** Reserved for status indicators (e.g., "Repair Complete," "In Stock") to provide a calm, positive reinforcement.

The default mode is `light`, providing the highest legibility for information-dense hardware listings and repair guides.

## Typography
The typography strategy employs a three-tier system to emphasize technical proficiency:
1. **Hanken Grotesk (Headlines):** A sharp, contemporary sans-serif that feels engineered and modern.
2. **Inter (Body):** Chosen for its exceptional legibility and systematic feel, ideal for long descriptions of hardware specs.
3. **JetBrains Mono (Technical Labels):** Used for serial numbers, SKU codes, and technical metrics (e.g., "256GB NVMe M.2"). This reinforces the "tech-first" brand identity seen in hardware packaging.

On mobile devices, scale headlines down significantly to maintain vertical rhythm and avoid awkward line breaks in technical product titles.

## Layout & Spacing
The layout follows a **Fixed Grid** model on desktop to maintain a controlled, professional presentation, transitioning to a fluid model on mobile. 

- **Desktop (1024px+):** 12-column grid with a 1280px max-width. Large 40px margins create a "premium" sense of space.
- **Tablet (768px - 1023px):** 8-column grid with 24px margins. Content cards stack logically to preserve technical data visibility.
- **Mobile (Up to 767px):** 4-column grid with 16px margins. 

The spacing rhythm is based on a **4px base unit**. Gutters are generous (24px) to ensure that dense technical specifications do not feel cluttered.

## Elevation & Depth
Depth is conveyed through **Tonal Layers** and **Low-Contrast Outlines** rather than heavy shadows. This keeps the interface feeling "flat" and fast, consistent with the performance goals of an Astro JS site.

- **Level 0 (Background):** White or `#F2EFE9` for the main canvas.
- **Level 1 (Cards/Containers):** Subtle `#E0E2E6` 1px borders. No shadow.
- **Level 2 (Interactive):** Elements that require focus (like an active repair ticket card) use a soft, 8% opacity primary-colored shadow with a large blur (16px) to suggest a gentle lift without visual "noise."
- **Level 3 (Modals):** A simple 10% black scrim with a sharp card container.

## Shapes
Shapes in the design system are **Soft (0.25rem)**. This slight rounding takes the edge off the "industrial" feel, making the brand more approachable for the average consumer while maintaining a professional, structured appearance.

- **Buttons:** 4px radius.
- **Input Fields:** 4px radius.
- **Large Cards/Images:** 8px (rounded-lg) to provide a clear container hierarchy.
- **Icon Enclosures:** 4px radius.

## Components

### Buttons
- **Primary:** Solid `#0B57D0` with white text. High contrast, sharp 4px corners.
- **Secondary:** Transparent background with a 1px `#1F1F1F` border. 
- **Ghost:** No border, primary color text. Used for less critical actions like "View Specs."

### Cards
Cards are the primary container for hardware products and repair services. Use a 1px `#E0E2E6` border. Titles should be Hanken Grotesk, while technical specs beneath the title should use JetBrains Mono in a smaller size to look like "meta-data."

### Input Fields
Strict, rectangular fields with 1px borders. Active states should use a 2px `#0B57D0` bottom border or a subtle inset shadow to indicate focus without shifting the layout.

### Chips & Badges
Small, rectangular badges with `label-caps` typography. Use `#C4EED0` for "In Stock" and `#F2EFE9` for "Out of Stock" or "Pending."

### Service Lists
Repair steps or service lists should use monospaced numbers (JetBrains Mono) to imply a systematic, step-by-step technical process.