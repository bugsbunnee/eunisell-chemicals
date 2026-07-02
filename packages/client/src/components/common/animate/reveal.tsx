import React, { type PropsWithChildren } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { EASE, offset, type RevealDirection } from './shared';

interface Props extends PropsWithChildren {
  className?: string;
  direction?: RevealDirection;
  delay?: number;
  duration?: number;
  distance?: number;
}

const Reveal: React.FC<Props> = ({ children, className, direction = 'up', delay = 0, duration = 0.7, distance = 40 }) => {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...(reduced ? {} : offset(direction, distance)) }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
