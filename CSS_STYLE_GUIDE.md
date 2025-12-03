# CSS Style Guide - Website Design System

This document describes the complete CSS styling system, design tokens, and visual patterns used across the website.

**Last Updated:** Current as of latest website version.

---

## Design Philosophy

- **Minimal:** Clean, uncluttered interfaces
- **Technical:** Grounded, professional aesthetic
- **Dark Theme:** Deep black backgrounds with subtle gray accents
- **Neutral Colors:** Muted grays with minimal color accents
- **Subtle Animations:** Smooth transitions, no flashy effects

---

## Color System

### Base Colors

**Background:**
- Primary: `#0a0a0a` (var(--background))
- Secondary: `rgba(17, 24, 39, 0.5)` (gray-900/50)
- Tertiary: `rgba(17, 24, 39, 0.3)` (gray-900/30)
- Section Background: `rgba(3, 7, 18, 0.5)` (gray-950/50)

**Foreground:**
- Primary Text: `#ededed` (var(--foreground))
- Secondary Text: `#d1d5db` (gray-300)
- Tertiary Text: `#9ca3af` (gray-400)
- Muted Text: `#6b7280` (gray-500)

**Borders:**
- Default: `rgba(31, 41, 55, 1)` (gray-800)
- Hover: `rgba(55, 65, 81, 1)` (gray-700)
- Focus: `rgba(107, 114, 128, 1)` (gray-600)

**Accent Colors (Minimal Use):**
- Purple: `rgba(139, 92, 246, 0.3)` (purple-500/30) - Selection, focus rings
- Blue: `rgba(59, 130, 246, 0.2)` (blue-500/20) - Subtle highlights
- Red: `#ef4444` (red-500) - Error states, required field indicators

### Color Usage Patterns

