"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Code,
  Zap,
  Calendar,
  ExternalLink,
  Smartphone,
  Workflow,
  CheckCircle2,
  Clock,
  Code2,
  Terminal,
  Database,
} from "lucide-react";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const stats = [
  { label: "Production-Ready Systems", value: "Built" },
  { label: "2-4 Week Delivery", value: "Fast" },
  { label: "ROI-Focused Outcomes", value: "Guaranteed" },
];

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Grid Pattern Background */}
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
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 leading-tight"
              >
                <span className="block bg-gradient-to-r from-purple-400 via-blue-500 to-blue-600 bg-clip-text text-transparent animate-gradient">
                  AI Automation Consultant
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-xl sm:text-2xl lg:text-3xl text-white mb-4 max-w-2xl mx-auto lg:mx-0 leading-tight font-semibold"
              >
                AI systems integration and workflow automation that delivers measurable ROI in weeks, not months.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-lg sm:text-xl lg:text-xl text-gray-400 mb-6 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              >
                I design and deploy production-ready AI systems, automate complex workflows, and build rapid prototypes for agencies and founders who need reliable solutions, fast execution, and clear business outcomes.
              </motion.p>

              {/* Trust Indicators */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap items-center gap-4 sm:gap-6 justify-center lg:justify-start mb-8 text-sm text-gray-500"
              >
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-green-500/70" />
                  <span>Production-ready systems</span>
                </span>
                <span className="hidden sm:inline text-gray-700">•</span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-green-500/70" />
                  <span>2-4 week delivery</span>
                </span>
                <span className="hidden sm:inline text-gray-700">•</span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-green-500/70" />
                  <span>ROI-focused outcomes</span>
                </span>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
              >
                <Link href="https://calendly.com/andrewryan763/30min" target="_blank" rel="noopener noreferrer">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg font-semibold text-white flex items-center gap-2 shadow-lg shadow-purple-500/50 w-full sm:w-auto justify-center"
                    aria-label="Book Blueprint Sprint"
                  >
                    Book Blueprint Sprint
                    <ArrowRight className="h-5 w-5" />
                  </motion.button>
                </Link>
                <Link href="/projects">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 border-2 border-gray-700 rounded-lg font-semibold text-white hover:border-blue-500 transition-colors w-full sm:w-auto justify-center flex items-center gap-2"
                  >
                    View Case Studies
                  </motion.button>
                </Link>
              </motion.div>

              {/* Stats Section */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-4 sm:p-5 shadow-lg"
                  >
                    <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-400">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-3xl" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 backdrop-blur-sm bg-gray-900/50 flex items-center justify-center">
                  <div className="w-full h-full bg-gradient-to-br from-purple-600/20 to-blue-600/20 flex items-center justify-center text-6xl font-bold text-gray-700">
                    AI
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Showcase Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950/50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4"
          >
            Featured <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            Real products built and shipped. From concept to launch in record time.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Creative Garden Project */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 hover:border-blue-500/50 transition-all duration-300"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
              
              <div className="relative p-6">
                {/* Project Icon/Thumbnail */}
                <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30">
                  <Sparkles className="h-8 w-8 text-blue-400" />
                </div>

                {/* Title and Description */}
                <h3 className="text-xl font-bold mb-2 text-white">Creative Garden</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Content Workflow Engine — Production-grade system for moving ideas from capture to publication
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">
                    <Code2 className="h-3 w-3" />
                    Flutter
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">
                    <Terminal className="h-3 w-3" />
                    Python
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">
                    <Code className="h-3 w-3" />
                    Supabase
                  </span>
                </div>

                {/* Status Badge */}
                <div className="mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold bg-green-500/20 text-green-400 rounded-full border border-green-500/30">
                    <CheckCircle2 className="h-3 w-3" />
                    Live
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Link href="/projects/creative-garden" className="flex-1">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-4 py-2 text-sm font-medium bg-blue-500/10 text-blue-400 rounded-lg border border-blue-500/30 hover:bg-blue-500/20 transition-colors"
                    >
                      View Project
                    </motion.button>
                  </Link>
                  <Link href="/projects/creative-garden" className="flex-1">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-4 py-2 text-sm font-medium bg-gray-800 text-gray-300 rounded-lg border border-gray-700 hover:bg-gray-700 transition-colors flex items-center justify-center gap-1.5"
                    >
                      View Details
                      <ExternalLink className="h-3.5 w-3.5" />
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* AutoLeadCloser Project */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 hover:border-purple-500/50 transition-all duration-300"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
              
              <div className="relative p-6">
                {/* Project Icon/Thumbnail */}
                <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/30">
                  <Sparkles className="h-8 w-8 text-purple-400" />
                </div>

                {/* Title and Description */}
                <h3 className="text-xl font-bold mb-2 text-white">AutoLeadCloser</h3>
                <p className="text-gray-400 text-sm mb-4">
                  AI-powered lead qualification that runs on autopilot
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/20">
                    <Terminal className="h-3 w-3" />
                    Python
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/20">
                    <Sparkles className="h-3 w-3" />
                    Claude AI
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/20">
                    <Workflow className="h-3 w-3" />
                    Make.com
                  </span>
                </div>

                {/* Status Badge */}
                <div className="mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold bg-yellow-500/20 text-yellow-400 rounded-full border border-yellow-500/30">
                    <Clock className="h-3 w-3" />
                    Beta
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Link href="/projects/autoleadcloser" className="flex-1">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-4 py-2 text-sm font-medium bg-purple-500/10 text-purple-400 rounded-lg border border-purple-500/30 hover:bg-purple-500/20 transition-colors"
                    >
                      View Project
                    </motion.button>
                  </Link>
                  <Link href="/projects/autoleadcloser" className="flex-1">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-4 py-2 text-sm font-medium bg-gray-800 text-gray-300 rounded-lg border border-gray-700 hover:bg-gray-700 transition-colors flex items-center justify-center gap-1.5"
                    >
                      View Details
                      <ExternalLink className="h-3.5 w-3.5" />
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Discovery Sprint CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative overflow-hidden rounded-xl border-2 border-dashed border-purple-500/50 bg-gradient-to-br from-purple-500/10 to-blue-500/10 hover:border-purple-500 transition-all duration-300"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
              
              <Link href="https://calendly.com/andrewryan763/30min" target="_blank" rel="noopener noreferrer" className="relative p-6 flex flex-col items-center justify-center min-h-[300px] text-center">
                {/* Icon */}
                <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500/30 to-blue-500/30 border-2 border-purple-500/50">
                  <Calendar className="h-8 w-8 text-purple-400" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-2 text-white">Got a project?</h3>
                <p className="text-lg font-semibold mb-4 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                  Book a Discovery Sprint
                </p>
                <p className="text-2xl font-bold mb-4 text-white">€500</p>
                <p className="text-gray-400 text-sm mb-6 max-w-xs">
                  Let's explore your idea, map out the solution, and create a clear roadmap together.
                </p>

                {/* CTA Button */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg font-semibold text-white shadow-lg shadow-purple-500/50"
                >
                  Schedule Now
                  <ArrowRight className="inline-block h-4 w-4 ml-2" />
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950/50">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold text-center mb-8"
          >
            About
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6 text-lg text-gray-300 leading-relaxed"
          >
            <p>
              I'm a full-stack AI builder and workflow automation expert specializing in rapid prototyping and production system deployment for agencies and founders. I deliver working solutions in 3-10 day cycles, focusing on reliability, maintainability, and measurable business outcomes.
            </p>

            <p>
              My approach prioritizes production-ready architecture from day one. Every system I build is designed for long-term operation with proper error handling, monitoring, and documentation. I don't ship prototypes that break under load—I deliver systems that scale with your business.
            </p>

            <p className="text-gray-400 italic border-l-4 border-purple-500/50 pl-6 py-2">
              I've built and deployed production AI systems handling thousands of operations daily, automated workflows processing six-figure revenue streams, and rapid prototypes that became core business infrastructure. My clients trust me with €5k-€15k automation projects because I deliver systems that work reliably, scale predictably, and require minimal ongoing maintenance.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {[
              {
                icon: Code2,
                title: "Full-Stack AI Builder",
                description: "End-to-end development from AI model integration to production deployment",
              },
              {
                icon: Workflow,
                title: "Workflow Automation Expert",
                description: "Complex process automation with reliable error handling and monitoring",
              },
              {
                icon: Zap,
                title: "Rapid Prototyping",
                description: "3-10 day delivery cycles for agencies and founders who need results fast",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="p-6 rounded-lg border border-gray-800 bg-gray-900/50 hover:border-purple-500/50 transition-colors"
              >
                <feature.icon className="h-10 w-10 text-purple-400 mb-3" />
                <h3 className="text-lg font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

