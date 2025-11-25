# AI Product Builder Portfolio

A modern, responsive portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Showcasing AI-powered products and automation solutions.

## 🚀 Features

- **Next.js 14** with App Router for optimal performance
- **TypeScript** for type safety and better developer experience
- **Tailwind CSS** for rapid, responsive UI development
- **Framer Motion** for smooth, performant animations
- **Fully Responsive** design (mobile-first approach)
- **Dark Mode** by default with modern glassmorphism effects
- **SEO Optimized** with metadata, Open Graph, and sitemap
- **Accessibility** compliant (WCAG AA standards)
- **Fast Loading** with optimized images and lazy loading
- **API Routes** for contact form and newsletter subscriptions

## 📋 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
├── app/
│   ├── api/                    # API routes
│   │   ├── contact/            # Contact form endpoint
│   │   └── newsletter/         # Newsletter subscription endpoint
│   ├── projects/
│   │   ├── page.tsx            # Projects listing page
│   │   └── [slug]/             # Dynamic project detail pages
│   │       └── page.tsx
│   ├── services/
│   │   └── page.tsx            # Services page
│   ├── contact/
│   │   └── page.tsx            # Contact page with form
│   ├── layout.tsx              # Root layout (navigation, footer, metadata)
│   ├── page.tsx                # Homepage
│   ├── globals.css             # Global styles and animations
│   ├── loading.tsx              # Loading state component
│   ├── error.tsx               # Error boundary
│   ├── not-found.tsx           # 404 page
│   ├── sitemap.ts              # Dynamic sitemap generation
│   └── robots.ts               # Robots.txt configuration
├── components/
│   ├── Navigation.tsx           # Sticky navigation bar
│   ├── Footer.tsx              # Site footer
│   ├── ProjectCard.tsx         # Reusable project card component
│   └── VideoEmbed.tsx          # Video embed component
├── animations/
│   └── variants.ts             # Framer Motion animation variants
├── hooks/
│   ├── useScrollAnimation.ts   # Scroll-triggered animations
│   └── useParallax.ts          # Parallax effects
├── .env.example                # Environment variables template
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies

```

## 🛠️ Setup Instructions

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Git

### Installation

1. **Clone the repository** (or use this as a template):
   ```bash
   git clone <your-repo-url>
   cd portfolio-website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**:
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` and add your configuration:
   ```env
   NEXT_PUBLIC_SITE_URL=https://yourdomain.com
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX  # Optional: Google Analytics
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚢 Deployment Guide (Vercel)

### Quick Deploy

1. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Import to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings

3. **Configure Environment Variables**:
   - In Vercel dashboard, go to Project Settings → Environment Variables
   - Add all variables from `.env.example`
   - Redeploy after adding variables

4. **Custom Domain** (optional):
   - In Project Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

### Manual Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 🔧 Environment Variables

Create a `.env.local` file (or set in Vercel dashboard):

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://yourdomain.com

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Email Service (for contact form)
# RESEND_API_KEY=re_xxxxxxxxxxxxx
# SENDGRID_API_KEY=SG.xxxxxxxxxxxxx

# Database (Optional - for storing submissions)
# DATABASE_URL=postgresql://user:password@localhost:5432/portfolio

# Environment
NODE_ENV=production
```

### Required Variables

- `NEXT_PUBLIC_SITE_URL`: Your site's URL (for SEO and sitemap)

### Optional Variables

- `NEXT_PUBLIC_GA_ID`: Google Analytics tracking ID
- `RESEND_API_KEY` or `SENDGRID_API_KEY`: For sending emails from contact form
- `DATABASE_URL`: For storing form submissions (if needed)

## 📝 Customization

### Update Content

1. **Projects**: Edit `app/projects/page.tsx` and `app/projects/[slug]/page.tsx`
2. **Services**: Edit `app/services/page.tsx`
3. **Contact Info**: Edit `app/contact/page.tsx` and `components/Footer.tsx`
4. **Navigation**: Edit `components/Navigation.tsx`
5. **Metadata**: Edit `app/layout.tsx` for SEO

### Styling

- **Colors**: Update `tailwind.config.ts` for theme colors
- **Global Styles**: Edit `app/globals.css`
- **Animations**: Modify `animations/variants.ts`

### API Integration

1. **Contact Form**: Update `app/api/contact/route.ts` to integrate with your email service
2. **Newsletter**: Update `app/api/newsletter/route.ts` to connect to your email marketing platform

## 🧪 Testing

### Manual Testing Checklist

- [ ] All navigation links work
- [ ] Contact form submits successfully
- [ ] Newsletter subscription works
- [ ] All project pages load correctly
- [ ] Responsive design works on mobile/tablet/desktop
- [ ] Animations are smooth
- [ ] No console errors
- [ ] Images load properly
- [ ] External links open in new tabs

### Responsive Breakpoints

- **Mobile**: 320px - 640px
- **Tablet**: 641px - 1024px
- **Desktop**: 1025px+

## 🎨 Features in Detail

### Pages

- **Home (`/`)**: Hero section with animated gradient text, project showcase, and "Why I Build Fast" section
- **Projects (`/projects`)**: Grid of all projects with filtering and search (future enhancement)
- **Project Detail (`/projects/[slug]`)**: Individual project pages with full details, tech stack, and demos
- **Services (`/services`)**: Three main service offerings with pricing and process
- **Contact (`/contact`)**: Contact form with validation and Calendly integration

### Components

- **Navigation**: Sticky header with active section highlighting
- **Footer**: Three-column layout with navigation, projects, and newsletter
- **ProjectCard**: Reusable card component with hover effects
- **VideoEmbed**: Responsive video player with lazy loading

### Animations

- Fade-in animations on scroll
- Staggered children animations
- Hover effects with scale and glow
- Gradient text animations
- Loading skeletons

## 🔮 Future Enhancements

- [ ] Blog section for AI/automation insights
- [ ] Client testimonials section
- [ ] Case studies with detailed metrics
- [ ] Dark/light mode toggle (currently dark only)
- [ ] Project filtering and search
- [ ] Multi-language support
- [ ] CMS integration (Sanity, Contentful)
- [ ] Analytics dashboard
- [ ] A/B testing for CTAs
- [ ] Progressive Web App (PWA) support

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Andrew Ryan**

- Portfolio: [andrewryan.dev](https://andrewryan.dev)
- Email: contact@andrewryan.dev
- Location: Lisbon, PT

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animated with [Framer Motion](https://www.framer.com/motion/)
- Icons from [Lucide](https://lucide.dev/)

---

**Built with Next.js, Tailwind, and Claude AI** 🚀
