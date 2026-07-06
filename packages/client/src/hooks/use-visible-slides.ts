import { useEffect, useState } from 'react';

const BREAKPOINTS = [
  { maxWidth: 640, slides: 2 },
  { maxWidth: 1024, slides: 3 },
  { maxWidth: 1280, slides: 4 },
];

const getVisibleSlides = (defaultSlides: number) => BREAKPOINTS.find(({ maxWidth }) => window.innerWidth <= maxWidth)?.slides ?? defaultSlides;

const useVisibleSlides = (defaultSlides: number) => {
  const [slides, setSlides] = useState(() => getVisibleSlides(defaultSlides));

  useEffect(() => {
    const onResize = () => setSlides(getVisibleSlides(defaultSlides));
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [defaultSlides]);

  return slides;
};

export default useVisibleSlides;
