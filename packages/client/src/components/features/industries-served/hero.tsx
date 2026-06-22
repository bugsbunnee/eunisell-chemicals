import React from 'react';
import { Button } from '../../../components/ui/button';

const Hero: React.FC = () => {
  return (
    <section className="py-26.25 px-30 bg-accent relative text-left">
      <div>
        <div className="absolute inset-0 opacity-40">
          <img src="/industries-served/hero.svg" alt="" className="w-full h-full object-cover" />
        </div>

        <div className="absolute inset-0 bg-linear-to-r from-accent via-accent via-30% to-transparent" />

        <div className="z-50 relative">
          <h1 className="text-[64px] leading-[70.4px] font-extrabold text-primary-foreground max-w-200">
            Chemical Solutions for Critical Industries Across Africa
          </h1>

          <p className="font-normal text-xl leading-[32.5px] text-primary-foreground/80 mt-6 max-w-146.25">
            Supporting oil and gas, manufacturing, utilities, infrastructure, construction, marine, and offshore operations with technical expertise
            and world-class chemical supply chains.
          </p>

          <div className="flex items-center justify-start gap-x-4 mt-12">
            <Button className="px-8 flex items-center h-13 bg-secondary text-sm leading-6 text-white font-bold rounded-[2px] uppercase">
              consult an expert
            </Button>
            <Button className="px-8 flex items-center h-13 bg-transparent border border-white text-sm leading-6 text-white font-bold rounded-[2px] uppercase">
              View Safety Record
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
