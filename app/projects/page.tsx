"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: "ai-chat-assistant",
    title: "AI Chat Assistant",
    description:
      "An intelligent conversational AI built with advanced language models, featuring real-time responses and context awareness.",
    tech: ["Next.js", "OpenAI", "TypeScript", "Tailwind CSS"],
    image: "/api/placeholder/600/400",
    link: "/projects/ai-chat-assistant",
    github: "https://github.com/ar10000",
    featured: true,
  },
  {
    id: "smart-analytics-dashboard",
    title: "Smart Analytics Dashboard",
    description:
      "A comprehensive analytics platform with AI-powered insights and predictive modeling capabilities.",
    tech: ["React", "Python", "TensorFlow", "D3.js"],
    image: "/api/placeholder/600/400",
    link: "/projects/smart-analytics-dashboard",
    github: "https://github.com/ar10000",
    featured: true,
  },
  {
    id: "automated-content-generator",
    title: "Automated Content Generator",
    description:
      "AI-driven content creation tool that generates high-quality articles, social media posts, and marketing copy.",
    tech: ["Next.js", "GPT-4", "Node.js", "MongoDB"],
    image: "/api/placeholder/600/400",
    link: "/projects/automated-content-generator",
    github: "https://github.com/ar10000",
    featured: false,
  },
  {
    id: "intelligent-recommendation-system",
    title: "Intelligent Recommendation System",
    description:
      "Machine learning-powered recommendation engine that personalizes user experiences across platforms.",
    tech: ["Python", "Scikit-learn", "FastAPI", "PostgreSQL"],
    image: "/api/placeholder/600/400",
    link: "/projects/intelligent-recommendation-system",
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

                <div className="flex items-center gap-4">
                  <Link
                    href={project.link}
                    className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

