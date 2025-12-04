# Portfolio Website

A modern, production-ready portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features AI-powered chatbot integration, dynamic project showcases, and responsive design.

## Overview

This portfolio website demonstrates modern web development practices with serverless architecture, AI integration, and optimized performance. Built as a showcase of technical capabilities in full-stack development, AI automation, and modern web technologies.

## Key Features

- **AI Chatbot Integration**: Interactive chatbot powered by Claude AI
- **Dynamic Project Pages**: Detailed case studies with technical deep-dives
- **Responsive Design**: Mobile-first approach with smooth animations
- **SEO Optimized**: Metadata, sitemap, and robots.txt configuration
- **Performance Optimized**: Static generation, image optimization, code splitting
- **Serverless API Routes**: Contact forms, newsletter, and AI endpoints

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

## License

This project is private and proprietary. All rights reserved.

Unauthorized copying, modification, distribution, or use of this codebase is prohibited.

---

**Built with Next.js 16, React 19, TypeScript, and Tailwind CSS**
