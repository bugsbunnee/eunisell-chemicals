import React, { useMemo, useRef, useState } from 'react';
import LogoCarousel, { type SliderHandle } from '../../common/logo-carousel';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

const partners = [
  { src: '/oem/basf.png', alt: 'BASF' },
  { src: '/oem/iggnita.png', alt: 'Iggnita' },
  { src: '/oem/quaker-houghton.png', alt: 'Quaker Houghton' },
  { src: '/oem/antara.png', alt: 'Antara Groupe' },
  { src: '/oem/clariant.png', alt: 'Clariant' },
  { src: '/oem/dow.png', alt: 'Dow' },
  { src: '/oem/dupont.png', alt: 'DuPont' },
  { src: '/oem/nouryon.png', alt: 'Nouryon' },
  { src: '/oem/roemex.png', alt: 'Roemex' },
  { src: '/oem/tmc.png', alt: 'TMC Transmare Chemie' },
  { src: '/oem/ttsa.png', alt: 'TTSA' },
];

const SLIDES_TO_SHOW = 5;
const total = partners.length;

const Partners: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderRef = useRef<SliderHandle>(null);
  const index = currentSlide % total;

  const current = useMemo(() => {
    const currentValue = index + 1;
    return total - currentValue;
  }, [index]);

  return (
    <div className="mt-8 border-t border-t-border py-16 px-6 md:px-30">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-4 md:gap-0">
        <div className="text-left">
          <div className="font-black text-[15px] tracking-[1.4px] leading-5 text-secondary uppercase">OEM PARTNERS</div>
        </div>
        <div className="flex items-center gap-x-3">
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            aria-label="Previous"
            className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center border border-muted text-accent hover:bg-secondary hover:text-white hover:border-secondary transition-all duration-200 hover:scale-105"
          >
            <ChevronLeftIcon size={18} />
          </button>
          <button
            onClick={() => sliderRef.current?.slickNext()}
            aria-label="Next"
            className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center border border-secondary text-secondary hover:bg-secondary hover:text-white hover:border-secondary transition-all duration-200 hover:scale-105"
          >
            <ChevronRightIcon size={18} />
          </button>
        </div>
      </div>

      <LogoCarousel rtl logos={partners} sliderRef={sliderRef} onSlideChange={setCurrentSlide} slidesToShow={SLIDES_TO_SHOW} />

      <div className="mt-22.25 flex items-center gap-x-4">
        <div className="flex-1 h-0.5 bg-border">
          <div className="h-full bg-secondary transition-all duration-500" style={{ width: `${(current / total) * 100}%` }} />
        </div>
        <span className="text-xs text-accent leading-5 font-medium tabular-nums shrink-0">
          {current.toString().padStart(2, '0')} / {total.toString().padStart(2, '0')}
        </span>
      </div>
    </div>
  );
};

export default Partners;
