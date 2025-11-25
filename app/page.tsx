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
  { label: "3 Products Shipped", value: "3" },
  { label: "72hr Average Build Time", value: "72hr" },
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
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
              >
                <span className="block">Go from AI idea to</span>
                <span className="block bg-gradient-to-r from-purple-400 via-blue-500 to-blue-600 bg-clip-text text-transparent animate-gradient">
                  deploy-ready system in days.
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-lg sm:text-xl lg:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              >
                A Belgian AI Architect specializing in high-speed, scalable automation and robust MVPs for ambitious founders.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
              >
                <Link href="/projects">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg font-semibold text-white flex items-center gap-2 shadow-lg shadow-purple-500/50 w-full sm:w-auto justify-center group"
                    aria-label="View my projects"
                  >
                    <span className="group-hover:hidden">View Projects</span>
                    <span className="hidden group-hover:inline">Let's build something</span>
                    <ArrowRight className="h-5 w-5" />
                  </motion.button>
                </Link>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 border-2 border-gray-700 rounded-lg font-semibold text-white hover:border-blue-500 transition-colors w-full sm:w-auto justify-center flex items-center gap-2"
                  >
                    <Calendar className="h-5 w-5" />
                    Book a Call
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
                  Production-grade AI-powered business system
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

      {/* Why I Build Fast Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold text-center mb-6"
          >
            Why I Build Fast
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center text-gray-400 mb-12 max-w-3xl mx-auto text-lg leading-relaxed"
          >
            I've learned that the best products come from shipping fast, getting feedback, and iterating. Waiting months to build the "perfect" solution usually means building the wrong thing. Here's how I work:
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Sparkles,
                title: "Ship First, Perfect Later",
                description:
                  "I get working solutions in your hands fast. You test with real users, I iterate based on feedback. This beats months of planning that misses the mark.",
              },
              {
                icon: Code,
                title: "Focus on What Matters",
                description:
                  "No feature bloat. No endless meetings. I build the core features that solve your problem, then we add more if needed. Simple, fast, effective.",
              },
              {
                icon: Zap,
                title: "Learn by Doing",
                description:
                  "The best way to know if something works? Build it and see. I've shipped 3 products in the last 6 months. Each one taught me something that made the next one better.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 rounded-lg border border-gray-800 bg-gray-900/50 hover:border-purple-500/50 transition-colors"
              >
                <feature.icon className="h-12 w-12 text-purple-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

