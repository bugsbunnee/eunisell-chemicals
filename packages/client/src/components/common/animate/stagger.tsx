import React, { type PropsWithChildren } from 'react';
import { motion, useReducedMotion, type Variants } from 'motion/react';
import { EASE, offset, type RevealDirection } from './shared';

interface StaggerProps extends PropsWithChildren {
  className?: string;
  delay?: number;
  stagger?: number;
}

interface StaggerItemProps extends PropsWithChildren {
  className?: string;
  direction?: RevealDirection;
  distance?: number;
  /** Lifts the item slightly on hover. */
  lift?: boolean;
}

export const Stagger: React.FC<StaggerProps> = ({ children, className, delay = 0, stagger = 0.12 }) => {
  const variants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };
  return (
    <motion.div className={className} variants={variants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
      {children}
    </motion.div>
  );
};

export const StaggerItem: React.FC<StaggerItemProps> = ({ children, className, direction = 'up', distance = 32, lift = false }) => {
  const reduced = useReducedMotion();
  const variants: Variants = {
    hidden: { opacity: 0, ...(reduced ? {} : offset(direction, distance)) },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.6, ease: EASE } },
  };
  return (
    <motion.div className={className} variants={variants} whileHover={lift && !reduced ? { y: -8 } : undefined} transition={{ type: 'spring', stiffness: 300, damping: 22 }}>
      {children}
    </motion.div>
  );
};
