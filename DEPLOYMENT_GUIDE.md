# 🚀 Deployment Guide - OncoSwitch

This guide covers all deployment options for the OncoSwitch project.

## 🌟 Quick Deploy (Recommended)

### Vercel (Easiest Option)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub
   - Click "New Project"
   - Import your repository
   - Deploy automatically

3. **Configure Domain**
   - Go to Project Settings
   - Add custom domain: `oncoswitch.ai`
   - Update DNS records as instructed

## 📋 Pre-Deployment Checklist

### ✅ Code Quality
- [ ] All TypeScript errors resolved
- [ ] ESLint warnings fixed
- [ ] All pages load without errors
- [ ] Language switching works
- [ ] Responsive design tested
- [ ] Performance optimized

### ✅ Content Review
- [ ] All text content is final
- [ ] Images are optimized
- [ ] Contact information is correct
- [ ] Email addresses use oncoswitch.ai domain
- [ ] SEO metadata is complete

### ✅ Testing
- [ ] Manual testing on all pages
- [ ] Cross-browser testing
- [ ] Mobile device testing
- [ ] Performance testing (Lighthouse)
- [ ] Accessibility testing

## 🛠️ Build Process

### Local Build Test
```bash
# Install dependencies
npm install

# Run type checking
npm run type-check

# Run linting
npm run lint

# Build for production
npm run build

# Test production build locally
npm run start
```

### Build Verification
- [ ] Build completes without errors
- [ ] All pages are accessible
- [ ] Static assets are generated
- [ ] Performance is acceptable

## 🌐 Deployment Options

### 1. Vercel (Recommended)

**Pros:**
- Zero configuration
- Automatic deployments
- Global CDN
- Built-in analytics
- Custom domains

**Steps:**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deploy
vercel --prod
```

**Configuration:**
```json
// vercel.json (optional)
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "installCommand": "npm install"
}
```

### 2. Netlify

**Steps:**
1. Connect GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `.next`
4. Deploy

**Configuration:**
```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = ".next"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### 3. AWS Amplify

**Steps:**
1. Connect GitHub repository
2. Set build settings:
   - Build command: `npm run build`
   - Output directory: `.next`
3. Deploy

### 4. Railway

**Steps:**
1. Connect GitHub repository
2. Railway auto-detects Next.js
3. Deploy automatically

### 5. DigitalOcean App Platform

**Steps:**
1. Create new app
2. Connect GitHub repository
3. Configure:
   - Build command: `npm run build`
   - Run command: `npm start`
4. Deploy

## 🔧 Environment Configuration

### Production Environment Variables

Create these in your deployment platform:

```env
# Required
NEXT_PUBLIC_SITE_URL=https://oncoswitch.ai

# Optional
NEXT_PUBLIC_GA_ID=your-google-analytics-id
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your-vercel-analytics-id
```

### Vercel Environment Variables
```bash
# Set via CLI
vercel env add NEXT_PUBLIC_SITE_URL
vercel env add NEXT_PUBLIC_GA_ID

# Or set in Vercel dashboard
# Project Settings > Environment Variables
```

## 🌍 Domain Configuration

### DNS Setup for oncoswitch.ai

**A Records:**
```
Type: A
Name: @
Value: 76.76.19.61 (Vercel IP)
TTL: 3600

Type: A
Name: www
Value: 76.76.19.61 (Vercel IP)
TTL: 3600
```

**CNAME Records:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

### SSL Certificate
- Automatically provided by Vercel
- Auto-renewal enabled
- HTTPS redirect configured

## 📊 Performance Optimization

### Build Optimization
```typescript
// next.config.ts
const nextConfig = {
  // Enable compression
  compress: true,
  
  // Optimize images
  images: {
    formats: ['image/webp', 'image/avif'],
  },
  
  // Enable experimental features
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
}
```

### CDN Configuration
- **Vercel**: Global CDN included
- **Netlify**: Global CDN included
- **AWS**: CloudFront CDN
- **Custom**: Configure your CDN provider

## 🔍 Post-Deployment Verification

### 1. Functionality Check
- [ ] All pages load correctly
- [ ] Language switching works
- [ ] Forms submit properly
- [ ] Links navigate correctly
- [ ] Images load and are optimized

### 2. Performance Check
```bash
# Run Lighthouse audit
lighthouse https://oncoswitch.ai --view

# Check Core Web Vitals
# Use PageSpeed Insights or Web Vitals extension
```

### 3. SEO Check
- [ ] Meta tags are present
- [ ] Open Graph tags work
- [ ] Sitemap is accessible
- [ ] Robots.txt is present
- [ ] Structured data is valid

### 4. Security Check
- [ ] HTTPS is enabled
- [ ] Security headers are present
- [ ] No console errors
- [ ] No mixed content warnings

## 📈 Monitoring & Analytics

### Vercel Analytics
```typescript
// Automatically enabled in production
// View in Vercel dashboard > Analytics
```

### Google Analytics (Optional)
```typescript
// Add to layout.tsx
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
  strategy="afterInteractive"
/>
```

### Error Monitoring
```typescript
// Add error boundary
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}
```

## 🔄 Continuous Deployment

### GitHub Actions (Optional)
```yaml
# .github/workflows/deploy.yml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm run type-check
      - run: npm run lint
```

### Automatic Deployments
- **Vercel**: Automatic on git push
- **Netlify**: Automatic on git push
- **AWS Amplify**: Automatic on git push
- **Railway**: Automatic on git push

## 🚨 Troubleshooting

### Common Issues

**Build Fails:**
```bash
# Check for TypeScript errors
npm run type-check

# Check for ESLint errors
npm run lint

# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

**Deployment Fails:**
- Check environment variables
- Verify build command
- Check Node.js version compatibility
- Review deployment logs

**Performance Issues:**
- Optimize images
- Enable compression
- Check bundle size
- Use CDN

**Domain Issues:**
- Verify DNS settings
- Check SSL certificate
- Wait for DNS propagation (up to 48 hours)

## 📞 Support

### Deployment Support
- **Vercel**: [Vercel Support](https://vercel.com/support)
- **Netlify**: [Netlify Support](https://www.netlify.com/support/)
- **AWS**: [AWS Support](https://aws.amazon.com/support/)

### Project Support
- **Email**: contact@oncoswitch.ai
- **Documentation**: Check README.md and DEVELOPER_GUIDE.md

## 🎯 Success Metrics

### Deployment Success Criteria
- [ ] Site loads in < 3 seconds
- [ ] Lighthouse score > 90
- [ ] All pages accessible
- [ ] Mobile responsive
- [ ] SEO optimized
- [ ] Security headers present
- [ ] Analytics working

### Post-Launch Monitoring
- Monitor Core Web Vitals
- Track user engagement
- Monitor error rates
- Check performance metrics
- Review analytics data

---

**Ready to deploy? Let's go! 🚀**