**Text Hierarchy:**
- Headings (h1, h2): `text-white` (#ffffff)
- Body Text: `text-gray-300` (#d1d5db)
- Secondary Text: `text-gray-400` (#9ca3af)
- Labels/Meta: `text-gray-500` (#6b7280)

**Background Layers:**
- Page Background: `bg-black` or `var(--background)`
- Card Background: `bg-gray-900/30` or `bg-gray-900/50`
- Section Background: `bg-gray-950/50`

**Borders:**
- Default: `border-gray-800`
- Hover: `border-gray-700` or `border-gray-600`
- Focus: `border-gray-600`

---

## Typography

### Font Family

**System Stack:**
```css
-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif
```

**Properties:**
- `-webkit-font-smoothing: antialiased`
- `-moz-osx-font-smoothing: grayscale`
- `text-rendering: optimizeLegibility`

### Font Sizes

**Responsive Base:**
- Mobile (≤640px): `14px`
- Tablet (641px-1024px): `15px`
- Desktop (≥1025px): `16px`

**Heading Sizes:**
- H1: `text-4xl` (2.25rem / 36px) - Page titles
- H2: `text-2xl` (1.5rem / 24px) - Section titles
- H3: `text-lg` (1.125rem / 18px) - Subsection titles
- H4: `text-sm` (0.875rem / 14px) - Labels, uppercase tracking

**Body Sizes:**
- Large: `text-lg` (1.125rem / 18px) - Hero text, important content
- Base: `text-base` (1rem / 16px) - Default body text
- Small: `text-sm` (0.875rem / 14px) - Secondary information
- Extra Small: `text-xs` (0.75rem / 12px) - Meta information, badges

### Font Weights

- Bold: `font-bold` (700) - Headings
- Semibold: `font-semibold` (600) - Subheadings, emphasis
- Medium: `font-medium` (500) - Buttons, important text
- Regular: `font-normal` (400) - Body text

### Line Heights

- Tight: `leading-tight` (1.25) - Headings
- Relaxed: `leading-relaxed` (1.625) - Body paragraphs
- Default: `leading-normal` (1.5) - General text

### Letter Spacing

- Uppercase Labels: `tracking-wide` (0.025em) - Section labels, uppercase text

---

## Spacing System

### Padding

**Page Level:**
- Top Padding: `pt-24` (6rem / 96px) - Page headers
- Horizontal Padding: `px-4 sm:px-6 lg:px-8` (1rem / 1.5rem / 2rem)
- Bottom Padding: `pb-20` (5rem / 80px)

**Section Level:**
- Vertical: `py-20` (5rem / 80px) - Section spacing
- Horizontal: `px-4 sm:px-6 lg:px-8` - Responsive horizontal padding

**Component Level:**
- Cards: `p-6` (1.5rem / 24px)
- Buttons: `px-8 py-4` (2rem horizontal, 1rem vertical)
- Form Fields: `px-4 pt-6 pb-2` - Floating label inputs

### Margins

**Section Spacing:**
- Between Sections: `mb-16` (4rem / 64px) - Major sections
- Between Items: `space-y-16` (4rem / 64px) - Article lists
- Between Elements: `space-y-6` (1.5rem / 24px) - Form fields, lists

**Gaps:**
- Grid Gaps: `gap-8` (2rem / 32px) - Card grids
- Flex Gaps: `gap-4` (1rem / 16px) - Button groups, icon-text pairs
- Small Gaps: `gap-2` (0.5rem / 8px) - Tags, badges

---

## Layout System

### Container Widths

**Max Widths:**
- Narrow: `max-w-4xl` (56rem / 896px) - Content pages (Projects, Services, Pricing, Contact)
- Medium: `max-w-6xl` (72rem / 1152px) - Home page sections
- Wide: `max-w-7xl` (80rem / 1280px) - Full-width sections

**Centering:**
- `mx-auto` - Center containers

### Grid Systems

**Responsive Grids:**
- 1 Column Mobile: `grid-cols-1`
- 2 Columns Tablet: `md:grid-cols-2`
- 3 Columns Desktop: `lg:grid-cols-3`

**Common Patterns:**
- Service Cards: `grid-cols-1 lg:grid-cols-3`
- Project Cards: `grid-cols-1 md:grid-cols-2`
- Two Column Layout: `grid-cols-1 lg:grid-cols-2`

---

## Component Styles

### Buttons

**Primary Button:**
```css
px-8 py-4
bg-gray-800
rounded-lg
font-medium
text-white
hover:bg-gray-700
transition-colors
```

**Secondary Button:**
```css
px-8 py-4
border border-gray-700
rounded-lg
font-medium
text-white
hover:border-gray-600
transition-colors
```

**Button States:**
- Default: `bg-gray-800` or `border-gray-700`
- Hover: `hover:bg-gray-700` or `hover:border-gray-600`
- Disabled: `disabled:opacity-50 disabled:cursor-not-allowed`
- Active: `scale-0.98` (on tap)

**Touch Targets:**
- Minimum: `44px × 44px` (min-height: 44px, min-width: 44px)

### Cards

**Card Container:**
```css
p-6
rounded-lg
border border-gray-800
bg-gray-900/30
```

**Card Variations:**
- Default: `bg-gray-900/30`
- Elevated: `bg-gray-900/50`
- Section Background: `bg-gray-950/50`

### Form Elements

**Input Fields:**
```css
w-full
px-4 pt-6 pb-2
bg-gray-900
border border-gray-800
rounded-lg
text-white
focus:border-gray-600
focus:outline-none
transition-colors
```

**Floating Labels:**
- Unfocused: `top-4 text-sm text-gray-500`
- Focused/Filled: `top-2 text-xs text-gray-400`
- Error State: `text-red-400`

**Error States:**
- Border: `border-red-500 focus:border-red-500`
- Text: `text-red-400`
- Label: `text-red-400`

### Borders

**Border Styles:**
- Default: `border border-gray-800`
- Section Dividers: `border-b border-gray-800`
- Hover: `hover:border-gray-600` or `hover:border-gray-700`
- Focus: `focus:border-gray-600`

**Border Radius:**
- Small: `rounded` (0.25rem / 4px)
- Medium: `rounded-lg` (0.5rem / 8px)
- Large: `rounded-xl` (0.75rem / 12px)
- Full: `rounded-full` - Circles, pills

### Icons

**Icon Sizes:**
- Small: `h-4 w-4` (1rem / 16px) - Inline with text
- Medium: `h-5 w-5` (1.25rem / 20px) - Buttons, cards
- Large: `h-6 w-6` (1.5rem / 24px) - Section headers
- Extra Large: `h-8 w-8` (2rem / 32px) - Feature icons

**Icon Colors:**
- Default: `text-gray-400`
- Hover: `hover:text-white` or `hover:text-gray-300`
- Accent: `text-gray-400` (minimal color usage)

---

## Animation & Transitions

### Framer Motion Patterns

**Page Transitions:**
```javascript
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5 }}
```

**Scroll Animations:**
```javascript
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.5, delay: index * 0.1 }}
```

**Hover Effects:**
```javascript
whileHover={{ scale: 1.02 }}
whileTap={{ scale: 0.98 }}
```

**Stagger Children:**
```javascript
staggerChildren: 0.1
```

### CSS Transitions

**Standard Transitions:**
- Colors: `transition-colors` (0.2s ease)
- All: `transition-all` (0.3s ease)
- Custom: `transition-all duration-300`

**Reduced Motion:**
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Background Patterns

### Grid Pattern

**Usage:** Hero section background

```css
.grid-pattern {
  background-image: 
    linear-gradient(rgba(139, 92, 246, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(139, 92, 246, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  opacity: 0.5;
}
```

### Gradient Overlays

**Subtle Gradients:**
- Purple/Blue: `bg-gradient-to-br from-purple-500/20 to-blue-500/20`
- Blur Effect: `blur-3xl` - Soft glow effects

---

## Responsive Breakpoints

### Tailwind Breakpoints

- `sm`: 640px - Small tablets, large phones
- `md`: 768px - Tablets
- `lg`: 1024px - Small desktops
- `xl`: 1280px - Large desktops

### Custom Breakpoints (tailwind.config.ts)

- `tablet`: 641px
- `desktop`: 1025px

### Responsive Patterns

**Typography:**
- Headings: `text-4xl sm:text-5xl lg:text-6xl`
- Body: `text-lg sm:text-xl lg:text-2xl`

**Spacing:**
- Padding: `px-4 sm:px-6 lg:px-8`
- Gaps: `gap-4 sm:gap-6 lg:gap-8`

**Layout:**
- Grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Flex Direction: `flex-col sm:flex-row`

---

## Accessibility Features

### Focus States

**Focus Ring:**
```css
:focus-visible {
  outline: 2px solid rgba(139, 92, 246, 0.5);
  outline-offset: 2px;
  border-radius: 4px;
}
```

**Focus Colors:**
- Default: `focus:border-gray-600`
- Error: `focus:border-red-500`

### Touch Targets

**Minimum Size:**
- Buttons: `min-height: 44px`, `min-width: 44px`
- Touch Target Class: `.touch-target`

### Selection Colors

```css
::selection {
  background-color: rgba(139, 92, 246, 0.3);
  color: #ffffff;
}
```

### Scrollbar Styling

**Webkit:**
```css
::-webkit-scrollbar {
  width: 10px;
  background: #0a0a0a;
}
::-webkit-scrollbar-thumb {
  background: #333;
  border-radius: 5px;
}
```

**Firefox:**
```css
scrollbar-width: thin;
scrollbar-color: #333 #0a0a0a;
```

---

## Utility Classes

### Custom Utilities

**Text Balance:**
```css
.text-balance {
  text-wrap: balance;
}
```

**Touch Target:**
```css
.touch-target {
  min-height: 44px;
  min-width: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
```

**Skeleton Loading:**
```css
.skeleton {
  animation: shimmer 2s infinite linear;
  background: linear-gradient(
    to right,
    #1a1a1a 0%,
    #2a2a2a 50%,
    #1a1a1a 100%
  );
  background-size: 1000px 100%;
}
```

---

## Design Tokens Summary

### Spacing Scale
- 0.5rem (8px) - `gap-2`
- 1rem (16px) - `gap-4`, `p-4`
- 1.5rem (24px) - `p-6`, `gap-6`
- 2rem (32px) - `gap-8`, `px-8`
- 4rem (64px) - `mb-16`, `space-y-16`
- 5rem (80px) - `py-20`, `pb-20`
- 6rem (96px) - `pt-24`

### Border Radius Scale
- 0.25rem (4px) - `rounded`
- 0.5rem (8px) - `rounded-lg`
- 0.75rem (12px) - `rounded-xl`
- 9999px - `rounded-full`

### Opacity Levels
- 0.3 - `opacity-30` - Subtle backgrounds
- 0.5 - `opacity-50` - Medium overlays
- 0.7 - `opacity-70` - Strong overlays

### Z-Index Layers
- 0 - Base content
- 10 - Content above backgrounds
- 40 - Mobile menu backdrop
- 50 - Mobile menu, navigation

---

## Animation Patterns

### Page Load
- Fade in from bottom: `opacity: 0, y: 20` → `opacity: 1, y: 0`
- Duration: 0.5s
- Stagger: 0.1s between items

### Hover States
- Scale: `scale: 1.02` (hover), `scale: 0.98` (tap)
- Color transitions: `transition-colors`
- Border changes: `hover:border-gray-600`

### Scroll Animations
- Trigger: `whileInView`
- Once: `viewport={{ once: true }}`
- Delay: `delay: index * 0.1` for staggered lists

---

## Component-Specific Styles

### Navigation
- Fixed position: `fixed top-0`
- Background: `bg-black/80 backdrop-blur-md` (when scrolled)
- Height: `h-16` (4rem / 64px)
- Border: `border-b border-gray-800/50`

### Footer
- Background: `bg-black/50`
- Border: `border-t border-gray-800`
- Padding: `py-12`

### Form Elements
- Floating labels with smooth transitions
- Error states with red accents
- Disabled states with reduced opacity

### Project Cards
- Border: `border border-gray-800`
- Background: `bg-gray-900/30`
- Hover: Subtle border color change

---

## Notes for Design Review

1. **Consistency:** Verify color usage is consistent across all components
2. **Contrast:** Ensure text meets WCAG AA contrast ratios (4.5:1 for normal text)
3. **Spacing:** Check rhythm and visual hierarchy
4. **Responsiveness:** Verify all breakpoints work correctly
5. **Accessibility:** Confirm focus states, touch targets, and reduced motion support
6. **Performance:** Ensure animations don't impact performance
7. **Dark Theme:** Verify all elements are visible on dark backgrounds
8. **Minimalism:** Confirm design stays true to minimal, technical aesthetic

---

**Document Generated:** For design system review
**Framework:** Tailwind CSS + Custom CSS
**Animation Library:** Framer Motion
**Theme:** Dark, minimal, technical

