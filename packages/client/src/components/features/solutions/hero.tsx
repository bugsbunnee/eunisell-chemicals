import React from 'react';

import { Button } from '../../ui/button';

const Hero: React.FC = () => {
  return (
    <section className="px-20 py-37.75 bg-[url(/solutions/solution-hero.svg)] w-screen bg-cover bg-no-repeat relative">
      <div className="absolute z-10 bg-linear-to-r from-accent from-60% to-transparent w-screen h-full top-0 left-0 right-0 bottom-0"></div>
      <div className="relative w-full text-left z-50">
        <div className="flex items-center justify-start mb-6 gap-x-6">
          <div className="h-0.5 w-10 bg-secondary"></div>
          <div className="uppercase text-secondary tracking-[3px] text-xs">Engineering Excellence</div>
        </div>

        <h1 className="leading-[60.2px] max-w-152.25 text-primary-foreground font-extrabold text-[40px]">
          Specialized Chemical Solutions for <span className="text-secondary">Complex</span> Industrial Challenges
        </h1>

        <p className="mt-7.25 max-w-xl text-xl text-primary-foreground/70">
          Delivering specialized industrial chemicals, oilfield chemicals, laboratory services, warehousing and technical expertise that help
          businesses optimize operations, improve efficiency, and maximize performance.
        </p>

        <div className="flex items-center mt-11 gap-x-4">
          <Button className="rounded-xs bg-secondary font-semibold text-base h-13 px-7">Explore Our Portfolios</Button>

          <Button className="rounded-xs bg-transparent border border-primary-foreground/40 font-semibold text-base h-13 px-7">Our Methodology</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
