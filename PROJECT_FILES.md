# 📁 Project Files - OncoSwitch

This document lists all important files in the OncoSwitch project.

## 📋 Core Project Files

### Configuration Files
```
├── package.json              # Dependencies and scripts
├── package-lock.json         # Dependency lock file
├── tsconfig.json            # TypeScript configuration
├── next.config.ts           # Next.js configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
├── next-env.d.ts            # Next.js TypeScript declarations
├── .gitignore               # Git ignore rules
└── env.example              # Environment variables template
```

### Documentation Files
```
├── README.md                # Main project documentation
├── GETTING_STARTED.md       # Quick start guide (5 minutes)
├── DEVELOPER_GUIDE.md       # Comprehensive developer guide
├── TECHNICAL_SPECS.md       # Technical specifications
├── DEPLOYMENT_GUIDE.md      # Deployment instructions
├── PROJECT_INFO.md          # Project information and metrics
├── PROJECT_FILES.md         # This file
└── LICENSE                  # MIT License
```

## 🏗️ Source Code Structure

### App Router Pages (`src/app/`)
```
├── layout.tsx               # Root layout with metadata
├── page.tsx                 # Homepage (main landing page)
├── globals.css              # Global styles and CSS variables
├── about/
│   └── page.tsx            # About us page
├── contact/
│   └── page.tsx            # Contact page with form
├── demo/
│   └── page.tsx            # Demo page (standalone)
├── privacy/
│   └── page.tsx            # Privacy policy page
└── roadmap/
    └── page.tsx            # Product roadmap page
```

### Components (`src/components/`)
```
├── ui/                     # Reusable UI components
│   ├── Badge.tsx          # Badge component
│   ├── Button.tsx         # Button component with variants
│   ├── Card.tsx           # Card component
│   └── Input.tsx          # Input component
├── Footer.tsx             # Site footer component
├── LanguageSwitcher.tsx   # Language toggle component
├── Navigation.tsx         # Main navigation component
├── OncoSwitchActivityPredictor.tsx # Activity predictor demo
└── OncoSwitchLogo.tsx     # Animated logo component
```

### Utilities (`src/lib/`)
```
├── i18n.ts                # Internationalization logic
└── utils.ts               # Helper functions (cn, debounce, etc.)
```

### Types (`src/types/`)
```
└── index.ts               # TypeScript type definitions
```

## 🎨 Styling & Assets

### CSS Files
```
├── src/app/globals.css    # Global styles and CSS variables
└── tailwind.config.js     # Tailwind configuration with custom colors
```

### Static Assets (public/)
```
├── favicon.ico            # Site favicon
└── [other static assets]  # Images, icons, etc.
```

## 📊 Build Output

### Next.js Build Files (`.next/`)
```
├── static/                # Static assets
├── server/                # Server-side code
├── types/                 # Generated TypeScript types
└── [build manifests]      # Build configuration files
```

## 🧪 Development Files

### Legacy Documentation (Historical)
```
├── CONVERSION_OPTIMIZATION.md
├── CTA_AND_LANGUAGE_UPDATE_REPORT.md
├── CUSTOMER_JOURNEY.md
├── DESIGN_FIXES_REPORT.md
├── DESIGN_SYSTEM.md
├── INTERNATIONALIZATION_REPORT.md
├── LAUNCH_SUCCESS_REPORT.md
├── OPTIMIZATION_REPORT.md
├── RESPONSIVE_CHECKLIST.md
├── STYLES_FIX_REPORT.md
└── UX_MARKETING_REPORT.md
```

## 📦 Package Information

### Dependencies
```json
{
  "dependencies": {
    "clsx": "^2.1.1",
    "framer-motion": "^12.23.22",
    "lucide-react": "^0.545.0",
    "next": "15.5.4",
    "react": "19.1.0",
    "react-dom": "19.1.0"
  }
}
```

### Dev Dependencies
```json
{
  "devDependencies": {
    "@eslint/eslintrc": "^3",
    "@tailwindcss/forms": "^0.5.9",
    "@tailwindcss/typography": "^0.5.15",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "autoprefixer": "^10.4.0",
    "eslint": "^9",
    "eslint-config-next": "15.5.4",
    "postcss": "^8.4.0",
    "tailwindcss": "^3.4.0",
    "typescript": "^5"
  }
}
```

## 🚀 Scripts Available

```json
{
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build --turbopack",
    "start": "next start",
    "lint": "eslint . --ext .ts,.tsx,.js,.jsx",
    "lint:fix": "eslint . --ext .ts,.tsx,.js,.jsx --fix",
    "type-check": "tsc --noEmit",
    "format": "prettier --write .",
    "format:check": "prettier --check ."
  }
}
```

## 📁 File Count Summary

### Source Files
- **Pages**: 6 pages (homepage, about, contact, demo, privacy, roadmap)
- **Components**: 9 components (4 UI + 5 custom)
- **Utilities**: 2 utility files
- **Types**: 1 type definition file
- **Styles**: 1 global CSS file

### Configuration Files
- **Package**: 2 files (package.json, package-lock.json)
- **TypeScript**: 2 files (tsconfig.json, next-env.d.ts)
- **Next.js**: 1 file (next.config.ts)
- **Tailwind**: 1 file (tailwind.config.js)
- **PostCSS**: 1 file (postcss.config.js)

### Documentation Files
- **Main Docs**: 7 comprehensive guides
- **Legacy Docs**: 11 historical reports
- **License**: 1 MIT license file

### Total Project Files
- **Source Code**: ~20 files
- **Configuration**: ~8 files
- **Documentation**: ~19 files
- **Build Output**: ~200+ generated files

## 🎯 Key Files to Know

### For Developers
1. **`README.md`** - Start here for project overview
2. **`GETTING_STARTED.md`** - 5-minute setup guide
3. **`DEVELOPER_GUIDE.md`** - Comprehensive development guide
4. **`src/app/page.tsx`** - Main homepage component
5. **`src/lib/i18n.ts`** - Internationalization logic

### For Deployment
1. **`DEPLOYMENT_GUIDE.md`** - Deployment instructions
2. **`package.json`** - Dependencies and scripts
3. **`next.config.ts`** - Next.js configuration
4. **`env.example`** - Environment variables template

### For Styling
1. **`tailwind.config.js`** - Tailwind configuration
2. **`src/app/globals.css`** - Global styles
3. **`src/components/ui/`** - UI component library

## 🔍 File Organization Principles

### Naming Conventions
- **Components**: PascalCase (e.g., `OncoSwitchLogo.tsx`)
- **Pages**: lowercase with hyphens (e.g., `page.tsx`)
- **Utilities**: camelCase (e.g., `utils.ts`)
- **Types**: camelCase (e.g., `index.ts`)

### Directory Structure
- **`src/app/`** - Next.js App Router pages
- **`src/components/`** - Reusable React components
- **`src/lib/`** - Utility functions and configuration
- **`src/types/`** - TypeScript type definitions
- **`public/`** - Static assets

### Import Organization
```typescript
// 1. React imports
import { useState, useEffect } from 'react'

// 2. Next.js imports
import Link from 'next/link'

// 3. Third-party imports
import { motion } from 'framer-motion'

// 4. Internal imports
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'
```

---

**Total Project Size**: ~50 source files + documentation  
**Build Output**: ~200+ generated files  
**Documentation**: 19 comprehensive guides  
**Status**: ✅ Production Ready
