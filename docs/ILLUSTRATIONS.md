# AARAMBH 3.0 Illustrations Guide

## Overview

All photographic images have been replaced with lightweight, brand-colored SVG illustrations that are theme-aware and accessible. The illustrations use the AARAMBH color palette and automatically adapt to light/dark themes.

## Brand Colors

```css
/* Light Mode */
--ill-primary: #87b943    /* Apple Green */
--ill-secondary: #5ea543  /* Asparagus */
--ill-accent: #adce36     /* Yellow Green */
--ill-muted: #178e46      /* Sea Green */

/* Dark Mode */
--ill-primary: #9fc866    /* Lighter Apple Green */
--ill-secondary: #b7d68c  /* Lighter Asparagus */
--ill-accent: #bed85e     /* Lighter Yellow Green */
--ill-muted: #4ce288      /* Lighter Sea Green */
```

## Available Illustrations

### 1. HackathonIllustration
**Use for:** Coding events, hackathons, programming competitions
**Features:** Laptop with code lines, coffee cup, brain/idea symbol
**File:** `src/assets/illustrations/HackathonIllustration.tsx`

### 2. DesignIllustration
**Use for:** Design competitions, UI/UX events, creative workshops
**Features:** Pencil, ruler, canvas with design elements, color palette
**File:** `src/assets/illustrations/DesignIllustration.tsx`

### 3. RobotIllustration
**Use for:** Robotics competitions, hardware events, automation
**Features:** Robot character with antenna, control panel, lightning bolt
**File:** `src/assets/illustrations/RobotIllustration.tsx`

### 4. MusicIllustration
**Use for:** Music shows, entertainment events, concerts
**Features:** Musical notes, microphone, sound waves, speakers
**File:** `src/assets/illustrations/MusicIllustration.tsx`

### 5. MentalistIllustration
**Use for:** Mentalism shows, mind-reading performances, mystery events
**Features:** Head silhouette, brain waves, hypnotic spiral, question marks
**File:** `src/assets/illustrations/MentalistIllustration.tsx`

### 6. AutoExpoIllustration
**Use for:** Auto exhibitions, vehicle showcases, innovation displays
**Features:** Car body, wheels, gears, electric symbol
**File:** `src/assets/illustrations/AutoExpoIllustration.tsx`

### 7. HardwareIllustration
**Use for:** Hardware workshops, electronics sessions, circuit design
**Features:** Circuit board, microchip, resistors, LEDs, breadboard
**File:** `src/assets/illustrations/HardwareIllustration.tsx`

### 8. Web3Illustration
**Use for:** Blockchain workshops, cryptocurrency talks, Web3 sessions
**Features:** Blockchain blocks, network nodes, Ethereum symbol
**File:** `src/assets/illustrations/Web3Illustration.tsx`

## Usage

### Basic Usage

```tsx
import { HackathonIllustration } from '../assets/illustrations';

// In your component
<HackathonIllustration 
  className="h-40 w-auto text-[var(--ill-primary)]"
  aria-hidden={true}
/>
```

### With Custom Colors

```tsx
// Use different color variables
<DesignIllustration 
  className="h-32 w-auto text-[var(--ill-accent)]"
/>

// Or use Tailwind classes
<RobotIllustration 
  className="h-36 w-auto text-appleGreen-400 dark:text-appleGreen-300"
/>
```

### Using All Illustrations

```tsx
import {
  HackathonIllustration,
  DesignIllustration,
  RobotIllustration,
  MusicIllustration,
  MentalistIllustration,
  AutoExpoIllustration,
  HardwareIllustration,
  Web3Illustration,
} from '../assets/illustrations';
```

## Styling Guidelines

### 1. Color Application

All illustrations use `currentColor` for fills and strokes, allowing them to inherit color from their parent:

```tsx
// The illustration will use the text color
<div className="text-[var(--ill-primary)]">
  <HackathonIllustration className="h-40 w-auto" />
</div>
```

### 2. Sizing

Recommended sizes:
- **Hero sections:** `h-48` to `h-64` (192px - 256px)
- **Cards:** `h-32` to `h-40` (128px - 160px)
- **Small icons:** `h-16` to `h-24` (64px - 96px)

Always use `w-auto` to maintain aspect ratio.

