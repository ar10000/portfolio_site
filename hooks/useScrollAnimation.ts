import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface UseScrollAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
  rootMargin?: string;
}

/**
 * Hook that triggers animation when element enters viewport
 * Returns ref to attach to element and boolean indicating if element is in view
 */
export function useScrollAnimation(options?: UseScrollAnimationOptions) {
  const {
    threshold = 0.1,
    triggerOnce = true,
    rootMargin = "0px",
  } = options || {};

  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: threshold,
    once: triggerOnce,
  });

  return { ref, isInView };
}

/**
 * Alternative hook using Intersection Observer directly
 * More control over the animation trigger
 */
export function useScrollAnimationAdvanced(
  options?: UseScrollAnimationOptions
) {
  const {
    threshold = 0.1,
    triggerOnce = true,
    rootMargin = "0px",
  } = options || {};

  const [isInView, setIsInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (triggerOnce && !hasAnimated) {
            setHasAnimated(true);
          }
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce, hasAnimated]);

  return { ref, isInView: triggerOnce ? hasAnimated : isInView };
}

