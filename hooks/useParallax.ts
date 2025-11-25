import { useEffect, useState } from "react";

interface UseParallaxOptions {
  speed?: number;
  offset?: number;
  enabled?: boolean;
}

/**
 * Simple parallax effect hook for hero sections
 * Returns the parallax offset value based on scroll position
 */
export function useParallax(options?: UseParallaxOptions) {
  const { speed = 0.5, offset = 0, enabled = true } = options || {};
  const [parallaxOffset, setParallaxOffset] = useState(0);

  useEffect(() => {
    if (!enabled) return;

    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallax = scrolled * speed + offset;
      setParallaxOffset(parallax);
    };

    // Initial calculation
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [speed, offset, enabled]);

  return parallaxOffset;
}

/**
 * Advanced parallax hook with element-based calculation
 * Calculates parallax based on element's position relative to viewport
 */
export function useParallaxElement(
  elementRef: React.RefObject<HTMLElement>,
  options?: UseParallaxOptions
) {
  const { speed = 0.5, offset = 0, enabled = true } = options || {};
  const [parallaxOffset, setParallaxOffset] = useState(0);

  useEffect(() => {
    if (!enabled || !elementRef.current) return;

    const handleScroll = () => {
      const element = elementRef.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const elementTop = rect.top + window.pageYOffset;
      const windowHeight = window.innerHeight;
      const scrollY = window.pageYOffset;

      // Calculate parallax based on element's position
      const elementCenter = elementTop + rect.height / 2;
      const viewportCenter = scrollY + windowHeight / 2;
      const distance = (viewportCenter - elementCenter) * speed;

      setParallaxOffset(distance + offset);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [speed, offset, enabled, elementRef]);

  return parallaxOffset;
}

/**
 * Parallax hook that returns transform style object
 * Ready to use with Framer Motion or inline styles
 */
export function useParallaxTransform(options?: UseParallaxOptions) {
  const offset = useParallax(options);

  return {
    transform: `translateY(${offset}px)`,
    willChange: "transform",
  };
}

