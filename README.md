# AI Automation Consultant Portfolio

A production-ready portfolio website showcasing AI automation services, workflow solutions, and technical capabilities. Built with Next.js 14, TypeScript, and modern web technologies to demonstrate expertise in full-stack AI development and automation engineering.

## Overview

This portfolio serves as both a business showcase and a working demonstration of technical capabilities. It positions the consultant as a full-stack AI builder specializing in rapid prototyping, workflow automation, and production system deployment for agencies and founders.

## Key Features

### Business Pages
- **Homepage**: Professional positioning as AI Automation Consultant with clear value proposition
- **Projects**: Case studies highlighting production systems with business outcomes
- **Services**: Three-tier service model (Blueprint Sprint, Implementation, Support Retainer)
- **Pricing**: Transparent pricing structure with clear engagement models
- **Automation Intake**: High-converting form for automation client qualification
- **Contact**: Professional contact form with Calendly integration

### Technical Features
- **Next.js 14** with App Router for optimal performance and SEO
- **TypeScript** for type safety and maintainability
- **Tailwind CSS** for responsive, modern UI
- **Framer Motion** for smooth animations and interactions
- **Claude AI Integration** for interactive chatbot functionality
- **Serverless Architecture** deployed on Vercel
- **Production-Ready** with error handling, loading states, and monitoring

## Tech Stack

### Core Framework
- **Next.js 14** (App Router) - Server-side rendering and API routes
- **TypeScript** - Type-safe development
- **React 18** - Component architecture

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon system

### Integrations
- **Anthropic Claude AI** - Chatbot and AI features
- **GitHub API** - Repository data synchronization
- **Vercel** - Deployment and hosting platform

### Architecture
- **Serverless Functions** - API routes for form submissions
- **Static Generation** - Optimized page performance
- **Image Optimization** - Next.js Image component
- **SEO Optimization** - Metadata, sitemap, robots.txt

## Project Structure

```
├── app/
│   ├── api/
│   │   ├── contact/              # Contact form endpoint
│   │   ├── automation/          # Automation intake form endpoint
│   │   ├── newsletter/          # Newsletter subscription endpoint
│   │   └── voice-ai/            # Claude AI chatbot endpoint
│   ├── projects/
│   │   ├── page.tsx             # Projects listing page
│   │   └── [slug]/              # Dynamic project detail pages
│   │       └── page.tsx
│   ├── services/
│   │   └── page.tsx             # Services page
│   ├── pricing/
│   │   └── page.tsx             # Pricing page
│   ├── automation/
│   │   └── page.tsx             # Automation intake form
│   ├── contact/
│   │   └── page.tsx             # Contact page
│   ├── layout.tsx              # Root layout with navigation
│   └── page.tsx                # Homepage
├── components/
│   ├── Navigation.tsx           # Sticky navigation bar
│   ├── Footer.tsx              # Site footer
│   └── TechStackMarquee.tsx    # Scrolling tech stack display
├── .env.example                # Environment variables template
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies
```

## Services Offered

### 1. Blueprint Sprint (€500)
- 90-minute consultation call
- Workflow mapping and documentation
- Architecture design
- Cost-efficiency analysis
- Implementation timeline
- Optional prototype

### 2. Implementation
- Starter Build: €1,200 fixed for automation/AI tools (1–2 weeks)
- Hourly Development: €75/hour for ongoing development (billed weekly)
- Complete System: Starting at €4,500 for full platforms (delivered in phases)

### 3. Support
- Available at €75/hour
- Billed based on actual hours used each month
- Ongoing monitoring, updates, and maintenance
- Performance optimizations

## Trust & Reliability Standards

- **30-Day Warranty**: All implementations include warranty coverage
- **Clear Communication**: Regular updates and transparent reporting
- **Fixed Pricing**: No hidden fees, scope changes approved upfront
- **Weekly Updates**: Scheduled progress reports with milestone tracking
- **Delivery Guarantee**: On-time delivery with production-ready code
- **Maintenance Options**: Flexible support retainers available

## Setup Instructions

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Git

### Installation

