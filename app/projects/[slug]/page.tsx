"use client";

import { motion, AnimatePresence } from "framer-motion";
import { use, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Github,
  CheckCircle2,
  Clock,
  Code2,
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
  ChevronDown,
  ChevronUp,
  FileText,
  Terminal,
} from "lucide-react";

// Project interface for type safety
interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  heroSummary: string;
  roleDuration: string;
  role: string;
  context: string;
  problem: string;
  solution: string;
  impact: string;
  features: Array<{
    icon: any;
    title: string;
    description: string;
  }>;
  techStack: Array<{
    name: string;
    category: string;
    icon: any;
  }>;
  architecture: string;
  technicalImplementation: string[];
  metrics: any;
  screenshots: string[];
  screenshotCaptions?: string[];
  cta: string;
  lessonsLearned: string;
  codeSnippet: string | null;
  codeLanguage: string | null;
  tagline?: string;
  pricing?: any;
  howItWorks?: any;
}

// Project data structure - in production, this would come from a CMS or database
const projectData: Record<string, Project> = {
  "creative-garden": {
    title: "Creative Garden",
    description: "Flutter app for managing creative projects through lifecycle stages. Features momentum scoring, offline caching, and GDPR-compliant data export.",
    tech: ["Flutter", "Supabase", "Dart", "PostgreSQL"],
    github: "https://github.com/ar10000/creative-garden",
    heroSummary: "Flutter app for managing creative projects through lifecycle stages. Uses Supabase triggers for momentum scoring. Production-ready with offline caching and GDPR export.",
    roleDuration: "Role: Full-stack AI Builder\nTimeline: 4 weeks\nTools: Flutter, Supabase, Dart, PostgreSQL",
    role: "Mobile Developer (Flutter)",
    context: "Creative insights are often lost due to friction in standard note-taking apps.",
    problem:
      "Creatives lose track of ideas due to friction and slow load times in standard note apps.",
    solution:
      "Developed a high-performance cross-platform Flutter app designed for instant, frictionless idea capture.",
    impact: "Optimized Flutter rendering engine to achieve 60fps performance, ensuring zero-latency input for rapid idea capture.",
    features: [
      {
        icon: Workflow,
        title: "Project lifecycle management (Seed → Growing → Alive → Compost)",
        description: "Projects move through defined stages from idea to completion",
      },
      {
        icon: BarChart3,
        title: "Momentum scoring via Supabase database triggers",
        description: "Calculates project health from check-in frequency and energy levels",
      },
      {
        icon: Clock,
        title: "Check-ins with energy level tracking",
        description: "Users log progress with energy levels to track project momentum",
      },
      {
        icon: BarChart3,
        title: "Analytics dashboard showing project health over time",
        description: "Visual insights into project activity and momentum trends",
      },
      {
        icon: Database,
        title: "Offline functionality with local caching",
        description: "Full app functionality available without internet connection",
      },
      {
        icon: Shield,
        title: "GDPR-compliant data export",
        description: "Users can export all their data in JSON format",
      },
      {
        icon: Smartphone,
        title: "Cross-platform (iOS, Android) with single codebase",
        description: "Flutter enables deployment to both platforms from one codebase",
      },
    ],
    techStack: [
      { name: "Flutter", category: "Framework", icon: Smartphone },
      { name: "Supabase", category: "Backend", icon: Database },
      { name: "Dart", category: "Language", icon: Code2 },
      { name: "PostgreSQL", category: "Database", icon: Database },
    ],
    architecture:
      "Frontend: Flutter cross-platform application built with Provider for state management\nBackend / DB: Supabase PostgreSQL with database triggers for momentum scoring\nCaching: Local storage layer for offline functionality\nInfrastructure: Single Dart codebase deployed to iOS and Android",
    technicalImplementation: [
      "Supabase triggers calculate momentum scores automatically when check-ins are logged",
      "Local caching layer enables full offline functionality",
      "Flutter state management using Provider pattern",
      "PostgreSQL database with optimized queries for analytics",
      "GDPR export functionality generates JSON of all user data",
      "Cross-platform deployment from single Dart codebase"
    ],
    metrics: null,
    screenshots: [
      "/images/projects/creative-garden-1.jpg",
      "/images/projects/creative-garden-2.jpg",
      "/images/projects/creative-garden-3.jpg",
    ],
    cta: "Want a system like this? Book a 10-minute Fit Call.",
    lessonsLearned:
      "Creative Garden demonstrates that database triggers can handle complex scoring logic efficiently. The project proves that offline-first mobile apps require careful state management and local caching strategies. Building for cross-platform deployment from day one allows reaching both iOS and Android users without maintaining separate codebases. The architecture prioritizes user data ownership with GDPR-compliant export functionality.",
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
    description: "Minimalist project management app for individual creatives. Built with Next.js 14 and Supabase, focusing on simplicity and clean architecture.",
    tech: ["Next.js 14", "TypeScript", "Supabase", "PostgreSQL"],
    github: "https://github.com/ar10000/flowcircle",
    heroSummary: "Minimalist project management app built with Next.js 14 and Supabase. Features authentication, profile management, and reflection engine structure. Early build focusing on core foundations.",
    roleDuration: "Role: Full-stack AI Builder\nTimeline: 4 weeks\nTools: Next.js 14, TypeScript, Supabase, PostgreSQL",
    role: "Full-Stack Developer (Next.js)",
    context: "Standard productivity tools often overwhelm neurodivergent users with visual clutter.",
    problem:
      "Standard productivity tools often overwhelm neurodivergent users with visual clutter.",
    solution:
      "Designed a 'visual-first' workflow app focusing on cognitive accessibility and reduced decision fatigue.",
    impact: "Implements a proprietary 'visual-first' navigation system designed to reduce cognitive load compared to standard list views.",
    features: [
      {
        icon: Shield,
        title: "User authentication via Supabase",
        description: "Secure authentication system using Supabase Auth",
      },
      {
        icon: Workflow,
        title: "Project creation and management",
        description: "Simple interface for creating and tracking projects",
      },
      {
        icon: Database,
        title: "Reflection engine data structure",
        description: "Database schema designed for reflection and progress tracking",
      },
      {
        icon: Sparkles,
        title: "Clean, accessible UI with minimal cognitive load",
        description: "Minimalist design focused on clarity and simplicity",
      },
      {
        icon: Server,
        title: "Database schema designed for future multi-user expansion",
        description: "Architecture allows scaling to team features later",
      },
      {
        icon: Zap,
        title: "Next.js App Router for routing and data fetching",
        description: "Modern routing with optimized performance patterns",
      },
    ],
    techStack: [
      { name: "Next.js 14", category: "Framework", icon: Code2 },
      { name: "TypeScript", category: "Language", icon: Code2 },
      { name: "Supabase", category: "Backend", icon: Database },
      { name: "PostgreSQL", category: "Database", icon: Database },
    ],
    architecture:
      "Frontend: Next.js 14 App Router with TypeScript and Tailwind CSS\nBackend / DB: Supabase PostgreSQL for authentication and data storage\nStyling: Tailwind CSS with shadcn/ui components for consistent design\nInfrastructure: Clean architecture pattern designed for future team features",
    technicalImplementation: [
      "Authentication system using Supabase Auth",
      "PostgreSQL database with optimized queries",
      "Next.js 14 App Router for routing and data fetching",
      "Tailwind CSS + shadcn/ui for consistent design",
      "TypeScript for type safety",
      "Clean architecture pattern allowing future team features"
    ],
    metrics: null,
    screenshots: [
      "/images/projects/flowcircle-1.jpg",
      "/images/projects/flowcircle-2.jpg",
      "/images/projects/flowcircle-3.jpg",
    ],
    cta: "Want a system like this? Book a 10-minute Fit Call.",
    lessonsLearned:
      "FlowCircle demonstrates the importance of starting with solid technical foundations. The project focuses on clean data architecture and simple user experience before adding complexity. Building for individual users first allows testing core concepts before scaling to team features. The architecture proves that starting simple doesn't mean building poorly—proper database design and authentication setup allow future expansion.",
    codeSnippet: `// Example: Project creation with Supabase
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

export async function createProject(userId: string, projectData: {
  title: string;
  description: string;
}) {
  const { data, error } = await supabase
      .from('projects')
    .insert({
      user_id: userId,
      title: projectData.title,
      description: projectData.description,
      created_at: new Date().toISOString(),
    })
    .select()
    .single();
  
  if (error) throw error;
  return data;
}`,
    codeLanguage: "typescript",
  },
  autoleadcloser: {
    title: "AutoLeadCloser",
    tagline: "AI-Powered Sales Automation System",
    description: "AI-powered lead qualification and response automation for service businesses. Processes inbound leads automatically and routes qualified prospects to calendar booking.",
    tech: ["Python", "Supabase", "Claude AI", "Gmail API"],
    github: "https://github.com/ar10000/AutoLeadCloser",
    pricing: null, // Pricing not specified
    heroSummary: "AI email qualification system that processes inbound leads automatically. Extracts qualification criteria from natural language and routes qualified leads to calendar booking. Production-ready prototype being tested.",
    roleDuration: "Role: Full-stack AI Builder\nTimeline: 6 weeks\nTools: Python, Supabase, Claude AI, Gmail API",
    role: "Full-Stack Developer & AI Engineer",
    context: "Sales teams often waste hours manually filtering spam and low-quality leads.",
    problem:
      "Small business owners lose ~10 hours/week manually filtering spam and unqualified leads.",
    solution:
      "Built an autonomous AI agent using Claude API that parses emails, scores lead quality, and drafts replies.",
    impact: "Engineered to replace manual data entry, reducing a typical 15-minute lead qualification process to a 3-second API call.",
    features: [
      {
        icon: Clock,
        title: "Automated Email Responses",
        description: "System processes leads and generates responses automatically",
      },
      {
        icon: Bot,
        title: "Qualification Criteria Extraction",
        description: "AI extracts budget, timeline, decision authority, and project scope from email content",
      },
      {
        icon: MessageSquare,
        title: "Conversation Context Preservation",
        description: "Full email thread history maintained for context-aware responses",
      },
      {
        icon: Calendar,
        title: "Automatic Meeting Booking",
        description: "Qualified leads are automatically routed to calendar booking",
      },
      {
        icon: Workflow,
        title: "Automated Lead Processing",
        description: "Handles leads automatically outside business hours",
      },
      {
        icon: Shield,
        title: "Multi-tenant Data Isolation",
        description: "Each client's lead data and conversations are isolated",
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
      "Back-end: Python webhook handlers processing incoming emails\nAI layer: Claude AI for natural language understanding and response generation\nDatabase: Supabase PostgreSQL storing conversation history, lead data, and qualification signals\nEmail: Gmail API for authenticated email sending from client domain\nAutomations: Webhook-triggered processing pipeline with retry logic",
    technicalImplementation: [
      "Webhook handlers process incoming lead emails automatically",
      "Claude AI extracts budget, timeline, and decision authority from email content",
      "Full email thread history maintained for context-aware responses",
      "Qualified leads routed to calendar booking automatically",
      "Error handling and retry mechanisms ensure reliability",
      "Gmail API used for authenticated email sending from client domain"
    ],
    metrics: [
      {
        title: "99% Faster Response Time",
        subtext: "Automated qualification reduces response time from ~24h to under 2 minutes.",
        icon: Zap,
      },
      {
        title: "3–5× Conversion Lift",
        subtext: "Instant AI follow-ups eliminate SDR delays and increase conversions.",
        icon: BarChart3,
      },
      {
        title: "70–85% Lower CPL",
        subtext: "Automation reduces reliance on manual SDR teams and drives down CPL.",
        icon: DollarSign,
      },
      {
        title: "40–60% Shorter Cycles",
        subtext: "Automated sequences, scoring, and routing accelerate qualification cycles.",
        icon: Workflow,
      },
      {
        title: "80–90% Less Manual Work",
        subtext: "Automated intake, Q&A, follow-ups, and booking eliminate manual tasks.",
        icon: Bot,
      },
    ],
    screenshots: [
      "/images/projects/autoleadcloser-1.jpg",
      "/images/projects/autoleadcloser-2.jpg",
    ],
    cta: "Want a system like this? Book a 10-minute Fit Call.",
    lessonsLearned:
      "AutoLeadCloser demonstrates that AI can extract structured qualification data from natural language email content. The system shows how webhook-based processing enables automated lead handling without manual intervention. The architecture prioritizes reliability through error handling and retry logic, designed to prevent data loss during processing failures.",
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
  "portfolio-site": {
    title: "AI Product Builder Portfolio",
    description: "Modern portfolio website showcasing AI-powered products and automation solutions. Demonstrates technical capabilities through interactive features and automated workflows.",
    tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "Claude AI", "GitHub API", "Vercel"],
    github: "https://github.com/ar10000/portfolio_site",
    heroSummary: "Portfolio website that demonstrates technical capabilities through its own implementation. Serves as both a showcase and working example of Next.js 14, AI integration, and automated content management.",
    roleDuration: "Role: Full-stack AI Builder\nTimeline: 4 weeks\nTools: Next.js 14, TypeScript, Tailwind CSS, Claude AI, GitHub API, Vercel",
    role: "Full-Stack Developer (Next.js)",
    context: "Traditional portfolios are static and don't demonstrate automation capabilities.",
    problem:
      "• Traditional portfolios are static and don't demonstrate automation capabilities\n• No way to showcase AI integration skills and modern web architecture\n• Static sites fail to showcase the full range of technical skills including API development\n• Need for dynamic content management without direct code changes",
    solution:
      "The portfolio functions as a working demonstration of technical capabilities. Visitors can interact with an AI chatbot that answers questions about services and projects. Project information syncs automatically from GitHub repositories, keeping the portfolio current without manual updates. Content management happens through an admin interface, allowing updates without code changes. The portfolio itself proves the technical skills it describes.",
    impact: "The Portfolio Website serves as a living demonstration of technical capabilities, showcasing AI integration, automated content management, and modern web architecture. It provides visitors with an interactive experience while automatically staying current through GitHub integration.",
    features: [
      {
        icon: Bot,
        title: "AI Visitor Assistant",
        description: "Chatbot answers questions about services, projects, and capabilities using Claude AI",
      },
      {
        icon: Workflow,
        title: "GitHub Repository Sync",
        description: "Projects automatically sync from GitHub repositories, keeping portfolio current",
      },
      {
        icon: Sparkles,
        title: "README Content Extraction",
        description: "Project descriptions extracted from repository README files",
      },
      {
        icon: Server,
        title: "Admin Content Management",
        description: "Dashboard interface for updating content without code changes",
      },
      {
        icon: Smartphone,
        title: "Responsive Design",
        description: "Optimized layouts for desktop, tablet, and mobile devices",
      },
      {
        icon: Zap,
        title: "Performance Optimization",
        description: "Image optimization, code splitting, and caching for optimized load times",
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
      "Front-end: Next.js 14 App Router with TypeScript and Tailwind CSS\nBack-end: Serverless API routes for backend logic and data processing\nAI layer: Claude AI API for chatbot functionality and content processing\nAutomations: GitHub API integration for repository data synchronization\nInfrastructure: Vercel serverless deployment with GitHub Actions CI/CD",
    technicalImplementation: [
      "GitHub API integration syncs project data automatically from repositories",
      "AI chatbot built with Claude AI API for visitor interaction and questions",
      "Serverless API routes handle backend logic and data processing",
      "Next.js App Router provides optimized routing and data fetching",
      "Vercel deployment with GitHub Actions for automated CI/CD",
      "Content management through admin interface without code changes"
    ],
    metrics: null,
    screenshots: [
      "/images/projects/portfolio-website-1.jpg",
      "/images/projects/portfolio-website-2.jpg",
      "/images/projects/portfolio-website-3.jpg",
    ],
    cta: "Want a system like this? Book a 10-minute Fit Call.",
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
  launchlens: {
    title: "LaunchLens",
    description: "Product launch analytics and tracking platform. Real-time dashboards and automated insights for launch performance.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL"],
    github: "https://github.com/ar10000/LaunchLens",
    heroSummary: "Product launch analytics platform providing real-time dashboards and automated insights. Tracks launch performance metrics and provides actionable data for product teams.",
    roleDuration: "Role: Full-stack Developer\nTimeline: In progress\nTools: Next.js, TypeScript, Tailwind CSS, Supabase, PostgreSQL",
    role: "Frontend Engineer (Next.js)",
    context: "Product managers struggle to track metrics across disconnected tools.",
    problem:
      "• Product teams lack visibility into launch performance metrics\n• Manual tracking of launch data is time-consuming and error-prone\n• No centralized platform for tracking launch analytics across multiple products\n• Difficult to compare launch performance across different products or time periods",
    solution:
      "LaunchLens provides a comprehensive analytics platform for tracking product launches. The system aggregates launch data from multiple sources, provides real-time dashboards, and generates automated insights. Teams can track key metrics, compare performance across launches, and identify trends to improve future launches.",
    impact: "Centralizes fragmented data sources into a real-time dashboard, eliminating the need for manual spreadsheet updates.",
    features: [
      {
        icon: BarChart3,
        title: "Real-time Launch Dashboards",
        description: "Live dashboards showing launch performance metrics and KPIs",
      },
      {
        icon: Zap,
        title: "Automated Analytics",
        description: "Automated insights and performance tracking without manual setup",
      },
      {
        icon: Filter,
        title: "Multi-Product Tracking",
        description: "Track and compare launches across multiple products",
      },
      {
        icon: Database,
        title: "Data Aggregation",
        description: "Centralized platform aggregating launch data from multiple sources",
      },
      {
        icon: BarChart3,
        title: "Performance Comparison",
        description: "Compare launch performance across different products and time periods",
      },
      {
        icon: Sparkles,
        title: "Actionable Insights",
        description: "Automated recommendations based on launch performance data",
      },
    ],
    techStack: [
      { name: "Next.js", category: "Framework", icon: Code2 },
      { name: "TypeScript", category: "Language", icon: Code2 },
      { name: "Tailwind CSS", category: "Styling", icon: Sparkles },
      { name: "Supabase", category: "Backend", icon: Database },
      { name: "PostgreSQL", category: "Database", icon: Database },
    ],
    architecture:
      "Frontend: Next.js application with TypeScript and Tailwind CSS\nBackend: Supabase for authentication and data storage\nDatabase: PostgreSQL for storing launch metrics and analytics data\nInfrastructure: Serverless deployment with real-time data processing",
    technicalImplementation: [
      "Next.js App Router for optimized routing and data fetching",
      "Supabase integration for authentication and real-time data",
      "PostgreSQL database optimized for analytics queries",
      "Real-time dashboard updates using Supabase subscriptions",
      "Automated data aggregation from multiple sources",
      "Performance comparison algorithms for cross-launch analysis"
    ],
    metrics: null,
    screenshots: [
      "/images/projects/launchlens-1.png",
      "/images/projects/launchlens-2.jpg",
      "/images/projects/launchlens-3.jpg",
    ],
    cta: "Want a system like this? Book a 10-minute Fit Call.",
    lessonsLearned:
      "LaunchLens demonstrates the importance of real-time data visualization for product teams. Building analytics platforms requires careful consideration of data aggregation, query optimization, and user experience. The project shows how modern web technologies can create powerful analytics tools that provide actionable insights.",
    codeSnippet: null,
    codeLanguage: null,
  },
  "adaptive-resume": {
    title: "Adaptive Resume",
    description: "Dynamic resume builder that adapts content based on job requirements and applicant tracking system optimization.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL"],
    github: "https://github.com/ar10000/adaptive-resume",
    heroSummary: "Dynamic resume builder that adapts content based on job requirements. Features ATS optimization, multiple resume versions, and intelligent content customization.",
    roleDuration: "Role: Full-stack Developer\nTimeline: In progress\nTools: Next.js, TypeScript, Tailwind CSS, Supabase, PostgreSQL",
    role: "Full-Stack Developer (Next.js)",
    context: "Job seekers need to customize resumes for each application but lack efficient tools.",
    problem:
      "• Job seekers need to customize resumes for each application but lack efficient tools\n• Applicant Tracking Systems (ATS) require specific formatting and keyword optimization\n• Managing multiple resume versions for different job types is time-consuming\n• No intelligent system to adapt resume content based on job descriptions",
    solution:
      "Adaptive Resume provides a dynamic resume builder that automatically adapts content based on job requirements. The system analyzes job descriptions, optimizes content for ATS compatibility, and generates tailored resume versions. Users can maintain a master resume and generate customized versions for specific applications with intelligent keyword matching and formatting optimization.",
    impact: "Parses and reformats complex PDF structures dynamically, removing the need for manual layout adjustments.",
    features: [
      {
        icon: FileText,
        title: "Dynamic Content Adaptation",
        description: "Automatically adapts resume content based on job description requirements",
      },
      {
        icon: Shield,
        title: "ATS Optimization",
        description: "Optimizes formatting and keywords for Applicant Tracking System compatibility",
      },
      {
        icon: Workflow,
        title: "Multiple Resume Versions",
        description: "Generate and manage multiple resume versions from a single master template",
      },
      {
        icon: Sparkles,
        title: "Intelligent Keyword Matching",
        description: "Analyzes job descriptions and suggests relevant keywords and skills",
      },
      {
        icon: Database,
        title: "Resume Version Management",
        description: "Store and organize multiple resume versions for different job applications",
      },
      {
        icon: Zap,
        title: "Export Options",
        description: "Export resumes in multiple formats optimized for ATS systems",
      },
    ],
    techStack: [
      { name: "Next.js", category: "Framework", icon: Code2 },
      { name: "TypeScript", category: "Language", icon: Code2 },
      { name: "Tailwind CSS", category: "Styling", icon: Sparkles },
      { name: "Supabase", category: "Backend", icon: Database },
      { name: "PostgreSQL", category: "Database", icon: Database },
    ],
    architecture:
      "Frontend: Next.js application with TypeScript and Tailwind CSS\nBackend: Supabase for authentication and data storage\nDatabase: PostgreSQL for storing resume templates and versions\nAI/Processing: Job description analysis and content adaptation logic",
    technicalImplementation: [
      "Next.js App Router for optimized routing and data fetching",
      "Supabase integration for authentication and resume data storage",
      "PostgreSQL database for managing resume versions and templates",
      "Job description parsing and keyword extraction algorithms",
      "ATS-optimized resume formatting and structure",
      "Dynamic content generation based on job requirements"
    ],
    metrics: null,
    screenshots: [
      "/images/projects/adaptive-resume-1.jpg",
      "/images/projects/adaptive-resume-2.jpg",
      "/images/projects/adaptive-resume-3.jpg",
    ],
    cta: "Want a system like this? Book a 10-minute Fit Call.",
    lessonsLearned:
      "Adaptive Resume demonstrates the importance of intelligent content adaptation for job seekers. Building ATS-optimized systems requires understanding of resume parsing algorithms and keyword matching strategies. The project shows how modern web technologies can create powerful tools that adapt content dynamically based on user needs.",
    codeSnippet: null,
    codeLanguage: null,
  },
};

// Sidebar navigation component
function SidebarNavigation({ sections }: { sections: string[] }) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const updateActiveSection = () => {
      const sectionElements: { id: string; element: HTMLElement; top: number }[] = [];
      
      sections.forEach((section) => {
        const sectionId = section.toLowerCase().replace(/\s+/g, "-");
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          sectionElements.push({ 
            id: sectionId, 
            element,
            top: rect.top + window.scrollY // Use absolute position
          });
        }
      });

      if (sectionElements.length === 0) return;

      // Sort by position (top to bottom)
      sectionElements.sort((a, b) => a.top - b.top);

      // Find the section that's currently in view
      const scrollPosition = window.scrollY + window.innerHeight * 0.3; // 30% from top of viewport
      let activeId = sectionElements[0].id; // Default to first section

      // Find the last section whose top is above the scroll position
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        if (sectionElements[i].top <= scrollPosition) {
          activeId = sectionElements[i].id;
          break;
        }
      }

      setActiveSection(activeId);
    };

    // Initial check
    updateActiveSection();

    // Update on scroll
    const handleScroll = () => {
      updateActiveSection();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
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
      <div className="text-sm font-bold text-gray-400 mb-4 uppercase tracking-wider">Quick Links</div>
      <div className="space-y-1">
      {sections.map((section) => {
        const sectionId = section.toLowerCase().replace(/\s+/g, "-");
        const isActive = activeSection === sectionId;
        return (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
              className={`w-full text-left px-4 py-2.5 rounded-lg transition-all duration-300 flex items-center gap-2 group ${
              isActive
                  ? "bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-400 border-l-2 border-purple-500 shadow-lg shadow-purple-500/10"
                  : "text-gray-400 hover:text-white hover:bg-gray-800/50 hover:border-l-2 hover:border-gray-700"
            }`}
          >
            <ChevronRight
                className={`h-4 w-4 transition-all duration-300 ${
                  isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 group-hover:opacity-50 group-hover:translate-x-0"
              }`}
            />
              <span className="text-sm font-medium">{section}</span>
          </button>
        );
      })}
      </div>
    </nav>
  );
}

