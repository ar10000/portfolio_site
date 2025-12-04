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

      {/* How Pricing Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="text-4xl font-bold text-center mb-12 text-white"
          >
            How Pricing <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent" style={{ WebkitBackgroundClip: 'text' }}>Works</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Start Small",
                description: "Every project starts with a 15-minute fit check. Then choose: a €1,200 fixed-scope starter build to test working together, or jump straight to hourly work.",
              },
              {
                title: "Hourly for Flexibility",
                description: "Most ongoing work uses hourly billing at €75/hour. This works well for AI systems, feature development, or projects where requirements evolve. Billed weekly.",
              },
              {
                title: "Scale to Complete Systems",
                description: "Once we've worked together on smaller projects, we can take on complete system builds. These start at €4,500 and scale based on architecture complexity.",
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.35, delay: index * 0.1, ease: "easeOut" }}
                className="p-8 rounded-xl border border-gray-800 bg-gray-900/30 hover:border-purple-500/30 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-4">{card.title}</h3>
                <p className="text-gray-300 leading-[1.6] font-normal">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Pricing Section */}
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
              Why This <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent" style={{ WebkitBackgroundClip: 'text' }}>Pricing</span>
            </h2>
            <p className="text-gray-300 leading-[1.6] font-normal">
              I'm transparent about where I am in my career. I've built production systems with multi-tenant architecture, AI logic, and real integrations. But I'm still building my client portfolio. This pricing reflects strong technical skills without charging senior consultant rates for business process consulting I'm still learning.
            </p>
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
                question: "Why no price brackets?",
                answer: "Brackets create confusion and clients anchor to the low end. Fixed prices and \"starting at\" language set clear expectations.",
              },
              {
                question: "What's included in the €1,200 starter build?",
                answer: "A working automation, API integration, or AI tool delivered in 1–2 weeks. Scope is defined upfront. Source code and handoff session included.",
              },
              {
                question: "Why €75/hour instead of €50 or €120?",
                answer: "€75 reflects strong technical execution without charging for senior consulting experience I don't have yet. As I build client case studies, rates will increase.",
              },
              {
                question: "Do you offer ongoing support?",
                answer: "Yes, at €75/hour. Billed based on actual hours used each month.",
              },
              {
                question: "Can you handle complex systems?",
                answer: "Yes. I've built multi-tenant systems, AI agents, and production apps. But these projects start at €4,500 and I recommend starting with a smaller build first.",
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
