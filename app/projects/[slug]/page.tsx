"use client";

import { motion } from "framer-motion";
import { use, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  CheckCircle2,
  Clock,
  Code2,
  Play,
  Image as ImageIcon,
  ChevronRight,
  Sparkles,
  Zap,
  Database,
  Server,
  Globe,
  Smartphone,
  Workflow,
  Mail,
  Calendar,
  Shield,
  BarChart3,
  Filter,
  ArrowRight,
  DollarSign,
  Bot,
  MessageSquare,
  Send,
  CheckCircle,
} from "lucide-react";

// Project data structure - in production, this would come from a CMS or database
const projectData: Record<string, any> = {
  "creative-garden": {
    title: "Creative Garden",
    description: "Content Workflow Engine — Production-grade system for moving ideas from capture to publication",
    status: "Live",
    statusColor: "green",
    tech: ["Flutter", "Python", "Supabase", "AI"],
    github: "https://github.com/ar10000/creative-garden",
    demo: "https://creativegarden.app",
    problem:
      "Content creators, marketing teams, and knowledge workers generate many ideas but struggle to turn them into published content. Existing productivity tools are generic, overwhelming, or too rigid—making it hard to maintain momentum through the entire content workflow from idea capture to publication.",
    solution:
      "I built a content workflow engine that treats ideas as living projects, tracks their development through a structured pipeline, and uses intelligent check-ins to capture progress, insights, and publishing readiness. The system provides real-time feedback, momentum scoring, and visual dashboards that streamline the entire content workflow from capture to publication.",
    overview:
      "Creative Garden is a content workflow engine that helps teams move ideas through a complete publishing pipeline (Seed → Growing → Alive → Compost). It centralizes idea management, content development, progress tracking, and publishing analytics in a single, intuitive Flutter app with real-time sync and a modern Material Design 3 interface. Ideal for content creators, marketing teams, and knowledge workers who need to capture, develop, and publish ideas efficiently.",
    whyItMatters:
      "Teams often fail not because of lack of ideas, but because they lack visibility into their content workflow. Creative Garden provides structure for the entire publishing pipeline—helping teams stay consistent, see patterns, and move ideas from capture to publication efficiently.",
    features: [
      {
        icon: Sparkles,
        title: "Content Workflow Pipeline",
        description: "Move ideas through complete publishing pipeline: Seed → Growing → Alive → Compost",
      },
      {
        icon: BarChart3,
        title: "Idea Management",
        description: "Track idea development progress with automatic momentum scoring and readiness indicators",
      },
      {
        icon: Zap,
        title: "Quick Check-ins",
        description: "Log content progress, status updates, and publishing readiness",
      },
      {
        icon: MessageSquare,
        title: "Content Reflections",
        description: "Capture insights, challenges, and learnings throughout the content workflow",
      },
      {
        icon: Database,
        title: "Publishing Analytics",
        description: "Visualize content distribution, publishing trends, and workflow efficiency",
      },
      {
        icon: Globe,
        title: "Data Export",
        description: "GDPR-compliant JSON/CSV export for content audits and reporting",
      },
      {
        icon: Zap,
        title: "Real-time Sync",
        description: "Live updates powered by Supabase for team collaboration",
      },
      {
        icon: Smartphone,
        title: "Modern UI",
        description: "Clean Material Design 3 with dark mode for professional workflows",
      },
    ],
    techStack: [
      { name: "Flutter", category: "Framework", icon: Smartphone },
      { name: "Python", category: "Backend", icon: Code2 },
      { name: "Supabase", category: "Database", icon: Database },
      { name: "AI Integration", category: "AI", icon: Sparkles },
    ],
    architecture:
      "Creative Garden uses a Flutter frontend with Material Design 3 for a modern, responsive UI. The backend is built with Python, handling business logic and AI-powered insights. Supabase provides real-time database synchronization, authentication, and storage. The system follows a clean architecture pattern with clear separation between presentation, business logic, and data layers, ensuring scalability and maintainability.",
    metrics: null, // Add metrics when available
    screenshots: [
      "/images/projects/creative-garden-1.jpg",
      "/images/projects/creative-garden-2.jpg",
      "/images/projects/creative-garden-3.jpg",
    ],
    lessonsLearned:
      "Building Creative Garden taught me the importance of balancing structure with flexibility. The lifecycle metaphor emerged from user feedback—people needed a way to see projects as living things, not just tasks. I learned that creative tools must feel organic, not mechanical, and that energy tracking is more valuable than traditional productivity metrics.",
    codeSnippet: `// Example: Project lifecycle state management
class ProjectLifecycleService {
  final SupabaseClient _supabase;
  
  Future<void> moveToStage(String projectId, LifecycleStage stage) async {
    await _supabase
      .from('projects')
      .update({'stage': stage.toString()})
      .eq('id', projectId);
    
    // Trigger momentum recalculation
    await _recalculateMomentum(projectId);
  }
  
  Future<double> _recalculateMomentum(String projectId) async {
    // Calculate based on check-in frequency and energy
    // ...
  }
}`,
    codeLanguage: "dart",
  },
  flowcircle: {
    title: "FlowCircle",
    description: "Personal productivity app for creative project tracking",
    status: "Live",
    statusColor: "green",
    tech: ["Flutter", "Supabase", "Dart", "PostgreSQL"],
    github: "https://github.com/ar10000",
    demo: "https://flowcircle.app",
    problem:
      "Creative professionals were drowning in project chaos. Traditional tools like Asana and Trello felt too corporate—too many fields, too much structure. They needed something flexible that matched how creatives actually work: visual, intuitive, and fast.",
    solution:
      "I built FlowCircle in 3 weeks. A mobile-first app that lets creatives see all their projects at a glance, drag-and-drop to organize, and sync instantly across devices. No complex workflows. No training needed. Just a tool that gets out of the way so they can create.",
    overview:
      "FlowCircle gives creative professionals a visual way to track multiple projects without the corporate bloat. Built mobile-first because that's where creatives actually work.",
    whyItMatters:
      "When you're juggling 5+ creative projects, you don't need more structure—you need clarity. FlowCircle provides that clarity in seconds, not minutes.",
    features: [
      {
        icon: Sparkles,
        title: "Visual Project Boards",
        description: "Drag-and-drop interface for organizing creative projects",
      },
      {
        icon: Zap,
        title: "Real-time Sync",
        description: "Seamless synchronization across all devices",
      },
      {
        icon: Database,
        title: "Smart Categorization",
        description: "AI-powered project tagging and organization",
      },
      {
        icon: Smartphone,
        title: "Mobile-First Design",
        description: "Optimized for on-the-go project management",
      },
    ],
    techStack: [
      { name: "Flutter", category: "Framework", icon: Smartphone },
      { name: "Supabase", category: "Backend", icon: Database },
      { name: "Dart", category: "Language", icon: Code2 },
      { name: "PostgreSQL", category: "Database", icon: Database },
    ],
    architecture:
      "FlowCircle follows a clean architecture pattern with clear separation between presentation, business logic, and data layers. The Flutter frontend communicates with Supabase backend services through RESTful APIs. Real-time updates are handled via Supabase's real-time subscriptions, ensuring instant synchronization across devices.",
    metrics: [
      { label: "Active Users", value: "2.5K+", icon: Sparkles },
      { label: "Projects Tracked", value: "15K+", icon: Database },
      { label: "Uptime", value: "99.9%", icon: Server },
      { label: "App Store Rating", value: "4.8/5", icon: Globe },
    ],
    screenshots: [
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
    ],
    lessonsLearned:
      "Building FlowCircle taught me the importance of user feedback in early development stages. The initial version was feature-heavy, but user testing revealed that simplicity was key. I learned to prioritize core functionality and iterate based on real usage patterns rather than assumptions.",
    codeSnippet: `// Example: Real-time project sync
class ProjectSyncService {
  final SupabaseClient _supabase;
  
  Stream<List<Project>> watchProjects(String userId) {
    return _supabase
      .from('projects')
      .stream(primaryKey: ['id'])
      .eq('user_id', userId)
      .map((data) => data.map((json) => Project.fromJson(json)).toList());
  }
}`,
    codeLanguage: "dart",
  },
  autoleadcloser: {
    title: "AutoLeadCloser",
    tagline: "AI Sales Assistant That Qualifies Leads While You Sleep",
    description: "AI-driven lead qualification and automated email reply system",
    status: "Live",
    statusColor: "green",
    tech: ["Python", "Supabase", "Claude AI", "Gmail API"],
    github: "https://github.com/ar10000/AutoLeadCloser",
    demo: null, // Internal use
    demoVideo: null, // No public demo video
    pricing: null, // Pricing not specified
    problem:
      "Agencies and service businesses lose potential clients because initial lead emails pile up, responses are slow, and qualification requires manual back-and-forth. This creates bottlenecks, inconsistent lead handling, and missed revenue.",
    solution:
      "I built an end-to-end system that receives inbound emails, processes them with Claude AI, replies intelligently, qualifies the lead, and books a call automatically when readiness signals are detected. The pipeline runs autonomously while preserving full context and data privacy.",
    overview:
      "AutoLeadCloser handles the entire first-contact process. It reads emails, asks clarifying questions, extracts qualification signals (budget, timeline, authority), and maintains ongoing conversation threads. Once a lead is qualified, it sends a Calendly/Cal.com booking link instantly.",
    whyItMatters:
      "This eliminates one of the most time-consuming and inconsistent parts of sales. Businesses close more deals, lose fewer leads, and get an automated SDR that works 24/7—without sacrificing personalization or context.",
    features: [
      {
        icon: Bot,
        emoji: "🤖",
        title: "AI Email Responses",
        description: "Claude-powered, context-aware replies that feel human",
      },
      {
        icon: BarChart3,
        emoji: "📊",
        title: "Lead Qualification Engine",
        description: "Detects budget, timeline, and decision-maker",
      },
      {
        icon: Database,
        emoji: "💬",
        title: "Conversation Memory",
        description: "Maintains full email history per lead-client pair",
      },
      {
        icon: Calendar,
        emoji: "📅",
        title: "Automatic Booking",
        description: "Sends calendar links when the lead is ready",
      },
      {
        icon: Filter,
        emoji: "🚫",
        title: "Spam Detection",
        description: "Filters out irrelevant messages before processing",
      },
      {
        icon: Server,
        emoji: "🏢",
        title: "Multi-Tenant Support",
        description: "Separate data & logic per client",
      },
      {
        icon: Shield,
        emoji: "🔒",
        title: "Privacy-First Architecture",
        description: "Ensures leads always reply directly to the client",
      },
      {
        icon: Database,
        emoji: "💾",
        title: "Supabase Storage",
        description: "Secure conversation logging and state tracking",
      },
    ],
    techStack: [
      { name: "Python", category: "Backend", icon: Code2 },
      { name: "Supabase", category: "Database", icon: Database },
      { name: "Claude AI", category: "AI", icon: Sparkles },
      { name: "Gmail API", category: "Email", icon: Mail },
    ],
    howItWorks: null, // No step-by-step flow provided
    architecture:
      "AutoLeadCloser uses a Python-based backend that processes incoming emails via webhooks. Claude AI handles natural language understanding and generates context-aware responses. Supabase stores conversation history, lead data, and qualification signals. The Gmail API handles authenticated email sending, ensuring replies come from the client's domain. The system is designed with multi-tenant architecture, keeping data isolated per client while maintaining full conversation context.",
    metrics: null, // Metrics not specified
    screenshots: [
      "/images/projects/autoleadcloser-1.jpg",
      "/images/projects/autoleadcloser-2.jpg",
    ],
    lessonsLearned:
      "Building AutoLeadCloser reinforced the importance of maintaining human-like conversation quality while automating at scale. I learned that context preservation across email threads is critical—users expect the AI to remember previous exchanges. The biggest challenge was balancing automation speed with response quality, ensuring each reply feels personalized rather than templated.",
    codeSnippet: `# Example: AI-powered email response generation
from anthropic import Anthropic
import supabase

def generate_lead_response(lead_email: str, conversation_history: list) -> str:
    client = Anthropic()
    supabase_client = supabase.create_client(...)
    
    # Retrieve full conversation context
    context = "\\n".join([msg['content'] for msg in conversation_history])
    
    prompt = f"""
    You are a helpful sales assistant. Based on this conversation:
    {context}
    
    Generate a natural, helpful response that:
    1. Answers any questions
    2. Asks qualifying questions if needed
    3. Maintains a professional, friendly tone
    """
    
    response = client.messages.create(
        model="claude-3-5-sonnet-20241022",
        max_tokens=500,
        messages=[{"role": "user", "content": prompt}]
    )
    
    # Store in Supabase for conversation memory
    supabase_client.table('conversations').insert({
        'lead_id': lead_email,
        'response': response.content[0].text,
        'timestamp': datetime.now()
    })
    
    return response.content[0].text`,
    codeLanguage: "python",
  },
  "agency-autopilot": {
    title: "Agency Autopilot",
    description: "Complete workflow automation for service agencies",
    status: "In Development",
    statusColor: "blue",
    tech: ["Make.com", "n8n", "Zapier", "REST APIs"],
    github: "https://github.com/ar10000",
    demo: "https://agencyautopilot.com",
    problem:
      "Service agencies were drowning in admin work. Every new client meant hours of manual setup: creating projects, sending welcome emails, setting up invoices, updating CRMs. Teams spent 20+ hours per week on tasks that should be automatic—time that should go to client work.",
    solution:
      "I'm building Agency Autopilot to eliminate 80% of that manual work. One new client triggers everything: project creation, welcome sequences, invoice setup, CRM updates—all automated through Make.com and n8n workflows. Agencies get their time back to focus on what they do best: delivering results.",
    overview:
      "Agency Autopilot automates the entire agency workflow—from client onboarding to invoicing—so teams can focus on delivering value instead of pushing paperwork.",
    whyItMatters:
      "When you're spending more time on admin than client work, something's wrong. Agency Autopilot fixes that by automating everything that can be automated, so you can focus on what can't be.",
    features: [
      {
        icon: Zap,
        title: "Client Onboarding",
        description: "Automated workflows from first contact to project kickoff",
      },
      {
        icon: Database,
        title: "Project Tracking",
        description: "Real-time visibility into all active projects",
      },
      {
        icon: Server,
        title: "Invoice Automation",
        description: "Generate and send invoices automatically",
      },
      {
        icon: Globe,
        title: "Multi-Tool Integration",
        description: "Connects 50+ popular agency tools",
      },
    ],
    techStack: [
      { name: "Make.com", category: "Automation", icon: Zap },
      { name: "n8n", category: "Workflow", icon: Workflow },
      { name: "REST APIs", category: "Integration", icon: Server },
      { name: "PostgreSQL", category: "Database", icon: Database },
    ],
    architecture:
      "Agency Autopilot leverages a no-code/low-code architecture using Make.com and n8n for workflow orchestration. These platforms connect various APIs and services, with a central database storing configuration and state. The system is designed to be highly modular, allowing agencies to customize workflows to their specific needs.",
    metrics: null, // No metrics yet for in-development projects
    screenshots: [
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
    ],
    lessonsLearned:
      "Building Agency Autopilot reinforced the importance of understanding user workflows before automating them. I spent significant time mapping out agency processes manually before building any automation. This upfront work prevented costly rework and ensured the solution actually solved real problems.",
    codeSnippet: `// Example: Workflow configuration
{
  "workflow": "client_onboarding",
  "triggers": [
    {
      "type": "webhook",
      "event": "new_client_signed"
    }
  ],
  "steps": [
    {
      "action": "create_project",
      "tool": "asana",
      "config": {
        "name": "{{client.name}} - Onboarding",
        "team": "client_services"
      }
    },
    {
      "action": "send_email",
      "tool": "sendgrid",
      "template": "welcome_email"
    }
  ]
}`,
    codeLanguage: "json",
  },
  "portfolio-site": {
    title: "AI Product Builder Portfolio",
    description: "A modern, production-ready portfolio website showcasing AI-powered products and automation solutions",
    status: "Live",
    statusColor: "green",
    tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "Claude AI", "GitHub API", "Vercel"],
    github: "https://github.com/ar10000/portfolio_site",
    demo: "https://andrewryan.dev",
    problem:
      "Developers and product builders need a way to showcase their technical capabilities, AI integration skills, and production-ready applications. Traditional portfolios are static, don't demonstrate automation capabilities, and fail to showcase the full range of technical skills including AI integration, API development, and modern web architecture.",
    solution:
      "I built a modern, production-ready portfolio that demonstrates technical expertise through its own implementation. It features an AI-powered chatbot, automated GitHub project syncing, dynamic content management, and showcases modern web development best practices. The portfolio itself serves as proof of capability in full-stack development, AI integration, and automated workflows.",
    overview:
      "This portfolio is a modern, production-ready website built with Next.js 14, TypeScript, and Tailwind CSS. It features an interactive AI chatbot powered by Claude AI, automated project synchronization from GitHub repositories, dynamic project pages with detailed case studies, and an admin dashboard for content management. The site demonstrates expertise in modern web development, AI integration, serverless architecture, and automated workflows—all while serving as a showcase of technical capabilities.",
    whyItMatters:
      "This portfolio demonstrates technical proficiency through its own implementation. It showcases the ability to build modern web applications, integrate AI capabilities, create automated workflows, and deploy production-ready systems. It serves as both a portfolio and a working example of the quality and capabilities I bring to every project.",
    features: [
      {
        icon: Bot,
        title: "Interactive AI Chatbot",
        description: "Voice-enabled assistant powered by Claude AI for engaging visitor interaction",
      },
      {
        icon: Workflow,
        title: "Automated Project Management",
        description: "Projects sync automatically from GitHub repositories, keeping the portfolio up-to-date",
      },
      {
        icon: Sparkles,
        title: "Smart Content Extraction",
        description: "README files are parsed for project descriptions, automating content generation",
      },
      {
        icon: Server,
        title: "Dynamic Content Management",
        description: "Admin dashboard allows content management without direct code changes",
      },
      {
        icon: Smartphone,
        title: "Modern UI/UX",
        description: "Smooth animations, dark mode, and responsive design for an exceptional user experience",
      },
      {
        icon: Zap,
        title: "Performance Optimization",
        description: "Optimized loading, lazy loading, and caching for fast performance",
      },
      {
        icon: Shield,
        title: "SEO & Accessibility",
        description: "Implemented SEO best practices and WCAG AA compliance for broad reach and usability",
      },
      {
        icon: Globe,
        title: "Production Deployment",
        description: "Deployed, optimized, and maintained on Vercel with CI/CD automation",
      },
    ],
    techStack: [
      { name: "Next.js 14", category: "Framework", icon: Code2 },
      { name: "TypeScript", category: "Language", icon: Code2 },
      { name: "Tailwind CSS", category: "Styling", icon: Sparkles },
      { name: "Claude AI", category: "AI", icon: Bot },
      { name: "GitHub API", category: "Integration", icon: Github },
      { name: "Vercel", category: "Infrastructure", icon: Globe },
    ],
    architecture:
      "The architecture leverages Next.js 14 with App Router for server-side rendering and API routes for backend logic. TypeScript ensures type safety throughout the codebase. Integrations include Anthropic Claude AI for chatbot functionality, GitHub API for repository data synchronization, and Resend for email services. Deployment is handled via Vercel with GitHub Actions for CI/CD automation, utilizing a serverless architecture for scalability and cost-effectiveness. Performance is optimized through image optimization, code splitting, lazy loading, and caching strategies.",
    metrics: null,
    screenshots: [
      "/images/projects/portfolio-site-1.jpg",
      "/images/projects/portfolio-site-2.jpg",
      "/images/projects/portfolio-site-3.jpg",
    ],
    lessonsLearned:
      "Building this portfolio reinforced the importance of demonstrating capabilities through the product itself. I learned that a portfolio should be more than a showcase—it should be a working example of your skills. The integration of AI, automation, and modern web technologies in the portfolio itself proves technical proficiency better than any description could. Performance optimization and SEO were critical for ensuring the portfolio reaches its intended audience effectively.",
    codeSnippet: `// Example: AI chatbot integration with Claude
import { Anthropic } from '@anthropic-ai/sdk';

export async function POST(request: Request) {
  const anthropic = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY,
  });
  
  const message = await anthropic.messages.create({
    model: 'claude-3-5-sonnet-20241022',
    max_tokens: 1024,
    messages: [
      {
        role: 'user',
        content: userMessage,
      },
    ],
  });
  
  return Response.json({ response: message.content });
}`,
    codeLanguage: "typescript",
  },
};

