import React, { useMemo } from 'react';
import type { Settings } from 'react-slick';
import { Slider } from './slide';

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
  rtl?: boolean;
  slidesToShow?: number;
  slidesToScroll?: number;
  className?: string;
}

const LogoCarousel: React.FC<LogoCarouselProps> = ({ logos, sliderRef, onSlideChange, rtl = false, speed = 3000, slidesToScroll = 1, slidesToShow = 5, className = '' }) => {
  const settings = useMemo<Settings>(
    () => ({
      infinite: true,
      autoplay: true,
      autoplaySpeed: speed,
      speed: 600,
      slidesToShow,
      rtl,
      slidesToScroll,
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
    [speed, slidesToShow, rtl, slidesToScroll, onSlideChange]
  );

  return (
    <div className={`w-full ${className}`}>
      <Slider ref={sliderRef as React.Ref<unknown>} {...settings}>
        {logos.map((logo) => (
          <div key={logo.alt} className="px-8 outline-none">
            <div className="flex items-center justify-center h-22 rounded-full">
              <img src={logo.src} alt={logo.alt} className="max-h-full max-w-full object-cover opacity-50 rounded-full transition-all duration-300 hover:opacity-100" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LogoCarousel;
