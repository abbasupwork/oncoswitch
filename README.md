# 🧬 OncoSwitch - AI Platform for DNA Switch Design

[![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.0-38B2AC)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

> **⚠️ PROTOTYPE VERSION** - This is a functional prototype demonstrating the concept and user experience for the OncoSwitch platform. It serves as a blueprint for the actual production implementation.

## 🎯 **PROTOTYPE PURPOSE**

This project is a **FUNCTIONAL PROTOTYPE** designed to demonstrate:
- **How the platform should look and feel**
- **Which sections and features should be implemented**
- **User journey and interaction patterns**
- **Technical architecture and component structure**
- **Design system and branding guidelines**

**Next Steps:** The development team should use this as a reference to implement real backend functionality, AI models, and production features.

## 🌟 Features

- **🧬 Sequence Designer** - Intuitive drag-and-drop interface for creating DNA switches
- **🤖 AI Chat Assistant** - Context-aware conversations about switch design
- **📊 Analytics & Experiments** - Comprehensive dashboard for experiment tracking
- **🌍 Multilingual Support** - Russian and English translations
- **📱 Responsive Design** - Optimized for all devices
- **⚡ Performance Optimized** - Built with Next.js 15 and Turbopack

## 🚀 Quick Start

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-org/oncoswitch.git
   cd oncoswitch
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
oncoswitch/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/             # About page
│   │   ├── contact/           # Contact page
│   │   ├── demo/              # Demo page
│   │   ├── privacy/           # Privacy policy
│   │   ├── roadmap/           # Roadmap page
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Homepage
│   ├── components/            # Reusable components
│   │   ├── ui/               # UI components (Button, Card, etc.)
│   │   ├── Footer.tsx        # Site footer
│   │   ├── Navigation.tsx    # Main navigation
│   │   ├── OncoSwitchLogo.tsx # Logo component
│   │   └── OncoSwitchActivityPredictor.tsx # Activity predictor
│   ├── lib/                  # Utility functions
│   │   ├── i18n.ts          # Internationalization
│   │   └── utils.ts         # Helper functions
│   └── types/               # TypeScript type definitions
├── public/                  # Static assets
├── tailwind.config.js      # Tailwind CSS configuration
├── next.config.ts          # Next.js configuration
└── package.json           # Dependencies and scripts
```

## 🛠️ **TECHNICAL STACK**

### **Frontend Framework**
- **Next.js 15.5.4** - React framework with App Router
- **React 19.1.0** - UI library
- **TypeScript 5.0** - Type safety and development experience

### **Styling & UI**
- **Tailwind CSS 3.4.0** - Utility-first CSS framework
- **Framer Motion 12.23.22** - Animation library
- **Lucide React 0.545.0** - Icon library
- **Custom Design System** - Brand-specific color palette and components

### **Development Tools**
- **ESLint** - Code linting and quality
- **PostCSS** - CSS processing
- **Turbopack** - Fast development builds
- **Autoprefixer** - CSS vendor prefixing

### **Key Features**
- **Responsive Design** - Mobile-first approach
- **Internationalization** - Russian/English support
- **Component Architecture** - Reusable UI components
- **Performance Optimization** - Image optimization, code splitting
- **SEO Ready** - Metadata, Open Graph, structured data

## 🛠️ Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🎨 Design System

### Color Palette

The project uses a carefully crafted color palette based on the OncoSwitch brand:

- **Primary Blue** (`#3b82f6`) - Main brand color
- **Secondary Teal** (`#14b8a6`) - Scientific/innovation theme
- **Accent Purple** (`#a855f7`) - Advanced technology
- **Success Green** (`#22c55e`) - Health/growth
- **Warning Orange** (`#f59e0b`) - Alerts
- **Error Red** (`#ef4444`) - Critical states

### Components

All UI components are built with:
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for animations (where needed)
- **Accessibility** best practices

## 🌍 Internationalization

The project supports multiple languages:

- **English** (default)
- **Russian**

Language switching is handled by the `LanguageSwitcher` component and managed through `src/lib/i18n.ts`.

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Optional: Add your environment variables here
NEXT_PUBLIC_SITE_URL=https://oncoswitch.ai
```

### Customization

- **Colors**: Update `tailwind.config.js` and `src/app/globals.css`
- **Content**: Modify translations in `src/lib/i18n.ts`
- **Pages**: Add new pages in `src/app/`

## 📊 Performance

The project is optimized for performance:
- **Next.js 15** with App Router
- **Turbopack** for fast development
- **Image optimization** with Next.js Image component
- **Code splitting** and lazy loading
- **SEO optimization** with metadata API

## 🧪 Testing

```bash
# Run type checking
npm run type-check

# Run linting
npm run lint

# Build and test production build
npm run build
npm run start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

- **Email**: contact@oncoswitch.ai
- **Website**: https://oncoswitch.ai
- **Documentation**: [View Documentation](docs/)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons by [Lucide React](https://lucide.dev/)
- Animations by [Framer Motion](https://www.framer.com/motion/)

---

**Made with ❤️ by the OncoSwitch Team**