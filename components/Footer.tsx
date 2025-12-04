"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  CheckCircle2,
  Code2,
} from "lucide-react";
import { useState } from "react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
];


const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/ar10000",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/lets-move-forward/",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://twitter.com/AndrewR53368303",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:andrewryan763@gmail.com",
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) return;

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      // Still show success to user, but log error
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };


  return (
    <footer className="border-t border-gray-800 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-8">
          {/* Column 1 - Navigation */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Navigation</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-gray-500 flex items-center gap-2">
              <Code2 className="h-3 w-3" />
              Built with Next.js, Tailwind, and Claude AI
            </p>
          </div>

          {/* Column 2 - Building My Client Portfolio */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              Building My Client Portfolio
            </h3>
            <p className="text-gray-300 text-sm mb-6 leading-[1.6] font-normal">
              I'm offering fair rates (€75/hour, €1,200 starter builds) while building case studies and testimonials. Work with me now for technical quality at early-career pricing.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.02, filter: "brightness(1.1)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl font-semibold text-white shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/60 transition-all duration-300"
              >
                Book Free Fit Check
              </motion.button>
            </Link>
          </div>

          {/* Column 3 - Connect */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Connect</h3>
            <div className="flex items-center gap-4 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={social.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className="p-2 rounded-lg border border-gray-800 bg-gray-900/50 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all group relative"
                  aria-label={social.name}
                >
                  <div className="absolute inset-0 bg-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
                  <social.icon className="h-5 w-5 text-purple-400 group-hover:text-purple-300 relative drop-shadow-[0_0_8px_rgba(168,85,247,0.5)] transition-all" />
                </a>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Stay Updated</h3>
              <p className="text-gray-400 text-sm mb-4 leading-[1.6] font-normal">
                Get updates when I ship new tools and insights.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-purple-500"
                  aria-label="Email for newsletter"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={subscribed}
                  className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg font-semibold text-white text-sm touch-target"
                  aria-label="Subscribe to newsletter"
                >
                  {subscribed ? <CheckCircle2 className="h-5 w-5" /> : "Subscribe"}
                </motion.button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <p className="text-sm text-gray-500">
                © 2024 Andrew Ryan. All rights reserved.
              </p>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2 text-xs text-gray-600"
              >
                <span>Built by</span>
                <motion.span
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="font-semibold bg-gradient-to-r from-purple-400 via-blue-500 to-purple-400 bg-clip-text text-transparent bg-[length:200%_100%]"
                >
                  Andrew Ryan
                </motion.span>
              </motion.div>
            </div>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-sm text-gray-500 hover:text-gray-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-gray-500 hover:text-gray-400 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

