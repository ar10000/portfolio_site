"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Rocket, Clock, Building2, Star, Check } from "lucide-react";

interface PricingTier {
  title: string;
  price: string;
  priceSubtext?: string;
  description: string;
  features: string[];
  icon: any;
  recommended?: boolean;
  badge?: string;
  ctaText?: string;
  ctaLink?: string;
  isFree?: boolean;
}

const pricingTiers: PricingTier[] = [
  {
    title: "Initial Call",
    price: "FREE",
    description: "15-minute call to discuss project scope and technical requirements.",
    features: ["Project discussion", "Scope review", "Technical alignment"],
    icon: Phone,
    recommended: false,
    ctaText: "Schedule Call",
    ctaLink: "/contact",
    isFree: true,
  },
  {
    title: "Starter Build",
    price: "€1,200",
    description: "Fixed-scope automation or AI tool. Delivered in 1–2 weeks. Workflow automation, API integration, or basic AI agent.",
    features: ["Fixed scope agreement", "Webhook handling", "API integrations", "Basic AI logic", "Source code + handoff"],
    icon: Rocket,
    recommended: false,
    badge: "Best for Testing",
    ctaText: "Start Fixed Build",
    ctaLink: "/contact",
  },
  {
    title: "Hourly Development",
    price: "€75/hour",
    priceSubtext: "Billed weekly. No minimum hours.",
    description: "Ongoing development for AI systems, full-stack features, or iterative improvements.",
    features: ["AI tools & automations", "Full-stack development", "Database & API work", "Regular progress updates", "Flexible scope"],
    icon: Clock,
    recommended: true,
    badge: "Most Flexible",
    ctaText: "Discuss Hourly Work",
    ctaLink: "/contact",
  },
  {
    title: "Complete System",
    price: "Starting at €4,500",
    priceSubtext: "Final cost based on scope. Delivered in phases.",
    description: "End-to-end system with architecture, AI logic, integrations, and deployment.",
    features: ["System architecture", "Multi-tenant design", "AI reasoning logic", "Production deployment", "Documentation"],
    icon: Building2,
    recommended: false,
    ctaText: "Request Estimate",
    ctaLink: "/contact",
  },
];

export default function Pricing() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Clear <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent" style={{ WebkitBackgroundClip: 'text' }}>Pricing</span>
          </h2>
          <p className="text-gray-400 text-lg leading-[1.6] font-normal max-w-2xl mx-auto">
            Transparent pricing for automation and AI systems
          </p>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: tier.recommended ? -8 : -4, scale: tier.recommended ? 1.02 : 1.01 }}
              className={`relative h-full flex flex-col rounded-xl border transition-all duration-300 ${
                tier.isFree
                  ? "border-green-500/30 bg-gradient-to-br from-gray-900/80 to-gray-950/80 hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/10"
                  : tier.recommended
                  ? "border-purple-500/50 bg-gradient-to-br from-gray-900/80 to-gray-950/80 md:scale-[1.05] shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/40"
                  : "border-gray-800 bg-gray-900/50 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/10"
              }`}
            >
              {/* Badge */}
              {tier.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <motion.span
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className={`inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold rounded-full text-white shadow-lg ${
                      tier.recommended
                        ? "bg-gradient-to-r from-purple-500 to-blue-500 shadow-purple-500/50"
                        : "bg-gray-700 border border-gray-600"
                    }`}
                  >
                    {tier.recommended && <Star className="h-3.5 w-3.5 fill-current" />}
                    {tier.badge}
                  </motion.span>
                </div>
              )}

              {/* Card Content */}
              <div className="p-8 flex flex-col h-full">
                {/* Icon */}
                <div className="mb-6 relative inline-flex items-center justify-center">
                  <div className={`absolute inset-0 rounded-full blur-lg ${
                    tier.isFree 
                      ? "bg-green-500/20" 
                      : "bg-purple-500/20"
                  }`} />
                  <div className={`relative w-16 h-16 rounded-full flex items-center justify-center border ${
                    tier.isFree
                      ? "bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-green-500/30"
                      : tier.recommended
                      ? "bg-gradient-to-br from-purple-500/20 to-blue-500/20 border-purple-500/30 shadow-lg shadow-purple-500/30"
                      : "bg-gradient-to-br from-purple-500/20 to-blue-500/20 border-purple-500/30"
                  }`}>
                    <tier.icon className={`h-8 w-8 drop-shadow-[0_0_12px_rgba(168,85,247,0.6)] ${
                      tier.isFree 
                        ? "text-green-400 drop-shadow-[0_0_12px_rgba(74,222,128,0.6)]" 
                        : "text-purple-400"
                    }`} />
                  </div>
                </div>

                {/* Title */}
                <h3 className={`mb-3 font-bold text-white ${
                  tier.recommended ? "text-2xl" : "text-xl"
                }`}>
                  {tier.title}
                </h3>

                {/* Price */}
                <div className="mb-4">
                  <p className={`font-bold ${
                    tier.isFree
                      ? "text-3xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400"
                      : tier.recommended 
                      ? "text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400"
                      : "text-2xl text-white"
                  }`}>
                    {tier.price}
                  </p>
                  {/* Price Subtext */}
                  {tier.priceSubtext && (
                    <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                      {tier.priceSubtext}
                    </p>
                  )}
                </div>

                {/* Description */}
                <p className="text-gray-300 leading-[1.6] font-normal mb-6 flex-grow">
                  {tier.description}
                </p>

                {/* Features List */}
                <div className="mb-8 space-y-3">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-0.5">
                        <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/30">
                          <Check className="h-3 w-3 text-green-400" />
                        </div>
                      </div>
                      <span className="text-sm text-gray-300 leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Link href={tier.ctaLink || "/contact"} className="mt-auto">
                  <motion.button
                    whileHover={{ scale: 1.02, filter: "brightness(1.1)" }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 ${
                      tier.isFree
                        ? "bg-gradient-to-r from-green-500 to-emerald-500 shadow-lg shadow-green-500/50 hover:shadow-xl hover:shadow-green-500/60"
                        : tier.recommended
                        ? "bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/60"
                        : "bg-gray-800 border border-gray-700 hover:bg-gray-700 hover:border-purple-500/50"
                    }`}
                  >
                    {tier.ctaText || "Schedule Call"}
                  </motion.button>
                </Link>
              </div>

              {/* Subtle glow effect for recommended */}
              {tier.recommended && (
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 rounded-xl pointer-events-none" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

