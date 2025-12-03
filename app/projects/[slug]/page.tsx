"use client";

import { motion, AnimatePresence } from "framer-motion";
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
  ChevronDown,
  ChevronUp,
  FileText,
  Terminal,
} from "lucide-react";

// Project data structure - in production, this would come from a CMS or database
const projectData: Record<string, any> = {
  "creative-garden": {
    title: "Creative Garden",
    description: "Enterprise content workflow automation platform with real-time synchronization and AI-powered content intelligence",
    status: "Live",
    statusColor: "green",
    tech: ["Flutter", "Python", "Supabase", "AI"],
    github: "https://github.com/ar10000/creative-garden",
    demo: "https://creativegarden.app",
    problem:
      "Content teams lose productivity due to fragmented workflows, lack of visibility into content pipelines, and manual tracking across multiple tools. This results in delayed publications, inconsistent quality, and inability to scale content operations efficiently.",
    solution:
      "Creative Garden is a production-grade content workflow automation platform that centralizes content lifecycle management, provides real-time team synchronization, and uses AI to analyze content readiness and workflow efficiency. The system automates content state transitions, tracks publishing metrics, and maintains data consistency across distributed teams.",
    overview:
      "Creative Garden is an enterprise content workflow platform that automates content lifecycle management from ideation to publication. The system provides real-time synchronization across team members, AI-powered content analysis, automated state management, and comprehensive publishing analytics. Built with multi-tenant architecture to support multiple organizations with isolated data and workflows.",
    whyItMatters:
      "Content operations require reliable systems that maintain data consistency, provide real-time collaboration, and scale with team growth. Creative Garden delivers production-grade infrastructure that eliminates workflow fragmentation, reduces manual overhead, and provides measurable insights into content pipeline performance.",
    technicalDeepDive:
      "Architecture: Flutter frontend with Material Design 3, Python backend services, Supabase for real-time database synchronization and authentication. Multi-tenant architecture with row-level security policies ensuring data isolation per organization.\n\nReal-time Sync: Supabase real-time subscriptions with PostgreSQL replication. Changes propagate to all connected clients within 100ms. Conflict resolution handled via operational transformation for concurrent edits.\n\nAI Pipeline: Python-based content analysis service using Claude AI for extracting content structure, readiness scoring, and workflow recommendations. Batch processing for analytics with async job queues.\n\nPerformance: Sub-200ms API response times, optimized database queries with proper indexing, lazy loading for large content sets, and efficient state management with Riverpod.\n\nReliability: Automated backups, transaction logging, error recovery mechanisms, and health monitoring. 99.9% uptime SLA with redundant database replicas.",
    features: [
      {
        icon: Workflow,
        title: "Automated Workflow Engine",
        description: "State-based content lifecycle management with automated transitions and validation rules",
      },
      {
        icon: Zap,
        title: "Real-time Synchronization",
        description: "Sub-100ms update propagation across all team members with conflict resolution",
      },
      {
        icon: Database,
        title: "Multi-tenant Architecture",
        description: "Isolated data per organization with row-level security and tenant-specific configurations",
      },
      {
        icon: Bot,
        title: "AI Content Analysis",
        description: "Automated content readiness scoring, structure extraction, and workflow recommendations",
      },
      {
        icon: BarChart3,
        title: "Publishing Analytics",
        description: "Real-time metrics on content throughput, workflow efficiency, and publication trends",
      },
      {
        icon: Server,
        title: "High Performance",
        description: "Sub-200ms API response times, optimized queries, and efficient state management",
      },
      {
        icon: Shield,
        title: "Enterprise Reliability",
        description: "99.9% uptime SLA, automated backups, transaction logging, and health monitoring",
      },
      {
        icon: Globe,
        title: "Data Compliance",
        description: "GDPR-compliant data export, audit logging, and secure multi-region deployment",
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
    metrics: null,
    screenshots: [
      "/images/projects/creative-garden-1.jpg",
      "/images/projects/creative-garden-2.jpg",
      "/images/projects/creative-garden-3.jpg",
    ],
    lessonsLearned:
      "Creative Garden demonstrates that production-grade content workflow systems require robust real-time synchronization, multi-tenant data isolation, and reliable AI processing pipelines. The architecture prioritizes performance, reliability, and scalability—ensuring the system handles concurrent team operations and maintains data consistency across distributed environments.",
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
    description: "Multi-tenant project management platform with real-time synchronization and cross-platform deployment",
    status: "Live",
    statusColor: "green",
    tech: ["Flutter", "Supabase", "Dart", "PostgreSQL"],
    github: "https://github.com/ar10000",
    demo: "https://flowcircle.app",
    problem:
      "Teams require project management systems that maintain real-time data consistency across devices, support concurrent user operations, and scale with organizational growth. Existing solutions lack reliable synchronization, proper multi-tenant isolation, and performance optimization for mobile-first workflows.",
    solution:
      "FlowCircle is a production-grade project management platform built with real-time synchronization, multi-tenant architecture, and optimized mobile performance. The system ensures data consistency across all devices, supports concurrent editing with conflict resolution, and provides isolated tenant environments with scalable infrastructure.",
    overview:
      "FlowCircle is an enterprise project management platform that delivers real-time synchronization, multi-tenant data isolation, and cross-platform deployment. The system handles concurrent operations, maintains data consistency, and provides reliable performance across web and mobile clients. Built for teams that require production-grade infrastructure with scalable architecture.",
    whyItMatters:
      "Project management systems must maintain data integrity, support real-time collaboration, and scale reliably. FlowCircle provides enterprise-grade infrastructure that ensures consistent data across all clients, handles concurrent operations without conflicts, and scales with organizational needs through proper multi-tenant architecture.",
    technicalDeepDive:
      "Architecture: Flutter cross-platform frontend, Supabase backend with PostgreSQL, real-time subscriptions via WebSocket connections. Multi-tenant architecture with row-level security policies and tenant-specific database schemas.\n\nReal-time Sync: Supabase real-time engine with PostgreSQL logical replication. Changes broadcast to all connected clients within 50ms. Operational transformation for conflict resolution on concurrent edits. Optimistic UI updates with server reconciliation.\n\nMulti-tenant Isolation: Row-level security policies enforce tenant data separation. Each tenant has isolated database schema with shared infrastructure. Tenant-specific configuration and feature flags.\n\nPerformance: Optimized database queries with composite indexes, connection pooling, and query result caching. Lazy loading for large project lists, efficient state management with Riverpod, and minimal re-renders through proper memoization.\n\nReliability: Automated database backups, transaction logging, error recovery with retry mechanisms, and comprehensive health monitoring. Database replication for high availability and disaster recovery.",
    features: [
      {
        icon: Zap,
        title: "Real-time Synchronization",
        description: "Sub-50ms update propagation across all devices with conflict resolution for concurrent edits",
      },
      {
        icon: Database,
        title: "Multi-tenant Architecture",
        description: "Isolated tenant data with row-level security, shared infrastructure, and tenant-specific configurations",
      },
      {
        icon: Server,
        title: "High Performance",
        description: "Optimized database queries, connection pooling, query caching, and efficient state management",
      },
      {
        icon: Shield,
        title: "Enterprise Reliability",
        description: "Automated backups, transaction logging, error recovery, and database replication for high availability",
      },
      {
        icon: Smartphone,
        title: "Cross-platform Deployment",
        description: "Single codebase deployment to web, iOS, and Android with native performance",
      },
      {
        icon: Workflow,
        title: "Concurrent Operations",
        description: "Operational transformation for handling simultaneous edits without data loss",
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
    metrics: null,
    screenshots: [
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
    ],
    lessonsLearned:
      "FlowCircle demonstrates that production-grade project management systems require robust real-time synchronization, proper multi-tenant data isolation, and optimized performance for concurrent operations. The architecture prioritizes data consistency, reliability, and scalability—ensuring the system handles distributed team workflows and maintains integrity across all client devices.",
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
    tagline: "AI-Powered Sales Automation System",
    description: "Enterprise-grade lead qualification and response automation that reduces sales cycle time and increases conversion rates",
    status: "Live",
    statusColor: "green",
    tech: ["Python", "Supabase", "Claude AI", "Gmail API"],
    github: "https://github.com/ar10000/AutoLeadCloser",
    demo: null, // Internal use
    demoVideo: null, // No public demo video
    pricing: null, // Pricing not specified
    problem:
      "Service businesses experience 40-60% lead response time delays, resulting in lost opportunities and reduced conversion rates. Manual qualification processes require 2-4 hours per lead, creating operational bottlenecks and inconsistent lead handling that directly impacts revenue.",
    solution:
      "AutoLeadCloser is a production AI system that automates lead qualification and response workflows. The system processes inbound emails in real-time, extracts qualification criteria (budget, timeline, decision authority), maintains full conversation context, and automatically books qualified leads. Response time reduced from hours to under 2 minutes. Qualification cycle shortened from days to hours.",
    overview:
      "AutoLeadCloser is an AI-powered sales automation platform that processes lead inquiries, qualifies prospects through intelligent conversation, and routes qualified leads to booking. The system operates 24/7, maintains conversation memory across email threads, and integrates with existing CRM and calendar systems. Implementation reduces manual sales development work by 80% and increases lead response rates by 3-5x.",
    whyItMatters:
      "Faster lead response directly correlates with higher conversion rates. AutoLeadCloser delivers immediate responses, consistent qualification criteria, and 24/7 coverage—eliminating the revenue loss from delayed or missed lead responses. The system processes leads at a fraction of the cost of manual SDR teams while maintaining enterprise-grade reliability and data security.",
    features: [
      {
        icon: Clock,
        title: "Sub-2-Minute Response Time",
        description: "Automated email responses delivered within 2 minutes of lead inquiry, compared to 2-24 hour manual response times",
      },
      {
        icon: BarChart3,
        title: "Automated Lead Qualification",
        description: "AI extracts budget, timeline, decision authority, and project scope without manual review",
      },
      {
        icon: DollarSign,
        title: "Revenue Impact",
        description: "3-5x increase in lead conversion rates through faster response and consistent qualification",
      },
      {
        icon: Bot,
        title: "24/7 Automated Assistant",
        description: "Continuous lead processing without manual intervention, handling inquiries outside business hours",
      },
      {
        icon: Workflow,
        title: "AI-Powered Workflows",
        description: "Intelligent conversation routing, context preservation, and automatic booking for qualified leads",
      },
      {
        icon: Zap,
        title: "Faster Sales Cycles",
        description: "Reduces qualification time from days to hours, shortening overall sales cycle by 40-60%",
      },
      {
        icon: Database,
        title: "Lower Operational Cost",
        description: "Eliminates 80% of manual SDR work, reducing cost per qualified lead by 70-85%",
      },
      {
        icon: Shield,
        title: "Enterprise Security",
        description: "Multi-tenant architecture with data isolation, GDPR compliance, and secure email handling",
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
    metrics: {
      "Response Time Reduction": "From 2-24 hours to under 2 minutes (99% reduction)",
      "Conversion Rate Increase": "3-5x improvement in lead-to-meeting conversion",
      "Cost Per Qualified Lead": "70-85% reduction compared to manual SDR teams",
      "Sales Cycle Time": "40-60% reduction in qualification-to-booking cycle",
      "Operational Efficiency": "80% reduction in manual qualification work",
      "24/7 Coverage": "100% uptime with automated lead processing",
    },
    screenshots: [
      "/images/projects/autoleadcloser-1.jpg",
      "/images/projects/autoleadcloser-2.jpg",
    ],
    lessonsLearned:
      "AutoLeadCloser demonstrates that AI automation delivers measurable ROI when focused on high-value, repetitive processes. The system proves that response time reduction directly impacts conversion rates, and that automated qualification maintains consistency while scaling beyond manual capacity. The architecture prioritizes reliability and data security, ensuring enterprise-grade deployment standards.",
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

// Code block component with syntax highlighting
function CodeBlock({ code, language }: { code: string; language: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  // Simple syntax highlighting for common patterns
  const highlightCode = (code: string, lang: string) => {
    // Basic syntax highlighting patterns
    const patterns = {
      comment: /(\/\/.*$|\/\*[\s\S]*?\*\/)/gm,
      string: /(['"`])(?:(?=(\\?))\2.)*?\1/g,
      keyword: /\b(const|let|var|function|class|interface|type|import|export|from|return|if|else|for|while|async|await|try|catch|finally|throw|new|this|super|extends|implements|static|public|private|protected|readonly|abstract|enum|namespace|module|declare|default|case|switch|break|continue|do|while|true|false|null|undefined|void|any|string|number|boolean|object|Array|Promise|Future|await|async|final|int|double|String|List|Map|Set|void|bool|var|val|def|return|if|else|elif|for|while|try|except|finally|raise|class|def|import|from|as|with|lambda|yield|pass|break|continue|global|nonlocal|assert|del|print|exec|eval|is|in|not|and|or|None|True|False)\b/g,
      number: /\b\d+\.?\d*\b/g,
      function: /\b([a-zA-Z_$][a-zA-Z0-9_$]*)\s*(?=\()/g,
    };

    let highlighted = code;
    
    // Apply highlighting based on language
    if (lang === 'typescript' || lang === 'javascript' || lang === 'ts' || lang === 'js') {
      // Comments
      highlighted = highlighted.replace(patterns.comment, '<span class="text-gray-500">$1</span>');
      // Strings
      highlighted = highlighted.replace(patterns.string, '<span class="text-green-400">$&</span>');
      // Keywords
      highlighted = highlighted.replace(patterns.keyword, '<span class="text-purple-400">$&</span>');
      // Numbers
      highlighted = highlighted.replace(patterns.number, '<span class="text-blue-400">$&</span>');
      // Functions
      highlighted = highlighted.replace(patterns.function, '<span class="text-yellow-400">$1</span>');
    } else if (lang === 'python' || lang === 'py') {
      // Comments
      highlighted = highlighted.replace(patterns.comment, '<span class="text-gray-500">$1</span>');
      // Strings
      highlighted = highlighted.replace(patterns.string, '<span class="text-green-400">$&</span>');
      // Keywords
      highlighted = highlighted.replace(patterns.keyword, '<span class="text-purple-400">$&</span>');
      // Numbers
      highlighted = highlighted.replace(patterns.number, '<span class="text-blue-400">$&</span>');
    } else if (lang === 'dart') {
      // Comments
      highlighted = highlighted.replace(patterns.comment, '<span class="text-gray-500">$1</span>');
      // Strings
      highlighted = highlighted.replace(patterns.string, '<span class="text-green-400">$&</span>');
      // Keywords
      highlighted = highlighted.replace(patterns.keyword, '<span class="text-purple-400">$&</span>');
      // Numbers
      highlighted = highlighted.replace(patterns.number, '<span class="text-blue-400">$&</span>');
    }

    return highlighted;
  };

  return (
    <div className="relative rounded-xl overflow-hidden border-2 border-gray-800 bg-gray-950 shadow-2xl">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3 bg-gray-900/80 border-b border-gray-800 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="ml-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">{language}</span>
        </div>
        <button
          onClick={handleCopy}
          className="px-3 py-1.5 text-xs font-semibold text-gray-400 hover:text-white hover:bg-gray-800 rounded-md transition-all duration-200 flex items-center gap-2"
        >
          {copied ? (
            <>
              <CheckCircle className="h-3.5 w-3.5 text-green-400" />
              Copied
            </>
          ) : (
            <>
              <Send className="h-3.5 w-3.5" />
              Copy
            </>
          )}
        </button>
      </div>
      
      {/* Code Content */}
      <div className="relative">
        <pre className="p-6 overflow-x-auto bg-gray-950 text-sm leading-relaxed">
          <code 
            className="font-mono text-gray-200"
            dangerouslySetInnerHTML={{ __html: highlightCode(code, language) }}
          />
      </pre>
        
        {/* Gradient fade on right edge for long code */}
        <div className="absolute top-0 right-0 bottom-0 w-20 bg-gradient-to-l from-gray-950 to-transparent pointer-events-none" />
      </div>
    </div>
  );
}

// Technical Deep Dive collapsible component
function TechnicalDeepDive({ 
  title, 
  content, 
  isAutoLeadCloser = false 
}: { 
  title: string; 
  content: string; 
  isAutoLeadCloser?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-6 border border-gray-800 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-6 py-4 flex items-center justify-between text-left transition-colors ${
          isOpen
            ? isAutoLeadCloser
              ? "bg-blue-500/10 border-b border-blue-500/30"
              : "bg-purple-500/10 border-b border-purple-500/30"
            : "bg-gray-900/50 hover:bg-gray-900/70"
        }`}
      >
        <span className="font-bold text-white">{title}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-400" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-400" />
        )}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-6 prose prose-invert max-w-none text-gray-300 leading-relaxed whitespace-pre-line">
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Engineering Notes component - combines code snippets and technical deep dive
function EngineeringNotes({ 
  codeSnippet, 
  codeLanguage, 
  technicalDeepDive,
  isAutoLeadCloser = false 
}: { 
  codeSnippet?: string;
  codeLanguage?: string;
  technicalDeepDive?: string;
  isAutoLeadCloser?: boolean;
}) {
  // Parse technicalDeepDive into separate topics
  const parseTechnicalTopics = (text: string) => {
    const topics: { title: string; content: string; icon: any }[] = [];
    const lines = text.split('\n\n');
    
    lines.forEach((line) => {
      if (line.includes(':')) {
        const [title, ...contentParts] = line.split(':');
        const content = contentParts.join(':').trim();
        if (content) {
          let icon = Code2;
          const titleLower = title.toLowerCase();
          if (titleLower.includes('architecture') || titleLower.includes('structure')) {
            icon = Server;
          } else if (titleLower.includes('sync') || titleLower.includes('real-time') || titleLower.includes('realtime')) {
            icon = Zap;
          } else if (titleLower.includes('ai') || titleLower.includes('pipeline') || titleLower.includes('ml')) {
            icon = Bot;
          } else if (titleLower.includes('performance') || titleLower.includes('optimization') || titleLower.includes('speed')) {
            icon = BarChart3;
          } else if (titleLower.includes('reliability') || titleLower.includes('backup') || titleLower.includes('monitoring') || titleLower.includes('sla')) {
            icon = Shield;
          } else if (titleLower.includes('database') || titleLower.includes('data')) {
            icon = Database;
          } else if (titleLower.includes('security') || titleLower.includes('auth')) {
            icon = Shield;
          } else if (titleLower.includes('deployment') || titleLower.includes('infrastructure')) {
            icon = Globe;
          }
          topics.push({ title: title.trim(), content, icon });
        }
      }
    });
    
    return topics.length > 0 ? topics : [{ title: 'Technical Overview', content: text, icon: Code2 }];
  };

  const technicalTopics = technicalDeepDive ? parseTechnicalTopics(technicalDeepDive) : [];
  const [openTopics, setOpenTopics] = useState<Record<number, boolean>>({});

  const toggleTopic = (index: number) => {
    setOpenTopics(prev => ({ ...prev, [index]: !prev[index] }));
  };

  if (!codeSnippet && !technicalDeepDive) {
    return null;
  }

  return (
    <div className="rounded-xl border border-gray-800 bg-gradient-to-br from-gray-900/80 to-gray-950/80 backdrop-blur-sm overflow-hidden shadow-xl">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 pointer-events-none" />
      
      <div className="relative p-8 space-y-6">
        {/* Technical Topics Accordions */}
        {technicalTopics.length > 0 && (
          <div className="space-y-4">
            {technicalTopics.map((topic, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="border border-gray-800 rounded-lg overflow-hidden bg-gray-900/30 hover:border-purple-500/30 transition-all duration-300"
              >
      <button
                  onClick={() => toggleTopic(index)}
                  className={`w-full px-6 py-4 flex items-center justify-between text-left transition-all duration-300 ${
                    openTopics[index]
            ? isAutoLeadCloser
              ? "bg-blue-500/10 border-b border-blue-500/30"
              : "bg-purple-500/10 border-b border-purple-500/30"
                      : "bg-transparent hover:bg-gray-900/50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`relative flex-shrink-0 ${
                      openTopics[index] ? 'text-purple-400' : 'text-gray-400'
                    } transition-colors duration-300`}>
                      <div className={`absolute inset-0 bg-purple-500/20 rounded-lg blur-sm ${
                        openTopics[index] ? 'opacity-100' : 'opacity-0'
                      } transition-opacity duration-300`} />
                      <topic.icon className="h-5 w-5 relative" />
                    </div>
                    <span className="font-bold text-white text-lg">{topic.title}</span>
                  </div>
                  {openTopics[index] ? (
          <ChevronUp className="h-5 w-5 text-gray-400" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-400" />
        )}
      </button>
      <AnimatePresence>
                  {openTopics[index] && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
                      <div className="px-6 py-4 text-gray-300 leading-[1.6] font-normal">
                        {topic.content}
                  </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
                </div>
              )}

        {/* Code Snippet */}
              {codeSnippet && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: technicalTopics.length * 0.1 }}
            className="mt-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-purple-500/20 rounded-lg blur-sm" />
                <Terminal className="h-6 w-6 text-purple-400 relative" />
                </div>
              <h4 className="text-xl font-bold text-white">Code Example</h4>
            </div>
            <CodeBlock code={codeSnippet} language={codeLanguage || "typescript"} />
          </motion.div>
        )}
      </div>
    </div>
  );
}

// Image gallery component
function ImageGallery({ images, captions, demoLink }: { images: string[], captions?: string[], demoLink?: string | null }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('carousel');

  // Default captions if not provided
  const defaultCaptions = [
    "Main dashboard showing key features and navigation",
    "Detailed view of core functionality and user interface",
    "Additional features and system capabilities",
  ];

  const imageCaptions = captions || defaultCaptions;

  if (!images || images.length === 0) {
    return (
      <div className="relative aspect-video rounded-xl overflow-hidden border border-gray-800 bg-gray-900 flex items-center justify-center shadow-2xl">
        <div className="text-center">
          <ImageIcon className="h-16 w-16 text-gray-700 mx-auto mb-2" />
          <p className="text-gray-500 text-sm">No screenshots available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* View Mode Toggle */}
      {images.length > 1 && (
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
          src={images[selectedImage]}
          alt={`Screenshot ${selectedImage + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                className="object-cover"
                priority={selectedImage === 0}
          onError={(e) => {
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
                {selectedImage + 1} of {images.length}
              </div>
            </motion.div>
          </motion.div>

          {/* Navigation arrows and thumbnail strip */}
      {images.length > 1 && (
            <div className="relative">
              {/* Previous/Next buttons */}
              <div className="absolute inset-y-0 left-0 flex items-center z-10">
                <button
                  onClick={() => setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
                  className="p-2 rounded-full bg-gray-900/80 border border-gray-800 hover:border-purple-500/50 hover:bg-gray-900 transition-all duration-300 shadow-lg"
                  aria-label="Previous image"
                >
                  <ArrowLeft className="h-5 w-5 text-gray-300 hover:text-purple-400 transition-colors" />
                </button>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center z-10">
                <button
                  onClick={() => setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
                  className="p-2 rounded-full bg-gray-900/80 border border-gray-800 hover:border-purple-500/50 hover:bg-gray-900 transition-all duration-300 shadow-lg"
                  aria-label="Next image"
                >
                  <ArrowRight className="h-5 w-5 text-gray-300 hover:text-purple-400 transition-colors" />
                </button>
              </div>

              {/* Thumbnail strip */}
              <div className="flex gap-3 overflow-x-auto pb-2 px-12 scrollbar-hide">
          {images.map((image, index) => (
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
          {images.map((image, index) => (
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
                  onError={(e) => {
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

      {/* Prominent Try Live Demo CTA */}
      {demoLink && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center pt-4"
        >
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <motion.button
              whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-5 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 rounded-xl font-bold text-white text-lg flex items-center justify-center gap-3 shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/70 transition-all duration-300 relative overflow-hidden"
              style={{ backgroundSize: '200% 100%' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundSize: '200% 100%' }} />
              <ExternalLink className="h-6 w-6 relative z-10" />
              <span className="relative z-10">Try Live Demo</span>
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </a>
        </motion.div>
      )}
    </div>
  );
}

// Hero section with video embed
function HeroSection({ project }: { project: any }) {
  if (!project.tagline && !project.demoVideo) return null;

  return (
    <section className="mb-16">
      {/* Title and Subtitle Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        {/* Large Title with Gradient on Key Words */}
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-6">
          {project.title.split(' ').map((word: string, index: number) => {
            // Apply gradient to key words (first word, or words with specific patterns)
            const isKeyWord = index === 0 || word.length > 5 || ['AI', 'Auto', 'Creative', 'Flow', 'Portfolio'].some((key: string) => word.includes(key));
            return (
              <span key={index}>
                {isKeyWord ? (
                  <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent" style={{ WebkitBackgroundClip: 'text' }}>
                    {word}
                  </span>
                ) : (
                  <span className="text-white">{word}</span>
                )}
                {index < project.title.split(' ').length - 1 && ' '}
              </span>
            );
          })}
        </h1>
        
        {/* Subtitle on Separate Line with Better Spacing */}
        {(project.tagline || project.description) && (
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 max-w-4xl mx-auto leading-[1.6] font-normal mt-8">
            {project.tagline || project.description}
          </p>
        )}
      </motion.div>

      {/* GitHub and Demo Buttons - Horizontal Side-by-Side */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
      >
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="sm:flex-1 max-w-xs"
          >
            <motion.button
              whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl font-semibold text-white flex items-center justify-center gap-2 shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/60 transition-all duration-300"
            >
              <Github className="h-5 w-5" />
              View on GitHub
            </motion.button>
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="sm:flex-1 max-w-xs"
          >
            <motion.button
              whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl font-semibold text-white flex items-center justify-center gap-2 shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/60 transition-all duration-300"
            >
              <ExternalLink className="h-5 w-5" />
              Live Demo
            </motion.button>
          </a>
        )}
        {!project.github && !project.demo && (
          <a href="/contact" className="sm:flex-1 max-w-xs">
            <motion.button
              whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl font-semibold text-white flex items-center justify-center gap-2 shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/60 transition-all duration-300"
            >
              <Calendar className="h-5 w-5" />
              Book Demo Call
            </motion.button>
          </a>
        )}
      </motion.div>

      {/* Large Hero Image or Demo Screenshot - Full Width */}
      {project.demoVideo ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8 rounded-xl overflow-hidden border border-gray-800 shadow-2xl"
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
      ) : project.screenshots && project.screenshots.length > 0 ? (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8 rounded-xl overflow-hidden border border-gray-800 shadow-2xl"
        >
          <div className="relative w-full aspect-[16/9] bg-gray-900">
            <Image
              src={project.screenshots[0]}
              alt={`${project.title} hero screenshot`}
              fill
              sizes="100vw"
              className="object-cover"
              priority
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
      </motion.div>
      ) : null}
    </section>
  );
}

// How It Works flow diagram
function HowItWorks({ steps }: { steps: any[] }) {
  return (
    <section id="how-it-works" className="scroll-mt-24">
      {/* Gradient Divider */}
      <div className="relative h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent mb-12 -mt-4" />
      
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
      {/* Gradient Divider */}
      <div className="relative h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent mb-12 -mt-4" />
      
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
    ...((project.codeSnippet || project.technicalDeepDive) ? ["Engineering Notes"] : []),
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
                <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r ${gradientText} bg-clip-text text-transparent`}>
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
                    whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl font-semibold text-white flex items-center gap-2 shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/60 transition-all duration-300 group"
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
        )}

        {/* Visual Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <div className="rounded-xl border border-gray-800 bg-gradient-to-br from-gray-900/80 to-gray-950/80 backdrop-blur-sm p-6 shadow-xl">
            <div className="flex flex-wrap items-center justify-between gap-6">
              {/* Left Side: Status and Tech */}
              <div className="flex flex-wrap items-center gap-6">
                {/* Project Status */}
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-purple-500/20 rounded-lg blur-sm" />
                    <div className="relative w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center border border-purple-500/30">
                      {project.status === "Live" ? (
                        <CheckCircle2 className="h-5 w-5 text-green-400" />
                      ) : project.status === "In Development" ? (
                        <Clock className="h-5 w-5 text-yellow-400" />
                      ) : (
                        <CheckCircle2 className="h-5 w-5 text-blue-400" />
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Status</div>
                    <div className="text-sm font-bold text-white">{project.status}</div>
                  </div>
                </div>

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
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-purple-500/20 to-blue-500/20 hover:from-purple-500/30 hover:to-blue-500/30 border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 group"
                  >
                    <ExternalLink className="h-4 w-4 text-purple-400" />
                    <span className="text-sm font-semibold text-white">Live Demo</span>
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
            {/* Overview */}
            <section id="overview" className="scroll-mt-24">
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
                The Story
                </span>
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

            {/* Tech Stack */}
            <section id="tech-stack" className="scroll-mt-24">
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
              
              {/* Group technologies by category */}
              {(() => {
                // Group tech by category
                const groupedTech: Record<string, any[]> = {};
                project.techStack.forEach((tech: any) => {
                  const category = tech.category || "Other";
                  if (!groupedTech[category]) {
                    groupedTech[category] = [];
                  }
                  groupedTech[category].push(tech);
                });

                // Category display order and mapping
                const categoryOrder = ["Framework", "Frontend", "Backend", "Language", "Database", "AI", "AI/ML", "Infrastructure", "Integration", "Styling", "Email", "Other"];
                const categoryLabels: Record<string, string> = {
                  "Framework": "Frontend",
                  "Frontend": "Frontend",
                  "Backend": "Backend",
                  "Language": "Backend",
                  "Database": "Infrastructure",
                  "AI": "AI/ML",
                  "AI/ML": "AI/ML",
                  "Infrastructure": "Infrastructure",
                  "Integration": "Infrastructure",
                  "Styling": "Frontend",
                  "Email": "Backend",
                  "Other": "Other",
                };

                // Re-group by display categories
                const displayGroups: Record<string, any[]> = {
                  "Frontend": [],
                  "Backend": [],
                  "AI/ML": [],
                  "Infrastructure": [],
                  "Other": [],
                };

                Object.entries(groupedTech).forEach(([category, techs]) => {
                  const displayCategory = categoryLabels[category] || "Other";
                  if (displayGroups[displayCategory]) {
                    displayGroups[displayCategory].push(...techs);
                  } else {
                    displayGroups["Other"].push(...techs);
                  }
                });

                // Filter out empty groups
                const activeGroups = Object.entries(displayGroups).filter(([_, techs]) => techs.length > 0);

                return (
                  <div className="space-y-12">
                    {activeGroups.map(([categoryName, techs], groupIndex) => (
                  <motion.div
                        key={categoryName}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
                      >
                        {/* Category Header */}
                        <h3 className="text-xl font-bold text-gray-300 mb-6 flex items-center gap-2">
                          <span className="w-1 h-6 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full" />
                          {categoryName}
                        </h3>
                        
                        {/* Tech Pills Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                          {techs.map((tech: any, index: number) => (
                            <motion.div
                              key={`${categoryName}-${index}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                              transition={{ duration: 0.4, delay: (groupIndex * 0.1) + (index * 0.05) }}
                              whileHover={{ scale: 1.05, y: -2 }}
                              className="group relative"
                            >
                              <div className="relative p-4 rounded-xl border border-gray-800 bg-gray-900/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 cursor-pointer">
                                {/* Purple glow on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl pointer-events-none rounded-xl -z-10" />
                                
                                {/* Icon */}
                                <div className="flex justify-center mb-3">
                                  <div className="relative">
                                    <div className="absolute inset-0 bg-purple-500/20 rounded-lg blur-md group-hover:blur-lg transition-all duration-300" />
                                    <div className="relative">
                                      <tech.icon className="h-8 w-8 text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.6)] group-hover:drop-shadow-[0_0_12px_rgba(168,85,247,0.8)] transition-all duration-300" />
                                    </div>
                                  </div>
                                </div>
                                
                                {/* Tech Name */}
                                <div className="text-center">
                                  <div className="font-bold text-white text-sm mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">
                                    {tech.name}
                                  </div>
                                  {/* Additional info on hover */}
                                  <div className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                                    {tech.category}
                                  </div>
                                </div>
                              </div>
                  </motion.div>
                ))}
              </div>
                      </motion.div>
                    ))}
                  </div>
                );
              })()}
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
                const lines = text.split('\n\n');
                
                lines.forEach((line) => {
                  if (line.includes(':')) {
                    const [title, ...contentParts] = line.split(':');
                    const content = contentParts.join(':').trim();
                    if (content) {
                      let icon = Server;
                      const titleLower = title.toLowerCase();
                      if (titleLower.includes('frontend') || titleLower.includes('ui') || titleLower.includes('flutter')) {
                        icon = Smartphone;
                      } else if (titleLower.includes('backend') || titleLower.includes('api') || titleLower.includes('python')) {
                        icon = Server;
                      } else if (titleLower.includes('database') || titleLower.includes('supabase') || titleLower.includes('postgres')) {
                        icon = Database;
                      } else if (titleLower.includes('ai') || titleLower.includes('claude') || titleLower.includes('ml')) {
                        icon = Bot;
                      } else if (titleLower.includes('sync') || titleLower.includes('real-time') || titleLower.includes('realtime')) {
                        icon = Zap;
                      } else if (titleLower.includes('performance') || titleLower.includes('optimization')) {
                        icon = BarChart3;
                      } else if (titleLower.includes('reliability') || titleLower.includes('backup') || titleLower.includes('monitoring')) {
                        icon = Shield;
                      } else if (titleLower.includes('pipeline') || titleLower.includes('workflow')) {
                        icon = Workflow;
                      }
                      sections.push({ title: title.trim(), content, icon });
                    }
                  }
                });
                
                return sections.length > 0 ? sections : [{ title: 'Overview', content: text, icon: Server }];
              };

              const architectureSections = parseArchitecture(project.architecture);
              const [activeTab, setActiveTab] = useState(0);

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
                    <Server className="h-8 w-8 text-purple-400" />
                    <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent" style={{ WebkitBackgroundClip: 'text' }}>
                  Architecture
                    </span>
                </motion.h2>

                  {/* Visual Architecture Diagram - System Components Flow */}
                  {project.techStack && project.techStack.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                      className="mb-12 p-8 rounded-xl border border-gray-800 bg-gray-900/50"
                    >
                      <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                        <Workflow className="h-7 w-7 text-purple-400" />
                        <span>System Architecture</span>
                      </h3>
                      
                      {/* Visual Flow Diagram with connecting lines */}
                      <div className="relative">
                        {/* Frontend Layer */}
                        <div className="mb-8">
                          <h4 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wide">Frontend</h4>
                          <div className="flex flex-wrap gap-4">
                            {project.techStack.filter((tech: any) => 
                              ['Framework', 'Frontend', 'Styling'].includes(tech.category)
                            ).map((tech: any, index: number) => (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                whileHover={{ scale: 1.1, y: -4 }}
                                className="group relative p-5 rounded-xl border border-gray-800 bg-gray-950/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
                              >
                                <div className="flex flex-col items-center gap-3">
                                  <div className="relative">
                                    <div className="absolute inset-0 bg-purple-500/20 rounded-lg blur-md group-hover:blur-lg transition-all duration-300" />
                                    <tech.icon className="h-10 w-10 text-purple-400 relative drop-shadow-[0_0_12px_rgba(168,85,247,0.7)]" />
                                  </div>
                                  <div className="text-center">
                                    <div className="font-bold text-white text-sm">{tech.name}</div>
                                    <div className="text-xs text-gray-400 mt-1">{tech.category}</div>
                                  </div>
                                </div>
                </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* Connecting Arrow */}
                        {(project.techStack.some((tech: any) => ['Backend', 'Language'].includes(tech.category))) && (
                          <div className="flex justify-center mb-8">
                            <div className="w-0.5 h-8 bg-gradient-to-b from-purple-500 to-blue-500" />
                          </div>
                        )}

                        {/* Backend Layer */}
                        <div className="mb-8">
                          <h4 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wide">Backend</h4>
                          <div className="flex flex-wrap gap-4">
                            {project.techStack.filter((tech: any) => 
                              ['Backend', 'Language', 'Email'].includes(tech.category)
                            ).map((tech: any, index: number) => (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                whileHover={{ scale: 1.1, y: -4 }}
                                className="group relative p-5 rounded-xl border border-gray-800 bg-gray-950/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
                              >
                                <div className="flex flex-col items-center gap-3">
                                  <div className="relative">
                                    <div className="absolute inset-0 bg-purple-500/20 rounded-lg blur-md group-hover:blur-lg transition-all duration-300" />
                                    <tech.icon className="h-10 w-10 text-purple-400 relative drop-shadow-[0_0_12px_rgba(168,85,247,0.7)]" />
                                  </div>
                                  <div className="text-center">
                                    <div className="font-bold text-white text-sm">{tech.name}</div>
                                    <div className="text-xs text-gray-400 mt-1">{tech.category}</div>
                                  </div>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* Connecting Arrow */}
                        {(project.techStack.some((tech: any) => ['Database', 'Infrastructure', 'Integration'].includes(tech.category))) && (
                          <div className="flex justify-center mb-8">
                            <div className="w-0.5 h-8 bg-gradient-to-b from-purple-500 to-blue-500" />
                          </div>
                        )}

                        {/* Infrastructure Layer */}
                        <div className="mb-8">
                          <h4 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wide">Infrastructure</h4>
                          <div className="flex flex-wrap gap-4">
                            {project.techStack.filter((tech: any) => 
                              ['Database', 'Infrastructure', 'Integration'].includes(tech.category)
                            ).map((tech: any, index: number) => (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                whileHover={{ scale: 1.1, y: -4 }}
                                className="group relative p-5 rounded-xl border border-gray-800 bg-gray-950/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
                              >
                                <div className="flex flex-col items-center gap-3">
                                  <div className="relative">
                                    <div className="absolute inset-0 bg-purple-500/20 rounded-lg blur-md group-hover:blur-lg transition-all duration-300" />
                                    <tech.icon className="h-10 w-10 text-purple-400 relative drop-shadow-[0_0_12px_rgba(168,85,247,0.7)]" />
                                  </div>
                                  <div className="text-center">
                                    <div className="font-bold text-white text-sm">{tech.name}</div>
                                    <div className="text-xs text-gray-400 mt-1">{tech.category}</div>
                                  </div>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* AI/ML Layer */}
                        {project.techStack.some((tech: any) => ['AI', 'AI/ML'].includes(tech.category)) && (
                          <>
                            <div className="flex justify-center mb-8">
                              <div className="w-0.5 h-8 bg-gradient-to-b from-purple-500 to-blue-500" />
                            </div>
                            <div>
                              <h4 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wide">AI/ML</h4>
                              <div className="flex flex-wrap gap-4">
                                {project.techStack.filter((tech: any) => 
                                  ['AI', 'AI/ML'].includes(tech.category)
                                ).map((tech: any, index: number) => (
                                  <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    whileHover={{ scale: 1.1, y: -4 }}
                                    className="group relative p-5 rounded-xl border border-gray-800 bg-gray-950/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
                                  >
                                    <div className="flex flex-col items-center gap-3">
                                      <div className="relative">
                                        <div className="absolute inset-0 bg-purple-500/20 rounded-lg blur-md group-hover:blur-lg transition-all duration-300" />
                                        <tech.icon className="h-10 w-10 text-purple-400 relative drop-shadow-[0_0_12px_rgba(168,85,247,0.7)]" />
                                      </div>
                                      <div className="text-center">
                                        <div className="font-bold text-white text-sm">{tech.name}</div>
                                        <div className="text-xs text-gray-400 mt-1">{tech.category}</div>
                                      </div>
                                    </div>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </motion.div>
                  )}

                  {/* Tabbed Interface for Architecture Details */}
                  {architectureSections.length > 1 && (
                    <div className="mb-8 border-b border-gray-800">
                      <div className="flex flex-wrap gap-2">
                        {architectureSections.map((section, index) => (
                          <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={`px-6 py-3 font-semibold text-sm transition-all duration-300 border-b-2 ${
                              activeTab === index
                                ? 'border-purple-500 text-purple-400'
                                : 'border-transparent text-gray-400 hover:text-gray-300'
                            }`}
                          >
                            {section.title}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Architecture Content with Icons */}
                  <div className="space-y-10">
                    {architectureSections.map((section, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`${architectureSections.length > 1 && activeTab !== index ? 'hidden' : ''}`}
                      >
                        {/* Component Card with Icon */}
                        <div className="p-10 rounded-xl border border-gray-800 bg-gray-900/50 mb-8">
                          <div className="flex items-start gap-6 mb-8">
                            <div className="relative flex-shrink-0">
                              <div className="absolute inset-0 bg-purple-500/20 rounded-xl blur-xl" />
                              <div className="relative w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center border border-purple-500/30 shadow-lg shadow-purple-500/20">
                                <section.icon className="h-8 w-8 text-purple-400 drop-shadow-[0_0_12px_rgba(168,85,247,0.7)]" />
                              </div>
                            </div>
                            <div className="flex-1">
                              <h3 className="text-2xl font-bold text-white mb-6">{section.title}</h3>
                              <p className="text-gray-300 leading-[1.6] font-normal text-base">
                                {section.content}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Code Block for Technical Details */}
                        {section.content.length > 150 && (
                          <div className="mt-8 rounded-xl border border-gray-800 bg-gray-950/50 overflow-hidden">
                            <div className="px-4 py-3 bg-gray-900/50 border-b border-gray-800 flex items-center gap-2">
                              <Terminal className="h-4 w-4 text-purple-400" />
                              <span className="text-xs font-semibold text-gray-400">Technical Details</span>
                            </div>
                            <pre className="p-6 overflow-x-auto bg-gray-950">
                              <code className="text-sm text-gray-300 font-mono leading-relaxed whitespace-pre-wrap">
                                {section.content}
                              </code>
                            </pre>
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </section>
              );
            })()}

            {/* Results/Metrics */}
            {project.metrics && (() => {
              // Helper function to get icon for metric
              const getMetricIcon = (label: string): any => {
                const labelLower = label.toLowerCase();
                if (labelLower.includes('response') || labelLower.includes('time') || labelLower.includes('speed')) {
                  return Zap;
                } else if (labelLower.includes('conversion') || labelLower.includes('rate') || labelLower.includes('improvement')) {
                  return BarChart3;
                } else if (labelLower.includes('cost') || labelLower.includes('reduction') || labelLower.includes('efficiency')) {
                  return DollarSign;
                } else if (labelLower.includes('coverage') || labelLower.includes('uptime') || labelLower.includes('availability')) {
                  return Shield;
                } else if (labelLower.includes('cycle') || labelLower.includes('process') || labelLower.includes('workflow')) {
                  return Workflow;
                } else if (labelLower.includes('email') || labelLower.includes('classification') || labelLower.includes('routing')) {
                  return Mail;
                } else if (labelLower.includes('automated') || labelLower.includes('automation')) {
                  return Bot;
                }
                return BarChart3;
              };

              // Convert metrics to array format for consistent rendering
              const metricsArray = Array.isArray(project.metrics)
                ? project.metrics
                : Object.entries(project.metrics).map(([label, value]) => ({
                    label,
                    value: value as string,
                    icon: getMetricIcon(label),
                  }));

              return (
              <section id="results" className="scroll-mt-24">
                  {/* Gradient Divider */}
                  <div className="relative h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent mb-12 -mt-4" />
                  
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                    className="text-4xl font-bold mb-12 flex items-center gap-3"
                >
                    <BarChart3 className="h-8 w-8 text-purple-400" />
                    <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent" style={{ WebkitBackgroundClip: 'text' }}>
                  Results
                    </span>
                </motion.h2>
                  
                  {/* 3-Column Grid of Large Metric Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {metricsArray.map((metric: any, index: number) => {
                      const MetricIcon = metric.icon || getMetricIcon(metric.label);
                      // Extract number from value if it exists
                      const numberMatch = (metric.value || metric.label).match(/(\d+(?:\.\d+)?)/);
                      const displayNumber = numberMatch ? numberMatch[1] : null;
                      const displayText = metric.value || metric.label;
                      
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
                          
                          {/* Gradient Number or Value */}
                          <div className="text-center mb-4">
                            {displayNumber ? (
                              <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent" style={{ WebkitBackgroundClip: 'text', backgroundSize: '200% 100%' }}>
                                {displayNumber}
                                {displayText.includes('%') && '%'}
                                {displayText.includes('x') && 'x'}
                              </div>
                            ) : (
                              <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent" style={{ WebkitBackgroundClip: 'text' }}>
                                {displayText}
                        </div>
                            )}
                        </div>
                          
                          {/* Metric Label/Title */}
                          <h3 className="text-xl font-bold text-white mb-3 text-center group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">
                            {metric.label || displayText}
                          </h3>
                          
                          {/* Brief Description */}
                          {metric.description && (
                            <p className="text-gray-300 leading-[1.6] font-normal text-sm text-center">
                              {metric.description}
                            </p>
                          )}
                          {!metric.description && displayNumber && (
                            <p className="text-gray-300 leading-[1.6] font-normal text-sm text-center">
                              {displayText.replace(displayNumber, '').trim() || 'Key performance metric'}
                            </p>
                          )}
                        </motion.div>
                      );
                    })}
                </div>
              </section>
              );
            })()}

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
                Screenshots & Demo
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
                    demoLink={project.demo}
                  />
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

            {/* Engineering Notes */}
            {(project.codeSnippet || project.technicalDeepDive) && (
              <section id="engineering-notes" className="scroll-mt-24">
                {/* Gradient Divider */}
                <div className="relative h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent mb-12 -mt-4" />
                
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl font-bold mb-8 flex items-center gap-3"
                >
                  <Terminal className="h-8 w-8 text-purple-400" />
                  <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent" style={{ WebkitBackgroundClip: 'text' }}>
                  Engineering Notes
                  </span>
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <EngineeringNotes
                    codeSnippet={project.codeSnippet}
                    codeLanguage={project.codeLanguage}
                    technicalDeepDive={project.technicalDeepDive}
                    isAutoLeadCloser={isAutoLeadCloser}
                  />
                </motion.div>
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

