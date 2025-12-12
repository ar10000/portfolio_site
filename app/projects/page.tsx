"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink, Github, CheckCircle2, FileText } from "lucide-react";
import { useState } from "react";

// Project interface for type safety
interface Project {
  id: string;
  title: string;
  summary: string;
  description: string;
  impact: string | null;
  problem: string;
  solution: string;
  image: string;
  tech: string[];
  githubUrl: string;
}

const projects: Project[] = [
  {
    id: "autoleadcloser",
    title: "AutoLeadCloser",
    summary: "AI email qualification system. Processes inbound leads, extracts qualification criteria, and routes to calendar booking. Production-ready prototype.",
    description:
      "AI email qualification system. Processes inbound leads, extracts qualification criteria, and routes to calendar booking. Production-ready prototype.",
    problem: "Service businesses spend 2-3 hours daily manually reading, analyzing, and responding to inbound lead emails. Each email requires reading the full message, extracting key qualification criteria, assessing lead fit, and crafting personalized responses. This manual process creates bottlenecks during peak inquiry periods and results in delayed responses that directly impact conversion rates. After-hours and weekend leads often wait 12-24 hours for initial contact, significantly reducing the likelihood of engagement.",
    solution: "AutoLeadCloser leverages Claude AI's advanced natural language understanding to automatically process and qualify inbound leads. The system uses Claude API to extract qualification criteria—budget, timeline, decision authority, and project scope—from unstructured email content. Automated workflows maintain full conversation context across email threads, enabling intelligent follow-up questions and context-aware responses. When leads meet qualification thresholds, the system automatically routes them to calendar booking. The entire pipeline operates autonomously via webhook-triggered automation, processing leads 24/7 without manual intervention.",
    impact: "AutoLeadCloser reduces manual email processing time by 90%, cutting daily lead qualification work from 2-3 hours to under 15 minutes. Response time decreases from an average of 8-12 hours to under 2 minutes, resulting in a 3-5x increase in lead conversion rates. The automated system handles 100% of after-hours inquiries immediately, eliminating the 12-24 hour response delay that previously caused 40-60% of qualified leads to disengage.",
    image: "/images/projects/autoleadcloser-1.jpg",
    tech: ["Flask", "Python", "Claude AI", "Gmail API", "Supabase", "PostgreSQL"],
    githubUrl: "https://github.com/ar10000/AutoLeadCloser",
  },
  {
    id: "creative-garden",
    title: "Creative Garden",
    summary: "Flutter app for tracking creative projects through lifecycle stages. Momentum scoring with offline support.",
    description:
      "Flutter app for tracking creative projects through lifecycle stages. Momentum scoring with offline support.",
    problem: "Creative individuals struggle to maintain momentum across multiple projects. Hard to track which projects are active vs. stalled without clear structure. No good system for understanding project health based on activity patterns. Existing tools either too complex (project management) or too simple (to-do lists).",
    solution: "The app manages creative projects through defined lifecycle stages: Seed (idea), Growing (in progress), Alive (active), Compost (archived). Momentum scoring calculates project health based on check-in frequency and energy levels. Users can reflect on progress, view analytics, and track projects offline. Built with Flutter for cross-platform support and Supabase for data storage.",
    impact: "Creative Garden helps users maintain momentum across multiple creative projects by providing clear structure and automated health tracking. The momentum scoring system gives users insights into project activity patterns, helping them prioritize and manage their creative work more effectively.",
    image: "/images/projects/creative-garden-1.jpg",
    tech: ["Flutter 3.22", "Dart", "Supabase", "PostgreSQL"],
    githubUrl: "https://github.com/ar10000/creative-garden",
  },
  {
    id: "flowcircle",
    title: "FlowCircle",
    summary: "Minimalist project management app for individual creatives. Built with Next.js 14 and Supabase. Early build focusing on foundations.",
    description:
      "Minimalist project management app for individual creatives. Built with Next.js 14 and Supabase. Early build focusing on foundations.",
    problem: "Individual creatives need simple project tracking without cognitive overload. Existing tools are too complex with features most solo creators don't need. No good options for minimal, distraction-free project management. Need for clean data architecture that can scale to team features later.",
    solution: "The app provides minimal project management focused on clarity and simplicity. Users can create projects, track progress, and reflect on work without unnecessary features. Built with Supabase for authentication and data storage. Architecture designed with future team features in mind, but currently focused on individual creators.",
    impact: "FlowCircle provides individual creatives with a minimal, distraction-free project management solution. The clean architecture and simple interface reduce cognitive load while maintaining the flexibility to scale to team features in the future.",
    image: "/images/projects/flowcircle-1.jpg",
    tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "shadcn/ui", "Supabase"],
    githubUrl: "https://github.com/ar10000/flowcircle",
  },
  {
    id: "portfolio-site",
    title: "Portfolio Website",
    summary: "Next.js 14 portfolio with AI chatbot, GitHub sync, and automated content management. Working example of technical capabilities.",
    description:
      "Next.js 14 portfolio with AI chatbot, GitHub sync, and automated content management. Working example of technical capabilities.",
    problem: "Traditional portfolios are static and don't demonstrate automation capabilities. No way to showcase AI integration skills and modern web architecture. Static sites fail to showcase the full range of technical skills including API development. Need for dynamic content management without direct code changes.",
    solution: "The portfolio functions as a working demonstration of technical capabilities. Visitors can interact with an AI chatbot that answers questions about services and projects. Project information syncs automatically from GitHub repositories, keeping the portfolio current without manual updates. Content management happens through an admin interface, allowing updates without code changes. The portfolio itself proves the technical skills it describes.",
    impact: "The Portfolio Website serves as a living demonstration of technical capabilities, showcasing AI integration, automated content management, and modern web architecture. It provides visitors with an interactive experience while automatically staying current through GitHub integration.",
    image: "/images/projects/portfolio-website-1.jpg",
    tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "shadcn/ui", "Framer Motion", "Claude AI"],
    githubUrl: "https://github.com/ar10000/portfolio_site",
  },
  {
    id: "launchlens",
    title: "LaunchLens",
    summary: "Product launch analytics and tracking platform. Real-time dashboards and automated insights for launch performance.",
    description:
      "Product launch analytics and tracking platform. Real-time dashboards and automated insights for launch performance.",
    problem: "Product teams lack visibility into launch performance metrics. Manual tracking of launch data is time-consuming and error-prone. No centralized platform for tracking launch analytics across multiple products. Difficult to compare launch performance across different products or time periods.",
    solution: "LaunchLens provides a comprehensive analytics platform for tracking product launches. The system aggregates launch data from multiple sources, provides real-time dashboards, and generates automated insights. Teams can track key metrics, compare performance across launches, and identify trends to improve future launches.",
    impact: "LaunchLens gives product teams real-time visibility into launch performance metrics, eliminating manual tracking and enabling data-driven decisions. Teams can compare launches across products and time periods to identify trends and improve future launch strategies.",
    image: "/images/projects/launchlens-1.jpg",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL"],
    githubUrl: "https://github.com/ar10000/LaunchLens",
  },
  {
    id: "adaptive-resume",
    title: "Adaptive Resume",
    summary: "Dynamic resume builder that adapts content based on job requirements and applicant tracking system optimization.",
    description:
      "Dynamic resume builder that adapts content based on job requirements and applicant tracking system optimization.",
    problem: "Job seekers need to customize resumes for each application but lack efficient tools. Applicant Tracking Systems (ATS) require specific formatting and keyword optimization. Managing multiple resume versions for different job types is time-consuming. No intelligent system to adapt resume content based on job descriptions.",
    solution: "Adaptive Resume provides a dynamic resume builder that automatically adapts content based on job requirements. The system analyzes job descriptions, optimizes content for ATS compatibility, and generates tailored resume versions. Users can maintain a master resume and generate customized versions for specific applications with intelligent keyword matching and formatting optimization.",
    impact: "Adaptive Resume saves job seekers significant time by automatically customizing resumes for each application. The ATS optimization increases resume parsing success rates, while intelligent keyword matching improves application relevance and interview conversion.",
    image: "/images/projects/adaptive-resume-1.jpg",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL"],
    githubUrl: "https://github.com/ar10000/adaptive-resume",
  },
];