// Image gallery component
function ImageGallery({ images, captions }: { images: string[], captions?: string[] }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('carousel');

  // Default captions if not provided
  const defaultCaptions = [
    "Main dashboard showing key features and navigation",
    "Detailed view of core functionality and user interface",
    "Additional features and system capabilities",
  ];

  const imageCaptions = captions || defaultCaptions;

  // Filter out placeholder strings
  const validImages = images?.filter((img: string) => 
    img && !img.includes("[Insert screenshots here]") && !img.includes("placeholder")
  ) || [];

  if (!validImages || validImages.length === 0) {
  return (
      <div className="relative aspect-video rounded-xl overflow-hidden border border-gray-800 bg-gray-900 flex items-center justify-center shadow-2xl">
        <div className="text-center">
          <ImageIcon className="h-16 w-16 text-gray-700 mx-auto mb-2" />
          <p className="text-gray-500 text-sm">[Insert screenshots here]</p>
      </div>
    </div>
  );
}

  return (
    <div className="space-y-8">
      {/* View Mode Toggle */}
      {validImages.length > 1 && (
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 bg-gray-900/50 rounded-lg p-1 border border-gray-800">
      <button
              onClick={() => setViewMode('carousel')}
              className={`px-4 py-2 rounded-md text-sm font-semibold transition-all duration-300 ${
                viewMode === 'carousel'
                  ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              Carousel
      </button>
      <button
              onClick={() => setViewMode('grid')}
              className={`px-4 py-2 rounded-md text-sm font-semibold transition-all duration-300 ${
                viewMode === 'grid'
                  ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              Grid
      </button>
                  </div>
                </div>
              )}

      {/* Carousel View */}
      {viewMode === 'carousel' && (
        <div className="space-y-6">
          {/* Main large image with caption */}
            <motion.div
            key={selectedImage}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="relative group"
          >
            <div className="relative aspect-[16/10] rounded-xl overflow-hidden border-2 border-gray-800 bg-gray-900 shadow-2xl shadow-purple-500/10 group-hover:border-purple-500/50 transition-all duration-300">
              <Image
          src={validImages[selectedImage]}
          alt={`Screenshot ${selectedImage + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                className="object-cover"
                priority={selectedImage === 0}
                unoptimized
          onError={(e) => {
                  console.error('Image load error:', validImages[selectedImage]);
                  e.currentTarget.style.display = 'none';
          }}
        />
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
            
            {/* Caption */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-center"
            >
              <p className="text-gray-300 text-base leading-relaxed font-normal">
                {imageCaptions[selectedImage] || `Screenshot ${selectedImage + 1}`}
              </p>
              <div className="mt-2 text-sm text-gray-500">
                {selectedImage + 1} of {validImages.length}
            </div>
          </motion.div>
          </motion.div>

          {/* Navigation arrows and thumbnail strip */}
      {validImages.length > 1 && (
            <div className="relative">
              {/* Previous/Next buttons */}
              <div className="absolute inset-y-0 left-0 flex items-center z-10">
                <button
                  onClick={() => setSelectedImage((prev) => (prev === 0 ? validImages.length - 1 : prev - 1))}
                  className="p-2 rounded-full bg-gray-900/80 border border-gray-800 hover:border-purple-500/50 hover:bg-gray-900 transition-all duration-300 shadow-lg"
                  aria-label="Previous image"
                >
                  <ArrowLeft className="h-5 w-5 text-gray-300 hover:text-purple-400 transition-colors" />
                </button>
        </div>
              <div className="absolute inset-y-0 right-0 flex items-center z-10">
                <button
                  onClick={() => setSelectedImage((prev) => (prev === validImages.length - 1 ? 0 : prev + 1))}
                  className="p-2 rounded-full bg-gray-900/80 border border-gray-800 hover:border-purple-500/50 hover:bg-gray-900 transition-all duration-300 shadow-lg"
                  aria-label="Next image"
                >
                  <ArrowRight className="h-5 w-5 text-gray-300 hover:text-purple-400 transition-colors" />
                </button>
      </div>

              {/* Thumbnail strip */}
              <div className="flex gap-3 overflow-x-auto pb-2 px-12 scrollbar-hide">
          {validImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
                    className={`relative flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                selectedImage === index
                        ? "border-purple-500 shadow-lg shadow-purple-500/30 scale-105"
                        : "border-gray-800 hover:border-gray-700 hover:scale-102"
              }`}
            >
                    <Image
                src={image}
                alt={`Thumbnail ${index + 1}`}
                      fill
                      sizes="96px"
                      className="object-cover"
                onError={(e) => {
                        e.currentTarget.style.display = 'none';
                }}
              />
                    {selectedImage === index && (
                      <div className="absolute inset-0 bg-purple-500/20" />
                    )}
            </button>
          ))}
              </div>
        </div>
      )}
    </div>
      )}

      {/* Grid View */}
      {viewMode === 'grid' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {validImages.map((image, index) => (
      <motion.div
              key={index}
        initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group"
            >
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden border-2 border-gray-800 bg-gray-900 shadow-xl shadow-purple-500/5 group-hover:border-purple-500/50 group-hover:shadow-2xl group-hover:shadow-purple-500/20 transition-all duration-300">
                <Image
                  src={image}
                  alt={`Screenshot ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  className="object-cover"
                  unoptimized
                  onError={(e) => {
                    console.error('Image load error:', image);
                    e.currentTarget.style.display = 'none';
                  }}
                />
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              {/* Caption */}
              <div className="mt-4">
                <p className="text-gray-300 text-sm leading-relaxed font-normal">
                  {imageCaptions[index] || `Screenshot ${index + 1}`}
                </p>
          </div>
        </motion.div>
          ))}
        </div>
      )}

    </div>
  );
}

