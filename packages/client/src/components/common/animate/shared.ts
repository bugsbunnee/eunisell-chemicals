export type RevealDirection = 'up' | 'down' | 'left' | 'right' | 'none';

export const EASE = [0.22, 1, 0.36, 1] as const;

export const offset = (direction: RevealDirection, distance: number) => {
  switch (direction) {
    case 'up':
      return { y: distance };
    case 'down':
      return { y: -distance };
    case 'left':
      return { x: -distance };
    case 'right':
      return { x: distance };
    default:
      return {};
  }
};
