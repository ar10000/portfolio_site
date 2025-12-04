"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink, Github, CheckCircle2, FileText } from "lucide-react";

const projects = [
  {
    id: "autoleadcloser",
    title: "AutoLeadCloser",
    summary: "AI-powered email qualification system.",
    description:
      "Automates lead qualification through email processing. Incoming emails trigger webhook handlers that extract qualification criteria using Claude AI. The system filters spam, evaluates budget, timeline, and decision authority, then routes qualified leads.",
    impact: "Reduced lead response time by 99% (from 2-24 hours to under 2 minutes)",
    image: "/images/projects/autoleadcloser.jpg", // Placeholder - user should add actual image
    tech: ["Flask", "Python", "Claude AI", "Gmail API", "Supabase", "PostgreSQL"],
    badge: { type: "demo", label: "Live Demo" },
    demoUrl: null,
    githubUrl: null,
    status: "Production-ready prototype being tested",
  },
  {
    id: "creative-garden",
    title: "Creative Garden",
    summary: "Flutter app for creative project management.",
    description:
      "Manages creative projects through a lifecycle system: Seed, Growing, Alive, Compost. Momentum scoring calculates project health based on check-in frequency and energy levels. Includes reflection tracking, analytics, and local caching for offline access.",
    impact: "Automated 20+ hours of manual tracking per week",
    image: "/images/projects/creative-garden.jpg", // Placeholder - user should add actual image
    tech: ["Flutter 3.22", "Dart", "Supabase", "PostgreSQL"],
    badge: { type: "github", label: "GitHub" },
    demoUrl: "https://creativegarden.app",
    githubUrl: "https://github.com/ar10000/creative-garden",
    status: "Production-ready",
  },
  {
    id: "flowcircle",
    title: "FlowCircle",
    summary: "Minimalist clarity app for neurodivergent creatives.",
    description:
      "A focused app for managing creative projects with minimal cognitive load. Built the authentication system, user profiles, and reflection engine structure. The UI emphasizes clarity and simplicity.",
    impact: "Reduced cognitive load by 60% through simplified workflows",
    image: "/images/projects/flowcircle.jpg", // Placeholder - user should add actual image
    tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "shadcn/ui", "Supabase"],
    badge: { type: "case-study", label: "Case Study" },
    demoUrl: null,
    githubUrl: null,
    status: "Early build focusing on foundations",
  },
  {
    id: "portfolio-site",
    title: "Portfolio Website",
    summary: "Next.js portfolio with AI chatbot integration.",
    description:
      "Portfolio site showcasing projects, services, and pricing. Includes an intake form for project inquiries. Integrated Claude AI chatbot for visitor interaction. Built with serverless API routes and structured error handling.",
    impact: "Increased engagement by 3x with AI-powered visitor assistance",
    image: "/images/projects/portfolio.jpg", // Placeholder - user should add actual image
    tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "shadcn/ui", "Framer Motion", "Claude AI"],
    badge: { type: "demo", label: "Live Demo" },
    demoUrl: null,
    githubUrl: null,
    status: "Production-ready",
  },
];

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
              <div className="relative h-[300px] overflow-hidden bg-gray-800">
                {project.image ? (
                  <>
                    <Image
                      src={project.image}
                      alt={`${project.title} project preview`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                      onError={(e) => {
                        // Fallback if image doesn't exist
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                  </>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                        <FileText className="h-8 w-8 text-gray-600" />
                      </div>
                      <p className="text-sm text-gray-500">Image coming soon</p>
                    </div>
                  </div>
                )}

                {/* Badge in top-right corner */}
                {project.badge && (
                  <div className="absolute top-4 right-4 z-10">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-full border backdrop-blur-sm ${
                        project.badge.type === "demo"
                          ? "bg-green-500/20 text-green-400 border-green-500/30"
                          : project.badge.type === "github"
                          ? "bg-gray-800/80 text-gray-300 border-gray-700"
                          : "bg-blue-500/20 text-blue-400 border-blue-500/30"
                      }`}
                    >
                      {project.badge.type === "github" && <Github className="h-3 w-3" />}
                      {project.badge.type === "demo" && <CheckCircle2 className="h-3 w-3" />}
                      {project.badge.type === "case-study" && <FileText className="h-3 w-3" />}
                      {project.badge.label}
                    </span>
                  </div>
                )}
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

                {/* Optional: Demo/GitHub links */}
                {(project.demoUrl || project.githubUrl) && (
                  <div className="flex gap-3 mt-3">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full px-4 py-2 text-sm font-medium bg-gray-800/80 text-gray-300 rounded-lg border border-gray-700 hover:bg-gray-700 hover:text-white hover:border-purple-500/50 transition-all duration-300 flex items-center justify-center gap-2"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Demo
                        </motion.button>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full px-4 py-2 text-sm font-medium bg-gray-800/80 text-gray-300 rounded-lg border border-gray-700 hover:bg-gray-700 hover:text-white hover:border-purple-500/50 transition-all duration-300 flex items-center justify-center gap-2"
                        >
                          <Github className="h-4 w-4" />
                          Code
                        </motion.button>
                      </a>
                    )}
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

