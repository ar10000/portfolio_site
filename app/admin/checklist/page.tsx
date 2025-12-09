"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Circle, Lock, Eye, EyeOff, ArrowLeft } from "lucide-react";
import Link from "next/link";

// Admin authentication is handled server-side via API routes
// Password is stored in ADMIN_PASSWORD environment variable

interface ChecklistItem {
  id: string;
  label: string;
  category: "content" | "technical" | "design" | "seo";
}

const checklistItems: ChecklistItem[] = [
  // Content
  {
    id: "content-1",
    label: "All project pages have descriptions",
    category: "content",
  },
  {
    id: "content-2",
    label: "Services page has pricing",
    category: "content",
  },
  {
    id: "content-3",
    label: "Contact form is connected",
    category: "content",
  },
  {
    id: "content-4",
    label: "All CTAs have proper links",
    category: "content",
  },
  {
    id: "content-5",
    label: "Demo videos are embedded",
    category: "content",
  },
  // Technical
  {
    id: "technical-1",
    label: "All images optimized",
    category: "technical",
  },
  {
    id: "technical-2",
    label: "Meta tags configured",
    category: "technical",
  },
  {
    id: "technical-3",
    label: "Favicon added",
    category: "technical",
  },
  {
    id: "technical-4",
    label: "404 page created",
    category: "technical",
  },
  {
    id: "technical-5",
    label: "Loading states implemented",
    category: "technical",
  },
  // Design
  {
    id: "design-1",
    label: "Mobile responsive verified",
    category: "design",
  },
  {
    id: "design-2",
    label: "Animations smooth on all devices",
    category: "design",
  },
  {
    id: "design-3",
    label: "Color contrast checked",
    category: "design",
  },
  {
    id: "design-4",
    label: "All fonts loading",
    category: "design",
  },
  {
    id: "design-5",
    label: "Dark mode working",
    category: "design",
  },
  // SEO
  {
    id: "seo-1",
    label: "Sitemap generated",
    category: "seo",
  },
  {
    id: "seo-2",
    label: "robots.txt configured",
    category: "seo",
  },
  {
    id: "seo-3",
    label: "OG images created",
    category: "seo",
  },
  {
    id: "seo-4",
    label: "Alt text on images",
    category: "seo",
  },
  {
    id: "seo-5",
    label: "Structured data added",
    category: "seo",
  },
];

const categories = {
  content: { name: "Content", color: "purple", icon: "📝" },
  technical: { name: "Technical", color: "blue", icon: "⚙️" },
  design: { name: "Design", color: "pink", icon: "🎨" },
  seo: { name: "SEO", color: "green", icon: "🔍" },
};

