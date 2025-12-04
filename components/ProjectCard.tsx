"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Clock, Code2, ExternalLink, ArrowRight } from "lucide-react";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  status: "live" | "beta" | "development";
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  projectUrl: string;
  accentColor: string;
  impact?: string; // Business impact statement
  index?: number; // For staggered animations
}

// Loading skeleton component
function ProjectCardSkeleton() {
  return (
    <div className="rounded-xl border border-gray-800 bg-gray-900/50 overflow-hidden animate-pulse">
      <div className="aspect-video bg-gray-800" />
      <div className="p-6 space-y-4">
        <div className="h-6 bg-gray-800 rounded w-3/4" />
        <div className="h-4 bg-gray-800 rounded w-full" />
        <div className="h-4 bg-gray-800 rounded w-5/6" />
        <div className="flex gap-2">
          <div className="h-6 bg-gray-800 rounded-full w-16" />
          <div className="h-6 bg-gray-800 rounded-full w-20" />
        </div>
        <div className="flex gap-2 pt-4">
          <div className="h-10 bg-gray-800 rounded-lg flex-1" />
          <div className="h-10 bg-gray-800 rounded-lg flex-1" />
        </div>
      </div>
    </div>
  );
}

export default function ProjectCard({
  title,
  description,
  tags,
  status,
  image,
  demoUrl,
  githubUrl,
  projectUrl,
  accentColor,
  impact,
  index = 0,
}: ProjectCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Status badge configuration
  const statusConfig = {
    live: {
      label: "Live",
      icon: CheckCircle2,
      className: "bg-green-500/20 text-green-400 border-green-500/30",
    },
    beta: {
      label: "Beta",
      icon: Clock,
      className: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    },
    development: {
      label: "In Development",
      icon: Code2,
      className: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    },
  };

  const currentStatus = statusConfig[status];
  const StatusIcon = currentStatus.icon;

  // Convert accent color to styles
  const getAccentStyles = () => {
    // Common color mappings for Tailwind classes
    const colorMap: Record<string, { gradient: string; border: string }> = {
      purple: {
        gradient: "from-purple-500 to-purple-600",
        border: "border-purple-500/50",
      },
      blue: {
        gradient: "from-blue-500 to-blue-600",
        border: "border-blue-500/50",
      },
      pink: {
        gradient: "from-pink-500 to-pink-600",
        border: "border-pink-500/50",
      },
      green: {
        gradient: "from-green-500 to-green-600",
        border: "border-green-500/50",
      },
      yellow: {
        gradient: "from-yellow-500 to-yellow-600",
        border: "border-yellow-500/50",
      },
    };

    // Try to match common color names
    const lowerColor = accentColor.toLowerCase();
    if (colorMap[lowerColor]) {
      return {
        ...colorMap[lowerColor],
        isCustom: false,
      };
    }

    // Use inline styles for custom colors (hex codes, rgb, etc.)
    return {
      gradient: "from-purple-500 to-blue-600",
      border: "border-purple-500/50",
      isCustom: true,
      customColor: accentColor,
    };
  };

  const accentStyles = getAccentStyles();

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.35, delay: index * 0.08, ease: "easeOut" }}
      whileHover={{ y: -12, transition: { duration: 0.3, ease: "easeOut" } }}
      className="group relative overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20"
    >
      {/* Purple glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-2xl pointer-events-none -z-10" />

      {/* Project Thumbnail - Larger and more prominent */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-800 group-hover:scale-105 transition-transform duration-500 ease-out">
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 animate-pulse bg-gray-800" />
        )}
        {imageError ? (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
            <Code2 className="h-12 w-12 text-gray-700" aria-hidden="true" />
          </div>
        ) : (
          <Image
            src={image}
            alt={`${title} project thumbnail`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className={`object-cover transition-all duration-500 ease-out ${
              imageLoaded ? "opacity-100" : "opacity-0"
            } group-hover:scale-110`}
            onLoad={() => setImageLoaded(true)}
            onError={() => {
              setImageError(true);
              setImageLoaded(true);
            }}
            loading="lazy"
          />
        )}
        
        {/* Overlay gradient - more subtle on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/40 transition-all duration-300" />
        
        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full border backdrop-blur-sm ${currentStatus.className}`}
          >
            <StatusIcon className="h-3 w-3" />
            {currentStatus.label}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6">
        {/* Impact Statement - Prominently displayed above title */}
        {impact && (
          <div className="mb-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 backdrop-blur-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-bold text-green-400 leading-tight">
                {impact}
              </span>
            </div>
          </div>
        )}

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-500 transition-all duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed">
          {description}
        </p>

        {/* Tech Tags - Visually secondary, smaller and more subdued */}
        <div className="flex flex-wrap gap-1.5 mb-6 opacity-70">
          {tags.slice(0, 4).map((tag, tagIndex) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 + tagIndex * 0.05 }}
              className="px-2.5 py-0.5 text-xs bg-gray-800/50 text-gray-500 rounded-full border border-gray-800/50"
            >
              {tag}
            </motion.span>
          ))}
          {tags.length > 4 && (
            <span className="px-2.5 py-0.5 text-xs bg-gray-800/50 text-gray-500 rounded-full border border-gray-800/50">
              +{tags.length - 4}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Link href={projectUrl} className="flex-1">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full px-4 py-2.5 text-sm font-medium rounded-lg border transition-all duration-300 flex items-center justify-center gap-2 min-h-[44px] bg-gradient-to-r from-purple-500 to-blue-500 text-white border-transparent hover:from-purple-400 hover:to-blue-400 hover:shadow-lg hover:shadow-purple-500/50`}
              aria-label={`View details for ${title}`}
            >
              View Details
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </motion.button>
          </Link>

          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
              aria-label={`Open live demo for ${title} in new tab`}
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-4 py-2.5 text-sm font-medium bg-gray-800 text-gray-300 rounded-lg border border-gray-700 hover:bg-gray-700 hover:text-white hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 flex items-center justify-center gap-2 min-h-[44px]"
              >
                Live Demo
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </motion.button>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// Export skeleton for use in loading states
export { ProjectCardSkeleton };

