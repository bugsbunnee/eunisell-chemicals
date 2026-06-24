import React from 'react';
import { reasons } from '../../../lib/data';

const Why: React.FC = () => {
  return (
    <section className="flex flex-col md:grid md:grid-cols-[1fr_2fr] gap-8 md:gap-12 px-6 py-20 md:px-30 md:py-35 bg-accent-bg w-full relative">
      <div className="text-left">
        <div className="font-black text-[10px] md:text-[15px] tracking-[3px] mb-3 md:mb-4 text-secondary uppercase">competitive edge</div>
        <div className="text-[30px] md:text-5xl text-accent font-bold leading-[36px] md:leading-18">Why Partner With Us?</div>
        <p className="mt-4 md:mt-8 text-sm md:text-lg text-muted-foreground leading-[22px] md:leading-normal">
          We offer a unique combination of technical excellence and African market experience, delivering results that matter.
        </p>
      </div>

      <div className="flex flex-col gap-8 md:grid md:grid-cols-2 md:gap-12">
        {reasons.map((reason) => (
          <div key={reason.id} className="flex items-start gap-x-4 md:gap-x-6 text-left">
            <div className="font-black text-[36px] md:text-4xl text-secondary leading-9 md:leading-10 opacity-10 shrink-0">{reason.id}</div>
            <div>
              <div className="text-[16px] md:text-lg font-bold leading-6 md:leading-7">{reason.title}</div>
              <div className="text-[12px] md:text-sm font-normal text-muted-foreground leading-[18px] md:leading-5 mt-1">{reason.description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Why;
