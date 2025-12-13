"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Workflow,
  Zap,
  AlertCircle,
  Lightbulb,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import AnimatedWords from "@/components/AnimatedWords";
import { FaPython, FaReact, FaDocker } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiSupabase, SiPostgresql, SiOpenai, SiAmazon } from "react-icons/si";

// Import projects data - using top 2 for featured case studies
const featuredProjects = [
  {
    id: "autoleadcloser",
    title: "AutoLeadCloser",
    summary: "Eliminates manual lead qualification by automatically processing inbound emails, extracting qualification criteria, and responding within minutes. Reduces a 15-minute manual process to a 3-second API call.",
    role: "Full-Stack Developer & AI Engineer",
    context: "Sales teams often waste hours manually filtering spam and low-quality leads.",
    problem: "Small business owners lose ~10 hours/week manually filtering spam and unqualified leads.",
    solution: "Built an autonomous AI agent using Claude API that parses emails, scores lead quality, and drafts replies.",
    impact: "Engineered to replace manual data entry, reducing a typical 15-minute lead qualification process to a 3-second API call.",
    image: "/images/projects/autoleadcloser-1.jpg",
    slug: "autoleadcloser",
  },
  {
    id: "launchlens",
    title: "LaunchLens",
    summary: "AI-powered marketing strategy generator for indie builders. Generates honest, actionable marketing strategies without fluff, with optional GitHub repository analysis.",
    role: "Frontend Engineer (Next.js)",
    context: "Indie builders need actionable marketing strategies but lack access to marketing expertise.",
    problem: "Indie builders struggle to create effective marketing strategies. Generic advice lacks specificity, and hiring marketing consultants is expensive. No tool generates honest, actionable strategies tailored to their projects.",
    solution: "AI-powered marketing strategy generator using Google Gemini 2.0 Flash. Optionally analyzes GitHub repositories for deeper insights. Generates editable strategies with customizable tone and personality, exportable as Markdown or JSON.",
    impact: "Generates comprehensive marketing strategies in minutes, eliminating the need for expensive consultants or generic templates.",
    image: "/images/projects/launchlens-1.jpg",
    slug: "launchlens",
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
      <section className="relative min-h-screen flex items-center justify-center px-6 sm:px-6 lg:px-8 py-24 overflow-hidden">
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
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-white"
              >
                Custom AI Agents & Workflow Automations
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-[1.6] font-normal"
              >
                I build workflow automations and AI agents for startups and lean teams. Reduces manual work and repetitive tasks.
              </motion.p>

              {/* CTAs */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start"
              >
                <Link
                  href="/contact"
                  className="group relative px-8 py-4 min-h-[44px] bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold text-white hover:from-purple-500 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 inline-flex items-center justify-center gap-2"
                >
                  <span>Identify Automation Needs</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/projects"
                  className="px-8 py-4 min-h-[44px] border border-gray-700 rounded-lg font-semibold text-gray-300 hover:border-gray-600 hover:text-white transition-all duration-300 inline-flex items-center justify-center"
                  >
                    See Case Studies
                </Link>
              </motion.div>
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
      <div className="relative h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent mx-auto max-w-6xl my-16" />

      {/* How I Work Section */}
      <section className="relative py-24 px-6 sm:px-6 lg:px-8 overflow-hidden">
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
                title: "Iterative prototypes",
                description: "I build working systems, iterate based on feedback, and ship improvements continuously.",
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
      <div className="relative h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent mx-auto max-w-6xl my-16" />

      {/* Tech Stack Section */}
      <section className="py-24 px-6 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="text-3xl font-bold text-center mb-12 text-white"
          >
            Tech <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent" style={{ WebkitBackgroundClip: 'text' }}>Stack</span>
          </motion.h2>

          {/* Tech Stack Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
            {[
              { icon: FaPython, label: "Python", name: "Python" },
              { icon: SiTypescript, label: "TypeScript", name: "TypeScript" },
              { icon: SiNextdotjs, label: "Next.js", name: "Next.js" },
              { icon: FaReact, label: "React", name: "React" },
              { icon: SiSupabase, label: "Supabase", name: "Supabase" },
              { icon: SiPostgresql, label: "PostgreSQL", name: "PostgreSQL" },
              { icon: SiOpenai, label: "OpenAI", name: "OpenAI" },
              { 
                icon: null, 
                label: "Claude", 
                name: "Claude",
                customIcon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
                    <path d="M8 12h8M12 8v8"/>
                  </svg>
                )
              },
              { icon: SiAmazon, label: "AWS", name: "AWS" },
              { icon: FaDocker, label: "Docker", name: "Docker" },
            ].map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.35, delay: index * 0.05, ease: "easeOut" }}
                  whileHover={{ y: -4, transition: { duration: 0.3 } }}
                  className="flex flex-col items-center justify-center p-6 rounded-lg border border-gray-800 bg-gray-900/30 hover:border-gray-700 hover:bg-gray-900/50 transition-all duration-300 group"
                >
                  <div className="text-gray-400 group-hover:text-white transition-colors duration-300 mb-3">
                    {IconComponent ? (
                      <IconComponent className="w-12 h-12" />
                    ) : (
                      <div className="w-12 h-12 text-gray-400 group-hover:text-white transition-colors duration-300">
                        {tech.customIcon}
                      </div>
                    )}
                  </div>
                  <span className="text-sm text-gray-400 group-hover:text-white transition-colors duration-300 font-medium">
                    {tech.label}
                  </span>
            </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="relative h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent mx-auto max-w-6xl my-16" />

      {/* Featured Case Studies Section */}
      <section className="py-24 px-6 sm:px-6 lg:px-8">
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
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                </div>

                {/* Card Content */}
                <div className="flex flex-col flex-grow p-6">
                  {/* Role Badge */}
                  <div className="mb-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 border border-purple-500/20 text-purple-400">
                      {project.role}
                  </span>
                </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">
                    {project.title}
                  </h3>

                  {/* Context */}
                  <p className="text-sm text-gray-400 italic mb-4 leading-relaxed">
                    {project.context}
                  </p>

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
                      className="w-full flex items-center justify-center gap-2 px-6 py-4 min-h-[44px] bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg font-semibold text-white shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/60 transition-all duration-300 group/btn"
                    >
                      <span>See How It Works</span>
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
      <div className="relative h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent mx-auto max-w-6xl my-16" />

      {/* Call to Action */}
      <section className="py-24 px-6 sm:px-6 lg:px-8 bg-gray-950/50">
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
              Start a project
          </motion.h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 min-h-[44px] bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl font-semibold text-white shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/60 transition-all duration-300"
                >
                  Start Your Project
                </motion.button>
              </Link>
              <Link href="/pricing">
                <motion.button
                  whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 min-h-[44px] border border-gray-700 rounded-xl font-semibold text-gray-300 hover:border-gray-600 hover:text-white transition-all duration-300"
                >
                  View Pricing
                </motion.button>
              </Link>
          </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

