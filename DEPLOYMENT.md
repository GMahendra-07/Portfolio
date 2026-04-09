# Deployment Guide

Complete guide to deploy your portfolio to production.

## 🚀 Deployment Platforms

### 1. Vercel (Recommended - Easiest)

**Benefits:**
- Free tier included
- Automatic deployments from GitHub
- Built-in analytics
- Serverless functions support

**Steps:**

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit: Portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/mahendra-portfolio.git
git push -u origin main
```

2. **Deploy to Vercel**
- Go to https://vercel.com/dashboard
- Click "New Project"
- Import your GitHub repository
- Configure:
  - Framework Preset: Vite
  - Build Command: `npm run build`
  - Output Directory: `dist`
- Click "Deploy"

3. **Set Environment Variables**
- In Vercel Dashboard → Settings → Environment Variables
- Add your `.env` variables

**Domain Setup:**
- Custom domain in Settings → Domains
- Update DNS records as instructed

---

### 2. Netlify

**Benefits:**
- Free SSL certificate
- Drag-and-drop deployment
- Multiple deployment options
- Form handling support

**Steps:**

1. **Option A: Connect GitHub**
- Go to https://app.netlify.com
- Click "New site from Git"
- Select GitHub and authorize
- Choose your repository
- Configure:
  - Build command: `npm run build`
  - Publish directory: `dist`
- Click "Deploy site"

2. **Option B: Manual Deploy**
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

3. **Add Environment Variables**
- Site settings → Build & deploy → Environment
- Add your variables from `.env`

---

### 3. GitHub Pages

**Benefits:**
- Free hosting
- Integrated with GitHub
- CDN included

**Steps:**

1. **Update Vite Config**
```javascript
// vite.config.js
export default defineConfig({
  base: '/mahendra-portfolio/', // Your repo name
  // ... rest of config
})
```

2. **Update Package.json**
```json
{
  "scripts": {
    "build": "vite build && echo 'mahendra.dev' > dist/CNAME"
  }
}
```

3. **Deploy**
```bash
npm run build
git add dist
git commit -m "Deploy to GitHub Pages"
git push origin main
```

4. **Enable GitHub Pages**
- Go to repository Settings
- Scroll to "GitHub Pages"
- Source: Deploy from a branch
- Branch: main, folder: /dist

---

### 4. AWS Amplify

**Benefits:**
- Powerful deployment options
- CI/CD pipeline
- Multiple backends
- Scalability

**Steps:**

1. **Install AWS Amplify CLI**
```bash
npm install -g @aws-amplify/cli
amplify configure
```

2. **Initialize Amplify**
```bash
amplify init
```

3. **Add Hosting**
```bash
amplify add hosting
amplify publish
```

---

### 5. Traditional Hosting (Hostinger, GoDaddy, etc.)

1. **Build the project**
```bash
npm run build
```

2. **Upload `dist` folder**
- Use FTP/SFTP client
- Upload contents of `dist/` to `public_html/`

3. **Configure Domain**
- Update DNS records to point to your hosting IP
- Wait for DNS propagation (24-48 hours)

---

## 🌐 Domain Setup

### Getting a Domain
- **Namecheap** — $1.00/year (first-time)
- **GoDaddy** — Popular but pricey
- **Google Domains** — $12/year
- **Hostinger** — Bundle deals

### DNS Configuration

**For Vercel:**
```
A Record: 76.76.19.0
CNAME: cname-china.vercel-dns.com
```

**For Netlify:**
```
CNAME: main--your-site.netlify.app
```

**Update in `.env`:**
```
VITE_SITE_URL=https://yourdomain.com
```

---

## 🔒 SSL/HTTPS

- **Vercel**: Automatic ✅
- **Netlify**: Automatic ✅
- **GitHub Pages**: Automatic ✅
- **AWS**: CloudFront integration
- **Traditional Hosting**: Usually included

---

## 📊 Post-Deployment

### 1. Test Your Site
```bash
# Check responsiveness
# Test all links work
# Verify social links open correctly
# Test contact form
# Check resume download
```

### 2. Add Analytics (Optional)

**Google Analytics:**
```javascript
// src/App.jsx
useEffect(() => {
  // Add GA script
  const script = document.createElement('script');
  script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_ID';
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('config', 'GA_ID');
}, [])
```

### 3. SEO Optimization

Add robots.txt to `public/`:
```
User-agent: *
Allow: /
Disallow: /admin

Sitemap: https://yourdomain.com/sitemap.xml
```

### 4. Performance Monitoring

- Use Lighthouse audit (Chrome DevTools)
- Check Core Web Vitals
- Monitor with PageSpeed Insights

---

## 🐛 Troubleshooting

### Build Fails
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Images Not Loading
- Check image paths: Use relative paths from `public/`
- Ensure image files exist
- Check permissions

### Links Not Working
- Verify URLs in `src/data/portfolio.js`
- Test each link manually
- Update GitHub URLs if repo name changed

### Contact Form Not Submitting
- Add EmailJS configuration (optional)
- Or use backend API endpoint
- See `.env.example` for setup

---

## 🔄 Continuous Deployment

### GitHub + Vercel/Netlify

Every push to main branch automatically:
1. Runs `npm run build`
2. Deploys to production
3. Updates live site

**No manual deployment needed!**

---

## 📈 Updating Your Portfolio

### Add New Content
1. Edit `src/data/portfolio.js`
2. Refresh browser (automatic hot reload in dev)
3. Commit and push to GitHub
4. Vercel/Netlify auto-deploys

### Update Component Design
1. Edit component files in `src/components/`
2. Changes appear instantly in dev
3. Run `npm run build` to verify
4. Push to GitHub for production update

---

## 📝 Pre-Launch Checklist

- [ ] Update all personal information in `portfolio.js`
- [ ] Add profile image to replace placeholder
- [ ] Update resume URL in `.env`
- [ ] Test all social links
- [ ] Test project links (GitHub URLs)
- [ ] Verify email address
- [ ] Check mobile responsiveness
- [ ] Run Lighthouse audit
- [ ] Add custom domain
- [ ] Set up analytics (optional)
- [ ] Test contact form

---

## 🎉 Launch!

Your portfolio is now live at your domain. Share with:
- LinkedIn profile
- GitHub README
- Email signature
- Resume

Great job! 🚀
