# Gunduboina Mahendra — Java Full Stack Developer Portfolio

A production-ready, premium Apple-style 3D portfolio website built with React.js, Tailwind CSS, Framer Motion, and modern web technologies.

## 🎨 Features

### Premium UI/UX Design
- ✨ **Apple-style Dark Luxury Theme** — Glassmorphism with 3D effects
- 🎭 **Smooth Scroll Animations** — Sections fade and scale on scroll
- 🌊 **Floating Elements** — Luxurious motion design with GSAP
- 💎 **Premium Gradients** — Blue & Violet gradient accents
- 🖱️ **Custom Cursor** — Interactive cursor ring and dot

### Fully Responsive
- 📱 Mobile-first design
- 💻 Desktop optimization
- 🎯 Tablet friendly layouts

### Component-Based Architecture
- ⚛️ React Functional Components with Hooks
- 🎬 Framer Motion animations
- 🔄 Reusable component patterns
- 🧩 Clean separation of concerns

### SEO Optimized
- 📝 Meta tags and OpenGraph
- 🔍 Semantic HTML
- ⚡ Fast load times (Vite)
- 🗺️ Sitemap ready

## 📂 Project Structure

```
mahendra-react-portfolio/
├── public/
├── src/
│   ├── assets/                # Images, icons, fonts
│   ├── components/            # React components
│   │   ├── Hero.jsx          # Hero section with profile
│   │   ├── About.jsx         # About section
│   │   ├── Skills.jsx        # Skills with proficiency bars
│   │   ├── Experience.jsx    # Timeline experience
│   │   ├── Projects.jsx      # Project cards
│   │   ├── Certifications.jsx # Certifications with modal
│   │   ├── Contact.jsx       # Contact form
│   │   ├── Navigation.jsx    # Navbar with mobile menu
│   │   └── Footer.jsx        # Footer with links
│   ├── data/
│   │   └── portfolio.js      # All portfolio data (extracted)
│   ├── hooks/
│   │   └── useScrollReveal.js # Custom scroll hooks
│   ├── App.jsx               # Main app component
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles + Tailwind
├── index.html                # HTML template
├── package.json              # Dependencies
├── tailwind.config.js        # Tailwind configuration
├── postcss.config.js         # PostCSS config
├── vite.config.js            # Vite configuration
├── .env                      # Environment variables
├── .env.example              # Example env file
└── README.md                 # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm/yarn/pnpm
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/YOUR_USERNAME/mahendra-portfolio.git
cd mahendra-portfolio
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Configure environment variables**
```bash
cp .env.example .env
# Edit .env and add your URLs and keys
```

4. **Start development server**
```bash
npm run dev
# Server runs at http://localhost:5173
```

5. **Build for production**
```bash
npm run build
```

6. **Preview production build**
```bash
npm run preview
```

## 🧩 Backend Contact API

This portfolio includes a backend contact API that saves incoming messages into a MySQL database.

### Running the backend
```bash
cd backend
npm install
cp .env.example .env
npm start
```

### Confirm the frontend/backend integration
From the repo root, run:
```bash
npm run check:backend
```

This verifies the backend `.env` file exists and that the backend health endpoint is reachable.

### Frontend configuration
The React app uses `VITE_API_BASE_URL` from the root `.env` file. By default this is:
```env
VITE_API_BASE_URL=http://localhost:3000/api
```

If the backend is unavailable, the contact form gracefully falls back to the user's default email client.

## 📋 Data Extraction (Phase 1 Complete)

All data has been extracted from your HTML portfolio:

### ✅ Extracted Information
- **Personal Info**: Name, email, phone, location, status
- **URLs**: LinkedIn, GitHub, Instagram, Facebook
- **Education**: MCA · 8.5 CGPA from Mahendra Engineering College
- **Skills**: Backend, Frontend, Database & Tools (with proficiency levels)
- **Experience**: 6-month industrial training at 3Edge Solutions
- **Projects**: ABC Bank System & Hotel Management (with GitHub links)
- **Certifications**: CPSE Java Full Stack certification
- **Contact**: Email, phone, location, social links

**Location**: `src/data/portfolio.js`

## 🎯 Key Sections

### Hero Section
- Profile photo display (center-positioned only)
- Animated tech icons orbiting
- Call-to-action buttons
- Stats display (training months, projects, CGPA)
- Smooth scroll hint

### About Section
- Two-column layout (image + content)
- Education badge overlay
- Highlights grid (Backend, Database, Frontend, QA)
- Traits/skills tags
- Fully responsive

### Skills Section
- Three categories: Backend, Frontend, Database & Tools
- Animated proficiency bars
- Hover effects with scale and rotation
- 15+ skills with proficiency percentages

### Experience Section
- Timeline with vertical line
- Interactive experience cards
- Tags for technologies
- Smooth hover animations

### Projects Section
- Grid layout (1-2 columns)
- Project cards with gradient backgrounds
- Feature lists
- GitHub links (clickable URLs)
- Technology badges

### Certifications Section
- Clickable certification cards
- Modal popup with details
- PDF download button
- Date and issuer information

### Contact Section
- Contact information display
- Contact form with validation
- Social media buttons (5 platforms)
- Responsive layout

### Navigation
- Sticky navbar with scroll detection
- Mobile hamburger menu
- Smooth navigation links
- Resume download button

### Footer
- Links grid layout
- Social icons
- Copyright and attribution
- Responsive design

## 🎨 Design System

### Color Palette (Apple-style Dark Luxury)
```
Primary Background: #0A0A0A (Black)
Secondary Background: #111111 (Dark Slate)
Card Background: rgba(255,255,255,0.06) (Glass)
Text Primary: #FFFFFF (White)
Text Secondary: #CBD5E1 (Light Gray)
Accent Blue: #3B82F6
Accent Violet: #A855F7
```

### Typography
- Display Font: System UI / -apple-system
- Body Font: DM Sans, Syne (Google Fonts)
- Font Sizes: Responsive (clamp)

### Spacing
- Base unit: 4px (Tailwind default)
- Sections: py-20 lg:py-32
- Containers: max-w-7xl

### Animations
- Scroll Reveal: opacity + translateY
- Hover: scale + translateY
- Page transitions: fade + scale
- Scroll hints: bounce animation

## 🔧 Technologies

### Frontend Framework
- **React 18** — UI library
- **Vite** — Build tool (2x faster than Webpack)
- **Tailwind CSS** — Utility-first styling

### Animations & Effects
- **Framer Motion** — React animation library
- **GSAP** — For advanced animations (optional)
- **Three.js** — 3D effects (optional setup)

### Development Tools
- **Vite** — Lightning-fast dev server
- **PostCSS** — CSS processing
- **Autoprefixer** — Browser compatibility
- **ESLint** — Code quality

## 🔗 All Extracted Links (Working)

### Social Links
- LinkedIn: https://www.linkedin.com/in/gunduboina-mahendra-844a62327
- GitHub: https://github.com/GMahendra-07
- Instagram: https://www.instagram.com/__mahi._.maxx__?igsh=amR0OXlkaXczZnox
- Facebook: https://www.facebook.com/share/1EKS8YLJSA/

### Project Links
- ABC Bank: https://github.com/GMahendra-07/ABC_-Bank_Customer_self_Service_System
- Hotel Management: https://github.com/GMahendra-07/Hotel_Management

### Contact
- Email: gunduboinamahendra@gmail.com
- Phone: +91 93924 29683

## 📦 Dependencies

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "framer-motion": "^10.16.4",
  "gsap": "^3.12.2",
  "tailwindcss": "^3.3.6"
}
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
# Follow the prompts
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### GitHub Pages
1. Update `vite.config.js` with your repo name
2. Run `npm run build`
3. Push `dist` folder to `gh-pages` branch

## 🎯 Customization Guide

### Update Personal Information
Edit `src/data/portfolio.js`:
```javascript
export const personalInfo = {
  name: 'Your Name',
  email: 'your.email@example.com',
  // ... more fields
};
```

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  blue: {
    500: '#your-color-hex'
  }
}
```

