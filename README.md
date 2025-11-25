# AI Product Builder Portfolio

A modern, responsive portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🚀 Next.js 14 with App Router
- 💻 TypeScript for type safety
- 🎨 Tailwind CSS for styling
- ✨ Framer Motion for smooth animations
- 📱 Fully responsive design
- 🌙 Dark mode by default
- ⚡ Fast loading and optimized

## Pages

- **Home** (`/`) - Animated hero section with gradient text
- **Projects** (`/projects`) - Interactive project cards with individual project pages
- **Services** (`/services`) - Comprehensive service offerings
- **Contact** (`/contact`) - Contact form and social links

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with navigation
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── projects/
│   │   ├── page.tsx        # Projects listing
│   │   └── [id]/
│   │       └── page.tsx    # Individual project pages
│   ├── services/
│   │   └── page.tsx        # Services page
│   └── contact/
│       └── page.tsx        # Contact page
├── components/
│   └── Navigation.tsx      # Navigation component
└── package.json
```

## Customization

- Update project data in `app/projects/page.tsx` and `app/projects/[id]/page.tsx`
- Modify services in `app/services/page.tsx`
- Update contact information in `app/contact/page.tsx`
- Customize colors and styling in `tailwind.config.ts` and `app/globals.css`

# portfolio_site
