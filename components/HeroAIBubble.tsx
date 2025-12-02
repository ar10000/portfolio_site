"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Mic, X, Sparkles } from "lucide-react";

interface HeroAIBubbleProps {
  onOpenChat: () => void;
}

const welcomeMessages = [
  "Hi! I'm Andrew's AI assistant. Ask me about services, pricing, or how we work.",
  "Curious about our automation solutions? I can help explain our process.",
  "Want to know our pricing? Ask me about Blueprint Sprint, Implementation, or Support.",
  "Learn about our projects: Creative Garden, AutoLeadCloser, FlowCircle, and more.",
  "Need help? I can answer questions about our services or help you get started.",
];

export default function HeroAIBubble({ onOpenChat }: HeroAIBubbleProps) {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Rotate through welcome messages
  useEffect(() => {
    if (isHovered) return; // Pause rotation on hover

    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % welcomeMessages.length);
    }, 4000); // Change message every 4 seconds

    return () => clearInterval(interval);
  }, [isHovered]);

  // Hide bubble after 30 seconds if not interacted with
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isHovered) {
        setIsVisible(false);
      }
    }, 30000);

    return () => clearTimeout(timer);
  }, [isHovered]);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.9 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="fixed bottom-24 right-6 z-40 max-w-sm cursor-pointer"
      onClick={onOpenChat}
    >
      <div className="relative">
        {/* Chat Bubble */}
        <motion.div
          whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(147, 51, 234, 0.3)" }}
          className="bg-gray-900/95 backdrop-blur-md border border-purple-500/30 rounded-2xl shadow-2xl overflow-hidden"
        >
          {/* Header with gradient */}
          <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 border-b border-gray-800 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-600 flex items-center justify-center">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">AI Assistant</h3>
                <p className="text-xs text-gray-400">Ask me anything</p>
              </div>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsVisible(false);
              }}
              className="text-gray-400 hover:text-white transition-colors p-1"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Message Content */}
          <div className="p-4">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentMessageIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-sm text-gray-300 mb-4"
              >
                {welcomeMessages[currentMessageIndex]}
              </motion.p>
            </AnimatePresence>

            {/* Action Buttons */}
            <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onOpenChat}
                className="flex-1 px-4 py-2.5 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg font-semibold text-white text-sm flex items-center justify-center gap-2 shadow-lg shadow-purple-500/50"
              >
                <Mic className="h-4 w-4" />
                Ask Me
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onOpenChat}
                className="px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg font-semibold text-white text-sm flex items-center justify-center gap-2 hover:bg-gray-700 transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                Chat
              </motion.button>
            </div>
          </div>

          {/* Pulsing indicator */}
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse border-2 border-gray-900" />
        </motion.div>

        {/* Arrow pointing to chatbot */}
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute -bottom-8 right-8 text-purple-400"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
}

