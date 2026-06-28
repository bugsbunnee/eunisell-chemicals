import React from 'react';
import { Button } from '../../ui/button';
import { scrollToView } from '../../../lib/utils';

const Hero: React.FC = () => {
  return (
    <section>
      {/* Mobile */}
      <div className="md:hidden relative bg-accent overflow-hidden flex flex-col justify-start pt-24 px-6 py-16">
        <div className="absolute inset-0 opacity-40">
          <img src="/solutions/solution-hero.svg" alt="" className="w-full h-full object-cover pointer-events-none" />
        </div>
        <div className="absolute inset-0 bg-linear-to-b from-accent via-accent/80 to-accent" />
        <div className="absolute inset-0 overflow-hidden opacity-15 pointer-events-none">
          <div className="absolute -right-20 top-20 size-75 rounded-full border border-secondary/40" />
          <div className="absolute bottom-40 -left-10 size-50 rounded-full border border-secondary/40" />
        </div>

        <div className="relative z-10 flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="h-0.5 w-10 bg-secondary shrink-0" />
            <span className="text-secondary text-[10px] uppercase tracking-[4px]">Engineering Excellence</span>
          </div>

          <h1 className="text-[36px] leading-11 text-white font-extrabold">
            Specialized Chemical Solutions for <span className="text-secondary">Complex</span> Industrial Challenges
          </h1>

          <p className="text-[16px] text-white/70 leading-6.5">
            Transforming operational performance through scientific precision and Africa's most comprehensive chemical portfolio.
          </p>

          <div className="flex flex-col gap-4 pt-2">
            <Button onClick={() => scrollToView('portfolios')} className="w-full h-auto bg-secondary text-white font-bold py-5 rounded-xs text-[16px]">
              Explore Our Portfolios
            </Button>
            <Button onClick={() => scrollToView('how')} className="w-full h-auto bg-white/5 border border-white/30 text-white font-bold py-5 rounded-xs text-[16px]">
              Our Methodology
            </Button>
          </div>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:block px-20 py-37.75 bg-[url(/solutions/solution-hero.svg)] w-screen bg-cover bg-no-repeat relative">
        <div className="absolute z-10 bg-linear-to-r from-accent from-60% to-transparent w-screen h-full top-0 left-0 right-0 bottom-0" />
        <div className="relative w-full text-left z-50">
          <div className="flex items-center justify-start mb-6 gap-x-6">
            <div className="h-0.5 w-10 bg-secondary" />
            <div className="uppercase text-secondary tracking-[3px] text-xs">Engineering Excellence</div>
          </div>

          <h1 className="leading-[60.2px] max-w-152.25 text-primary-foreground font-extrabold text-[40px]">
            Specialized Chemical Solutions for <span className="text-secondary">Complex</span> Industrial Challenges
          </h1>

          <p className="mt-7.25 max-w-xl text-xl text-primary-foreground/70">
            Delivering specialized industrial chemicals, oilfield chemicals, laboratory services, warehousing and technical expertise that help businesses optimize operations,
            improve efficiency, and maximize performance.
          </p>

          <div className="flex items-center mt-11 gap-x-4">
            <Button onClick={() => scrollToView('portfolios')} className="rounded-xs bg-secondary font-semibold text-base h-13 px-7">
              Explore Our Portfolios
            </Button>
            <Button onClick={() => scrollToView('how')} className="rounded-xs bg-transparent border border-primary-foreground/40 font-semibold text-base h-13 px-7">
              Our Methodology
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
