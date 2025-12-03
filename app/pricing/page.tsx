"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FileText, Code2, Settings, Star } from "lucide-react";

const pricingTiers = [
  {
    title: "Automation Blueprint Sprint",
    price: "€750 – €1,500",
    icon: FileText,
    description:
      "A short, focused sprint to understand your workflows and design a complete automation or system architecture. Fixed price. Clear deliverables.",
    recommended: false,
  },
  {
    title: "System Implementation",
    price: "From €1,500 to €6,000 depending on scope",
    icon: Code2,
    description:
      "Full build of the automation or AI system. Clear milestones. Clean handover. Flexible based on complexity.",
    recommended: true,
  },
  {
    title: "Monthly Support",
    price: "€250 – €750/month",
    icon: Settings,
    description:
      "For updates, improvements, monitoring, and new features. Useful for founders, agencies, or small teams who want long-term support.",
    recommended: false,
  },
];

export default function PricingPage() {
  return (
    <div className="pt-24 px-4 sm:px-6 lg:px-8 pb-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="mb-16"
        >
          <h1 className="text-5xl font-bold mb-4 text-white">Pricing</h1>
          <p className="text-gray-400 leading-[1.6] font-normal">
            Clear pricing for each engagement type.
          </p>
        </motion.div>

        {/* 3-column grid on desktop, 1 column on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.35, delay: index * 0.08, ease: "easeOut" }}
              whileHover={{ scale: tier.recommended ? 1.03 : 1.02 }}
              className={`relative h-full flex flex-col p-8 rounded-xl border ${
                tier.recommended
                  ? "border-purple-500/50 bg-gray-900/50 md:scale-[1.03] shadow-xl shadow-purple-500/20"
                  : "border-gray-800 bg-gray-900/30"
              } hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20`}
            >
              {/* Recommended Badge */}
              {tier.recommended && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg shadow-purple-500/50">
                    <Star className="h-3 w-3 fill-current" />
                    Recommended
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className="mb-6 relative inline-flex items-center justify-center">
                <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-md" />
                <div className={`relative w-14 h-14 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center border border-purple-500/30 ${
                  tier.recommended ? "shadow-lg shadow-purple-500/30" : ""
                }`}>
                  <tier.icon className="h-7 w-7 text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-grow flex flex-col">
                <h2 className={`mb-3 font-bold text-white ${
                  tier.recommended ? "text-2xl" : "text-xl"
                }`}>
                  {tier.title}
                </h2>
                <p className={`mb-4 leading-[1.6] font-normal text-gray-300 ${
                  tier.recommended ? "text-lg" : "text-base"
                }`}>
                  {tier.price}
                </p>
                <p className="text-gray-300 leading-[1.6] font-normal text-sm flex-grow">
                  {tier.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="p-6 rounded-lg border border-gray-800 bg-gray-900/30 mb-12"
        >
          <p className="text-gray-300 leading-[1.6] font-normal">
            I only take on projects where I can deliver clear value and strong improvements.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl font-semibold text-white shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/60 transition-all duration-300"
            >
              Contact to discuss
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
