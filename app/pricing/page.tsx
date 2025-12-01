"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Calendar,
  Code2,
  Workflow,
  Shield,
  Zap,
  Settings,
  BarChart3,
  FileText,
  Clock,
  Sparkles,
} from "lucide-react";

const pricingTiers = [
  {
    name: "Blueprint Sprint",
    price: "€500",
    period: "one-time",
    description: "Strategic planning and architecture design for your automation project",
    icon: FileText,
    color: "purple",
    features: [
      {
        icon: Clock,
        title: "90-minute consultation call",
        description: "Deep dive into your requirements, constraints, and business objectives",
      },
      {
        icon: Workflow,
        title: "Workflow map",
        description: "Visual documentation of current processes and proposed automation flows",
      },
      {
        icon: Code2,
        title: "Architecture design",
        description: "Technical architecture document outlining system components and integrations",
      },
      {
        icon: BarChart3,
        title: "Cost-efficiency plan",
        description: "ROI analysis and cost optimization recommendations",
      },
      {
        icon: Calendar,
        title: "Implementation timeline",
        description: "Detailed project timeline with milestones and deliverables",
      },
      {
        icon: Sparkles,
        title: "Optional prototype",
        description: "Basic working prototype to validate approach (additional cost)",
      },
    ],
    cta: "Book Blueprint Sprint",
    ctaLink: "https://calendly.com/andrewryan763/30min",
    popular: false,
  },
  {
    name: "Implementation",
    price: "€2,000–€10,000",
    period: "project-based",
    description: "Full development and deployment of your automation solution",
    icon: Code2,
    color: "blue",
    features: [
      {
        icon: Code2,
        title: "Full build",
        description: "Complete development of your automation system with production-ready code",
      },
      {
        icon: Sparkles,
        title: "AI integrations",
        description: "Integration with Claude AI, GPT, or Gemini based on requirements",
      },
      {
        icon: Workflow,
        title: "Automation workflows",
        description: "End-to-end process automation with error handling and monitoring",
      },
      {
        icon: Settings,
        title: "Custom tools",
        description: "Tailored solutions built specifically for your business needs",
      },
      {
        icon: Shield,
        title: "Training",
        description: "Team training sessions and comprehensive documentation",
      },
    ],
    cta: "Get Started",
    ctaLink: "/contact",
    popular: true,
  },
  {
    name: "Support Retainer",
    price: "€250–€750",
    period: "per month",
    description: "Ongoing maintenance, monitoring, and optimization",
    icon: Shield,
    color: "green",
    features: [
      {
        icon: BarChart3,
        title: "System monitoring",
        description: "24/7 monitoring of automation performance and health metrics",
      },
      {
        icon: Settings,
        title: "Updates & maintenance",
        description: "Regular updates, security patches, and system maintenance",
      },
      {
        icon: Zap,
        title: "Bug fixes",
        description: "Immediate resolution of issues and system errors",
      },
      {
        icon: Workflow,
        title: "New optimizations",
        description: "Continuous improvement of workflows and performance enhancements",
      },
    ],
    cta: "Contact for Details",
    ctaLink: "/contact",
    popular: false,
  },
];