### 3. Theme Awareness

Illustrations automatically adapt to theme changes via CSS variables:

```css
/* No additional work needed - handled by CSS variables */
:root { --ill-primary: #87b943; }
.dark { --ill-primary: #9fc866; }
```

### 4. Animations

Add hover effects:

```tsx
<IllustrationComponent 
  className="h-40 w-auto text-[var(--ill-primary)] 
             transition-transform duration-500 
             group-hover:scale-110" 
/>
```

### 5. Background Styling

Create subtle backgrounds with gradients:

```tsx
<div className="bg-gradient-to-br from-[var(--ill-primary)]/10 to-[var(--ill-secondary)]/5 
                flex items-center justify-center p-8 rounded-xl">
  <HackathonIllustration className="h-40 w-auto text-[var(--ill-primary)]" />
</div>
```

## Accessibility

All illustrations follow accessibility best practices:

1. **Decorative illustrations** use `aria-hidden="true"`:
   ```tsx
   <MusicIllustration aria-hidden={true} />
   ```

2. **Informative illustrations** omit `aria-hidden` and have descriptive context nearby

3. **Motion respect:** No animations in illustrations to avoid conflicts with `prefers-reduced-motion`

## Performance

### Optimization Features

1. **Inline SVGs:** All illustrations are inline React components (no HTTP requests)
2. **Small file sizes:** Optimized paths, no unnecessary metadata
3. **CSS variables:** Colors defined once, reused everywhere
4. **Tree-shaking:** Only imported illustrations are bundled

### File Sizes

All illustration components are < 5KB each (uncompressed)

## Migration Summary

### Replaced Images

| Event | Old Image | New Illustration |
|-------|-----------|------------------|
| Prayatna Hackathon | pexels-photo-1181671.jpeg | HackathonIllustration |
| Kalpana Designathon | pexels-photo-3184292.jpeg | DesignIllustration |
| Renam Robo War | pexels-photo-8566473.jpeg | RobotIllustration |
| Thillana Music Show | pexels-photo-1763075.jpeg | MusicIllustration |
| Rahasya Mentalist | anandhu-mentalist-bio.png | MentalistIllustration |
| Chakravyuham Auto Expo | pexels-photo-190574.jpeg | AutoExpoIllustration |
| Hardware Workshop | pexels-photo-8386440.jpeg | HardwareIllustration |
| Web3 Workshop | pexels-photo-7567443.jpeg | Web3Illustration |

### Benefits

✅ **Lightweight:** ~40KB total vs. ~600KB+ of images  
✅ **Theme-aware:** Automatic light/dark mode adaptation  
✅ **Scalable:** Perfect at any resolution  
✅ **Consistent:** Unified brand aesthetic  
✅ **Accessible:** Proper ARIA attributes  
✅ **Fast:** No external HTTP requests  

## Extending

### Adding New Illustrations

1. Create a new file in `src/assets/illustrations/`:

```tsx
// NewIllustration.tsx
interface IllustrationProps {
  className?: string;
  'aria-hidden'?: boolean;
}

export const NewIllustration = ({ 
  className = '', 
  'aria-hidden': ariaHidden = true 
}: IllustrationProps) => (
  <svg
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden={ariaHidden}
  >
    {/* Your SVG paths using currentColor */}
  </svg>
);
```

2. Export in `src/assets/illustrations/index.ts`:

```tsx
export { NewIllustration } from './NewIllustration';
```

3. Use in components:

```tsx
import { NewIllustration } from '../assets/illustrations';
```

## Best Practices

1. **Always use `currentColor`** for fills and strokes to enable color inheritance
2. **Keep viewBox consistent** (0 0 200 200) for uniform sizing
3. **Use opacity variations** (0.1 to 0.6) for depth and layering
4. **Optimize paths** - remove unnecessary points and attributes
5. **Test in both themes** before deploying
6. **Provide fallback colors** if CSS variables aren't supported

## Support

For questions or issues with illustrations:
- Check this guide first
- Review existing illustration components for patterns
- Ensure CSS variables are defined in `src/index.css`
- Verify theme context is properly set up

---

*Last updated: October 30, 2025*  
*AARAMBH 3.0 - IEDC CEK*