// Sidebar navigation component
function SidebarNavigation({ sections }: { sections: string[] }) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.toLowerCase().replace(/\s+/g, "-"));
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.toLowerCase().replace(/\s+/g, "-"));
        if (element) observer.unobserve(element);
      });
    };
  }, [sections]);

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section.toLowerCase().replace(/\s+/g, "-"));
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="sticky top-24 space-y-2">
      <div className="text-sm font-semibold text-gray-400 mb-4">Quick Links</div>
      {sections.map((section) => {
        const sectionId = section.toLowerCase().replace(/\s+/g, "-");
        const isActive = activeSection === sectionId;
        return (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            className={`w-full text-left px-4 py-2 rounded-lg transition-colors flex items-center gap-2 ${
              isActive
                ? "bg-purple-500/20 text-purple-400 border-l-2 border-purple-500"
                : "text-gray-400 hover:text-white hover:bg-gray-800/50"
            }`}
          >
            <ChevronRight
              className={`h-4 w-4 transition-transform ${
                isActive ? "opacity-100" : "opacity-0"
              }`}
            />
            {section}
          </button>
        );
      })}
    </nav>
  );
}

// Code block component with syntax highlighting
function CodeBlock({ code, language }: { code: string; language: string }) {
  return (
    <div className="relative rounded-lg overflow-hidden border border-gray-800">
      <div className="flex items-center justify-between px-4 py-2 bg-gray-900 border-b border-gray-800">
        <span className="text-xs text-gray-400 uppercase">{language}</span>
        <button
          onClick={() => navigator.clipboard.writeText(code)}
          className="text-xs text-gray-400 hover:text-white transition-colors"
        >
          Copy
        </button>
      </div>
      <pre className="p-4 overflow-x-auto bg-gray-950 text-sm">
        <code className="text-gray-300 font-mono">{code}</code>
      </pre>
    </div>
  );
}

