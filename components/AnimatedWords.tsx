"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = [
  "AI",
  "Automation",
  "Workflows",
  "Prototyping",
  "Integration",
  "Claude",
  "GPT",
  "Make.com",
  "n8n",
  "Python",
  "Flutter",
  "Supabase",
  "Rapid Build",
  "ROI",
  "Production",
  "Systems",
];

export default function AnimatedWords() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full rounded-full flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-blue-500/20 to-purple-600/30 animate-pulse" />
      
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-blue-400/20 blur-xl opacity-50" />
      
      {/* Animated text - centered */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.8 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="text-center"
          >
            <span className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-300 via-blue-300 to-purple-400 bg-clip-text text-transparent">
              {words[currentIndex]}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Subtle pulse animation */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-purple-500/30"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

