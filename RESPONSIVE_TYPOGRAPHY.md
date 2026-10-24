# Responsive Typography Guide

## Overview
Your theme now features dynamic and responsive font sizing that automatically scales based on screen size using CSS `clamp()` function and custom properties.

## Key Features

### 1. **Fluid Typography with clamp()**
The new system uses CSS `clamp()` for smooth, continuous scaling:
```css
font-size: clamp(min-size, preferred-size, max-size)
```

### 2. **CSS Custom Properties**
Available in your SCSS/CSS:
- `--fs-xs` through `--fs-6xl` (font sizes)
- `--lh-tight`, `--lh-snug`, `--lh-normal`, `--lh-relaxed`, `--lh-loose` (line heights)

### 3. **Tailwind Classes**
Use Tailwind's built-in responsive classes:
```html
<h1 class="text-lg md:text-2xl lg:text-4xl xl:text-5xl">Responsive Heading</h1>
<p class="text-sm md:text-base lg:text-lg">Responsive paragraph</p>
```

**Fluid Tailwind Classes:**
```html
<h1 class="text-fluid-6xl">Smoothly scaled heading</h1>
<p class="text-fluid-lg">Smoothly scaled paragraph</p>
```

## Usage Examples

### Method 1: SCSS Mixins (Recommended for Components)
In your SCSS files:
```scss
@import 'typography.scss';

.my-heading {
  @include heading-lg;  // Large heading with proper line-height
}

.my-paragraph {
  @include text-base;   // Base paragraph size
}
```

### Method 2: CSS Custom Properties
In CSS or SCSS:
```css
.my-heading {
  font-size: var(--fs-4xl);
  line-height: var(--lh-tight);
}
```

### Method 3: Tailwind Classes
In PHP templates:
```html
<h1 class="text-fluid-5xl font-bold">Main Heading</h1>
<p class="text-fluid-base leading-relaxed">Description</p>
```

## Responsive Breakpoints

The system scales smoothly across all screen sizes:
- **Mobile (320px)**: Smaller sizes (e.g., h1 = 2.25rem)
- **Tablet (768px)**: Medium sizes (scales based on viewport)
- **Desktop (1920px+)**: Larger sizes (e.g., h1 = 4rem)

## Block Styling

The banner block now uses responsive sizing:
- **Heading**: Scales from 2.25rem to 4rem
- **Paragraph**: Scales from 0.875rem to 1.125rem
- **Subheading**: Scales from 0.875rem to 1.125rem

## Customization

To adjust the fluid typography scale, edit `/src/scss/typography.scss`:
```scss
--fs-4xl: clamp(2.25rem, 6vw, 3.75rem);
       // ↑ min    ↑ preferred  ↑ max
```

Or adjust Tailwind sizes in `tailwind.config.js`:
```javascript
'fluid-4xl': 'clamp(2.25rem, 6vw, 3.75rem)',
```

## Migration Guide

Replace hardcoded font-size values:

**Before:**
```css
h1 { font-size: 64px; }
p { font-size: 16px; }
```

**After:**
```scss
h1 { @include heading-xl; }
p { @include text-base; }
```

Or use Tailwind:
```html
<h1 class="text-fluid-5xl">Title</h1>
<p class="text-fluid-base">Content</p>
```

## Best Practices

1. **Use mixins for components** - More maintainable and consistent
2. **Use Tailwind classes for templates** - Better for one-off styling
3. **Use CSS variables** - For dynamic themes or customization
4. **Test on multiple devices** - Ensure sizing is appropriate across breakpoints
5. **Don't mix methods** - Pick one approach per component for consistency

## Browser Support

- ✅ All modern browsers (Chrome, Firefox, Safari, Edge)
- ✅ iOS Safari 13+
- ✅ Android Chrome 79+
- ✅ IE 11: Basic support (falls back to max value)
