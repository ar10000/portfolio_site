"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import {
  Brain,
  Zap,
  Rocket,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Calendar,
  ArrowLeft,
  ArrowRight as ArrowRightIcon,
} from "lucide-react";
import TechStackMarquee from "@/components/TechStackMarquee";

const services = [
  {
    title: "Custom AI Tools",
    price: "$5-10K projects",
    color: "purple",
    icon: Brain,
    description:
      "Stop losing leads to slow responses. I build AI tools that automate your biggest bottlenecks—qualifying leads, processing documents, handling support—so your team focuses on what matters. I use modern AI stacks (Claude, GPT, or Gemini — whichever fits best) to build solutions faster and more affordably than traditional agencies, without sacrificing quality.",
    youGet: [
      "A working AI tool in 2-4 weeks, not months",
      "Integration with Claude, GPT, or Gemini—I pick the best fit",
      "Full deployment and documentation you can actually use",
      "Clear requirements mapped to real business outcomes",
      "Complete handoff package: walkthrough video, documentation, and 30-day bug fix warranty",
    ],
    idealFor:
      "You have a specific problem AI can solve, and you need it done fast",
    examples: [
      "Lead qualification",
      "Document processing",
      "Customer support bots",
    ],
  },
  {
    title: "Workflow Automation",
    price: "$2-5K setups",
    color: "blue",
    icon: Zap,
    description:
      "Cut hours of manual work every week. I connect your tools with Make.com and n8n workflows that run in the background, so you never touch them again.",
    youGet: [
      "Your entire workflow automated in 1-2 weeks",
      "All your tools connected—CRM, email, databases, payment processors. I specialize in Make.com and n8n to create automations that connect your CRM, email, databases, and payment processors — no coding required on your end.",
      "30 days of support to make sure everything runs smoothly",
      "Training so your team knows how it works",
      "Complete handoff package: walkthrough video, documentation, and 30-day bug fix warranty",
    ],
    idealFor: "You're drowning in repetitive tasks and need them gone yesterday",
    examples: [
      "Client onboarding",
      "Content distribution",
      "Order fulfillment",
    ],
  },
  {
    title: "Proof-of-Concept Sprint",
    price: "$2-3K MVPs",
    color: "pink",
    icon: Rocket,
    description:
      "Test your idea before you invest thousands. I'll build a working prototype in 48-72 hours so you can validate with real users, not just hope it works.",
    youGet: [
      "A working prototype in 48-72 hours—yes, really",
      "Core features that prove your concept",
      "A hosted demo you can share with investors or users",
      "Clean code and docs for when you're ready to scale",
      "Complete handoff package: walkthrough video, documentation, and 30-day bug fix warranty",
    ],
    idealFor: "You have an idea and need to validate it with real users before committing to full development",
    examples: ["SaaS MVP", "Internal tools", "Proof-of-concept demos"],
  },
];

const processSteps = [
  {
    step: 1,
    title: "Discovery Call",
    description: "15-minute consultation to understand your needs",
  },
  {
    step: 2,
    title: "Proposal & Agreement",
    description: "Detailed scope, timeline, and pricing",
  },
  {
    step: 3,
    title: "Kickoff & Planning",
    description: "Requirements gathering and project setup",
  },
  {
    step: 4,
    title: "Development",
    description: "Regular updates and iterative development",
  },
  {
    step: 5,
    title: "Delivery & Support",
    description: "Handoff, training, and ongoing support",
  },
];

const faqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "Custom AI Tools: 2-4 weeks for MVP. Workflow Automation: 1-2 weeks. Rapid Prototyping: 48-72 hours. Full project timelines depend on complexity and requirements.",
  },
  {
    question: "Do you work with non-technical clients?",
    answer:
      "Absolutely! I specialize in working with business owners and teams who need technical solutions but don't have technical expertise. I handle all the technical details and provide clear communication throughout.",
  },
  {
    question: "What if I need changes after delivery?",
    answer:
      "I include 30 days of support for workflow automation projects. For custom AI tools and prototypes, we can discuss ongoing support or additional development phases based on your needs.",
  },
  {
    question: "Can you integrate with my existing tools?",
    answer:
      "Yes! I specialize in connecting tools via APIs and automation platforms. Common integrations include CRMs, email platforms, databases, payment processors, and more.",
  },
  {
    question: "What's the difference between Rapid Prototyping and Custom AI Tools?",
    answer:
      "Rapid Prototyping is for quick validation (48-72 hours) with core features only. Custom AI Tools is a full development cycle (2-4 weeks) with production-ready features, proper architecture, and deployment.",
  },
  {
    question: "Do you provide hosting and maintenance?",
    answer:
      "I can set up hosting and provide initial deployment. For ongoing hosting and maintenance, we can discuss options based on your needs and budget.",
  },
  {
    question: "What happens after you build it?",
    answer:
      "I don't just hand over code and disappear. Every project includes a complete handoff package: a walkthrough video showing how everything works, written documentation your team can reference, and a 30-day warranty where I fix any bugs for free. After that, I offer optional maintenance retainers starting at €500/month.",
  },
];

const recentProjects = [
  {
    title: "AutoLeadCloser",
    description: "AI-powered lead qualification system",
    link: "/projects/autoleadcloser",
  },
  {
    title: "FlowCircle",
    description: "Personal productivity app",
    link: "/projects/flowcircle",
  },
  {
    title: "Agency Autopilot",
    description: "Complete workflow automation",
    link: "/projects/agency-autopilot",
  },
];

// FAQ type
interface FAQ {
  question: string;
  answer: string;
}

// FAQ Accordion Component
function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="border border-gray-800 rounded-lg bg-gray-900/50 overflow-hidden"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-800/50 transition-colors"
          >
            <span className="font-semibold text-white">{faq.question}</span>
            {openIndex === index ? (
              <ChevronUp className="h-5 w-5 text-gray-400 flex-shrink-0" />
            ) : (
              <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
            )}
          </button>
          {openIndex === index && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="px-6 pb-4"
            >
              <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
}


