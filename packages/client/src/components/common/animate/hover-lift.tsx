import React, { type PropsWithChildren } from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface Props extends PropsWithChildren {
  className?: string;
  scale?: number;
}

const HoverLift: React.FC<Props> = ({ children, className, scale = 1.02 }) => {
  const reduced = useReducedMotion();
  return (
    <motion.div className={className} whileHover={reduced ? undefined : { y: -8, scale }} transition={{ type: 'spring', stiffness: 300, damping: 22 }}>
      {children}
    </motion.div>
  );
};

export default HoverLift;
