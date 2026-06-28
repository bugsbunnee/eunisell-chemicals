import React from 'react';
import { Button } from '../../../components/ui/button';
import { useNavigate } from 'react-router-dom';
import { paths } from '../../../lib/data';
import { scrollToView } from '../../../lib/utils';

const Hero: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className="relative bg-accent overflow-hidden text-left">
      {/* Background image */}
      <div className="absolute inset-0 opacity-50 md:opacity-40">
        <img src="/industries-served/hero.svg" alt="Industries Served" className="w-full h-full object-cover" />
      </div>

      {/* Mobile: bottom-fade gradient */}
      <div className="md:hidden absolute inset-0 bg-linear-to-t from-accent via-accent/60 to-accent/0" />
      {/* Desktop: side gradient */}
      <div className="hidden md:block absolute inset-0 bg-linear-to-r from-accent via-accent via-30% to-transparent" />

      {/* Mobile layout — content pinned to bottom */}
      <div className="md:hidden relative z-10 h-[560px] flex flex-col justify-end pb-12 px-6 gap-6">
        <h1 className="font-extrabold text-[36px] leading-[39.6px] text-white">Chemical Solutions for Critical Industries</h1>

        <p className="text-[16px] leading-[26px] text-white/80">
          Supporting oil and gas, manufacturing, utilities, and infrastructure across Africa with world-class technical expertise.
        </p>

        <div className="flex flex-col gap-3 pt-2">
          <Button
            onClick={() => navigate(paths.contact)}
            className="w-full h-[54px] bg-secondary text-[12px] leading-4 text-white font-bold rounded-[2px] uppercase tracking-[0.6px]"
          >
            Consult an Expert
          </Button>
          <Button
            onClick={() => scrollToView('sectors')}
            className="w-full h-[54px] bg-transparent border border-white text-[12px] leading-4 text-white font-bold rounded-[2px] uppercase tracking-[0.6px]"
          >
            Explore Sectors
          </Button>
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:block relative z-40 py-26.25 px-30">
        <h1 className="text-[64px] leading-[70.4px] font-extrabold text-primary-foreground max-w-200">Chemical Solutions for Critical Industries Across Africa</h1>

        <p className="font-normal text-xl leading-[32.5px] text-primary-foreground/80 mt-6 max-w-146.25">
          Supporting oil and gas, manufacturing, utilities, infrastructure, construction, marine, and offshore operations with technical expertise and world-class chemical supply
          chains.
        </p>

        <div className="flex items-center justify-start gap-x-4 mt-12">
          <Button onClick={() => navigate(paths.contact)} className="px-8 flex items-center h-13 bg-secondary text-sm leading-6 text-white font-bold rounded-[2px] uppercase">
            consult an expert
          </Button>
          <Button
            onClick={() => navigate(paths.qhse)}
            className="px-8 flex items-center h-13 bg-transparent border border-white text-sm leading-6 text-white font-bold rounded-[2px] uppercase"
          >
            View Safety Record
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
