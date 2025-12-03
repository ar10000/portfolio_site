"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Code2,
  Workflow,
  Zap,
  Terminal,
  Database,
  Smartphone,
  Globe,
  Building2,
  Clock,
} from "lucide-react";
import Link from "next/link";
import AnimatedWords from "@/components/AnimatedWords";

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

const whatIDo = [
  {
    icon: Bot,
    title: "AI Systems & Agents",
    description: "Automation, reasoning logic, AI integrations",
    metric: "24/7",
    metricLabel: "Automation",
    cta: "Explore AI Solutions",
    ctaLink: "/services",
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "Front-end, backend, infrastructure",
    metric: "100%",
    metricLabel: "Ownership",
    cta: "View Projects",
    ctaLink: "/projects",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Make.com, API orchestration, data flows",
    metric: "80%",
    metricLabel: "Time Saved",
    cta: "Get Started",
    ctaLink: "/contact",
  },
];

const projects = [
  {
    name: "AutoLeadCloser",
    description: "AI email qualification system",
  },
  {
    name: "Creative Garden",
    description: "Flutter productivity app",
  },
  {
    name: "FlowCircle",
    description: "Clarity app for neurodivergent creatives",
  },
  {
    name: "Portfolio platform",
    description: "Next.js + AI",
  },
];

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
                className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white"
              >
                Andrew Ryan
              </motion.h1>

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
                  <span className="text-sm text-gray-300">Enterprise-Grade Architecture</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-800 bg-gray-900/50 backdrop-blur-sm">
                  <div className="relative">
                    <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-md" />
                    <Clock className="h-5 w-5 text-purple-400 relative drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
                  </div>
                  <span className="text-sm text-gray-300">Rapid Prototyping Cycle</span>
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

      {/* What I Do Section */}
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
            className="text-4xl font-bold text-center mb-12 text-white"
          >
            What I <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent" style={{ WebkitBackgroundClip: 'text' }}>Do</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whatIDo.map((item, index) => (
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
                  {item.title === "AI Systems & Agents" ? (
                    <>
                      <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent" style={{ WebkitBackgroundClip: 'text' }}>AI</span> Systems & Agents
                    </>
                  ) : item.title === "Full-Stack Development" ? (
                    <>
                      Full-<span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent" style={{ WebkitBackgroundClip: 'text' }}>Stack</span> Development
                    </>
                  ) : item.title === "Workflow Automation" ? (
                    <>
                      Workflow <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent" style={{ WebkitBackgroundClip: 'text' }}>Automation</span>
                    </>
                  ) : (
                    item.title
                  )}
                </h3>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-[1.6] font-normal flex-grow">{item.description}</p>

                {/* Metrics */}
                <div className="mb-6 p-4 rounded-lg bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent" style={{ WebkitBackgroundClip: 'text' }}>
                      {item.metric}
                    </span>
                    <span className="text-sm text-gray-400 font-medium">{item.metricLabel}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <Link href={item.ctaLink}>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg font-semibold text-white flex items-center justify-center gap-2 shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/60 hover:from-purple-400 hover:to-blue-400 transition-all duration-300"
                  >
                    {item.cta}
                    <ArrowRight className="h-4 w-4" />
                  </motion.button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="relative h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent mx-auto max-w-6xl" />

      {/* How I Work Section */}
      <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-gray-950/50 overflow-hidden">
        {/* Decorative gradient blobs */}
        <div className="absolute top-1/2 -right-32 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-3xl -z-10" />
        <div className="absolute top-1/4 -left-24 w-72 h-72 bg-gradient-to-br from-blue-500/15 to-purple-500/15 rounded-full blur-3xl -z-10" />
        
        <div className="relative max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="text-4xl font-bold text-center mb-12 text-white"
          >
            How I <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent" style={{ WebkitBackgroundClip: 'text' }}>Work</span>
          </motion.h2>

          <div className="relative overflow-visible">
            {[
              {
                number: 1,
                icon: Zap,
                title: "Fast, iterative prototypes",
                description: "I build working systems quickly, iterate based on feedback, and ship improvements continuously.",
              },
              {
                number: 2,
                icon: Code2,
                title: "Ownership of complete systems",
                description: "I own the entire stack—front-end, backend, AI logic, integrations, and infrastructure.",
              },
              {
                number: 3,
                icon: Workflow,
                title: "Clear communication and simple architecture",
                description: "I communicate progress clearly and keep architecture simple, maintainable, and scalable.",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative flex items-start gap-6 mb-12 last:mb-0 z-10"
              >
                {/* Connecting line with arrow */}
                {index < 2 && (
                  <div className="absolute left-8 top-16 w-0.5 h-full bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500 z-0">
                    {/* Arrow at the bottom */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-blue-500" />
                  </div>
                )}
                
                {/* Numbered gradient circle */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-full blur-xl" />
                  <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-purple-500/50 border-2 border-purple-400/30">
                    {step.number}
                  </div>
                </div>
                
                {/* Step content */}
                <div className="flex-1 pt-2">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="relative">
                      <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-md" />
                      <step.icon className="h-6 w-6 text-purple-400 relative drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{step.title}</h3>
                  </div>
                  <p className="text-gray-300 leading-[1.6] font-normal">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="relative h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent mx-auto max-w-6xl" />

      {/* Quick Credibility Block */}
      <section className="py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="text-4xl font-bold text-center mb-12 text-white"
          >
            Recent <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent" style={{ WebkitBackgroundClip: 'text' }}>Work</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.35, delay: index * 0.08, ease: "easeOut" }}
                whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
                className="group relative p-6 rounded-lg border border-gray-800 bg-gray-900/30 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300"
              >
                {/* Purple glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl pointer-events-none rounded-lg -z-10" />
                
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">
                  {project.name}
                </h3>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300 leading-[1.6] font-normal">{project.description}</p>
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
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl font-semibold text-white shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/60 transition-all duration-300"
                >
                  Contact for Collaborations
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