// Image gallery component
function ImageGallery({ images }: { images: string[] }) {
  const [selectedImage, setSelectedImage] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="relative aspect-video rounded-lg overflow-hidden border border-gray-800 bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <ImageIcon className="h-16 w-16 text-gray-700 mx-auto mb-2" />
          <p className="text-gray-500 text-sm">No screenshots available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Main image display */}
      <div className="relative aspect-video rounded-lg overflow-hidden border border-gray-800 bg-gray-900">
        <img
          src={images[selectedImage]}
          alt={`Screenshot ${selectedImage + 1}`}
          className="w-full h-full object-cover"
          onError={(e) => {
            // Fallback to placeholder if image doesn't exist
            const target = e.target as HTMLImageElement;
            target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect fill='%230a0a0a' width='800' height='600'/%3E%3Crect fill='%231a1a1a' x='0' y='0' width='800' height='600'/%3E%3Cg opacity='0.3'%3E%3Ccircle cx='400' cy='200' r='50' fill='%233b82f6'/%3E%3Ccircle cx='400' cy='400' r='40' fill='%238b5cf6'/%3E%3C/g%3E%3Ctext x='400' y='300' font-family='system-ui' font-size='18' fill='%234b5563' text-anchor='middle' dominant-baseline='middle'%3EImage Placeholder%3C/text%3E%3C/svg%3E";
            target.onerror = null; // Prevent infinite loop
          }}
        />
      </div>
      {/* Thumbnail grid */}
      {images.length > 1 && (
        <div className="grid grid-cols-3 gap-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                selectedImage === index
                  ? "border-purple-500"
                  : "border-gray-800 hover:border-gray-700"
              }`}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to placeholder if image doesn't exist
                  const target = e.target as HTMLImageElement;
                  target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='150' viewBox='0 0 200 150'%3E%3Crect fill='%230a0a0a' width='200' height='150'/%3E%3Crect fill='%231a1a1a' x='0' y='0' width='200' height='150'/%3E%3Cg opacity='0.3'%3E%3Ccircle cx='100' cy='50' r='15' fill='%233b82f6'/%3E%3Ccircle cx='100' cy='100' r='12' fill='%238b5cf6'/%3E%3C/g%3E%3C/svg%3E";
                  target.onerror = null; // Prevent infinite loop
                }}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// Hero section with video embed
function HeroSection({ project }: { project: any }) {
  if (!project.tagline && !project.demoVideo) return null;

  return (
    <section className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
          {project.title}
        </h1>
        {project.tagline && (
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
            {project.tagline}
          </p>
        )}
      </motion.div>

      {project.demoVideo && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 rounded-lg overflow-hidden border border-gray-800 shadow-2xl"
        >
          <div className="relative aspect-video bg-gray-900">
            <iframe
              src={project.demoVideo}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Demo Video"
            />
          </div>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <a href="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-600 to-blue-600 rounded-lg font-semibold text-white flex items-center gap-2 shadow-lg shadow-blue-500/50"
          >
            <Calendar className="h-5 w-5" />
            Book Demo Call
          </motion.button>
        </a>
        <a href="#pricing">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gray-800 text-gray-300 rounded-lg font-semibold border border-gray-700 hover:bg-gray-700 transition-colors flex items-center gap-2"
          >
            <DollarSign className="h-5 w-5" />
            See Pricing
          </motion.button>
        </a>
      </motion.div>
    </section>
  );
}

// How It Works flow diagram
function HowItWorks({ steps }: { steps: any[] }) {
  return (
    <section id="how-it-works" className="scroll-mt-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-8"
      >
        How It Works
      </motion.h2>
      <div className="relative">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative flex items-start gap-4 mb-8 last:mb-0"
          >
            {/* Connecting line */}
            {index < steps.length - 1 && (
              <div className="absolute left-6 top-12 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-600" />
            )}
            
            {/* Step number circle */}
            <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
              {step.step}
            </div>
            
            {/* Step content */}
            <div className="flex-1 pt-1">
              <div className="flex items-center gap-3 mb-2">
                <step.icon className="h-6 w-6 text-blue-400" />
                <h3 className="text-xl font-semibold text-white">{step.title}</h3>
              </div>
              <p className="text-gray-400">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// Pricing teaser section
function PricingTeaser({ pricing, ctaText, ctaLink }: { pricing: string; ctaText: string; ctaLink: string }) {
  return (
    <section id="pricing" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="p-8 rounded-xl border border-blue-500/30 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-blue-500/10"
      >
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Pricing
          </h2>
          <p className="text-2xl text-white font-semibold mb-6">{pricing}</p>
        </div>
        <div className="flex justify-center">
          <a href={ctaLink}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-600 to-blue-600 rounded-lg font-semibold text-white flex items-center gap-2 shadow-lg shadow-blue-500/50"
            >
              <Calendar className="h-5 w-5" />
              {ctaText}
            </motion.button>
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}) {
  // Handle both Promise and resolved params
  const resolvedParams = params instanceof Promise ? use(params) : params;
  const { slug } = resolvedParams;
  // Handle both hyphen and underscore versions of slugs
  const project = projectData[slug] || projectData[slug.replace(/_/g, '-')] || projectData[slug.replace(/-/g, '_')];

  if (!project) {
    return (
      <div className="pt-24 px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link
            href="/projects"
            className="text-purple-400 hover:text-purple-300"
          >
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const sections = [
    "Overview",
    "Key Features",
    "Tech Stack",
    ...(project.howItWorks ? ["How It Works"] : []),
    "Architecture",
    ...(project.metrics ? ["Results"] : []),
    "Screenshots",
    ...(project.pricing ? ["Pricing"] : []),
    "Lessons Learned",
  ];

  const StatusBadge = ({ status, color }: { status: string; color: string }) => {
    const colors = {
      green: "bg-green-500/20 text-green-400 border-green-500/30",
      yellow: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
      blue: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    };
    const Icon = status === "Live" ? CheckCircle2 : Clock;

    return (
      <span
        className={`inline-flex items-center gap-1.5 px-3 py-1 text-sm font-semibold rounded-full border ${colors[color as keyof typeof colors]}`}
      >
        <Icon className="h-4 w-4" />
        {status}
      </span>
    );
  };

  // Determine if this is AutoLeadCloser for special styling
  const isAutoLeadCloser = slug === "autoleadcloser";
  const gradientColors = isAutoLeadCloser
    ? "from-blue-500 via-purple-600 to-blue-600"
    : "from-purple-500 to-blue-600";
  const gradientText = isAutoLeadCloser
    ? "from-blue-400 via-purple-500 to-blue-600"
    : "from-purple-400 to-blue-500";

  return (
    <div className="pt-24 px-4 sm:px-6 lg:px-8 pb-20">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
        </motion.div>

        {/* Hero Section (for AutoLeadCloser) */}
        {project.tagline && <HeroSection project={project} />}

        {/* Standard Header Section (if no hero) */}
        {!project.tagline && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
              <div>
                <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r ${gradientText} bg-clip-text text-transparent`}>
                  {project.title}
                </h1>
                <p className="text-xl text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap items-center gap-4">
                  <StatusBadge status={project.status} color={project.statusColor} />
                  {project.tech.slice(0, 4).map((tech: string) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-gray-800 text-gray-300 rounded-full border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-6 py-3 bg-gradient-to-r ${gradientColors} rounded-lg font-semibold text-white flex items-center gap-2 shadow-lg shadow-purple-500/50 group`}
                  >
                    <Play className="h-5 w-5" />
                    <span className="group-hover:hidden">Try Demo</span>
                    <span className="hidden group-hover:inline">Let's build something</span>
                  </motion.button>
                </a>
                )}
                {/* Always show GitHub button - either link or "Private Repository" */}
                {project.github ? (
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 bg-gray-800 text-gray-300 rounded-lg font-semibold border border-gray-700 hover:bg-gray-700 transition-colors flex items-center gap-2"
                    >
                      <Github className="h-5 w-5" />
                      View Code
                    </motion.button>
                  </a>
                ) : (
                  <motion.div
                    className="px-6 py-3 bg-gray-800/50 text-gray-500 rounded-lg font-semibold border border-gray-700/50 flex items-center gap-2 cursor-not-allowed"
                    title="This repository is private"
                  >
                    <Github className="h-5 w-5" />
                    Private Repository
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-16">
            {/* Overview */}
            <section id="overview" className="scroll-mt-24">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold mb-6"
              >
                The Story
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="prose prose-invert max-w-none space-y-6"
              >
                {project.problem && (
                  <div className="p-6 rounded-lg border border-red-500/20 bg-red-500/5">
                    <h3 className="text-xl font-semibold mb-3 text-red-400">
                      The problem was...
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {project.problem}
                    </p>
                  </div>
                )}
                
                {project.solution && (
                  <div className="p-6 rounded-lg border border-green-500/20 bg-green-500/5">
                    <h3 className="text-xl font-semibold mb-3 text-green-400">
                      The solution...
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {project.solution}
                    </p>
                  </div>
                )}
                
                {project.overview && (
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {project.overview}
                  </p>
                )}
                
                {project.whyItMatters && (
                  <div className="p-6 rounded-lg border border-purple-500/20 bg-purple-500/5">
                    <h3 className="text-xl font-semibold mb-2 text-purple-400">
                      Why it matters
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {project.whyItMatters}
                    </p>
                  </div>
                )}
              </motion.div>
            </section>

            {/* Key Features */}
            <section id="key-features" className="scroll-mt-24">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold mb-6"
              >
                Key Features
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature: any, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`p-6 rounded-lg border border-gray-800 bg-gray-900/50 transition-colors ${
                      isAutoLeadCloser
                        ? "hover:border-blue-500/50"
                        : "hover:border-purple-500/50"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      {feature.emoji && (
                        <span className="text-2xl">{feature.emoji}</span>
                      )}
                      <feature.icon
                        className={`h-8 w-8 ${
                          isAutoLeadCloser ? "text-blue-400" : "text-purple-400"
                        }`}
                      />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Tech Stack */}
            <section id="tech-stack" className="scroll-mt-24">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold mb-6"
              >
                Tech Stack
              </motion.h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {project.techStack.map((tech: any, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`p-4 rounded-lg border border-gray-800 bg-gray-900/50 text-center transition-colors ${
                      isAutoLeadCloser
                        ? "hover:border-blue-500/50"
                        : "hover:border-purple-500/50"
                    }`}
                  >
                    <tech.icon
                      className={`h-8 w-8 mx-auto mb-2 ${
                        isAutoLeadCloser ? "text-blue-400" : "text-purple-400"
                      }`}
                    />
                    <div className="font-semibold text-white mb-1 text-sm">{tech.name}</div>
                    <div className="text-xs text-gray-400">{tech.category}</div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* How It Works */}
            {project.howItWorks && (
              <HowItWorks steps={project.howItWorks} />
            )}

            {/* Architecture */}
            <section id="architecture" className="scroll-mt-24">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold mb-6"
              >
                Architecture
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="p-6 rounded-lg border border-gray-800 bg-gray-900/50"
              >
                <p className="text-gray-300 leading-relaxed">{project.architecture}</p>
                {project.codeSnippet && (
                  <div className="mt-6">
                    <CodeBlock code={project.codeSnippet} language={project.codeLanguage} />
                  </div>
                )}
              </motion.div>
            </section>

            {/* Results/Metrics */}
            {project.metrics && (
              <section id="results" className="scroll-mt-24">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl font-bold mb-6"
                >
                  Results
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {project.metrics.map((metric: any, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="p-6 rounded-lg border border-gray-800 bg-gray-900/50 text-center"
                    >
                      <metric.icon
                        className={`h-8 w-8 mx-auto mb-3 ${
                          isAutoLeadCloser ? "text-blue-400" : "text-purple-400"
                        }`}
                      />
                      <div className="text-2xl font-bold text-white mb-1">
                        {metric.value}
                      </div>
                      <div className="text-sm text-gray-400">{metric.label}</div>
                    </motion.div>
                  ))}
                </div>
              </section>
            )}

            {/* Screenshots */}
            <section id="screenshots" className="scroll-mt-24">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold mb-6"
              >
                Screenshots & Demo
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <ImageGallery images={project.screenshots} />
              </motion.div>
            </section>

            {/* Pricing Teaser */}
            {project.pricing && (
              <PricingTeaser
                pricing={project.pricing}
                ctaText="Book a strategy call"
                ctaLink="/contact"
              />
            )}

            {/* Lessons Learned */}
            <section id="lessons-learned" className="scroll-mt-24">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold mb-6"
              >
                Lessons Learned
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`p-6 rounded-lg border ${isAutoLeadCloser ? 'border-blue-500/30 bg-blue-500/5' : 'border-purple-500/30 bg-purple-500/5'}`}
              >
                <p className="text-gray-300 leading-relaxed">{project.lessonsLearned}</p>
              </motion.div>
            </section>
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-1">
            <SidebarNavigation sections={sections} />
          </div>
        </div>
      </div>
    </div>
  );
}

