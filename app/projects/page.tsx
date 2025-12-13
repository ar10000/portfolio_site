"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Github, FileText, AlertCircle, Lightbulb, TrendingUp } from "lucide-react";
import { useState } from "react";

// Project interface for type safety
interface Project {
  id: string;
  title: string;
  summary: string;
  description: string;
  impact: string | null;
  role: string;
  context: string;
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
    summary: "Eliminates manual lead qualification by automatically processing inbound emails, extracting qualification criteria, and responding within minutes. Reduces a 15-minute manual process to a 3-second API call.",
    description:
      "Eliminates manual lead qualification by automatically processing inbound emails, extracting qualification criteria, and responding within minutes. Reduces a 15-minute manual process to a 3-second API call, ensuring faster response times and consistent follow-up without manual intervention.",
    role: "Full-Stack Developer & AI Engineer",
    context: "Sales teams often waste hours manually filtering spam and low-quality leads.",
    problem: "Small business owners lose ~10 hours/week manually filtering spam and unqualified leads.",
    solution: "Built an autonomous AI agent using Claude API that parses emails, scores lead quality, and drafts replies.",
    impact: "Engineered to replace manual data entry, reducing a typical 15-minute lead qualification process to a 3-second API call.",
    image: "/images/projects/autoleadcloser-1.jpg",
    tech: ["Flask", "Python", "Claude AI", "Gmail API", "Supabase", "PostgreSQL"],
    githubUrl: "https://github.com/ar10000/AutoLeadCloser",
  },
  {
    id: "launchlens",
    title: "LaunchLens",
    summary: "AI-powered marketing strategy generator for indie builders. Generates honest, actionable marketing strategies without fluff, with optional GitHub repository analysis for deeper insights.",
    description:
      "AI-powered marketing strategy generator for indie builders. Uses Google Gemini 2.0 Flash to generate comprehensive marketing strategies. Includes GitHub integration for repository analysis, editable block-based editor, voice customization, and export options.",
    role: "Frontend Engineer (Next.js)",
    context: "Indie builders need actionable marketing strategies but lack access to marketing expertise.",
    problem: "Indie builders struggle to create effective marketing strategies. Generic advice lacks specificity, and hiring marketing consultants is expensive. No tool generates honest, actionable strategies tailored to their projects.",
    solution: "AI-powered marketing strategy generator using Google Gemini 2.0 Flash. Optionally analyzes GitHub repositories for deeper insights. Generates editable strategies with customizable tone and personality, exportable as Markdown or JSON.",
    impact: "Generates comprehensive marketing strategies in minutes, eliminating the need for expensive consultants or generic templates.",
    image: "/images/projects/launchlens-1.jpg",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Google Gemini 2.0 Flash", "Supabase", "PostgreSQL"],
    githubUrl: "https://github.com/ar10000/LaunchLens",
  },
  {
    id: "adaptive-resume",
    title: "Adaptive Resume",
    summary: "Dynamic resume builder that adapts content based on job requirements and applicant tracking system optimization.",
    description:
      "Dynamic resume builder that adapts content based on job requirements and applicant tracking system optimization.",
    role: "Full-Stack Developer (Next.js)",
    context: "Job seekers need to customize resumes for each application but lack efficient tools.",
    problem: "Job seekers need to customize resumes for each application but lack efficient tools. Applicant Tracking Systems (ATS) require specific formatting and keyword optimization. Managing multiple resume versions for different job types is time-consuming. No intelligent system to adapt resume content based on job descriptions.",
    solution: "Adaptive Resume provides a dynamic resume builder that automatically adapts content based on job requirements. The system analyzes job descriptions, optimizes content for ATS compatibility, and generates tailored resume versions. Users can maintain a master resume and generate customized versions for specific applications with intelligent keyword matching and formatting optimization.",
    impact: "Parses and reformats complex PDF structures dynamically, removing the need for manual layout adjustments.",
    image: "/images/projects/adaptive-resume-1.jpg",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL"],
    githubUrl: "https://github.com/ar10000/adaptive-resume",
  },
  {
    id: "creative-garden",
    title: "Creative Garden",
    summary: "Flutter app for tracking creative projects through lifecycle stages. Momentum scoring with offline support.",
    description:
      "Flutter app for tracking creative projects through lifecycle stages. Momentum scoring with offline support.",
    role: "Mobile Developer (Flutter)",
    context: "Creative insights are often lost due to friction in standard note-taking apps.",
    problem: "Creatives lose track of ideas due to friction and slow load times in standard note apps.",
    solution: "Developed a high-performance cross-platform Flutter app designed for instant, frictionless idea capture.",
    impact: "Optimized Flutter rendering engine to achieve 60fps performance, ensuring zero-latency input for rapid idea capture.",
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
    role: "Full-Stack Developer (Next.js)",
    context: "Standard productivity tools often overwhelm neurodivergent users with visual clutter.",
    problem: "Standard productivity tools often overwhelm neurodivergent users with visual clutter.",
    solution: "Designed a 'visual-first' workflow app focusing on cognitive accessibility and reduced decision fatigue.",
    impact: "Implements a proprietary 'visual-first' navigation system designed to reduce cognitive load compared to standard list views.",
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
    role: "Full-Stack Developer (Next.js)",
    context: "Traditional portfolios are static and don't demonstrate automation capabilities.",
    problem: "Traditional portfolios are static and don't demonstrate automation capabilities. No way to showcase AI integration skills and modern web architecture. Static sites fail to showcase the full range of technical skills including API development. Need for dynamic content management without direct code changes.",
    solution: "The portfolio functions as a working demonstration of technical capabilities. Visitors can interact with an AI chatbot that answers questions about services and projects. Project information syncs automatically from GitHub repositories, keeping the portfolio current without manual updates. Content management happens through an admin interface, allowing updates without code changes. The portfolio itself proves the technical skills it describes.",
    impact: "The Portfolio Website serves as a living demonstration of technical capabilities, showcasing AI integration, automated content management, and modern web architecture. It provides visitors with an interactive experience while automatically staying current through GitHub integration.",
    image: "/images/projects/portfolio-website-1.jpg",
    tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "shadcn/ui", "Framer Motion", "Claude AI"],
    githubUrl: "https://github.com/ar10000/portfolio_site",
  },
];

