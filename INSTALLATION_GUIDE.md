# Installation & Setup Guide

Complete step-by-step guide to get your portfolio running locally.

---

## Prerequisites

Before starting, ensure you have installed:

### Required
- **Node.js** (v16 or higher) — Download from https://nodejs.org/
- **Git** (v2.30 or higher) — Download from https://git-scm.com/
- **Text Editor** (VS Code recommended) — https://code.visualstudio.com/

### Verify Installation
```bash
node --version  # Should be v16+
npm --version   # Should be v8+
git --version   # Should be v2.30+
```

---

## Step 1: Extract Files

Extract the provided `mahendra-react-portfolio` folder to your desired location:

```
C:\Users\YourName\Desktop\mahendra-react-portfolio\
# or
/Users/YourName/Desktop/mahendra-react-portfolio/
# or
/home/username/projects/mahendra-react-portfolio/
```

---

## Step 2: Navigate to Project Directory

Open your terminal/command prompt and navigate to the project:

```bash
cd path/to/mahendra-react-portfolio

# Example on Windows:
cd C:\Users\YourName\Desktop\mahendra-react-portfolio

# Example on Mac/Linux:
cd ~/Desktop/mahendra-react-portfolio
```

---

## Step 3: Install Dependencies

Install all required npm packages:

```bash
npm install
```

This will:
- Create a `node_modules` folder
- Download React, Vite, Tailwind, Framer Motion, etc.
- Create `package-lock.json`

**Time**: 2-5 minutes (depends on internet speed)

