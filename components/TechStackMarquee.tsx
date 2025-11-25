"use client";

import { motion } from "framer-motion";
import { Code2, Terminal, Database, Smartphone, Globe, Workflow } from "lucide-react";

const techStack = [
  { name: "Claude AI", icon: Code2, color: "from-orange-400 to-orange-600" },
  { name: "Python", icon: Terminal, color: "from-yellow-400 to-yellow-600" },
  { name: "Supabase", icon: Database, color: "from-green-400 to-green-600" },
  { name: "Flutter", icon: Smartphone, color: "from-blue-400 to-blue-600" },
  { name: "Next.js", icon: Globe, color: "from-gray-300 to-gray-500" },
  { name: "Make.com", icon: Workflow, color: "from-purple-400 to-purple-600" },
];

export default function TechStackMarquee() {
  // Duplicate items for seamless loop
  const duplicatedItems = [...techStack, ...techStack];

  return (
    <div className="relative py-12 overflow-hidden">
      {/* Gradient fade edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-950/50 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-950/50 to-transparent z-10 pointer-events-none" />

      <div className="flex gap-12 animate-scroll">
        {duplicatedItems.map((tech, index) => (
          <motion.div
            key={`${tech.name}-${index}`}
            className="flex items-center gap-3 flex-shrink-0 group"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative">
              {/* Subtle grayscale with tint */}
              <div className="w-16 h-16 rounded-xl bg-gray-800/50 border border-gray-700/50 flex items-center justify-center group-hover:border-gray-600 transition-all duration-300">
                <tech.icon
                  className={`h-8 w-8 text-gray-500 group-hover:text-gray-300 transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(139,92,246,0.6)]`}
                />
              </div>
              {/* Glow effect on hover */}
              <div
                className={`absolute inset-0 rounded-xl bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`}
              />
            </div>
            <span className="text-gray-500 group-hover:text-gray-300 text-sm font-medium transition-colors duration-300 whitespace-nowrap">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </div>

    </div>
  );
}