export default function PricingPage() {
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
            Pricing
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Transparent pricing for AI automation and workflow solutions. Choose the engagement model that fits your needs.
          </p>
        </motion.div>

        {/* Pricing Tiers */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier, index) => {
            const getColorClasses = (color: string) => {
              if (color === "purple") {
                return {
                  border: "border-purple-500/50",
                  borderHover: "hover:border-purple-500",
                  bg: "bg-purple-500/5",
                  bgHover: "hover:bg-purple-500/10",
                  text: "text-purple-400",
                  iconBg: "bg-purple-500/10",
                  button: "bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700",
                  badge: "bg-purple-500/20 text-purple-400 border-purple-500/30",
                };
              } else if (color === "blue") {
                return {
                  border: "border-blue-500/50",
                  borderHover: "hover:border-blue-500",
                  bg: "bg-blue-500/5",
                  bgHover: "hover:bg-blue-500/10",
                  text: "text-blue-400",
                  iconBg: "bg-blue-500/10",
                  button: "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700",
                  badge: "bg-blue-500/20 text-blue-400 border-blue-500/30",
                };
              } else {
                return {
                  border: "border-green-500/50",
                  borderHover: "hover:border-green-500",
                  bg: "bg-green-500/5",
                  bgHover: "hover:bg-green-500/10",
                  text: "text-green-400",
                  iconBg: "bg-green-500/10",
                  button: "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700",
                  badge: "bg-green-500/20 text-green-400 border-green-500/30",
                };
              }
            };

            const colors = getColorClasses(tier.color);
            const Icon = tier.icon;

            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className={`relative overflow-hidden rounded-xl border bg-gray-900/50 transition-all duration-300 ${colors.border} ${colors.bg} ${colors.borderHover} ${colors.bgHover} ${
                  tier.popular ? "ring-2 ring-blue-500/50" : ""
                }`}
              >
                {tier.popular && (
                  <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
                    Most Popular
                  </div>
                )}

                <div className="p-8">
                  {/* Icon and Title */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-lg ${colors.iconBg}`}>
                      <Icon className={`h-8 w-8 ${colors.text}`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{tier.name}</h3>
                      <p className="text-sm text-gray-400">{tier.period}</p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-white mb-1">{tier.price}</div>
                    <p className="text-sm text-gray-400">{tier.description}</p>
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {tier.features.map((feature, idx) => {
                      const FeatureIcon = feature.icon;
                      return (
                        <div key={idx} className="flex items-start gap-3">
                          <div className={`p-1.5 rounded ${colors.iconBg} flex-shrink-0 mt-0.5`}>
                            <FeatureIcon className={`h-4 w-4 ${colors.text}`} />
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-white mb-1">{feature.title}</h4>
                            <p className="text-xs text-gray-400 leading-relaxed">{feature.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* CTA Button */}
                  <Link href={tier.ctaLink} target={tier.ctaLink.startsWith("http") ? "_blank" : undefined} rel={tier.ctaLink.startsWith("http") ? "noopener noreferrer" : undefined}>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-3 rounded-lg font-semibold text-white transition-colors flex items-center justify-center gap-2 ${colors.button}`}
                    >
                      {tier.cta}
                      <ArrowRight className="h-4 w-4" />
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="p-6 rounded-lg border border-gray-800 bg-gray-900/50">
              <h3 className="text-xl font-semibold text-white mb-3">Payment Terms</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Blueprint Sprint: 100% upfront</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Implementation: 50% upfront, 50% on delivery</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Support Retainer: Monthly billing</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-lg border border-gray-800 bg-gray-900/50">
              <h3 className="text-xl font-semibold text-white mb-3">What's Included</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Production-ready code and documentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>30-day bug fix warranty on all implementations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Team training and handoff sessions</span>
                </li>
              </ul>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="p-8 rounded-lg border border-gray-800 bg-gray-900/50">
            <h3 className="text-2xl font-semibold text-white mb-6">Common Questions</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">How do I know which tier I need?</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Start with a Blueprint Sprint to map out your requirements and get a clear implementation plan. This helps determine the exact scope and cost for your project.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Can I combine multiple services?</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Yes. Many clients start with a Blueprint Sprint, proceed to Implementation, and then add a Support Retainer for ongoing maintenance.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">What if my project exceeds €10,000?</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  For larger projects, we'll break them into phases. Each phase is priced separately, allowing you to validate progress before committing to the next phase.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="p-12 rounded-xl border border-gray-800 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-green-900/20">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Ready to get started?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Book a Blueprint Sprint to map out your automation strategy, or contact me directly to discuss your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://calendly.com/andrewryan763/30min" target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg font-semibold text-white flex items-center gap-2 shadow-lg shadow-purple-500/50"
                >
                  <Calendar className="h-5 w-5" />
                  Book Blueprint Sprint
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-gray-700 rounded-lg font-semibold text-white hover:border-blue-500 transition-colors flex items-center gap-2"
                >
                  Contact Me
                  <ArrowRight className="h-5 w-5" />
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

