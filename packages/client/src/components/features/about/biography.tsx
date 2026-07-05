import React from 'react';

const Biography: React.FC = () => {
  return (
    <section className="relative bg-background text-left py-20 px-6 md:py-32 md:px-30 flex flex-col md:grid md:grid-cols-2 md:items-center md:gap-x-16">
      <div>
        <div className="font-bold text-[28px] md:text-5xl text-accent leading-[33.6px] md:leading-14.25">
          A Trusted <span className="hidden md:block">Chemical Solutions</span> Partner for Industry and Energy
        </div>

        <p className="text-[16px] md:text-lg text-primary mt-6 md:mt-[31.1px] leading-[27.2px] md:leading-8">
          Eunisell Chemicals is a leading provider of specialty chemical solutions and technical services across Africa's manufacturing, industrial, and energy sectors.
        </p>

        <p className="text-[16px] md:text-lg text-primary mt-4 md:mt-6 leading-[27.2px] md:leading-8">
          Our approach combines world-class chemical technologies with deep local market knowledge. We engineer complete programs that include performance monitoring and on-site
          technical support.
        </p>

        <p className="font-bold italic text-[16px] md:text-lg leading-[27.2px] md:leading-8 text-secondary mt-4 md:mt-6">"Behind every problem is a solution you can trust."</p>
      </div>

      <div className="mt-8 md:mt-0">
        <div className="w-full h-45 md:h-162.25 rounded-lg md:rounded-[15px] overflow-hidden">
          <img src="/about/biography.svg" alt="Biography" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Biography;
