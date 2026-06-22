import React, { useRef, useState } from 'react';
import LogoCarousel, { type SliderHandle } from '../../common/logo-carousel';

import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

const logos = [
  { src: '/clients/check.svg', alt: 'Check' },
  { src: '/clients/exxon.svg', alt: 'Exxon' },
  { src: '/clients/shell.svg', alt: 'Shell' },
  { src: '/clients/energies.svg', alt: 'Total Energies' },
  { src: '/clients/nnpc.svg', alt: 'NNPC' },
  { src: '/clients/haliburton.svg', alt: 'Haliburton' },
];

const SLIDES_TO_SHOW = 5;
const totalBatches = Math.ceil(logos.length / SLIDES_TO_SHOW);

const Clients: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderRef = useRef<SliderHandle>(null);
  const activeBatch = Math.floor(currentSlide / SLIDES_TO_SHOW);

  return (
    <section className="py-16 px-30 border-t border-t-border">
      <div className="flex items-end justify-between mb-12">
        <div className="text-left">
          <div className="font-black text-[15px] tracking-[1.4px] leading-5 text-secondary uppercase">Clients</div>
          <div className="font-semibold text-3xl leading-9 text-accent mt-7">Our Global Network</div>
        </div>

        <div className="flex items-center gap-x-3">
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            aria-label="Previous"
            className="w-12 h-12 rounded-full flex items-center justify-center border border-muted text-accent hover:bg-secondary hover:text-white hover:border-secondary transition-colors duration-200"
          >
            <ChevronLeftIcon size={20} />
          </button>

          <button
            onClick={() => sliderRef.current?.slickNext()}
            aria-label="Next"
            className="w-12 h-12 rounded-full flex items-center justify-center border border-secondary text-secondary hover:bg-secondary hover:text-white hover:border-secondary transition-colors duration-200"
          >
            <ChevronRightIcon size={20} />
          </button>
        </div>
      </div>

      <LogoCarousel logos={logos} sliderRef={sliderRef} onSlideChange={setCurrentSlide} slidesToShow={SLIDES_TO_SHOW} />

      <div className="mt-[89px] flex items-center gap-x-4">
        <div className="flex-1 h-0.5 bg-border">
          <div className="h-full bg-secondary transition-all duration-500" style={{ width: `${((activeBatch + 1) / totalBatches) * 100}%` }} />
        </div>
        <span className="text-xs text-accent leading-5 font-medium tabular-nums shrink-0">
          {(activeBatch + 1).toString().padStart(2, '0')} / {totalBatches.toString().padStart(2, '0')}
        </span>
      </div>
    </section>
  );
};

export default Clients;
