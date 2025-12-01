"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: "creative-garden",
    title: "Creative Garden",
    description:
      "Content Workflow Engine — Production-grade system for moving ideas from capture to publication.",
    tech: ["Flutter", "Python", "Supabase", "AI"],
    image: "/images/projects/creative-garden-thumb.jpg",
    link: "/projects/creative-garden",
    github: "https://github.com/ar10000/creative-garden",
    featured: true,
    demoVideoComingSoon: false,
  },
  {
    id: "autoleadcloser",
    title: "AutoLeadCloser",
    description:
      "AI-driven lead qualification and automated email reply system that handles the entire first-contact process.",
    tech: ["Python", "Supabase", "Claude AI", "Gmail API"],
    image: "/images/projects/autoleadcloser-thumb.jpg",
    link: "/projects/autoleadcloser",
    github: null, // Private repository
    featured: true,
    demoVideoComingSoon: false,
  },
  {
    id: "flowcircle",
    title: "FlowCircle",
    description:
      "Personal productivity app for creative project tracking with visual boards and real-time sync.",
    tech: ["Flutter", "Supabase", "Dart", "PostgreSQL"],
    image: "/images/projects/flowcircle-thumb.jpg",
    link: "/projects/flowcircle",
    github: "https://github.com/ar10000",
    featured: false,
  },
  {
    id: "agency-autopilot",
    title: "Agency Autopilot",
    description:
      "Complete workflow automation for service agencies, eliminating manual busywork with no-code/low-code automation.",
    tech: ["Make.com", "n8n", "Zapier", "REST APIs"],
    image: "/images/projects/agency-autopilot-thumb.jpg",
    link: "/projects/agency-autopilot",
    github: "https://github.com/ar10000",
    featured: false,
  },
  {
    id: "portfolio-site",
    title: "AI Product Builder Portfolio",
    description:
      "A modern, production-ready portfolio website showcasing AI-powered products and automation solutions.",
    tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Claude AI"],
    image: "/images/projects/portfolio-site-thumb.jpg",
    link: "/projects/portfolio-site",
    github: "https://github.com/ar10000/portfolio_site",
    featured: true,
    demoVideoComingSoon: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function ProjectsPage() {
  return (
    <div className="pt-24 px-4 sm:px-6 lg:px-8 pb-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            What I've <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Built</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real products that solve real problems. Each one shipped fast and delivered measurable results.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-lg border border-gray-800 bg-gray-900/50 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="aspect-video relative overflow-hidden bg-gray-900">
                {/* Use regular img tag for better error handling */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to placeholder if image doesn't exist
                    const target = e.target as HTMLImageElement;
                    target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect fill='%230a0a0a' width='600' height='400'/%3E%3Crect fill='%231a1a1a' x='0' y='0' width='600' height='400'/%3E%3Cg opacity='0.3'%3E%3Ccircle cx='300' cy='150' r='40' fill='%233b82f6'/%3E%3Ccircle cx='300' cy='250' r='30' fill='%238b5cf6'/%3E%3C/g%3E%3Ctext x='300' y='200' font-family='system-ui' font-size='16' fill='%234b5563' text-anchor='middle' dominant-baseline='middle'%3EImage Placeholder%3C/text%3E%3C/svg%3E";
                    target.onerror = null; // Prevent infinite loop
                  }}
                />
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                  {project.featured && (
                    <span className="px-2 py-1 text-xs font-semibold bg-purple-500/20 text-purple-400 rounded">
                      Featured
                    </span>
                  )}
                </div>

                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-gray-800 text-gray-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>


                <div className="flex items-center gap-4">
                  <Link
                    href={project.link}
                    className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

