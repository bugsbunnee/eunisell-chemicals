import React from 'react';
import { ChevronDownIcon } from 'lucide-react';

const ScrollDownButton: React.FC = () => {
  const handleClick = () => {
    const sections = Array.from(document.querySelectorAll('section'));

    const current = sections.find((s) => {
      const rect = s.getBoundingClientRect();
      return rect.top <= 10 && rect.bottom > window.innerHeight / 2;
    });

    const currentIndex = current ? sections.indexOf(current) : 0;
    const next = sections[currentIndex + 1];

    next?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Scroll to next section"
      className="flex flex-col justify-center items-center text-white/60 cursor-pointer animate-bounce"
    >
      <span className="text-[10px] leading-3.75 uppercase tracking-[2px] transition-colors duration-300">Scroll</span>

      <div className="relative flex flex-col justify-center items-center">
        <ChevronDownIcon />
      </div>
    </button>
  );
};

export default ScrollDownButton;
