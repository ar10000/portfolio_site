"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Workflow,
  Zap,
  Building2,
  Clock,
  AlertCircle,
  Lightbulb,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import AnimatedWords from "@/components/AnimatedWords";

// Import projects data - using top 2 for featured case studies
const featuredProjects = [
  {
    id: "autoleadcloser",
    title: "AutoLeadCloser",
    summary: "AI email qualification system. Processes inbound leads, extracts qualification criteria, and routes to calendar booking. Production-ready prototype.",
    problem: "Small business owners lose ~10 hours/week manually filtering spam and unqualified leads.",
    solution: "Built an autonomous AI agent using Claude API that parses emails, scores lead quality, and drafts replies.",
    impact: "Reduced manual email processing by 80% and decreased lead response time to under 5 minutes.",
    image: "/images/projects/autoleadcloser-1.jpg",
    slug: "autoleadcloser",
  },
  {
    id: "creative-garden",
    title: "Creative Garden",
    summary: "Flutter app for tracking creative projects through lifecycle stages. Momentum scoring with offline support.",
    problem: "Creatives lose track of ideas due to friction and slow load times in standard note apps.",
    solution: "Developed a high-performance cross-platform Flutter app designed for instant, frictionless idea capture.",
    impact: "Achieved sub-500ms load times, ensuring users capture ideas before they are forgotten.",
    image: "/images/projects/creative-garden-1.jpg",
    slug: "creative-garden",
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
      ease: "easeOut",
    },
  },
};

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        
        <div className="relative max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              className="text-center lg:text-left"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1
                variants={itemVariants}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-2 leading-tight text-white"
              >
                Andrew Ryan
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-lg sm:text-xl text-gray-400 mb-6 max-w-2xl mx-auto lg:mx-0 leading-[1.6] font-normal"
              >
                Freelance AI Developer
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-xl sm:text-2xl text-gray-300 mb-6 max-w-2xl mx-auto lg:mx-0 leading-[1.6] font-normal"
              >
                I build revenue-generating AI tools and automations for your business — fast.
              </motion.p>

              {/* Stats Badges */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start"
              >
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-800 bg-gray-900/50 backdrop-blur-sm">
                  <div className="relative">
                    <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-md" />
                    <Building2 className="h-5 w-5 text-purple-400 relative drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
                  </div>
                  <span className="text-sm text-gray-300">Production-Ready Systems</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-800 bg-gray-900/50 backdrop-blur-sm">
                  <div className="relative">
                    <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-md" />
                    <Clock className="h-5 w-5 text-purple-400 relative drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
                  </div>
                  <span className="text-sm text-gray-300">1–2 Week Turnaround</span>
                </div>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-[1.6] font-normal"
              >
                I work with fast, iterative prototypes. I own complete systems. I communicate clearly and keep architecture simple.
              </motion.p>
            </motion.div>

            {/* Right Animated Words Circle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-3xl" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 backdrop-blur-sm bg-gray-900/50">
                  <AnimatedWords />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="relative h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent mx-auto max-w-6xl" />

      {/* How I Work Section */}
      <section className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Decorative gradient blobs */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-3xl -z-10" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-br from-blue-500/15 to-purple-500/15 rounded-full blur-3xl -z-10" />
        
        <div className="relative max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="text-4xl font-bold text-center mb-4 text-white"
          >
            How I <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent" style={{ WebkitBackgroundClip: 'text' }}>Work</span>
          </motion.h2>
          {/* Target Audience Micro-copy */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.35, delay: 0.1, ease: "easeOut" }}
            className="text-sm text-gray-500 text-center mb-12 leading-relaxed font-normal max-w-2xl mx-auto"
          >
            Practical automation for startups and small businesses.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Fast, iterative prototypes",
                description: "I build working systems quickly, iterate based on feedback, and ship improvements continuously.",
              },
              {
                icon: Code2,
                title: "Complete system ownership",
                description: "I own the entire stack—front-end, backend, AI logic, integrations, and infrastructure.",
              },
              {
                icon: Workflow,
                title: "Technical focus areas",
                description: "AI agents and automation. Full-stack development. API integrations and workflow orchestration.",
              },
            ].map((item, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.35, delay: index * 0.08, ease: "easeOut" }}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="group relative h-full flex flex-col p-8 rounded-xl border border-gray-800 bg-gray-900/30 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
              >
                {/* Icon with enhanced styling */}
                <div className="relative inline-flex items-center justify-center mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
                  <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center border border-purple-500/30 shadow-lg shadow-purple-500/20 group-hover:shadow-xl group-hover:shadow-purple-500/30 transition-all duration-300">
                    <item.icon className="h-8 w-8 text-purple-400 drop-shadow-[0_0_12px_rgba(168,85,247,0.7)]" />
                </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3 text-white">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 leading-[1.6] font-normal flex-grow">{item.description}</p>
              </motion.div>
            ))}
                </div>
              </div>
      </section>

      {/* Gradient Divider */}
      <div className="relative h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent mx-auto max-w-6xl" />

      {/* Featured Case Studies Section */}
      <section className="py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="text-4xl font-bold text-center mb-12 text-white"
          >
            Featured <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent" style={{ WebkitBackgroundClip: 'text' }}>Case Studies</span>
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
            <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="group relative flex flex-col h-full rounded-xl border border-gray-800 bg-gray-900/30 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 overflow-hidden"
              >
                {/* Purple glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl pointer-events-none -z-10" />
                
                {/* Project Image */}
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                </div>

                {/* Card Content */}
                <div className="flex flex-col flex-grow p-6">
                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">
                    {project.title}
                  </h3>

                  {/* Case Study Fields Grid */}
                  <div className="space-y-4 mb-6 flex-grow">
                    {/* Problem */}
                    <div className="relative">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-1">
                          <div className="relative">
                            <div className="absolute inset-0 bg-red-500/20 rounded-full blur-md" />
                            <div className="relative w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center border border-red-500/30">
                              <AlertCircle className="h-4 w-4 text-red-400" />
                            </div>
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="inline-flex items-center gap-2 px-2 py-1 rounded-md bg-red-500/10 border border-red-500/20 mb-2">
                            <span className="text-xs font-semibold text-red-400 uppercase tracking-wide">Problem</span>
                          </div>
                          <p className="text-sm text-gray-300 leading-relaxed">{project.problem}</p>
                        </div>
                      </div>
                    </div>

                    {/* Solution */}
                    <div className="relative">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-1">
                          <div className="relative">
                            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-md" />
                            <div className="relative w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                              <Lightbulb className="h-4 w-4 text-blue-400" />
                            </div>
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="inline-flex items-center gap-2 px-2 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 mb-2">
                            <span className="text-xs font-semibold text-blue-400 uppercase tracking-wide">Solution</span>
                          </div>
                          <p className="text-sm text-gray-300 leading-relaxed">{project.solution}</p>
                        </div>
                      </div>
                    </div>

                    {/* Impact */}
                    <div className="relative">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-1">
                          <div className="relative">
                            <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-md" />
                            <div className="relative w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center border border-purple-500/30">
                              <TrendingUp className="h-4 w-4 text-purple-400" />
                            </div>
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="inline-flex items-center gap-2 px-2 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 mb-2">
                            <span className="text-xs font-semibold text-purple-400 uppercase tracking-wide">Impact</span>
                          </div>
                          <p className="text-sm text-gray-300 leading-relaxed">{project.impact}</p>
                        </div>
                      </div>
                    </div>
                </div>

                  {/* Read Full Case Study Button */}
                  <Link href={`/projects/${project.slug}`} className="mt-auto">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg font-semibold text-white shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/60 transition-all duration-300 group/btn"
                    >
                      <span>Read Full Case Study</span>
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </motion.button>
                  </Link>
              </div>
            </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="relative h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent mx-auto max-w-6xl" />

      {/* Call to Action */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-gray-950/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="text-4xl font-bold mb-6 text-white"
            >
              Let's work together
          </motion.h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/projects">
                <motion.button
                  whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl font-semibold text-white shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/60 transition-all duration-300"
                >
                  View Projects
                </motion.button>
              </Link>
              <Link href="/pricing">
                <motion.button
                  whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl font-semibold text-white shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/60 transition-all duration-300"
                >
                  See Pricing
                </motion.button>
              </Link>
          </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