// Separate component for project image with error handling
function ProjectImage({ project }: { project: typeof projects[0] }) {
  const [imageError, setImageError] = useState(false);

  if (!project.image || imageError) {
    return (
      <div className="relative h-64 overflow-hidden bg-gray-800">
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
    <div className="relative h-64 overflow-hidden bg-gray-800">
      <img
        src={project.image}
        alt={`${project.title} project preview`}
        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        onError={() => {
          setImageError(true);
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <div className="pt-24 px-6 sm:px-6 lg:px-8 pb-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-white">Case Studies</h1>
          <p className="text-lg text-gray-400 leading-[1.6] font-normal max-w-3xl">
            Technical solutions built for real problems. Each case study documents the problem, solution, and measurable outcomes.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                {/* Left: Image */}
                <div className="relative">
                  <ProjectImage project={project} />
                </div>

                {/* Right: Content */}
                <div className="flex flex-col">
                  {/* Role Badge */}
                  <div className="mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 border border-purple-500/20 text-purple-400">
                      {project.role}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
                    {project.title}
                  </h2>

                  {/* Problem → Solution → Outcome Flow */}
                  <div className="space-y-6 mb-8">
                    {/* Problem */}
                    <div className="relative">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 mt-1">
                          <div className="relative">
                            <div className="absolute inset-0 bg-red-500/20 rounded-full blur-md" />
                            <div className="relative w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/30">
                              <AlertCircle className="h-5 w-5 text-red-400" />
                            </div>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-sm font-semibold text-red-400 uppercase tracking-wide mb-2">
                            Problem
                          </h3>
                          <p className="text-gray-300 leading-relaxed">{project.problem}</p>
                        </div>
                      </div>
                    </div>

                    {/* Solution */}
                    <div className="relative">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 mt-1">
                          <div className="relative">
                            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-md" />
                            <div className="relative w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/30">
                              <Lightbulb className="h-5 w-5 text-blue-400" />
                            </div>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wide mb-2">
                            Solution
                          </h3>
                          <p className="text-gray-300 leading-relaxed">{project.solution}</p>
                        </div>
                      </div>
                    </div>

                    {/* Outcome */}
                    {project.impact && (
                      <div className="relative">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 mt-1">
                            <div className="relative">
                              <div className="absolute inset-0 bg-green-500/20 rounded-full blur-md" />
                              <div className="relative w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/30">
                                <TrendingUp className="h-5 w-5 text-green-400" />
                              </div>
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-sm font-semibold text-green-400 uppercase tracking-wide mb-2">
                              Outcome
                            </h3>
                            <p className="text-gray-300 leading-relaxed">{project.impact}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="mb-8">
                    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                      Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-sm font-medium bg-gray-800/50 text-gray-300 rounded-md border border-gray-700/50 hover:border-gray-600 hover:bg-gray-800 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link href={`/projects/${project.id}`} className="flex-1">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full px-6 py-3 min-h-[44px] bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg font-semibold text-white flex items-center justify-center gap-2 shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/60 transition-all duration-300"
                      >
                        View Full Case Study
                        <ArrowRight className="h-4 w-4" />
                      </motion.button>
                    </Link>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0"
                      >
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="px-6 py-3 min-h-[44px] bg-gray-800/50 text-gray-300 rounded-lg border border-gray-700 hover:bg-gray-700 hover:text-white hover:border-purple-500/50 transition-all duration-300 flex items-center justify-center gap-2"
                        >
                          <Github className="h-4 w-4" />
                          <span className="hidden sm:inline">Code</span>
                        </motion.button>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Divider between case studies */}
              {index < projects.length - 1 && (
                <div className="mt-16 pt-16 border-t border-gray-800" />
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
