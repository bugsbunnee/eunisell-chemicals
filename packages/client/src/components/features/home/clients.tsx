import React, { useRef, useState } from 'react';
import LogoCarousel, { type SliderHandle } from '../../common/logo-carousel';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

const clients = [
  { src: '/clients-new/seplat.png', alt: 'Seplat Energy' },
  { src: '/clients-new/heritage.png', alt: 'Heritage Energy' },
  { src: '/clients-new/chorus.png', alt: 'Chorus Energy' },
  { src: '/clients-new/nnpc.png', alt: 'NNPC' },
  { src: '/clients-new/halliburton.png', alt: 'Halliburton' },
  { src: '/clients-new/midwestern.png', alt: 'Midwestern Oil & Gas' },
  { src: '/clients-new/total-energies.png', alt: 'TotalEnergies' },
  { src: '/clients-new/conoil.png', alt: 'Conoil' },
  { src: '/clients-new/chevron.png', alt: 'Chevron' },
  { src: '/clients-new/belemaoil.png', alt: 'Belemaoil' },
  { src: '/clients-new/bc.png', alt: 'BC' },
  { src: '/clients-new/nepn.png', alt: 'Network Exploration & Production' },
  { src: '/clients-new/shell.png', alt: 'Shell' },
  { src: '/clients-new/exxonmobil.png', alt: 'ExxonMobil' },
  { src: '/clients-new/universal.png', alt: 'Universal Energy' },
];

const SLIDES_TO_SHOW = 5;
const total = clients.length;

const Clients: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<SliderHandle>(null);
  const index = currentSlide % total;

  return (
    <div className="pt-16 pb-6 px-6 md:px-30">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-4 md:gap-0">
        <div className="text-left">
          <div className="font-semibold text-[24px] md:text-3xl leading-8 md:leading-9 text-accent mb-4 md:mt-7">Our Global Network</div>
          <div className="font-black text-[15px] tracking-[1.4px] leading-5 text-secondary uppercase">Clients</div>
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

      <LogoCarousel logos={clients} sliderRef={sliderRef} onSlideChange={setCurrentSlide} slidesToShow={SLIDES_TO_SHOW} />

      <div className="mt-22.25 flex items-center gap-x-4">
        <div className="flex-1 h-0.5 bg-border">
          <div className="h-full bg-secondary transition-all duration-500" style={{ width: `${((index + 1) / total) * 100}%` }} />
        </div>
        <span className="text-xs text-accent leading-5 font-medium tabular-nums shrink-0">
          {(index + 1).toString().padStart(2, '0')} / {total.toString().padStart(2, '0')}
        </span>
      </div>
    </div>
  );
};

export default Clients;
