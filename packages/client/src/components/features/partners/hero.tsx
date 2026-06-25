import React from 'react';

import { ChevronRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { paths } from '../../../lib/data';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-accent overflow-hidden h-[480px] md:h-135 text-left">
      <img src="/partners/hero-bg.jpg" alt="Partners" className="absolute inset-0 w-full h-full object-cover opacity-20 md:opacity-100" />

      <div className="absolute inset-0 bg-accent/50" />

      <div className="relative z-10 h-full flex items-center md:items-start px-6 md:pl-30 md:pt-19.25">
        <div className="w-full md:max-w-225">
          <div className="flex items-center gap-2 md:gap-3 mb-6 md:mb-11 uppercase">
            <Link to={paths.home} className="font-medium text-[12px] md:text-sm text-muted tracking-[1.8px]">
              Home
            </Link>
            <ChevronRightIcon size={8} className="text-muted" />
            <span className="font-medium text-[12px] md:text-sm text-primary-foreground tracking-[1.8px]">Partners</span>
          </div>

          <h1 className="font-bold text-[36px] md:text-[60px] leading-[39.6px] md:leading-16.5 text-white">
            Strategic Partnerships That Strengthen Performance
          </h1>

          <p className="mt-4 md:mt-6 text-[16px] md:text-xl text-white/70 leading-[26px] md:leading-[32.5px] max-w-full md:max-w-2xl">
            Collaborating with global leaders to deliver world-class chemical solutions across Africa.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