⚠️ **Note**: Do NOT commit `node_modules` to git (it's in `.gitignore`)

---

## Step 4: Configure Environment Variables

1. **Copy the example file:**
   ```bash
   cp .env.example .env
   # On Windows Command Prompt:
   # copy .env.example .env
   ```

2. **Edit `.env` file** with important URLs:
   ```
   # .env
   VITE_RESUME_URL=https://drive.google.com/file/d/YOUR_RESUME_ID/view
   VITE_OFFER_LETTER_URL=https://drive.google.com/file/d/YOUR_CERT_ID/view
   ```

3. **(Optional) For Contact Form:**
   - Get free account at https://www.emailjs.com
   - Add your EmailJS credentials:
   ```
   VITE_EMAILJS_SERVICE_ID=service_xxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxx
   VITE_EMAILJS_PUBLIC_KEY=public_xxx
   ```

---

## Step 5: Update Your Data

Edit `src/data/portfolio.js` and update your information:

```javascript
// src/data/portfolio.js

export const personalInfo = {
  name: 'Your Name Here',  // ← Change this
  lastName: 'Your Last Name',  // ← And this
  fullName: 'Your Full Name',
  email: 'your.email@gmail.com',  // ← Update email
  phone: '+91 XXXXX XXXXX',  // ← Update phone
  location: 'Your City, State, Country',  // ← Update location
  // ... etc
}

// Update all other sections similarly
```

---

## Step 6: Add Your Profile Image

1. **Find or create your profile photo** (recommend 340x340px or square)

2. **Place it in `src/assets/`:**
   ```
   src/
   └── assets/
       └── profile.jpg  ← Place your image here
   ```

3. **Update Hero component** (`src/components/Hero.jsx`):
   ```javascript
   // Line where image is loaded
   if (heroPhoto) {
       heroPhoto.src = '/profile.jpg'  // Your image name
   }
   ```

Or update in `About.jsx` similarly for the about section image.

---

## Step 7: Start Development Server

Run the development server:

```bash
npm run dev
```

**Output should be:**
```
  VITE v5.0.2  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  press h to show help
```

---

## Step 8: Open in Browser

1. Open your web browser (Chrome, Firefox, Safari, etc.)
2. Navigate to: `http://localhost:5173/`
3. You should see your portfolio!

**Features to test:**
- ✅ Scroll animations
- ✅ Hover effects
- ✅ Mobile responsiveness (resize browser window)
- ✅ Click on links (they should work)
- ✅ Mobile menu (viewport < 768px)

---

## Step 9: Hot Module Replacement (HMR)

Vite has **Hot Module Replacement** enabled:

- **Edit a file** → Save changes (Ctrl+S or Cmd+S)
- **Browser auto-refreshes** without full reload
- **State is preserved** (if applicable)

Try editing `src/data/portfolio.js` and saving to see changes instantly!

---

## Step 10: Building for Production

When ready to deploy, create an optimized build:

```bash
npm run build
```

**Output:**
- Creates `dist/` folder
- Minified & optimized files
- Ready to deploy

**To preview production build:**
```bash
npm run preview
```

Opens at `http://localhost:4173/`

---

## Common Issues & Solutions

### Issue: Port 5173 Already in Use
```bash
# Use different port
npm run dev -- --port 3000
```

### Issue: Module not found error
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Issue: Image not loading
- Check file path in component
- Ensure image is in `public/` or `src/assets/`
- Use absolute path: `/image-name.jpg`

### Issue: ES6 syntax error
- Ensure you're using Node 16+
- Run `node --version`

### Issue: Form not sending
- Install and configure EmailJS
- Or connect to backend API
- See `.env.example` for setup

---

## File & Folder Explanation

```
mahendra-react-portfolio/
├── node_modules/               ← Downloaded packages (don't commit)
├── public/                     ← Static files (images, etc)
├── src/                        ← Source code
│   ├── components/            ← React components
│   │   ├── Hero.jsx          ← Your profile section
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx      ← Your projects
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx       ← Contact section
│   │   ├── Navigation.jsx    ← Top navbar
│   │   └── Footer.jsx        ← Footer
│   ├── data/
│   │   └── portfolio.js      ← ⭐ YOUR DATA HERE
│   ├── hooks/
│   │   └── useScrollReveal.js ← Custom hooks
│   ├── assets/               ← Images, icons
│   ├── App.jsx              ← Main app
│   ├── main.jsx             ← Entry point
│   └── index.css            ← Global styles
├── index.html               ← HTML template
├── package.json             ← Dependencies list
├── tailwind.config.js       ← Tailwind CSS config
├── postcss.config.js        ← PostCSS config
├── vite.config.js           ← Vite config
├── .env                     ← Environment variables (your secrets)
├── .env.example             ← Example .env file
├── .gitignore              ← Files to ignore in git
├── README.md               ← Project documentation
└── dist/                   ← Build output (created after npm run build)
```

---

## Testing the Portfolio Locally

### Mobile Responsiveness
1. Open browser DevTools (F12 or Cmd+Option+I)
2. Click "Toggle device toolbar" icon
3. Switch between device sizes:
   - Mobile (375px)
   - Tablet (768px)
   - Desktop (1024px+)

### Link Testing
- Click all social media icons
- Click project GitHub links
- Try resume download button
- Test contact form

### Performance
1. Open DevTools → Lighthouse tab
2. Click "Analyze page load"
3. Should score 90+

---

## Git Setup (Optional but Recommended)

Initialize git repository:

```bash
git config --global user.name "Mahendra"
git config --global user.email "your.email@gmail.com"

cd mahendra-react-portfolio
git init
git add .
git commit -m "Initial commit: Portfolio"
```

Later, push to GitHub:

```bash
git remote add origin https://github.com/YOUR_USERNAME/mahendra-portfolio.git
git branch -M main
git push -u origin main
```

---

## Useful VS Code Extensions

Install these in VS Code for better development:

1. **ES7+ React/Redux/React-Native snippets** (dsznajder)
2. **Tailwind CSS IntelliSense** (bradlc)
3. **Prettier - Code formatter** (esbenp)
4. **Thunder Client** or **REST Client** (for API testing)
5. **GitLens** (eamodio)

---

## Next Steps

1. ✅ **Setup complete!** Your portfolio is running locally
2. 📝 **Customize data** in `src/data/portfolio.js`
3. 🖼️ **Add profile image** to `src/assets/`
4. 🔗 **Verify all links** work correctly
5. 📱 **Test on mobile** using DevTools
6. 🚀 **Deploy** using DEPLOYMENT.md guide
7. 🎉 **Share** your new portfolio!

---

## Getting Help

If you encounter issues:

1. **Check the error message** in terminal or console
2. **Read IMPLEMENTATION_NOTES.md** for detailed info
3. **Check FAQ** in README.md
4. **Google the error message** for solutions
5. **Ask in AI chat** for specific help

---

## Useful Commands Quick Reference

```bash
# Start development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Check code quality
npm run lint

# Install a new package
npm install package-name

# Update all packages
npm update

# Uninstall a package
npm uninstall package-name
```

---

## Performance Tips

- Use `npm run build` to check bundle size
- Monitor with DevTools Lighthouse
- Optimize images before adding
- Use lazy loading for images (optional)
- Check for unused dependencies: `npm prune`

---

## Congratulations! 🎉

Your portfolio development environment is now set up. You're ready to:

- ✨ Customize design
- 📝 Update content
- 🚀 Deploy to production
- 🌍 Share with the world

Good luck! 🚀

---

**Questions?** Review IMPLEMENTATION_NOTES.md or DEPLOYMENT.md
