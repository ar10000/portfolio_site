"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink, Github, CheckCircle2, FileText } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    id: "autoleadcloser",
    title: "AutoLeadCloser",
    summary: "AI email qualification system. Processes inbound leads, extracts qualification criteria, and routes to calendar booking. Production-ready prototype.",
    description:
      "AI email qualification system. Processes inbound leads, extracts qualification criteria, and routes to calendar booking. Production-ready prototype.",
    impact: null,
    image: "/images/projects/autoleadcloser-1.jpg",
    tech: ["Flask", "Python", "Claude AI", "Gmail API", "Supabase", "PostgreSQL"],
    badge: { type: "case-study", label: "Prototype" },
    demoUrl: null,
    githubUrl: null,
    status: "Production-ready prototype",
  },
  {
    id: "creative-garden",
    title: "Creative Garden",
    summary: "Flutter app for tracking creative projects through lifecycle stages. Momentum scoring with offline support.",
    description:
      "Flutter app for tracking creative projects through lifecycle stages. Momentum scoring with offline support.",
    impact: null,
    image: "/images/projects/creative-garden-1.jpg",
    tech: ["Flutter 3.22", "Dart", "Supabase", "PostgreSQL"],
    badge: { type: "demo", label: "Production" },
    demoUrl: "https://creativegarden.app",
    githubUrl: "https://github.com/ar10000/creative-garden",
    status: "Production",
  },
  {
    id: "flowcircle",
    title: "FlowCircle",
    summary: "Minimalist project management app for individual creatives. Built with Next.js 14 and Supabase. Early build focusing on foundations.",
    description:
      "Minimalist project management app for individual creatives. Built with Next.js 14 and Supabase. Early build focusing on foundations.",
    impact: null,
    image: "/images/projects/flowcircle-1.jpg",
    tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "shadcn/ui", "Supabase"],
    badge: { type: "case-study", label: "In Development" },
    demoUrl: null,
    githubUrl: null,
    status: "In Development",
  },
  {
    id: "portfolio-site",
    title: "Portfolio Website",
    summary: "Next.js 14 portfolio with AI chatbot, GitHub sync, and automated content management. Working example of technical capabilities.",
    description:
      "Next.js 14 portfolio with AI chatbot, GitHub sync, and automated content management. Working example of technical capabilities.",
    impact: null,
    image: "/images/projects/portfolio-website-1.jpg",
    tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "shadcn/ui", "Framer Motion", "Claude AI"],
    badge: { type: "demo", label: "Live" },
    demoUrl: null,
    githubUrl: null,
    status: "Live",
  },
  {
    id: "launchlens",
    title: "LaunchLens",
    summary: "Product launch analytics and tracking platform. Real-time dashboards and automated insights for launch performance.",
    description:
      "Product launch analytics and tracking platform. Real-time dashboards and automated insights for launch performance.",
    impact: null,
    image: "/images/projects/launchlens-1.jpg",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL"],
    badge: { type: "case-study", label: "In Development" },
    demoUrl: null,
    githubUrl: "https://github.com/ar10000/LaunchLens",
    status: "In Development",
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

