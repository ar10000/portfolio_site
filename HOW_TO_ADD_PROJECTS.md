# How to Add New Projects to Your Portfolio

After reverting to the pre-admin panel version, projects are managed by editing code files directly. Here's how to add new projects:

## Step 1: Add Project to Projects List

Edit `app/projects/page.tsx` and add your project to the `projects` array:

```typescript
const projects = [
  // ... existing projects ...
  {
    id: "your-project-slug",        // URL-friendly slug (lowercase, hyphens)
    title: "Your Project Name",
    description: "A brief one-sentence description of your project.",
    tech: ["Tech1", "Tech2", "Tech3"], // Array of technologies
    image: "/images/projects/your-project-thumb.jpg", // Thumbnail image path
    link: "/projects/your-project-slug", // Must match the id
    github: "https://github.com/your-username/repo", // or null if private
    featured: true, // true to highlight, false otherwise
    demoVideoComingSoon: false, // Optional: set to true if you have a demo video
  },
];
```

## Step 2: Add Project Details Page

Edit `app/projects/[slug]/page.tsx` and add your project to the `projectData` object:

```typescript
const projectData: Record<string, any> = {
  // ... existing projects ...
  "your-project-slug": {
    title: "Your Project Name",
    description: "Full description of your project",
    status: "Live", // or "In Development", "Archived"
    statusColor: "green", // "green", "blue", or "gray"
    tech: ["Tech1", "Tech2", "Tech3"],
    github: "https://github.com/your-username/repo", // or null
    demo: "https://your-demo-url.com", // or null
    problem: "What problem does this project solve? (2-3 sentences)",
    solution: "How does your project solve this problem? (2-3 sentences)",
    overview: "A comprehensive overview of what the project does. (2-4 sentences)",
    whyItMatters: "Why this project matters or its impact. (1-2 sentences)",
    features: [
      {
        icon: Sparkles, // Import icon from lucide-react
        title: "Feature 1 Title",
        description: "Description of feature 1",
      },
      {
        icon: Zap,
        title: "Feature 2 Title",
        description: "Description of feature 2",
      },
      // Add up to 8 features
    ],
    techStack: [
      { name: "Tech Name", category: "Category", icon: Code2 },
      // Add technologies with icons
    ],
    architecture: "Technical architecture description. How it's built, tech stack, design patterns. (2-3 sentences)",
    metrics: null, // Optional: Add metrics object if you have results
    screenshots: [
      "/images/projects/your-project-1.jpg",
      "/images/projects/your-project-2.jpg",
      "/images/projects/your-project-3.jpg",
    ],
    lessonsLearned: "What you learned building this project. Insights, challenges, key takeaways. (2-3 sentences)",
    codeSnippet: `// Optional: Code example
function example() {
  return "Your code here";
}`,
    codeLanguage: "javascript", // Language for syntax highlighting
  },
};
```

## Step 3: Add Project Images

1. Create thumbnail: `public/images/projects/your-project-thumb.jpg` (600x400px recommended)
2. Add screenshots: 
   - `public/images/projects/your-project-1.jpg`
   - `public/images/projects/your-project-2.jpg`
   - `public/images/projects/your-project-3.jpg`

## Step 4: Available Icons

You can use any icon from `lucide-react`. Common ones:
- `Sparkles` - Features, AI, magic
- `Zap` - Speed, performance
- `Database` - Data, storage
- `Globe` - Web, deployment
- `Smartphone` - Mobile apps
- `Code2` - Development
- `BarChart3` - Analytics
- `Shield` - Security
- `MessageSquare` - Communication
- `Workflow` - Automation

Import them at the top of `app/projects/[slug]/page.tsx`:

```typescript
import {
  Sparkles,
  Zap,
  Database,
  // ... other icons
} from "lucide-react";
```

## Example: Adding a New Project

Let's say you want to add "LaunchLens":

1. **In `app/projects/page.tsx`:**
```typescript
{
  id: "launchlens",
  title: "LaunchLens",
  description: "Product launch analytics and tracking platform.",
  tech: ["Next.js", "TypeScript", "PostgreSQL"],
  image: "/images/projects/launchlens-thumb.jpg",
  link: "/projects/launchlens",
  github: "https://github.com/ar10000/LaunchLens",
  featured: false,
  demoVideoComingSoon: false,
},
```

2. **In `app/projects/[slug]/page.tsx`:**
```typescript
"launchlens": {
  title: "LaunchLens",
  description: "Product launch analytics and tracking platform",
  status: "Live",
  statusColor: "green",
  tech: ["Next.js", "TypeScript", "PostgreSQL"],
  github: "https://github.com/ar10000/LaunchLens",
  demo: "https://launchlens.app",
  problem: "Product teams struggle to track launch metrics and measure success.",
  solution: "LaunchLens provides real-time analytics, conversion tracking, and automated reporting for product launches.",
  overview: "LaunchLens is a comprehensive analytics platform that helps product teams track, measure, and optimize their product launches with real-time dashboards and automated insights.",
  whyItMatters: "Successful product launches require data-driven decisions. LaunchLens gives teams the visibility they need to iterate and improve.",
  features: [
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Track launch metrics in real-time with customizable dashboards",
    },
    {
      icon: Zap,
      title: "Automated Reporting",
      description: "Get daily/weekly reports automatically delivered",
    },
  ],
  techStack: [
    { name: "Next.js", category: "Framework", icon: Code2 },
    { name: "PostgreSQL", category: "Database", icon: Database },
  ],
  architecture: "Built with Next.js 14 App Router, TypeScript for type safety, and PostgreSQL for data storage. Uses serverless functions for scalability.",
  metrics: null,
  screenshots: [
    "/images/projects/launchlens-1.jpg",
    "/images/projects/launchlens-2.jpg",
  ],
  lessonsLearned: "Building LaunchLens taught me the importance of real-time data visualization and how automated reporting can save teams hours of manual work.",
  codeSnippet: null,
  codeLanguage: null,
},
```

## Current Projects Already Added

✅ **Creative Garden** - Already in both files
✅ **AutoLeadCloser** - Already in both files
✅ **FlowCircle** - Already in both files
✅ **Agency Autopilot** - Already in both files

## Quick Checklist

- [ ] Add project to `projects` array in `app/projects/page.tsx`
- [ ] Add project details to `projectData` in `app/projects/[slug]/page.tsx`
- [ ] Add thumbnail image to `public/images/projects/`
- [ ] Add screenshot images to `public/images/projects/`
- [ ] Test the project page at `/projects/your-project-slug`
- [ ] Commit and push changes

## Notes

- The `id` in the projects array must match the key in `projectData`
- The `link` must be `/projects/{id}`
- Images will show a placeholder if they don't exist
- Set `github: null` for private repositories
- Use `featured: true` to highlight your best projects

