# 🚀 Getting Started - OncoSwitch

Welcome to the OncoSwitch project! This guide will get you up and running in minutes.

## ⚡ Quick Start (5 minutes)

### 1. Prerequisites
Make sure you have:
- **Node.js 18.17+** installed
- **Git** installed
- A code editor (VS Code recommended)

### 2. Setup
```bash
# Clone the project
git clone <repository-url>
cd oncoswitch

# Install dependencies
npm install

# Start development server
npm run dev
```

### 3. Open in Browser
Navigate to [http://localhost:3000](http://localhost:3000)

🎉 **You're ready to go!**

## 📋 What You'll See

The OncoSwitch website includes:

- **🏠 Homepage** - Main landing page with all features
- **👥 About** - Company and team information
- **📞 Contact** - Contact form and information
- **🛣️ Roadmap** - Product development timeline
- **🔒 Privacy** - Privacy policy page
- **🎮 Demo** - Interactive demonstration page

## 🛠️ Available Commands

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Check code style
npm run lint:fix     # Fix code style issues
npm run type-check   # Check TypeScript types

# Formatting
npm run format       # Format code with Prettier
npm run format:check # Check code formatting
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to change the color palette:
```javascript
colors: {
  primary: {
    500: '#3b82f6', // Change this to your brand color
  }
}
```

### Content
Update translations in `src/lib/i18n.ts`:
```typescript
translations: {
  ru: {
    hero: {
      title: 'Ваш заголовок',
    }
  }
}
```

### Pages
Add new pages in `src/app/`:
```typescript
// src/app/new-page/page.tsx
export default function NewPage() {
  return <div>Your new page</div>
}
```

## 🌍 Language Support

The project supports English and Russian:
- Toggle language with the language switcher
- All content is fully translated
- Add new languages in `src/lib/i18n.ts`

## 📱 Responsive Design

The site is fully responsive:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px

Test on different screen sizes using browser dev tools.

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

### Other Platforms
- Netlify
- AWS Amplify
- Railway
- DigitalOcean

See [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) for detailed instructions.

## 🐛 Troubleshooting

### Common Issues

**Port already in use:**
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

**Build errors:**
```bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install
npm run build
```

**TypeScript errors:**
```bash
# Check types
npm run type-check
```

### Getting Help

- Check the [DEVELOPER_GUIDE.md](DEVELOPER_GUIDE.md)
- Review [TECHNICAL_SPECS.md](TECHNICAL_SPECS.md)
- Email: contact@oncoswitch.ai

## 📚 Next Steps

1. **Explore the codebase** - Start with `src/app/page.tsx`
2. **Read the documentation** - Check all `.md` files
3. **Make your first change** - Update the hero title
4. **Deploy to production** - Follow the deployment guide

## 🎯 Project Goals

This project demonstrates:
- Modern React/Next.js development
- TypeScript best practices
- Responsive design principles
- Internationalization
- Performance optimization
- Production-ready deployment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

---

**Happy coding! 🚀**

*Need help? Check the other documentation files or contact us at contact@oncoswitch.ai*
