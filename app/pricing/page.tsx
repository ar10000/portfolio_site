"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Pricing from "@/components/Pricing";
import { ArrowRight, HelpCircle } from "lucide-react";

export default function PricingPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <div className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-4 text-white">Pricing</h1>
            <p className="text-gray-400 text-lg leading-[1.6] font-normal max-w-2xl mx-auto">
              Transparent pricing. Start with a fixed build or scale with hourly development.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Pricing Component */}
      <Pricing />

      {/* Why These Rates Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="p-8 rounded-xl border border-gray-800 bg-gray-900/30"
          >
            <h2 className="text-3xl font-bold mb-6 text-white">
              Why These <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent" style={{ WebkitBackgroundClip: 'text' }}>Rates</span>
            </h2>
            <div className="space-y-4 text-gray-300 leading-[1.6] font-normal">
              <p>
                I'm transparent about my experience level. I've built production systems with multi-tenant architecture, AI integrations, and real deployments. I know how to design data models, handle webhooks with retry logic, and integrate Claude AI with streaming responses.
              </p>
              <p>
                What I'm still learning: scoping complex projects perfectly and business process consulting. That's why €75/hour reflects strong technical execution without charging senior consultant rates.
              </p>
              <p>
                As I build case studies, rates will increase. Work with me now for technical quality at fair pricing.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Common Questions Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="text-4xl font-bold text-center mb-12 text-white flex items-center justify-center gap-3"
          >
            <HelpCircle className="h-10 w-10 text-purple-400" />
            Common <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent" style={{ WebkitBackgroundClip: 'text' }}>Questions</span>
          </motion.h2>

          <div className="space-y-6">
            {[
              {
                question: "How do we start working together?",
                answer: "Book a free 15-minute fit check. We'll discuss your project, confirm we're aligned, and I'll send you a clear proposal or scope document within 24 hours.",
              },
              {
                question: "Do you offer ongoing support?",
                answer: "Yes, at €75/hour. Billed based on actual hours used each month.",
              },
              {
                question: "Can you handle complex systems?",
                answer: "Yes. I've built multi-tenant systems, AI agents, and production apps. These projects start at €4,500 and I recommend starting with a smaller build first to establish trust.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.35, delay: index * 0.05, ease: "easeOut" }}
                className="p-6 rounded-xl border border-gray-800 bg-gray-900/30"
              >
                <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300 leading-[1.6] font-normal">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl text-gray-300 mb-8 leading-[1.6] font-normal">
              Ready to start? Book a free 15-minute fit check.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl font-semibold text-white shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/60 transition-all duration-300"
              >
                Book 15-Min Call
                <ArrowRight className="h-5 w-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
