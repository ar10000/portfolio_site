"use client";

import { motion } from "framer-motion";

interface TechStackSummaryProps {
  techStack: Array<{
    name: string;
    category: string;
  }>;
}

export default function TechStackSummary({ techStack }: TechStackSummaryProps) {
  if (!techStack || techStack.length === 0) return null;

  // Group technologies by display category
  const categoryMapping: Record<string, string> = {
    Framework: "Frontend",
    Frontend: "Frontend",
    Styling: "Frontend",
    Backend: "Backend",
    Language: "Backend",
    Email: "Backend",
    Database: "Infrastructure",
    Infrastructure: "Infrastructure",
    Integration: "Infrastructure",
    AI: "AI/ML",
    "AI/ML": "AI/ML",
    Other: "Other",
  };

  const groupedTech: Record<string, string[]> = {
    Frontend: [],
    Backend: [],
    "AI/ML": [],
    Infrastructure: [],
    Other: [],
  };

  techStack.forEach((tech) => {
    const displayCategory = categoryMapping[tech.category] || "Other";
    if (groupedTech[displayCategory]) {
      groupedTech[displayCategory].push(tech.name);
    } else {
      groupedTech["Other"].push(tech.name);
    }
  });

  // Filter out empty categories
  const activeCategories = Object.entries(groupedTech).filter(
    ([_, techs]) => techs.length > 0
  );

  if (activeCategories.length === 0) return null;

  return (
    <section id="tech-stack-summary" className="scroll-mt-24">
      {/* Gradient Divider */}
      <div className="relative h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent mb-12 -mt-4" />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-8 flex items-center gap-3"
      >
        <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent" style={{ WebkitBackgroundClip: 'text' }}>
          Tech Stack
        </span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="space-y-4"
      >
        {activeCategories.map(([category, techs], index) => (
          <div key={category} className="text-gray-300 leading-[1.6] font-normal">
            <span className="font-semibold text-white">{category}:</span>{" "}
            <span>{techs.join(", ")}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

