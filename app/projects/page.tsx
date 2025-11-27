"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: "creative-garden",
    title: "Creative Garden",
    description:
      "Content Workflow Engine — Production-grade system for moving ideas from capture to publication.",
    tech: ["Flutter", "Python", "Supabase", "AI"],
    image: "/api/placeholder/600/400",
    link: "/projects/creative-garden",
    github: "https://github.com/ar10000/creative-garden",
    featured: true,
    demoVideoComingSoon: true,
  },
  {
    id: "autoleadcloser",
    title: "AutoLeadCloser",
    description:
      "AI-driven lead qualification and automated email reply system that handles the entire first-contact process.",
    tech: ["Python", "Supabase", "Claude AI", "Gmail API"],
    image: "/api/placeholder/600/400",
    link: "/projects/autoleadcloser",
    github: null, // Private repository
    featured: true,
    demoVideoComingSoon: true,
  },
  {
    id: "flowcircle",
    title: "FlowCircle",
    description:
      "Personal productivity app for creative project tracking with visual boards and real-time sync.",
    tech: ["Flutter", "Supabase", "Dart", "PostgreSQL"],
    image: "/api/placeholder/600/400",
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
    image: "/api/placeholder/600/400",
    link: "/projects/agency-autopilot",
    github: "https://github.com/ar10000",
    featured: false,
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
              <div className="aspect-video bg-gradient-to-br from-purple-900/20 to-blue-900/20 flex items-center justify-center">
                <div className="text-4xl font-bold text-gray-700">
                  {project.title.charAt(0)}
                </div>
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

                {project.demoVideoComingSoon && (
                  <div className="mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs bg-blue-500/10 text-blue-400/70 rounded-full border border-blue-500/20">
                      📹 Demo video coming soon
                    </span>
                  </div>
                )}

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

