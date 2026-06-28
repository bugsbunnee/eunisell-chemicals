import React, { useEffect, useRef, useState } from 'react';
import ScrollDownButton from '../../common/scroll-down-button';

import { CogIcon, EarthIcon, FlaskConicalIcon, TestTubeIcon } from 'lucide-react';
import { Button } from '../../ui/button';
import { Separator } from '../../ui/separator';
import { AnimatePresence, motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { paths } from '../../../lib/data';

import videoOne from '../../../assets/videos/video-1.mp4';
import videoTwo from '../../../assets/videos/video-2.mp4';

interface MediaItem {
  type: 'video' | 'image';
  src: string;
}

const media: MediaItem[] = [
  { type: 'video', src: videoOne },
  { type: 'video', src: videoTwo },
];

const features = [
  { Icon: FlaskConicalIcon, title: 'Industrial', description: 'Chemical Solutions' },
  { Icon: TestTubeIcon, title: 'Laboratory & Technical', description: 'Services' },
  { Icon: CogIcon, title: 'Chemical Blending', description: '& Supply' },
  { Icon: EarthIcon, title: 'Africa Focused', description: 'Industrial Expertise' },
];

const TRANSITION = {
  duration: 0.8,
  ease: 'easeInOut',
} as const;

const IMAGE_DURATION_MS = 5000;

const Hero: React.FC = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const videoRef = useRef<HTMLVideoElement>(null);

  const goToNextMedia = () => {
    setCurrentIndex((prev) => (prev + 1) % media.length);
  };

  const current = media[currentIndex];

  useEffect(() => {
    if (current.type === 'video') {
      videoRef.current?.play();
      return;
    }

    const timer = setTimeout(goToNextMedia, IMAGE_DURATION_MS);
    return () => clearTimeout(timer);
  }, [currentIndex, current.type]);

  return (
    <section className="relative overflow-hidden min-h-160 flex flex-col justify-end md:block md:min-h-0 px-6 pb-12 md:px-30 md:py-30.75">
      <AnimatePresence>
        {current.type === 'video' ? (
          <motion.video
            key={`video-${currentIndex}`}
            ref={videoRef}
            src={current.src}
            autoPlay
            muted
            playsInline
            onEnded={goToNextMedia}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={TRANSITION}
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />
        ) : (
          <motion.img
            key={`image-${currentIndex}`}
            src={current.src}
            alt=""
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={TRANSITION}
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />
        )}
      </AnimatePresence>

      <div className="absolute inset-0 bg-linear-to-t from-accent/95 via-accent/60 to-accent/10 md:bg-linear-to-r md:from-accent/90 md:via-accent/50 md:to-transparent" />

      <div className="relative z-10 w-full text-left">
        <div className="flex items-center justify-start mb-4 md:mb-6 gap-x-4 md:gap-x-6">
          <div className="h-0.5 w-8 md:w-10 bg-secondary shrink-0"></div>
          <div className="uppercase text-secondary tracking-[3px] text-[10px] md:text-[11px]">AFRICA'S LEADING INDUSTRIAL CHEMICAL SOLUTIONS PROVIDER</div>
        </div>

        <h1 className="leading-[35.2px] md:leading-[75.6px] max-w-full md:max-w-200 text-primary-foreground font-extrabold text-[29px] md:text-[72px]">
          Engineering Chemical Solutions for Industry and Energy
        </h1>

        <div className="hidden md:block text-muted italic text-xl mt-4">"Behind Every Problem is a Solution You Can Trust"</div>

        <p className="mt-4 md:mt-6 max-w-full md:max-w-155 text-primary-foreground/70 text-[16px] md:text-base leading-[25.6px] md:leading-normal">
          Optimizing operations and maximizing performance with specialized chemicals and technical expertise across Africa.
        </p>

        <div className="flex flex-col md:flex-row items-stretch md:items-center mt-6 md:mt-11 gap-3 md:gap-x-4">
          <Button onClick={() => navigate(paths.solutions)} className="rounded-xs bg-secondary font-semibold text-[15px] md:text-base h-11 md:h-13 md:px-7">
            Explore Solutions
          </Button>
          <Button
            onClick={() => navigate(paths.contact)}
            className="rounded-xs bg-transparent border border-primary-foreground/40 font-semibold text-[16px] md:text-base h-11 md:h-13 md:px-7"
          >
            Request Technical Consultation
          </Button>
        </div>

        <Separator className="bg-primary-foreground/10 mt-16 hidden md:block" />

        <div className="hidden md:grid grid-cols-4 gap-x-4 mt-6 items-center">
          {features.map((feature) => (
            <div key={feature.title} className="p-4 bg-primary-foreground/5 border border-primary-foreground/10">
              <div className="flex items-center gap-x-1 text-[10px] tracking-[0.5px] font-bold text-secondary uppercase">
                <span>
                  {feature.title} <span className="font-normal">{feature.description}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-10.75 left-1/2 -translate-x-1/2 z-50 hidden md:block">
        <ScrollDownButton />
      </div>
    </section>
  );
};

export default Hero;
