import React, { useMemo } from 'react';
import SliderLib, { type Settings } from 'react-slick';

// react-slick is CJS — Vite wraps it as { default: Slider }, so unwrap at runtime
const Slider = ((SliderLib as unknown as { default: React.ComponentType<Settings & { ref?: React.Ref<unknown> }> }).default ??
  SliderLib) as React.ComponentType<Settings & { ref?: React.Ref<unknown> }>;

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export interface SliderHandle {
  slickPrev: () => void;
  slickNext: () => void;
  slickGoTo: (index: number) => void;
}

interface Logo {
  src: string;
  alt: string;
}

interface LogoCarouselProps {
  logos: Logo[];
  sliderRef?: React.RefObject<SliderHandle | null>;
  onSlideChange?: (index: number) => void;
  speed?: number;
  slidesToShow?: number;
  className?: string;
}

const LogoCarousel: React.FC<LogoCarouselProps> = ({ logos, sliderRef, onSlideChange, speed = 3000, slidesToShow = 5, className = '' }) => {
  const settings = useMemo<Settings>(
    () => ({
      infinite: true,
      autoplay: true,
      autoplaySpeed: speed,
      speed: 600,
      slidesToShow,
      slidesToScroll: slidesToShow,
      arrows: false,
      dots: false,
      pauseOnHover: true,
      afterChange: onSlideChange,
      responsive: [
        { breakpoint: 1280, settings: { slidesToShow: 4, slidesToScroll: 4 } },
        { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3 } },
        { breakpoint: 640, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      ],
    }),
    [speed, slidesToShow, onSlideChange]
  );

  return (
    <div className={`w-full ${className}`}>
      <Slider ref={sliderRef as React.Ref<unknown>} {...settings}>
        {logos.map((logo) => (
          <div key={logo.alt} className="px-8 outline-none">
            <div className="flex items-center justify-center h-16">
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-full max-w-full object-contain opacity-50 transition-all duration-300 hover:opacity-100"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LogoCarousel;