### Add Profile Image
1. Place image in `src/assets/`
2. Import in components:
   ```javascript
   import profileImg from '../assets/profile.jpg';
   ```

### Update Resume Link
Edit `.env`:
```
VITE_RESUME_URL=your-resume-url
```

## 📱 Responsive Breakpoints

- **Mobile**: Default (< 640px)
- **Tablet**: md (640px - 1024px)
- **Desktop**: lg (1024px+)

All components use Tailwind's responsive utilities.

## ⚡ Performance Optimizations

- ✅ Code splitting with Vite
- ✅ Image lazy loading ready
- ✅ CSS-in-JS with Tailwind (no runtime overhead)
- ✅ Framer Motion: GPU-accelerated animations
- ✅ Custom cursor with Spring physics

## 🔐 Security

- No sensitive data in frontend
- `.env` file excluded from git
- HTTPS recommended for production
- CSP headers recommended

## 🤝 Contributing

This is your personal portfolio. To make updates:

1. Edit data in `src/data/portfolio.js`
2. Modify component styling in component files
3. Test locally with `npm run dev`
4. Build and deploy with `npm run build`

## 📄 License

This portfolio is personal to Gunduboina Mahendra. Inspired by modern design principles (Apple, Framer).

## 📞 Support

For issues or customization help:
- Email: gunduboinamahendra@gmail.com
- GitHub Issues: [Project Link]

---

**Built with ❤️ using React, Tailwind CSS, and Framer Motion**

**Last Updated**: April 2026
#   P o r t f o l i o  
 