// Projects Carousel Component
function ProjectsCarousel({ projects }: { projects: typeof recentProjects }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-lg">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="p-8 rounded-lg border border-gray-800 bg-gray-900/50"
        >
          <h3 className="text-2xl font-bold mb-2 text-white">
            {projects[currentIndex].title}
          </h3>
          <p className="text-gray-400 mb-4">{projects[currentIndex].description}</p>
          <Link
            href={projects[currentIndex].link}
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
          >
            View Project
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
      <div className="flex items-center justify-between mt-4">
        <button
          onClick={prevProject}
          className="p-2 rounded-lg border border-gray-800 hover:border-purple-500 transition-colors"
          aria-label="Previous project"
        >
          <ArrowLeft className="h-5 w-5 text-gray-400" />
        </button>
        <div className="flex gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                currentIndex === index
                  ? "w-8 bg-purple-500"
                  : "w-2 bg-gray-700 hover:bg-gray-600"
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
        <button
          onClick={nextProject}
          className="p-2 rounded-lg border border-gray-800 hover:border-purple-500 transition-colors"
          aria-label="Next project"
        >
          <ArrowRightIcon className="h-5 w-5 text-gray-400" />
        </button>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <div className="pt-24 px-4 sm:px-6 lg:px-8 pb-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            How I Can <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Help</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Three ways I help you ship faster: custom AI tools, workflow automation, and rapid prototypes. Pick what fits.
          </p>
        </motion.div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const getColorClasses = (color: string) => {
              if (color === "purple") {
                return {
                  border: "border-purple-500/50 hover:border-purple-500",
                  bg: "bg-purple-500/5 hover:bg-purple-500/10",
                  text: "text-purple-400",
                  iconBg: "bg-purple-500/10",
                  button: "bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700",
                };
              } else if (color === "blue") {
                return {
                  border: "border-blue-500/50 hover:border-blue-500",
                  bg: "bg-blue-500/5 hover:bg-blue-500/10",
                  text: "text-blue-400",
                  iconBg: "bg-blue-500/10",
                  button: "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700",
                };
              } else {
                return {
                  border: "border-pink-500/50 hover:border-pink-500",
                  bg: "bg-pink-500/5 hover:bg-pink-500/10",
                  text: "text-pink-400",
                  iconBg: "bg-pink-500/10",
                  button: "bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700",
                };
              }
            };

            const colors = getColorClasses(service.color);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className={`relative overflow-hidden rounded-xl border bg-gray-900/50 transition-all duration-300 ${colors.border} ${colors.bg}`}
              >
                <div className="p-8">
                  {/* Icon and Price */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg ${colors.iconBg}`}>
                      <service.icon className={`h-8 w-8 ${colors.text}`} />
                    </div>
                    <span className="text-lg font-bold text-white">{service.price}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-3 text-white">{service.title}</h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>

                  {/* You Get */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-3">You get:</h4>
                    <ul className="space-y-2">
                      {service.youGet.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                          <CheckCircle2 className={`h-4 w-4 mt-0.5 flex-shrink-0 ${colors.text}`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Ideal For */}
                  <div className="mb-6 p-4 rounded-lg bg-gray-800/50 border border-gray-700">
                    <p className="text-xs font-semibold text-gray-400 mb-1">Ideal for:</p>
                    <p className="text-sm text-gray-300">{service.idealFor}</p>
                  </div>

                  {/* Examples */}
                  <div className="mb-6">
                    <p className="text-xs font-semibold text-gray-400 mb-2">Example projects:</p>
                    <div className="flex flex-wrap gap-2">
                      {service.examples.map((example, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs bg-gray-800 text-gray-400 rounded-full border border-gray-700"
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link href="/contact">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-3 rounded-lg font-semibold text-white transition-colors group ${colors.button}`}
                    >
                      <span className="group-hover:hidden">Get Started</span>
                      <span className="hidden group-hover:inline">Let's build something</span>
                      <ArrowRight className="h-4 w-4 inline-block ml-2" />
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Internal Tools Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="relative overflow-hidden rounded-xl border-2 border-gray-700/50 bg-gradient-to-br from-gray-900/80 via-gray-900/60 to-gray-900/80 backdrop-blur-sm">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-50" />
            
            <div className="relative p-8 md:p-10">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white">
                    Need an Internal Tool?
                  </h3>
                  <p className="text-gray-300 leading-relaxed max-w-3xl">
                    I build custom dashboards, admin panels, and data management interfaces that your team can actually use. These aren't consumer-facing products — they're the internal tools that make your operations smoother.{" "}
                    <span className="font-semibold text-white">Starting at €4k.</span>
                  </p>
                </div>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 border border-gray-600 rounded-lg font-semibold text-white transition-colors flex items-center gap-2 whitespace-nowrap"
                  >
                    Get Started
                    <ArrowRight className="h-4 w-4" />
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Process Timeline */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Typical Engagement <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Flow</span>
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-pink-500 hidden md:block" />
            
            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex items-start gap-6"
                >
                  {/* Step number */}
                  <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {step.step}
                  </div>
                  
                  {/* Step content */}
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Tech Stack Marquee */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <TechStackMarquee />
        </motion.section>

        {/* Recent Projects Carousel */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Recent <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="max-w-2xl mx-auto">
            <ProjectsCarousel projects={recentProjects} />
          </div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Questions</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion faqs={faqs} />
          </div>
        </motion.section>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="p-12 rounded-xl border border-gray-800 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Not sure which option fits?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Let's talk. I'll help you figure out the fastest path to your solution.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 rounded-lg font-semibold text-white flex items-center gap-2 mx-auto shadow-lg shadow-purple-500/50 group"
              >
                <Calendar className="h-5 w-5" />
                <span className="group-hover:hidden">Book Free Consultation</span>
                <span className="hidden group-hover:inline">Let's build something</span>
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