1. **Clone the repository**:
   ```bash
   git clone <your-repo-url>
   cd portfolio-website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` and add your configuration:
   ```env
   NEXT_PUBLIC_SITE_URL=https://yourdomain.com
   ANTHROPIC_API_KEY=sk-ant-...  # For Claude AI chatbot
   RESEND_API_KEY=re_...          # Optional: For email services
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Deployment (Vercel)

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

## Environment Variables

Create a `.env.local` file (or set in Vercel dashboard):

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://yourdomain.com

# AI Integration
ANTHROPIC_API_KEY=sk-ant-...  # Required for chatbot functionality

# Email Service (Optional)
RESEND_API_KEY=re_xxxxxxxxxxxxx

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Environment
NODE_ENV=production
```

### Required Variables

- `NEXT_PUBLIC_SITE_URL`: Your site's URL (for SEO and sitemap)
- `ANTHROPIC_API_KEY`: For Claude AI chatbot functionality

### Optional Variables

- `RESEND_API_KEY`: For sending emails from contact forms
- `NEXT_PUBLIC_GA_ID`: Google Analytics tracking ID

## Customization

### Update Content

1. **Projects**: Edit `app/projects/page.tsx` and `app/projects/[slug]/page.tsx`
2. **Services**: Edit `app/services/page.tsx`
3. **Pricing**: Edit `app/pricing/page.tsx`
4. **Contact Info**: Edit `app/contact/page.tsx` and `components/Footer.tsx`
5. **Navigation**: Edit `components/Navigation.tsx`
6. **Metadata**: Edit `app/layout.tsx` for SEO

### Styling

- **Colors**: Update `tailwind.config.ts` for theme colors
- **Global Styles**: Edit `app/globals.css`
- **Animations**: Modify component-level Framer Motion animations

### API Integration

1. **Contact Form**: Update `app/api/contact/route.ts` to integrate with email service
2. **Automation Intake**: Update `app/api/automation/route.ts` for form submissions
3. **Newsletter**: Update `app/api/newsletter/route.ts` to connect to email marketing platform
4. **Voice AI**: Configure `app/api/voice-ai/route.ts` with your Anthropic API key

## Architecture Details

### Frontend
- **Next.js App Router**: Server components for optimal performance
- **Client Components**: Interactive elements with React hooks
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Performance**: Image optimization, code splitting, lazy loading

### Backend
- **API Routes**: Serverless functions for form submissions and AI integration
- **Type Safety**: Full TypeScript coverage for API endpoints
- **Error Handling**: Comprehensive error boundaries and validation

### Integrations
- **Claude AI**: Anthropic API for chatbot functionality
- **GitHub API**: Repository data synchronization (if needed)
- **Email Services**: Resend integration for form submissions

## Testing

### Manual Testing Checklist

- [ ] All navigation links work correctly
- [ ] Contact form submits successfully
- [ ] Automation intake form validates properly
- [ ] All project pages load correctly
- [ ] Responsive design works on mobile/tablet/desktop
- [ ] Animations are smooth and performant
- [ ] No console errors
- [ ] Images load properly
- [ ] External links open in new tabs
- [ ] SEO metadata is correct

### Responsive Breakpoints

- **Mobile**: 320px - 640px
- **Tablet**: 641px - 1024px
- **Desktop**: 1025px+

## Performance Optimization

- **Static Generation**: Pre-rendered pages for fast loading
- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic route-based code splitting
- **Caching**: Optimized caching strategies for API routes
- **Bundle Size**: Minimal dependencies for fast initial load

## Security Considerations

- **Environment Variables**: Sensitive keys stored securely
- **Input Validation**: All form inputs validated server-side
- **API Rate Limiting**: Consider implementing rate limiting for production
- **CORS**: Proper CORS configuration for API routes
- **XSS Protection**: React's built-in XSS protection

## License

This project is private and proprietary.

## Author

**Andrew Ryan**

- Portfolio: [andrewryan.dev](https://andrewryan.dev)
- Email: andrewryan763@gmail.com
- Location: Lisbon, PT

---

**Built with Next.js, TypeScript, Tailwind CSS, and Claude AI**
