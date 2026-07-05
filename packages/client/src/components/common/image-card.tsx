import React from 'react';
import { motion } from 'motion/react';

export interface ImageCardProps {
  title: string;
  description: string;
  hoverDescription?: string;
  image: string;
  className?: string;
}

const easing = [0.4, 0, 0.2, 1] as const;

const ImageCard: React.FC<ImageCardProps> = ({ title, description, hoverDescription, image, className = '' }) => (
  <motion.div initial="rest" animate="rest" whileHover="hover" className={`rounded-xs overflow-hidden relative ${className}`}>
    <motion.img
      src={image}
      alt={title}
      className="absolute inset-0 w-full h-full object-cover"
      variants={{ rest: { scale: 1 }, hover: { scale: 1.05 } }}
      transition={{ duration: 0.6, ease: easing }}
    />

    <div className="absolute inset-0 bg-linear-to-t from-accent from-35% to-accent/0" />
    <motion.div
      className="absolute inset-0 bg-linear-to-t from-accent from-60% to-accent/20"
      variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
      transition={{ duration: 0.35, ease: easing }}
    />

    <div className="absolute left-4 right-4 bottom-4 md:left-8 md:right-8 md:bottom-8 flex flex-col gap-1 md:gap-2 text-left">
      <div className="text-[16px] leading-6 md:text-[24px] md:leading-8 text-white">{title}</div>

      <p className="text-[10px] leading-4 md:text-sm md:leading-5 text-white/70 line-clamp-3 md:line-clamp-none">{description}</p>

      {hoverDescription && (
        <motion.div
          className="hidden md:block overflow-hidden"
          variants={{ rest: { height: 0, opacity: 0, y: 12 }, hover: { height: 'auto', opacity: 1, y: 0 } }}
          transition={{ height: { duration: 0.4, ease: easing }, y: { duration: 0.4, ease: easing }, opacity: { duration: 0.3, delay: 0.08 } }}
        >
          <p className="text-sm leading-5 text-white/70 pt-1">{hoverDescription}</p>
        </motion.div>
      )}
    </div>
  </motion.div>
);

export default ImageCard;
