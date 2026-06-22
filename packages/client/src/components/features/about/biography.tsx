import React from 'react';

const Biography: React.FC = () => {
  return (
    <section className="relative bg-background text-left py-32 px-30 items-center grid grid-cols-2 gap-x-16">
      <div>
        <div className="font-bold text-5xl text-accent leading-14.25">A Trusted Chemical Solutions Partner for Industry and Energy</div>

        <p className="text-lg text-primary mt-[31.1px] leading-8">
          Eunisell Chemicals is a leading provider of specialty chemical solutions and technical services across Africa's manufacturing, industrial,
          and energy sectors. For decades, we have partnered with operators to solve complex production and operational challenges.
        </p>

        <p className="text-lg text-primary mt-6 leading-8">
          Our approach combines world-class chemical technologies with deep local market knowledge. We don't just supply products; we engineer
          complete programs that include performance monitoring, laboratory analysis, and on- site technical support to ensure measurable results for
          our clients.
        </p>

        <p className="font-semibold text-lg leading-8 text-secondary mt-6">"Behind every problem is a solution you can trust."</p>
      </div>

      <div className="grid grid-cols-2 gap-x-6">
        <div className="space-y-6">
          <div className="w-full h-100 rounded-xl overflow-hidden">
            <img src="/about/biography-1.svg" alt="Biography 1" className="w-full h-full object-cover" />
          </div>

          <div className="w-full h-60 rounded-xl overflow-hidden">
            <img src="/about/biography-2.svg" alt="Biography 2" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="space-y-6 -mt-12">
          <div className="w-full h-60 rounded-xl overflow-hidden">
            <img src="/about/biography-3.svg" alt="Biography 3" className="w-full h-full object-cover" />
          </div>

          <div className="w-full h-100 rounded-xl overflow-hidden">
            <img src="/about/biography-4.svg" alt="Biography 4" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biography;
