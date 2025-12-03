"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FileText, Code2, Settings, Phone, FileCheck, Rocket, Wrench, CheckCircle2, Shield } from "lucide-react";

const services = [
  {
    title: "Automation Blueprint Sprint",
    icon: FileText,
    description:
      "A structured 1–2 week sprint where I map your workflows, identify automation opportunities, and design a clear implementation plan.",
    deliverables: [
      "Workflow diagram",
      "System architecture",
      "Recommended tools and integrations",
      "Timeline, cost breakdown, and next steps",
    ],
  },
  {
    title: "System Implementation",
    icon: Code2,
    description:
      "I build complete systems end-to-end. Front-end and backend. AI reasoning logic. API integrations. Automations and data flows. Agents and email/chat workflows. Dashboards and operational tools.",
    details:
      "I ship real systems quickly with clean architecture. Each component is built to work together. Code is organized and maintainable.",
    components: [
      "Front-end + backend",
      "AI reasoning logic",
      "API integrations",
      "Automations and data flows",
      "Agents and email/chat workflows",
      "Dashboards and operational tools",
    ],
  },
  {
    title: "Ongoing Support & Optimization",
    icon: Settings,
    description:
      "A monthly retainer for monitoring, improvements, new integrations, and maintenance of existing systems.",
    includes: [
      "Monitoring",
      "Improvements",
      "New integrations",
      "Maintenance of existing systems",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="relative pt-24 px-4 sm:px-6 lg:px-8 pb-20 overflow-hidden">
      {/* Decorative gradient blobs */}
      <div className="absolute top-40 -right-32 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-40 -left-24 w-80 h-80 bg-gradient-to-br from-blue-500/15 to-purple-500/15 rounded-full blur-3xl -z-10" />
      
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="mb-16"
        >
          <h1 className="text-5xl font-bold mb-4 text-white">Services</h1>
          <p className="text-gray-400 leading-[1.6] font-normal">
            Three ways to work together.
          </p>
        </motion.div>

        {/* 3-column grid on desktop, 1 column on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.35, delay: index * 0.08, ease: "easeOut" }}
              className="relative h-full flex flex-col p-8 rounded-lg border border-gray-800 bg-gray-900/30 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
            >
              {/* Large icon at top-left with purple accent and circular gradient background */}
              <div className="mb-6 relative inline-flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-full blur-xl" />
                <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center border border-purple-500/30 shadow-lg shadow-purple-500/20">
                  <service.icon className="h-7 w-7 text-purple-400 drop-shadow-[0_0_12px_rgba(168,85,247,0.7)]" />
                </div>
              </div>

              {/* Heading with more whitespace below */}
              <h2 className="text-2xl font-bold text-white mb-4">{service.title}</h2>

              <p className="text-gray-300 mb-6 leading-[1.6] font-normal flex-grow">{service.description}</p>

              {/* Content sections - flex-grow ensures equal height distribution */}
              <div className="flex-grow space-y-4">
                {service.deliverables && (
                  <div>
                    <h3 className="text-sm font-bold text-gray-400 mb-2 uppercase tracking-wide">
                      Deliverables
                    </h3>
                    <ul className="space-y-1.5">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-300 leading-[1.6] font-normal text-sm">
                          <span className="text-gray-300 mt-1.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {service.details && (
                  <div>
                    <p className="text-gray-300 leading-[1.6] font-normal text-sm">{service.details}</p>
                  </div>
                )}

                {service.components && (
                  <div>
                    <h3 className="text-sm font-bold text-gray-400 mb-2 uppercase tracking-wide">
                      Components
                    </h3>
                    <ul className="space-y-1.5">
                      {service.components.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-300 leading-[1.6] font-normal text-sm">
                          <span className="text-gray-300 mt-1.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {service.includes && (
                  <div>
                    <h3 className="text-sm font-bold text-gray-400 mb-2 uppercase tracking-wide">
                      Includes
                    </h3>
                    <ul className="space-y-1.5">
                      {service.includes.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-300 leading-[1.6] font-normal text-sm">
                          <span className="text-gray-300 mt-1.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Gradient Divider */}
        <div className="relative h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent mx-auto max-w-4xl mt-28" />

        {/* Typical Engagement Flow */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="pt-28"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="text-4xl font-bold mb-12 text-white"
          >
            Typical <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent" style={{ WebkitBackgroundClip: 'text' }}>Engagement</span> Flow
          </motion.h2>
          <div className="relative overflow-visible">
            {[
              {
                step: 1,
                icon: Phone,
                title: "Discovery Call",
                description: "15-minute consultation to understand your needs and requirements",
              },
              {
                step: 2,
                icon: FileCheck,
                title: "Proposal & Agreement",
                description: "Detailed scope, timeline, and pricing with clear deliverables",
              },
              {
                step: 3,
                icon: Rocket,
                title: "Kickoff & Planning",
                description: "Requirements gathering and project setup with architecture design",
              },
              {
                step: 4,
                icon: Wrench,
                title: "Development",
                description: "Fast, iterative development with regular updates and feedback loops",
              },
              {
                step: 5,
                icon: CheckCircle2,
                title: "Delivery & Support",
                description: "Complete handoff package with training, documentation, and ongoing support",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.35, delay: index * 0.08, ease: "easeOut" }}
                className="relative flex items-start gap-6 mb-12 last:mb-0 z-10"
              >
                {/* Connecting line with arrow */}
                {index < 4 && (
                  <div className="absolute left-8 top-16 w-0.5 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 z-0">
                    {/* Arrow at the bottom */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-purple-500" />
                  </div>
                )}
                
                {/* Numbered gradient circle */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-xl" />
                  <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/50 border-2 border-blue-400/30">
                    {step.step}
                  </div>
                </div>
                
                {/* Step content */}
                <div className="flex-1 pt-2">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="relative">
                      <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-md" />
                      <step.icon className="h-6 w-6 text-purple-400 relative drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{step.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-3 leading-[1.6] font-normal">{step.description}</p>
                  
                  {/* Warranty badge for Delivery & Support step */}
                  {step.step === 5 && (
                    <div className="mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500/10 border border-green-500/30">
                      <Shield className="h-4 w-4 text-green-400" />
                      <span className="text-sm font-medium text-green-400">Includes 30-Day Bug-Free Warranty</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
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
