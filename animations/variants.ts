import { Variants, Transition } from "framer-motion";

// Type definitions
export interface AnimationVariants {
  fadeInUp: Variants;
  staggerContainer: Variants;
  scaleOnHover: Variants;
  slideInFromLeft: Variants;
  slideInFromRight: Variants;
  pulse: Variants;
  shimmer: Variants;
}

export interface AnimationOptions {
  duration?: number;
  delay?: number;
  distance?: number;
  stiffness?: number;
  damping?: number;
}

// Default transition settings
const defaultTransition: Transition = {
  duration: 0.6,
  ease: [0.6, -0.05, 0.01, 0.99],
};

// 1. Fade In Up - Element fades in while moving up
export const fadeInUp = (options?: AnimationOptions): Variants => {
  const { duration = 0.6, delay = 0, distance = 30 } = options || {};

  return {
    hidden: {
      opacity: 0,
      y: distance,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };
};

// 2. Stagger Container - Parent that staggers children
export const staggerContainer = (options?: AnimationOptions): Variants => {
  const { delay = 0, duration = 0.3 } = options || {};

  return {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: duration,
      },
    },
  };
};

// 3. Scale On Hover - Subtle scale increase on hover
interface ScaleOnHoverOptions extends AnimationOptions {
  scale?: number;
}

export const scaleOnHover = (options?: ScaleOnHoverOptions): Variants => {
  const { duration = 0.3, scale = 1.05 } = options || {};

  return {
    rest: {
      scale: 1,
      transition: {
        duration,
        type: "tween",
        ease: "easeInOut",
      },
    },
    hover: {
      scale,
      transition: {
        duration,
        type: "tween",
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1,
      },
    },
  };
};

// 4. Slide In From Left - Slide in from left side
export const slideInFromLeft = (options?: AnimationOptions): Variants => {
  const { duration = 0.6, delay = 0, distance = 100 } = options || {};

  return {
    hidden: {
      opacity: 0,
      x: -distance,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration,
        delay,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };
};

// 5. Slide In From Right - Slide in from right side
export const slideInFromRight = (options?: AnimationOptions): Variants => {
  const { duration = 0.6, delay = 0, distance = 100 } = options || {};

  return {
    hidden: {
      opacity: 0,
      x: distance,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration,
        delay,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };
};

// 6. Pulse - Gentle pulsing effect
export const pulse = (options?: AnimationOptions): Variants => {
  const { duration = 2 } = options || {};

  return {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [1, 0.8, 1],
      transition: {
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };
};

// 7. Shimmer - Loading shimmer effect
export const shimmer = (options?: AnimationOptions): Variants => {
  const { duration = 1.5 } = options || {};

  return {
    animate: {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      transition: {
        duration,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };
};

// Preset combinations for common use cases
export const animationPresets = {
  // Quick fade in
  quickFade: fadeInUp({ duration: 0.3, distance: 20 }),
  
  // Slow dramatic entrance
  dramatic: fadeInUp({ duration: 1, distance: 50 }),
  
  // Fast stagger
  fastStagger: staggerContainer({ duration: 0.1 }),
  
  // Slow stagger
  slowStagger: staggerContainer({ duration: 0.5 }),
  
  // Button hover
  buttonHover: scaleOnHover({ scale: 1.05 }),
  
  // Card hover
  cardHover: scaleOnHover({ scale: 1.02 }),
  
  // Gentle pulse
  gentlePulse: pulse({ duration: 3 }),
  
  // Fast pulse
  fastPulse: pulse({ duration: 1 }),
};

