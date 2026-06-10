import type { Variants } from 'motion/react'

const EASE = 'easeInOut' as const
const DURATION = 0.35
const DISTANCE = 16

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: DISTANCE },
  show: { opacity: 1, y: 0, transition: { duration: DURATION, ease: EASE } },
}

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -DISTANCE },
  show: { opacity: 1, x: 0, transition: { duration: DURATION, ease: EASE } },
}

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: DISTANCE },
  show: { opacity: 1, x: 0, transition: { duration: DURATION, ease: EASE } },
}

export const staggerContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}

export const staggerContainerSlow: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.25 } },
}

export function fadeUpDelay(delay: number): Variants {
  return {
    hidden: { opacity: 0, y: DISTANCE },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: DURATION, ease: EASE, delay },
    },
  }
}

export function fadeLeftDelay(delay: number): Variants {
  return {
    hidden: { opacity: 0, x: -DISTANCE },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: DURATION, ease: EASE, delay },
    },
  }
}
