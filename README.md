# Portfolio Website

A modern, production-ready portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features AI-powered chatbot integration, dynamic project showcases, and responsive design.

## Overview

This portfolio website demonstrates modern web development practices with serverless architecture, AI integration, and optimized performance. Built as a showcase of technical capabilities in full-stack development, AI automation, and modern web technologies.

## Key Features

### Pages
- **Homepage**: Hero section, services overview, and project highlights
- **Projects**: Dynamic project showcase with detailed case studies
- **Services**: Service offerings and capabilities
- **Pricing**: Transparent pricing structure
- **Contact**: Contact form with email integration

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
- **Next.js 16** (App Router) - Server-side rendering and API routes
- **TypeScript** - Type-safe development
- **React 19** - Component architecture

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

## Key Features

- **AI Chatbot Integration**: Interactive chatbot powered by Claude AI
- **Dynamic Project Pages**: Detailed case studies with technical deep-dives
- **Responsive Design**: Mobile-first approach with smooth animations
- **SEO Optimized**: Metadata, sitemap, and robots.txt configuration
- **Performance Optimized**: Static generation, image optimization, code splitting
- **Serverless API Routes**: Contact forms, newsletter, and AI endpoints

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Git

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ar10000/portfolio_site.git
   cd portfolio_site
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` and configure:
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

## Deployment

### Deploy to Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository to Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy

Vercel will automatically detect Next.js and configure the build settings.

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

- **Projects**: Edit `app/projects/page.tsx` and `app/projects/[slug]/page.tsx`
- **Services**: Edit `app/services/page.tsx`
- **Pricing**: Edit `app/pricing/page.tsx` and `components/Pricing.tsx`
- **Contact Info**: Edit `app/contact/page.tsx` and `components/Footer.tsx`
- **Navigation**: Edit `components/Navigation.tsx`
- **Metadata**: Edit `app/layout.tsx` for SEO

### Styling

- **Colors**: Update `tailwind.config.ts` for theme colors
- **Global Styles**: Edit `app/globals.css`
- **Animations**: Modify component-level Framer Motion animations

## Architecture

- **Next.js App Router**: Server components for optimal performance
- **Serverless API Routes**: Form submissions and AI integration
- **TypeScript**: Full type safety across the codebase
- **Responsive Design**: Mobile-first with Tailwind CSS
- **Performance**: Image optimization, code splitting, static generation

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **AI Integration**: Anthropic Claude AI
- **Deployment**: Vercel (recommended)

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── projects/          # Project pages
│   ├── services/          # Services page
│   ├── pricing/           # Pricing page
│   └── contact/           # Contact page
├── components/            # React components
├── public/               # Static assets
└── knowledge/            # AI assistant knowledge base
```

## License

This project is private and proprietary. All rights reserved.

Unauthorized copying, modification, distribution, or use of this codebase is prohibited.

---

**Built with Next.js 16, React 19, TypeScript, and Tailwind CSS**
