/**
 * Simplified motion configuration
 * Only includes essential animations for performance
 */

// Animation variants
export const variants = {
  fadeUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  },
};

// Transition presets
export const transitions = {
  base: {
    type: 'spring' as const,
    stiffness: 100,
    damping: 15,
  },
  fast: {
    type: 'spring' as const,
    stiffness: 200,
    damping: 20,
  },
  calm: {
    type: 'spring' as const,
    stiffness: 80,
    damping: 12,
  },
};