export default function PreLaunchChecklist() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  // Check authentication status on mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch("/api/admin/verify");
        const data = await response.json();
        if (data.authenticated) {
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
      }
    };

    checkAuth();

    // Load checklist from localStorage
    const savedChecked = localStorage.getItem("admin-checklist");
    if (savedChecked) {
      try {
        const parsed = JSON.parse(savedChecked);
        setCheckedItems(new Set(parsed));
      } catch (e) {
        console.error("Error loading checklist:", e);
      }
    }
  }, []);

  // Save to localStorage when checked items change
  useEffect(() => {
    if (isAuthenticated) {
      localStorage.setItem(
        "admin-checklist",
        JSON.stringify(Array.from(checkedItems))
      );
    }
  }, [checkedItems, isAuthenticated]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("/api/admin/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (data.success && data.authenticated) {
        setIsAuthenticated(true);
        setPassword("");
      } else {
        setError(data.error || "Incorrect password. Try again.");
        setPassword("");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("An error occurred. Please try again.");
      setPassword("");
    }
  };

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ action: "logout" }),
      });
      setIsAuthenticated(false);
    } catch (error) {
      console.error("Logout error:", error);
      // Still set authenticated to false even if API call fails
      setIsAuthenticated(false);
    }
  };

  const toggleItem = (id: string) => {
    setCheckedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const getCategoryItems = (category: keyof typeof categories) => {
    return checklistItems.filter((item) => item.category === category);
  };

  const getProgress = (category?: keyof typeof categories) => {
    const items = category
      ? getCategoryItems(category)
      : checklistItems;
    const checked = items.filter((item) => checkedItems.has(item.id)).length;
    return Math.round((checked / items.length) * 100);
  };

  const totalProgress = getProgress();

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full"
        >
          <div className="bg-gray-900/80 backdrop-blur-md border border-gray-800 rounded-2xl p-8 shadow-2xl">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-500/20 mb-4">
                <Lock className="h-8 w-8 text-purple-400" />
              </div>
              <h1 className="text-2xl font-bold text-white mb-2">
                Admin Access
              </h1>
              <p className="text-gray-400 text-sm">
                Enter password to access pre-launch checklist
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError("");
                  }}
                  placeholder="Enter password"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 pr-12"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>

              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-sm text-center"
                >
                  {error}
                </motion.p>
              )}

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg font-semibold text-white shadow-lg shadow-purple-500/50 hover:shadow-xl transition-all"
              >
                Access Checklist
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">
                Pre-Launch Checklist
              </h1>
              <p className="text-gray-400">
                Track your progress before going live
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="px-4 py-2 text-gray-400 hover:text-white transition-colors flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Site
              </Link>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors text-sm"
              >
                Logout
              </button>
            </div>
          </div>

          {/* Overall Progress */}
          <div className="bg-gray-900/80 backdrop-blur-md border border-gray-800 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-semibold text-white">
                Overall Progress
              </span>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                {totalProgress}%
              </span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${totalProgress}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-purple-500 to-blue-600"
              />
            </div>
          </div>
        </motion.div>

        {/* Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {Object.entries(categories).map(([key, category]) => {
            const items = getCategoryItems(key as keyof typeof categories);
            const progress = getProgress(key as keyof typeof categories);
            const colorClasses = {
              purple: "from-purple-500/20 to-purple-500/10 border-purple-500/30",
              blue: "from-blue-500/20 to-blue-500/10 border-blue-500/30",
              pink: "from-pink-500/20 to-pink-500/10 border-pink-500/30",
              green: "from-green-500/20 to-green-500/10 border-green-500/30",
            };

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className={`bg-gradient-to-br ${colorClasses[category.color as keyof typeof colorClasses]} border rounded-xl p-6 backdrop-blur-sm`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{category.icon}</span>
                    <h2 className="text-xl font-bold text-white">
                      {category.name}
                    </h2>
                  </div>
                  <span className="text-lg font-semibold text-gray-300">
                    {progress}%
                  </span>
                </div>

                <div className="space-y-3">
                  {items.map((item) => {
                    const isChecked = checkedItems.has(item.id);
                    return (
                      <motion.div
                        key={item.id}
                        whileHover={{ x: 4 }}
                        className="flex items-start gap-3 p-3 rounded-lg bg-gray-900/50 hover:bg-gray-900/70 transition-colors cursor-pointer"
                        onClick={() => toggleItem(item.id)}
                      >
                        <button
                          className="flex-shrink-0 mt-0.5 focus:outline-none"
                          aria-label={isChecked ? "Uncheck" : "Check"}
                        >
                          {isChecked ? (
                            <CheckCircle2 className="h-6 w-6 text-green-400" />
                          ) : (
                            <Circle className="h-6 w-6 text-gray-500" />
                          )}
                        </button>
                        <span
                          className={`flex-1 text-sm ${
                            isChecked
                              ? "text-gray-400 line-through"
                              : "text-gray-200"
                          }`}
                        >
                          {item.label}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Completion Message */}
        {totalProgress === 100 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-8 bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-xl p-6 text-center"
          >
            <div className="text-4xl mb-4">🎉</div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Ready to Launch!
            </h3>
            <p className="text-gray-300">
              All checklist items are complete. Your site is ready to go live!
            </p>
          </motion.div>
        )}

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-center text-sm text-gray-500"
        >
          <p>
            Progress is saved automatically. Your checklist persists across
            sessions.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

