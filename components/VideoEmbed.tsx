"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Loader2, Maximize, X, AlertCircle } from "lucide-react";

interface VideoEmbedProps {
  videoUrl: string;
  thumbnail?: string;
  title: string;
  autoplay?: boolean;
}

// Extract video ID and type from URL
function parseVideoUrl(url: string): { type: "youtube" | "loom" | "unknown"; id: string } {
  // YouTube patterns
  const youtubePatterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /youtube\.com\/watch\?.*v=([^&\n?#]+)/,
  ];

  // Loom pattern
  const loomPattern = /loom\.com\/share\/([^?\n]+)/;

  for (const pattern of youtubePatterns) {
    const match = url.match(pattern);
    if (match) {
      return { type: "youtube", id: match[1] };
    }
  }

  const loomMatch = url.match(loomPattern);
  if (loomMatch) {
    return { type: "loom", id: loomMatch[1] };
  }

  return { type: "unknown", id: "" };
}

// Get embed URL based on video type
function getEmbedUrl(videoUrl: string, autoplay: boolean = false): string {
  const { type, id } = parseVideoUrl(videoUrl);

  if (type === "youtube") {
    return `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1${autoplay ? "&autoplay=1" : ""}`;
  }

  if (type === "loom") {
    return `https://www.loom.com/embed/${id}${autoplay ? "?autoplay=true" : ""}`;
  }

  return videoUrl;
}

export default function VideoEmbed({
  videoUrl,
  thumbnail,
  title,
  autoplay = false,
}: VideoEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(autoplay);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const { type } = parseVideoUrl(videoUrl);
  const embedUrl = getEmbedUrl(videoUrl, isPlaying && autoplay);

  // Handle fullscreen
  const toggleFullscreen = () => {
    if (!containerRef.current) return;

    if (!isFullscreen) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  // Listen for fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  const handlePlay = () => {
    setIsPlaying(true);
    setIsLoading(true);
    setHasError(false);
  };

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  // Get thumbnail URL
  const getThumbnailUrl = () => {
    if (thumbnail) return thumbnail;

    const { type, id } = parseVideoUrl(videoUrl);
    if (type === "youtube") {
      return `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
    }

    // Default placeholder
    return "/api/placeholder/1280/720";
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full rounded-xl overflow-hidden bg-gray-900 shadow-2xl"
    >
      <div className="relative aspect-video bg-gray-900">
        <AnimatePresence mode="wait">
          {!isPlaying ? (
            // Thumbnail with play button
            <motion.div
              key="thumbnail"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 cursor-pointer group"
              onClick={handlePlay}
            >
              {/* Thumbnail Image */}
              <div className="absolute inset-0">
                <img
                  src={getThumbnailUrl()}
                  alt={title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to gradient if image fails
                    e.currentTarget.style.display = "none";
                  }}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative z-10 p-6 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/30 group-hover:bg-white/30 group-hover:border-white/50 transition-all"
                  aria-label={`Play ${title}`}
                >
                  <Play className="h-12 w-12 text-white fill-white ml-1" />
                </motion.button>
              </div>

              {/* Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <h3 className="text-xl font-semibold text-white mb-1">{title}</h3>
                <p className="text-sm text-gray-300">Click to play</p>
              </div>
            </motion.div>
          ) : hasError ? (
            // Error State
            <motion.div
              key="error"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-gray-900"
            >
              <AlertCircle className="h-16 w-16 text-red-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Failed to load video
              </h3>
              <p className="text-gray-400 text-center mb-6">
                There was an error loading the video. Please try again later.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setHasError(false);
                  setIsPlaying(false);
                }}
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg font-semibold text-white"
              >
                Try Again
              </motion.button>
            </motion.div>
          ) : (
            // Video Player
            <motion.div
              key="video"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0"
            >
              {/* Loading Spinner */}
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900 z-10">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <Loader2 className="h-12 w-12 text-purple-400" />
                  </motion.div>
                </div>
              )}

              {/* Video Iframe */}
              <iframe
                ref={iframeRef}
                src={embedUrl}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
                onLoad={handleIframeLoad}
                onError={handleError}
                style={{ display: isLoading ? "none" : "block" }}
              />

              {/* Fullscreen Toggle Button */}
              <div className="absolute top-4 right-4 z-20">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleFullscreen}
                  className="p-2 rounded-lg bg-black/50 backdrop-blur-sm border border-white/20 hover:bg-black/70 transition-colors"
                  aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
                >
                  {isFullscreen ? (
                    <X className="h-5 w-5 text-white" />
                  ) : (
                    <Maximize className="h-5 w-5 text-white" />
                  )}
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

