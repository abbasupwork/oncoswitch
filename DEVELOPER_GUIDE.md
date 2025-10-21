# 👨‍💻 Developer Guide - OncoSwitch

Welcome to the OncoSwitch project! This guide will help you get started and understand the codebase structure.

## 🚀 Getting Started

### First Time Setup

1. **Clone and Install**
   ```bash
   git clone <repository-url>
   cd oncoswitch
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:3000`

3. **Verify Everything Works**
   - Check that all pages load correctly
   - Test language switching (EN/RU)
   - Verify responsive design on different screen sizes

## 🏗️ Architecture Overview

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion (minimal usage)
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

### Key Design Decisions

1. **App Router**: Using Next.js 15 App Router for better performance
2. **TypeScript**: Full type safety throughout the project
3. **Component Library**: Custom UI components built on top of Tailwind
4. **Internationalization**: Custom i18n solution for EN/RU support
5. **Performance**: Optimized for Core Web Vitals

## 📁 File Structure Deep Dive

### `/src/app/` - Pages
```
app/
├── layout.tsx          # Root layout with metadata
├── page.tsx           # Homepage with all sections
├── globals.css        # Global styles and CSS variables
├── about/page.tsx     # About us page
├── contact/page.tsx   # Contact page with form
├── demo/page.tsx      # Demo page (standalone)
├── privacy/page.tsx   # Privacy policy
└── roadmap/page.tsx   # Product roadmap
```

### `/src/components/` - Components
```
components/
├── ui/                    # Reusable UI components
│   ├── Button.tsx        # Button with variants
│   ├── Card.tsx          # Card component
│   ├── Input.tsx         # Input component
│   └── Badge.tsx         # Badge component
├── Footer.tsx            # Site footer
├── Navigation.tsx        # Main navigation
├── LanguageSwitcher.tsx  # Language toggle
├── OncoSwitchLogo.tsx    # Animated logo
└── OncoSwitchActivityPredictor.tsx # Demo component
```

### `/src/lib/` - Utilities
```
lib/
├── i18n.ts    # Internationalization logic
└── utils.ts   # Helper functions (cn, debounce, etc.)
```

## 🎨 Styling Guidelines

### CSS Variables
All colors are defined in `globals.css`:
```css
:root {
  --primary-500: #3b82f6;    /* Main brand blue */
  --secondary-500: #14b8a6;  /* Scientific teal */
  --accent-500: #a855f7;     /* Technology purple */
  /* ... more colors */
}
```

### Tailwind Configuration
Colors are extended in `tailwind.config.js`:
```javascript
colors: {
  primary: { /* 50-900 shades */ },
  secondary: { /* 50-900 shades */ },
  accent: { /* 50-900 shades */ },
  // ...
}
```

### Component Styling
- Use Tailwind utility classes
- Follow the design system colors
- Maintain consistent spacing (4, 8, 16, 24, 32px)
- Use semantic color names (primary, secondary, accent)

## 🌍 Internationalization

### Adding New Translations

1. **Update the interface** in `src/lib/i18n.ts`:
   ```typescript
   export interface Translations {
     // Add new section
     newSection: {
       title: string
       description: string
     }
   }
   ```

2. **Add translations** to both language objects:
   ```typescript
   translations: {
     ru: {
       newSection: {
         title: 'Новый раздел',
         description: 'Описание нового раздела'
       }
     },
     en: {
       newSection: {
         title: 'New Section',
         description: 'Description of new section'
       }
     }
   }
   ```

3. **Use in components**:
   ```typescript
   const language = getCurrentLanguage()
   const text = language === 'ru' ? 'Русский текст' : 'English text'
   ```

### Language Switching
The `LanguageSwitcher` component handles language changes and persists the choice in localStorage.

## 🧩 Component Development

### Creating New Components

1. **Create the component file**:
   ```typescript
   // src/components/NewComponent.tsx
   'use client'
   
   import { cn } from '@/lib/utils'
   
   interface NewComponentProps {
     className?: string
     children?: React.ReactNode
   }
   
   export function NewComponent({ className, children }: NewComponentProps) {
     return (
       <div className={cn('base-styles', className)}>
         {children}
       </div>
     )
   }
   ```

2. **Follow naming conventions**:
   - Use PascalCase for component names
   - Use kebab-case for file names
   - Export as named export

3. **Add TypeScript types**:
   - Define props interface
   - Use proper HTML element types
   - Add JSDoc comments for complex props

### UI Component Guidelines

- **Consistent API**: All UI components should accept `className` prop
- **Variants**: Use variant system for different styles
- **Accessibility**: Include proper ARIA attributes
- **Responsive**: Design mobile-first

## 📱 Responsive Design

### Breakpoints
- **sm**: 640px (mobile landscape)
- **md**: 768px (tablet)
- **lg**: 1024px (desktop)
- **xl**: 1280px (large desktop)

### Mobile-First Approach
```typescript
// Start with mobile styles, then add larger breakpoints
<div className="
  flex flex-col          // Mobile: vertical stack
  md:flex-row           // Tablet+: horizontal layout
  lg:gap-8              // Desktop+: larger gap
">
```

## ⚡ Performance Optimization

### Image Optimization
```typescript
import Image from 'next/image'

<Image
  src="/image.jpg"
  alt="Description"
  width={800}
  height={600}
  priority={isAboveFold} // For above-the-fold images
/>
```

### Code Splitting
- Pages are automatically code-split by Next.js App Router
- Use dynamic imports for heavy components:
  ```typescript
  const HeavyComponent = dynamic(() => import('./HeavyComponent'))
  ```

### Bundle Analysis
```bash
npm run build
npm run analyze  # If you add bundle analyzer
```

## 🧪 Testing Strategy

### Manual Testing Checklist
- [ ] All pages load without errors
- [ ] Language switching works
- [ ] Responsive design on all breakpoints
- [ ] Forms submit correctly
- [ ] Links navigate properly
- [ ] Images load and are optimized
- [ ] Performance is good (Lighthouse score > 90)

### Type Checking
```bash
npm run type-check
```

### Linting
```bash
npm run lint
```

## 🚀 Deployment

### Vercel (Recommended)
1. Connect GitHub repository to Vercel
2. Set environment variables if needed
3. Deploy automatically on push to main

### Manual Build
```bash
npm run build
npm run start
```

### Environment Variables
Create `.env.local` for local development:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## 🐛 Common Issues & Solutions

### Build Errors
1. **TypeScript errors**: Run `npm run type-check`
2. **ESLint errors**: Run `npm run lint`
3. **Import errors**: Check file paths and exports

### Styling Issues
1. **Colors not working**: Check `tailwind.config.js` and `globals.css`
2. **Responsive issues**: Verify breakpoint usage
3. **Animation issues**: Check Framer Motion imports

### Performance Issues
1. **Slow builds**: Use `npm run dev` with Turbopack
2. **Large bundle**: Analyze with bundle analyzer
3. **Slow page loads**: Check image optimization

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Framer Motion Documentation](https://www.framer.com/motion/)

## 🤝 Contributing

1. **Create a branch**: `git checkout -b feature/your-feature`
2. **Make changes**: Follow the coding guidelines
3. **Test thoroughly**: Run all checks
4. **Commit**: Use conventional commit messages
5. **Push**: `git push origin feature/your-feature`
6. **Create PR**: Add description and screenshots

## 📞 Getting Help

- **Documentation**: Check this guide and README
- **Issues**: Create GitHub issue with detailed description
- **Email**: contact@oncoswitch.ai

---

**Happy coding! 🚀**