// Separate component for project image with error handling
function ProjectImage({ project }: { project: typeof projects[0] }) {
  const [imageError, setImageError] = useState(false);

  if (!project.image || imageError) {
    return (
      <div className="relative h-[300px] overflow-hidden bg-gray-800">
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
              <FileText className="h-8 w-8 text-gray-600" />
            </div>
            <p className="text-sm text-gray-500">Image coming soon</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-[300px] overflow-hidden bg-gray-800">
      <Image
        src={project.image}
        alt={`${project.title} project preview`}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        onError={() => {
          setImageError(true);
        }}
      />
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <div className="pt-24 px-4 sm:px-6 lg:px-8 pb-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="mb-16"
        >
          <h1 className="text-5xl font-bold mb-4 text-white">Projects</h1>
          <p className="text-gray-400 leading-[1.6] font-normal">
            Technical work and system architecture.
          </p>
        </motion.div>

        {/* Grid Layout: 2 columns on desktop, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.35, delay: index * 0.08, ease: "easeOut" }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              {/* Purple glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-2xl pointer-events-none -z-10" />

              {/* Project Image - Large and prominent (300px+ height) */}
              <div className="relative">
                <ProjectImage project={project} />
              </div>

              {/* Card Content */}
              <div className="p-6">
                {/* Impact Statement - Prominently displayed above title */}
                {project.impact && (
                  <div className="mb-3">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 backdrop-blur-sm">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-sm font-bold text-green-400 leading-tight">
                        {project.impact}
                      </span>
                    </div>
                  </div>
                )}

                {/* Title - Larger and bolder */}
                <h2 className="text-2xl font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">
                  {project.title}
                </h2>
                <p className="text-gray-400 mb-4 leading-[1.6] font-normal">{project.summary}</p>

                {/* Tech Tags - Visually secondary, smaller and more subdued */}
                <div className="flex flex-wrap gap-1.5 mb-6 opacity-70">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-normal bg-gray-800/50 text-gray-500 rounded-full border border-gray-800/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Project Button - Gradient styling */}
                <Link href={`/projects/${project.id}`}>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl font-semibold text-white flex items-center justify-center gap-2 shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/60 hover:from-purple-400 hover:to-blue-400 transition-all duration-300"
                  >
                    View Project
                    <ArrowRight className="h-4 w-4" />
                  </motion.button>
                </Link>

                {/* GitHub link */}
                {project.githubUrl && (
                  <div className="mt-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full px-4 py-2 text-sm font-medium bg-gray-800/80 text-gray-300 rounded-lg border border-gray-700 hover:bg-gray-700 hover:text-white hover:border-purple-500/50 transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <Github className="h-4 w-4" />
                        View on GitHub
                      </motion.button>
                    </a>
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}