// Hero section removed - all projects now use standardized header

// How It Works flow diagram
function HowItWorks({ steps }: { steps: any[] }) {
  return (
    <section id="how-it-works" className="scroll-mt-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-8 flex items-center gap-3"
      >
        <Workflow className="h-8 w-8 text-purple-400" />
        <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent" style={{ WebkitBackgroundClip: 'text' }}>
        How It Works
        </span>
      </motion.h2>
      <div className="relative overflow-visible">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative flex items-start gap-4 mb-8 last:mb-0 z-10"
          >
            {/* Connecting line */}
            {index < steps.length - 1 && (
              <div className="absolute left-6 top-12 w-0.5 h-[calc(100%+2rem)] bg-gradient-to-b from-blue-500 to-purple-600 z-0" />
            )}
            
            {/* Step number circle */}
            <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
              {step.step}
            </div>
            
            {/* Step content */}
            <div className="flex-1 pt-1">
              <div className="flex items-center gap-3 mb-2">
                <step.icon className="h-6 w-6 text-blue-400" />
                <h3 className="text-xl font-bold text-white">{step.title}</h3>
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
          <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            <DollarSign className="h-8 w-8 text-purple-400" />
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Pricing
            </span>
          </h2>
          <p className="text-2xl text-white font-bold mb-6 leading-[1.6]">{pricing}</p>
        </div>
        <div className="flex justify-center">
          <a href={ctaLink}>
            <motion.button
              whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl font-semibold text-white flex items-center gap-2 shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/60 transition-all duration-300"
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

  // State for GitHub activity duration
  const [githubDuration, setGithubDuration] = useState<string | null>(null);
  const [isLoadingDuration, setIsLoadingDuration] = useState(true);

  // Fetch GitHub activity on mount
  useEffect(() => {
    if (project?.github) {
      setIsLoadingDuration(true);
      fetch(`/api/github/activity?repo=${encodeURIComponent(project.github)}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.duration) {
            setGithubDuration(data.duration);
          }
          setIsLoadingDuration(false);
        })
        .catch((error) => {
          console.error("Failed to fetch GitHub activity:", error);
          setIsLoadingDuration(false);
        });
    } else {
      setIsLoadingDuration(false);
    }
  }, [project?.github]);

  // Debug: Log slug and project lookup
  if (typeof window !== 'undefined') {
    console.log('Slug:', slug);
    console.log('Project found:', !!project);
    console.log('Available slugs:', Object.keys(projectData));
  }

  if (!project) {
    return (
      <div className="pt-24 px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Project Not Found</h1>
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

  // Parse roleDuration and replace timeline with GitHub data
  const getRoleDurationDisplay = () => {
    if (!project.roleDuration) return null;
    
    const lines = project.roleDuration.split('\n');
    const roleLine = lines.find((line) => line.startsWith('Role:'));
    const toolsLine = lines.find((line) => line.startsWith('Tools:'));
    
    const result: string[] = [];
    if (roleLine) result.push(roleLine);
    
    if (isLoadingDuration) {
      result.push('Timeline: Loading...');
    } else if (githubDuration) {
      result.push(`Timeline: ${githubDuration}`);
    } else {
      // Fallback to original timeline if GitHub data unavailable
      const timelineLine = lines.find((line) => line.startsWith('Timeline:'));
      if (timelineLine) result.push(timelineLine);
    }
    
    if (toolsLine) result.push(toolsLine);
    
    return result.join('\n');
  };

  const sections = [
    "Overview",
    "Key Features",
    ...(project.howItWorks ? ["How It Works"] : []),
    "Architecture",
    ...(project.metrics ? ["Results"] : []),
          ...(project.technicalImplementation ? ["Technical Implementation"] : []),
    "Screenshots",
    ...(project.pricing ? ["Pricing"] : []),
    "Lessons Learned",
  ];

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
        {/* Back Button with Gradient */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-purple-500/10 to-blue-500/10 hover:from-purple-500/20 hover:to-blue-500/20 border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300"
          >
            <ArrowLeft className="h-4 w-4 text-purple-400 group-hover:text-purple-300 transition-colors" />
            <span className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors">
            Back to Projects
            </span>
          </Link>
        </motion.div>

        {/* Standardized Header Section for All Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
              <div>
              <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r ${gradientText} bg-clip-text text-transparent`}>
                  {project.title}
                </h1>
              {project.role && (
                <div className="mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-purple-500/10 border border-purple-500/20 text-purple-400">
                    {project.role}
                  </span>
                </div>
              )}
              <p className="text-xl text-gray-400 mb-4">{project.tagline || project.description}</p>
                <div className="flex flex-wrap items-center gap-4">
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
                {/* Always show GitHub button - either link or "Private Repository" */}
                {project.github ? (
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gray-800/80 text-gray-300 rounded-xl font-semibold border border-gray-700 hover:bg-gray-700 hover:border-purple-500/50 hover:text-white transition-all duration-300 flex items-center gap-2"
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

        {/* Visual Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <div className="rounded-xl border border-gray-800 bg-gradient-to-br from-gray-900/80 to-gray-950/80 backdrop-blur-sm p-6 shadow-xl">
            <div className="flex flex-wrap items-center justify-between gap-6">
              {/* Left Side: Tech Stack */}
              <div className="flex flex-wrap items-center gap-6">
                {/* Technologies - Icon Badges */}
                {project.techStack && project.techStack.length > 0 && (
                  <>
                    <div className="h-8 w-px bg-gray-800" />
                    <div className="flex items-center gap-3">
                      <div className="text-xs text-gray-400 uppercase tracking-wider">Tech Stack</div>
                      <div className="flex items-center gap-2">
                        {project.techStack.slice(0, 5).map((tech: any, index: number) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                            whileHover={{ scale: 1.1, y: -2 }}
                            className="relative group"
                            title={tech.name}
                          >
                            <div className="absolute inset-0 bg-purple-500/20 rounded-lg blur-sm group-hover:blur-md transition-all duration-300" />
                            <div className="relative w-9 h-9 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300">
                              <tech.icon className="h-5 w-5 text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]" />
                            </div>
                          </motion.div>
                        ))}
                        {project.techStack.length > 5 && (
                          <div className="text-xs text-gray-400 font-semibold ml-1">
                            +{project.techStack.length - 5}
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Right Side: Links */}
              <div className="flex items-center gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gray-800/50 hover:bg-gray-800 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 group"
                  >
                    <Github className="h-4 w-4 text-gray-400 group-hover:text-purple-400 transition-colors" />
                    <span className="text-sm font-semibold text-gray-300 group-hover:text-white">GitHub</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-24">
            {/* Hero Summary */}
            {project.heroSummary && (
            <section id="overview" className="scroll-mt-24">
                {/* Gradient Divider */}
                <div className="relative h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent mb-12 -mt-4" />
                
                <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="space-y-6"
                >
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {project.heroSummary}
                  </p>
                </motion.div>
              </section>
            )}

            {/* Role & Duration */}
            {getRoleDurationDisplay() && (
              <section className="scroll-mt-24">
                {/* Gradient Divider */}
                <div className="relative h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent mb-12 -mt-4" />
                
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                  className="space-y-2"
                >
                  {getRoleDurationDisplay()?.split('\n').map((line: string, index: number) => (
                    <p key={index} className="text-gray-300 leading-relaxed">
                      {line}
                    </p>
                  ))}
                </motion.div>
              </section>
            )}

            {/* Client Problem */}
            {project.problem && (
              <section className="scroll-mt-24">
                {/* Gradient Divider */}
                <div className="relative h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent mb-12 -mt-4" />
                
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                  className="text-4xl font-bold mb-8 flex items-center gap-3"
              >
                  <FileText className="h-8 w-8 text-purple-400" />
                  <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent" style={{ WebkitBackgroundClip: 'text' }}>
                    Client Problem
                  </span>
              </motion.h2>
              {project.context && (
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.05 }}
                  className="text-lg text-gray-400 italic mb-6 leading-relaxed"
                >
                  {project.context}
                </motion.p>
              )}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                  className="space-y-3"
                >
                  {project.problem.split('\n').filter((line: string) => line.trim().startsWith('•')).map((line: string, index: number) => (
                    <p key={index} className="text-gray-300 leading-relaxed">
                      {line.trim()}
                    </p>
                  ))}
              </motion.div>
            </section>
            )}

            {/* Solution Overview */}
                {project.solution && (
              <section className="scroll-mt-24">
                {/* Gradient Divider */}
                <div className="relative h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent mb-12 -mt-4" />
                
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                  className="text-4xl font-bold mb-8 flex items-center gap-3"
              >
                  <FileText className="h-8 w-8 text-purple-400" />
                  <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent" style={{ WebkitBackgroundClip: 'text' }}>
                    Solution Overview
                  </span>
              </motion.h2>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {project.solution}
                    </p>
                  </motion.div>
            </section>
            )}

            {/* Key Features */}
            <section id="key-features" className="scroll-mt-24">
              {/* Gradient Divider */}
              <div className="relative h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent mb-12 -mt-4" />
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold mb-8 flex items-center gap-3"
              >
                <Sparkles className="h-8 w-8 text-purple-400" />
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent" style={{ WebkitBackgroundClip: 'text' }}>
                Key Features
                </span>
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.features.map((feature: any, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -4, transition: { duration: 0.3 } }}
                    className="group relative p-8 rounded-xl border border-gray-800 bg-gray-900/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
                  >
                    {/* Purple glow effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl pointer-events-none rounded-xl -z-10" />
                    
                    {/* Icon at the top with purple accent */}
                    <div className="flex justify-center mb-6">
                      <div className="relative inline-flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-full blur-lg group-hover:blur-xl transition-all duration-300" />
                        <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center border border-purple-500/30 shadow-lg shadow-purple-500/20 group-hover:shadow-xl group-hover:shadow-purple-500/30 transition-all duration-300">
                          <feature.icon className="h-7 w-7 text-purple-400 drop-shadow-[0_0_12px_rgba(168,85,247,0.7)]" />
                    </div>
                      </div>
                    </div>
                    
                    {/* Feature name as bold heading */}
                    <h3 className="text-xl font-bold mb-3 text-white text-center group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">
                      {feature.title}
                    </h3>
                    
                    {/* Description text below */}
                    <p className="text-gray-300 leading-[1.6] font-normal text-center">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* How It Works */}
            {project.howItWorks && (
              <HowItWorks steps={project.howItWorks} />
            )}

            {/* Architecture */}
            {project.architecture && (() => {
              // Parse architecture text to extract components
              const parseArchitecture = (text: string) => {
                const sections: { title: string; content: string; icon: any }[] = [];
                // Handle both single line breaks (new format) and double line breaks (old format)
                const lines = text.includes('\n\n') ? text.split('\n\n') : text.split('\n');
                
                lines.forEach((line) => {
                  if (line.includes(':')) {
                    const [title, ...contentParts] = line.split(':');
                    const content = contentParts.join(':').trim();
                    if (content) {
                      let icon = Server;
                      const titleLower = title.toLowerCase();
                      if (titleLower.includes('front-end') || titleLower.includes('frontend') || titleLower.includes('ui') || titleLower.includes('flutter')) {
                        icon = Smartphone;
                      } else if (titleLower.includes('back-end') || titleLower.includes('backend') || titleLower.includes('api') || titleLower.includes('python')) {
                        icon = Server;
                      } else if (titleLower.includes('database') || titleLower.includes('supabase') || titleLower.includes('postgres') || titleLower.includes('db')) {
                        icon = Database;
                      } else if (titleLower.includes('ai') || titleLower.includes('claude') || titleLower.includes('ml')) {
                        icon = Bot;
                      } else if (titleLower.includes('automation') || titleLower.includes('make') || titleLower.includes('workflow')) {
                        icon = Workflow;
                      } else if (titleLower.includes('sync') || titleLower.includes('real-time') || titleLower.includes('realtime')) {
                        icon = Zap;
                      } else if (titleLower.includes('performance') || titleLower.includes('optimization')) {
                        icon = BarChart3;
                      } else if (titleLower.includes('reliability') || titleLower.includes('backup') || titleLower.includes('monitoring')) {
                        icon = Shield;
                      } else if (titleLower.includes('pipeline')) {
                        icon = Workflow;
                      }
                      sections.push({ title: title.trim(), content, icon });
                    }
                  }
                });
                
                return sections.length > 0 ? sections : [{ title: 'Overview', content: text, icon: Server }];
              };

              const architectureSections = parseArchitecture(project.architecture);

              // Map architecture sections to tech stack items
              const getArchitectureDescription = (category: string) => {
                const categoryLower = category.toLowerCase();
                return architectureSections.find((section: any) => {
                  const titleLower = section.title.toLowerCase();
                  if (categoryLower.includes('frontend') || categoryLower.includes('framework') || categoryLower.includes('styling')) {
                    return titleLower.includes('front') || titleLower.includes('ui') || titleLower.includes('flutter');
                  } else if (categoryLower.includes('backend') || categoryLower.includes('language') || categoryLower.includes('email')) {
                    return titleLower.includes('back') || titleLower.includes('api') || titleLower.includes('python');
                  } else if (categoryLower.includes('infrastructure') || categoryLower.includes('database') || categoryLower.includes('integration')) {
                    return titleLower.includes('database') || titleLower.includes('infrastructure') || titleLower.includes('supabase') || titleLower.includes('db');
                  } else if (categoryLower.includes('ai') || categoryLower.includes('ml')) {
                    return titleLower.includes('ai') || titleLower.includes('claude') || titleLower.includes('ml');
                  }
                  return false;
                });
              };

              // Group tech stack by display category
              const categoryMapping: Record<string, string> = {
                Framework: "Frontend",
                Frontend: "Frontend",
                Styling: "Frontend",
                Backend: "Backend",
                Language: "Backend",
                Email: "Backend",
                Database: "Infrastructure",
                Infrastructure: "Infrastructure",
                Integration: "Infrastructure",
                AI: "AI/ML",
                "AI/ML": "AI/ML",
                Other: "Other",
              };

              const groupedTech: Record<string, any[]> = {
                Frontend: [],
                Backend: [],
                "AI/ML": [],
                Infrastructure: [],
                Other: [],
              };

              project.techStack?.forEach((tech: any) => {
                const displayCategory = categoryMapping[tech.category] || "Other";
                if (groupedTech[displayCategory]) {
                  groupedTech[displayCategory].push(tech);
                } else {
                  groupedTech["Other"].push(tech);
                }
              });

              const activeCategories = Object.entries(groupedTech).filter(
                ([_, techs]) => techs.length > 0
              );

              return (
              <section id="architecture" className="scroll-mt-24">
                  {/* Gradient Divider */}
                  <div className="relative h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent mb-12 -mt-4" />
                  
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                    className="text-4xl font-bold mb-12 flex items-center gap-3"
                >
                    <Code2 className="h-8 w-8 text-purple-400" />
                    <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent" style={{ WebkitBackgroundClip: 'text' }}>
                Tech Stack
                    </span>
                </motion.h2>

                  {/* Horizontal Tech Stack Cards */}
                  {activeCategories.length > 0 && (
                  <div className="space-y-6">
                    {activeCategories.map(([category, techs], categoryIndex) => {
                      const archDescription = getArchitectureDescription(category);
                      const CategoryIcon = techs[0]?.icon || Server;
                      
                      return (
                <motion.div
                          key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                          className="p-6 rounded-xl border border-gray-800 bg-gray-900/50 hover:border-purple-500/50 transition-all duration-300"
                        >
                          <div className="flex items-start gap-6">
                            {/* Icon */}
                            <div className="relative flex-shrink-0">
                              <div className="absolute inset-0 bg-purple-500/20 rounded-xl blur-xl" />
                              <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center border border-purple-500/30 shadow-lg shadow-purple-500/20">
                                <CategoryIcon className="h-7 w-7 text-purple-400 drop-shadow-[0_0_12px_rgba(168,85,247,0.7)]" />
                              </div>
                            </div>
                            
                            {/* Content */}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-4 mb-3 flex-wrap">
                                <h3 className="text-xl font-bold text-white">{category}</h3>
                                <div className="flex flex-wrap gap-2">
                                  {techs.map((tech: any, techIndex: number) => (
                                    <span
                                      key={techIndex}
                                      className="px-3 py-1 rounded-lg bg-gray-800/50 text-gray-300 text-sm font-medium border border-gray-700"
                                    >
                                      {tech.name}
                                    </span>
                                  ))}
                                </div>
                              </div>
                              {archDescription && (
                                <p className="text-gray-300 leading-[1.6] font-normal text-sm">
                                  {archDescription.content}
                                </p>
                              )}
                            </div>
                          </div>
                </motion.div>
                      );
                    })}
                  </div>
            )}
              </section>
              );
            })()}

            {/* Results/Metrics */}
            {project.metrics && (() => {
              // Convert metrics to array format for consistent rendering
              // Support both new format (array with title/subtext/icon) and old format (object)
              const metricsArray = Array.isArray(project.metrics)
                ? project.metrics
                : Object.entries(project.metrics).map(([label, value]) => ({
                    title: label,
                    subtext: value as string,
                    icon: BarChart3,
                  }));

              // Check if this is the new format (has title/subtext) for AutoLeadCloser
              const isNewFormat = metricsArray.length > 0 && metricsArray[0].title && metricsArray[0].subtext;

              return (
              <section id="results" className="scroll-mt-24">
                  {/* Gradient Divider */}
                  <div className="relative h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent mb-12 -mt-4" />
                  
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="mb-8"
                >
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                    className="text-4xl font-bold mb-3 flex items-center gap-3"
                >
                    <Sparkles className="h-8 w-8 text-purple-400" />
                    <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent" style={{ WebkitBackgroundClip: 'text' }}>
                      {isNewFormat ? "Expected Impact (Modeled Benchmarks)" : "Results"}
                    </span>
                </motion.h2>
                  
                </motion.div>
                  
                  {/* 3-Column Grid of Large Metric Cards (3 top, 2 below) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {metricsArray.map((metric: any, index: number) => {
                      const MetricIcon = metric.icon || BarChart3;
                      
                      // Handle both new format (title/subtext) and old format (label/value)
                      const title = metric.title || metric.label || '';
                      const subtext = metric.subtext || metric.value || '';
                      
                      return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                          whileHover={{ y: -4, scale: 1.02 }}
                          className="group relative p-8 rounded-xl border border-gray-800 bg-gray-900/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20"
                        >
                          {/* Purple glow effect on hover */}
                          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl pointer-events-none rounded-xl -z-10" />
                          
                          {/* Icon at top */}
                          <div className="flex justify-center mb-6">
                            <div className="relative">
                              <div className="absolute inset-0 bg-purple-500/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300" />
                              <div className="relative w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center border border-purple-500/30 shadow-lg shadow-purple-500/20 group-hover:shadow-xl group-hover:shadow-purple-500/30 transition-all duration-300">
                                <MetricIcon className="h-8 w-8 text-purple-400 drop-shadow-[0_0_12px_rgba(168,85,247,0.7)]" />
                        </div>
                            </div>
                          </div>
                          
                          {/* Metric Title */}
                          <h3 className="text-xl font-bold text-white mb-3 text-center group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">
                            {title}
                          </h3>
                          
                          {/* Subtext Description */}
                          <p className="text-gray-300 leading-[1.6] font-normal text-sm text-center">
                            {subtext}
                          </p>
                      </motion.div>
                      );
                    })}
              </div>
              
              {/* Footnote - only show for new format */}
              {isNewFormat && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-xs text-gray-500 leading-relaxed font-normal mt-8 text-center"
                  style={{ fontSize: '12px' }}
                >
                  Benchmarks are modeled estimates based on industry-standard performance ranges for AI-driven qualification systems. Not client results.
                </motion.p>
              )}
            </section>
              );
            })()}

            {/* Technical Implementation */}
            {project.technicalImplementation && (
              <section id="technical-implementation" className="scroll-mt-24">
                {/* Gradient Divider */}
                <div className="relative h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent mb-12 -mt-4" />
                
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl font-bold mb-8 flex items-center gap-3"
                >
                  <Code2 className="h-8 w-8 text-purple-400" />
                  <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent" style={{ WebkitBackgroundClip: 'text' }}>
                    Technical Implementation
                  </span>
                </motion.h2>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="p-6 rounded-lg border border-purple-500/20 bg-purple-500/5"
                >
                  <ul className="space-y-3">
                    {project.technicalImplementation.map((item: string, index: number) => (
                      <li key={index} className="text-gray-300 leading-relaxed flex items-start gap-3">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                      </motion.div>
              </section>
            )}

            {/* Screenshots */}
            {project.screenshots && project.screenshots.length > 0 && (
            <section id="screenshots" className="scroll-mt-24">
                {/* Gradient Divider */}
                <div className="relative h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent mb-12 -mt-4" />
                
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                  className="text-4xl font-bold mb-12 flex items-center gap-3"
              >
                  <ImageIcon className="h-8 w-8 text-purple-400" />
                  <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent" style={{ WebkitBackgroundClip: 'text' }}>
                Screenshots
                  </span>
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                  <ImageGallery 
                    images={project.screenshots} 
                    captions={project.screenshotCaptions}
                  />
              </motion.div>
            </section>
            )}

            {/* Call-to-Action */}
            {project.cta && (
              <section className="scroll-mt-24">
                {/* Gradient Divider */}
                <div className="relative h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent mb-12 -mt-4" />
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-center p-8 rounded-xl border border-purple-500/30 bg-gradient-to-br from-purple-500/10 to-blue-500/10"
                >
                  <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                    {project.cta}
                  </p>
                  <Link href="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
                      whileTap={{ scale: 0.98 }}
                      className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl font-semibold text-white shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/60 transition-all duration-300"
                    >
                      Book Free Fit Check
                    </motion.button>
                  </Link>
                </motion.div>
              </section>
            )}

            {/* Pricing Teaser */}
            {project.pricing && (
              <PricingTeaser
                pricing={project.pricing}
                ctaText="Book a strategy call"
                ctaLink="/contact"
              />
            )}

            {/* Lessons Learned */}
            {project.lessonsLearned && (
            <section id="lessons-learned" className="scroll-mt-24">
                {/* Gradient Divider */}
                <div className="relative h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent mb-12 -mt-4" />
                
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                  className="text-4xl font-bold mb-12 flex items-center gap-3"
              >
                  <Sparkles className="h-8 w-8 text-purple-400" />
                  <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent" style={{ WebkitBackgroundClip: 'text' }}>
                Lessons Learned
                  </span>
              </motion.h2>
                
                {/* Parse lessons into separate cards */}
                {(() => {
                  // Split lessons by sentences or keep as single lesson
                  const lessonsText = project.lessonsLearned;
                  // Split by periods followed by space and capital letter, or by common separators
                  const lessons = lessonsText
                    .split(/(?<=\.)\s+(?=[A-Z])/)
                    .filter((lesson: string) => lesson.trim().length > 0)
                    .map((lesson: string) => lesson.trim());
                  
                  // If only one lesson or splitting didn't work well, use the whole text
                  const lessonCards = lessons.length > 1 ? lessons : [lessonsText];
                  
                  return (
                    <div className="space-y-4">
                      {lessonCards.map((lesson: string, index: number) => (
              <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="group relative"
                        >
                          {/* Card with gradient left border */}
                          <div className="relative rounded-xl border border-gray-800 bg-gradient-to-br from-amber-500/5 via-transparent to-purple-500/5 backdrop-blur-sm overflow-hidden hover:border-purple-500/30 transition-all duration-300">
                            {/* Gradient left border */}
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500" />
                            
                            {/* Content */}
                            <div className="pl-6 pr-6 py-6 flex items-start gap-4">
                              {/* Lightbulb icon */}
                              <div className="relative flex-shrink-0 mt-1">
                                <div className="absolute inset-0 bg-amber-500/20 rounded-lg blur-md group-hover:blur-lg transition-all duration-300" />
                                <div className="relative w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500/20 to-yellow-500/20 flex items-center justify-center border border-amber-500/30 shadow-lg shadow-amber-500/20 group-hover:shadow-xl group-hover:shadow-amber-500/30 transition-all duration-300">
                                  <Sparkles className="h-5 w-5 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]" />
                                </div>
                              </div>
                              
                              {/* Lesson text */}
                              <div className="flex-1">
                                <p className="text-gray-200 leading-[1.6] font-normal text-base">
                                  {lesson}
                                </p>
                              </div>
                            </div>
                            
                            {/* Subtle glow effect on hover */}
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                          </div>
              </motion.div>
                      ))}
                    </div>
                  );
                })()}
            </section>
            )}

          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-1">
            <SidebarNavigation sections={sections} />
          </div>
        </div>

        {/* Previous/Next Project Navigation */}
        {(() => {
          const projectSlugs = Object.keys(projectData);
          const currentIndex = projectSlugs.indexOf(slug);
          const prevSlug = currentIndex > 0 ? projectSlugs[currentIndex - 1] : null;
          const nextSlug = currentIndex < projectSlugs.length - 1 ? projectSlugs[currentIndex + 1] : null;
          const prevProject = prevSlug ? projectData[prevSlug] : null;
          const nextProject = nextSlug ? projectData[nextSlug] : null;

          if (!prevProject && !nextProject) return null;

          return (
            <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
              className="mt-24 pt-12 border-t border-gray-800"
            >
              <div className="flex flex-col sm:flex-row items-stretch gap-4">
                {/* Previous Project */}
                {prevProject ? (
                  <Link
                    href={`/projects/${prevSlug}`}
                    className="group flex-1 flex items-center gap-4 p-6 rounded-xl border border-gray-800 bg-gray-900/50 hover:border-purple-500/50 hover:bg-gray-900/70 transition-all duration-300"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center border border-purple-500/30 group-hover:border-purple-500/50 transition-all duration-300">
                        <ArrowLeft className="h-6 w-6 text-purple-400" />
          </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Previous Project</div>
                      <div className="text-lg font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300 truncate">
                        {prevProject.title}
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div className="flex-1" />
                )}

                {/* Next Project */}
                {nextProject ? (
                  <Link
                    href={`/projects/${nextSlug}`}
                    className="group flex-1 flex items-center gap-4 p-6 rounded-xl border border-gray-800 bg-gray-900/50 hover:border-purple-500/50 hover:bg-gray-900/70 transition-all duration-300"
                  >
                    <div className="flex-1 min-w-0 text-right">
                      <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Next Project</div>
                      <div className="text-lg font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300 truncate">
                        {nextProject.title}
          </div>
        </div>
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center border border-purple-500/30 group-hover:border-purple-500/50 transition-all duration-300">
                        <ArrowRight className="h-6 w-6 text-purple-400" />
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div className="flex-1" />
                )}
              </div>
            </motion.div>
          );
        })()}
      </div>
    </div>
  );
}

