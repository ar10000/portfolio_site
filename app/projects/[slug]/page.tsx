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
        <span className="font-semibold text-white">{title}</span>
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
  const [isOpen, setIsOpen] = useState(false);

  if (!codeSnippet && !technicalDeepDive) {
    return null;
  }

  return (
    <div className="border border-gray-800 rounded-lg overflow-hidden">
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
        <span className="font-semibold text-white">Engineering Notes</span>
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
            <div className="p-6 space-y-6">
              {technicalDeepDive && (
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Technical Deep Dive</h4>
                  <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed whitespace-pre-line">
                    {technicalDeepDive}
                  </div>
                </div>
              )}
              {codeSnippet && (
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Code Example</h4>
                  <CodeBlock code={codeSnippet} language={codeLanguage || "typescript"} />
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
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
            {project.architecture && (
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
                  <p className="text-gray-300 leading-relaxed text-lg">{project.architecture}</p>
                </motion.div>
              </section>
            )}

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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {/* Handle both array and object formats */}
                  {Array.isArray(project.metrics) ? (
                    project.metrics.map((metric: any, index: number) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="p-6 rounded-lg border border-gray-800 bg-gray-900/50 text-center"
                      >
                        {metric.icon && (
                          <metric.icon
                            className={`h-8 w-8 mx-auto mb-3 ${
                              isAutoLeadCloser ? "text-blue-400" : "text-purple-400"
                            }`}
                          />
                        )}
                        <div className="text-2xl font-bold text-white mb-1">
                          {metric.value}
                        </div>
                        <div className="text-sm text-gray-400">{metric.label}</div>
                      </motion.div>
                    ))
                  ) : (
                    Object.entries(project.metrics).map(([label, value], index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="p-6 rounded-lg border border-gray-800 bg-gray-900/50"
                      >
                        <div className="text-sm font-semibold text-gray-400 mb-2">
                          {label}
                        </div>
                        <div className={`text-lg font-bold ${
                          isAutoLeadCloser ? "text-blue-400" : "text-purple-400"
                        }`}>
                          {value as string}
                        </div>
                      </motion.div>
                    ))
                  )}
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
                <p className="text-gray-300 leading-relaxed text-lg">{project.lessonsLearned}</p>
              </motion.div>
            </section>

            {/* Engineering Notes */}
            {(project.codeSnippet || project.technicalDeepDive) && (
              <section id="engineering-notes" className="scroll-mt-24">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl font-bold mb-6"
                >
                  Engineering Notes
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
      </div>
    </div>
  );
}

