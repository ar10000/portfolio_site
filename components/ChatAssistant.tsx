"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  isStreaming?: boolean;
}

interface ChatAssistantProps {
  variant?: "floating" | "hero";
  onOpenChange?: (isOpen: boolean) => void;
}

export default function ChatAssistant({
  variant = "floating",
  onOpenChange,
}: ChatAssistantProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const handleToggle = () => {
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
    onOpenChange?.(newIsOpen);
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Add thinking message
    const thinkingId = `thinking-${Date.now()}`;
    setMessages((prev) => [
      ...prev,
      {
        id: thinkingId,
        role: "assistant",
        content: "Thinking…",
        isStreaming: true,
      },
    ]);

    try {
      // Add timeout to fetch
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 60000); // 60 second timeout
      
      const response = await fetch("/api/assistant/query", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: userMessage.content }),
        signal: controller.signal,
      }).finally(() => {
        clearTimeout(timeoutId);
      });

      if (!response.ok) {
        // Try to get error message from response
        let errorMessage = "Failed to get response";
        try {
          const errorData = await response.json();
          errorMessage = errorData.error || errorMessage;
        } catch {
          errorMessage = `Server error: ${response.status} ${response.statusText}`;
        }
        throw new Error(errorMessage);
      }

      // Remove thinking message
      setMessages((prev) => prev.filter((msg) => msg.id !== thinkingId));

      // Create assistant message for streaming
      const assistantId = `assistant-${Date.now()}`;
      const assistantMessage: Message = {
        id: assistantId,
        role: "assistant",
        content: "",
        isStreaming: true,
      };

      setMessages((prev) => [...prev, assistantMessage]);

      // Read streaming response
      const reader = response.body?.getReader();
      const decoder = new TextDecoder();

      if (!reader) {
        throw new Error("No reader available");
      }

      let accumulatedContent = "";

      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value, { stream: true });
          accumulatedContent += chunk;

          // Update message with accumulated content
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === assistantId
                ? { ...msg, content: accumulatedContent }
                : msg
            )
          );
        }

        // Mark as complete
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === assistantId ? { ...msg, isStreaming: false } : msg
          )
        );
      } catch (streamError: any) {
        console.error("Stream reading error:", streamError);
        throw new Error(`Stream error: ${streamError?.message || 'Failed to read stream'}`);
      }
    } catch (error: any) {
      console.error("Chat error:", error);
      setMessages((prev) => {
        const filtered = prev.filter((msg) => msg.id !== thinkingId);
        let errorMessage = error?.message || "Sorry, I encountered an error. Please try again.";
        
        // Provide more helpful error messages
        if (errorMessage.includes("Failed to fetch") || errorMessage.includes("network") || errorMessage.includes("NetworkError") || errorMessage.includes("aborted")) {
          errorMessage = "Network error: Could not connect to the server. Please check your connection and try again. If the problem persists, the server may be restarting.";
        } else if (errorMessage.includes("embeddings") || errorMessage.includes("No embeddings")) {
          errorMessage = "The knowledge base is not set up yet. Please run the embedding script first.";
        } else if (errorMessage.includes("ANTHROPIC_API_KEY")) {
          errorMessage = "API key not configured. Please set ANTHROPIC_API_KEY in your environment variables.";
        } else if (errorMessage.includes("Stream error")) {
          errorMessage = "Error receiving response. Please try again.";
        } else if (errorMessage.includes("timeout") || errorMessage.includes("Timeout")) {
          errorMessage = "Request timed out. The server is taking too long to respond. Please try again.";
        }
        
        return [
          ...filtered,
          {
            id: `error-${Date.now()}`,
            role: "assistant",
            content: errorMessage,
            isStreaming: false,
          },
        ];
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Floating button variant
  if (variant === "floating" && !isOpen) {
    return (
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleToggle}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-purple-500 to-blue-600 shadow-lg shadow-purple-500/50 flex items-center justify-center text-white hover:shadow-xl transition-all"
        aria-label="Open chat"
      >
        <MessageCircle className="h-6 w-6" />
      </motion.button>
    );
  }

  // Hero variant - show in the AI circle
  if (variant === "hero" && !isOpen) {
    return (
      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleToggle}
        className="absolute inset-0 w-full h-full rounded-full flex items-center justify-center cursor-pointer group overflow-hidden"
        aria-label="Open chat"
      >
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-blue-500/20 to-purple-600/30 group-hover:from-purple-500/40 group-hover:via-blue-500/30 group-hover:to-purple-600/40 transition-all duration-300" />
        
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-blue-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* AI text */}
        <div className="relative z-10 text-5xl sm:text-6xl font-bold bg-gradient-to-r from-purple-300 via-blue-300 to-purple-400 bg-clip-text text-transparent group-hover:from-purple-200 group-hover:via-blue-200 group-hover:to-purple-300 transition-all duration-300">
          AI
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
      </motion.button>
    );
  }

  // Chat window
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] h-[600px] max-h-[calc(100vh-8rem)] bg-gray-900/95 backdrop-blur-md border border-purple-500/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 border-b border-gray-800 px-4 py-3 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-600 flex items-center justify-center">
                <MessageCircle className="h-4 w-4 text-white" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">AI Assistant</h3>
                <p className="text-xs text-gray-400">Ask me anything</p>
              </div>
            </div>
            <button
              onClick={handleToggle}
              className="text-gray-400 hover:text-white transition-colors p-1"
              aria-label="Close chat"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-400 text-sm">
                  Hi! I'm Andrew's AI assistant. Ask me about services, pricing, or how we work.
                </p>
              </div>
            )}

            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg px-4 py-2 ${
                    message.role === "user"
                      ? "bg-purple-500/20 text-white"
                      : "bg-gray-800/50 text-gray-100"
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">
                    {message.content}
                    {message.isStreaming && (
                      <motion.span
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                        className="inline-block ml-1 w-2 h-4 bg-current align-middle"
                      />
                    )}
                  </p>
                </div>
              </div>
            ))}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-gray-800 p-4 flex-shrink-0">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                disabled={isLoading}
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:border-purple-500 disabled:opacity-50"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg text-white disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

