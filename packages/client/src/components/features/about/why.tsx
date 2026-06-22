import React from 'react';
import { reasons } from '../../../lib/data';

const Why: React.FC = () => {
  return (
    <section className="px-30 py-35 bg-accent-bg w-full grid grid-cols-[1fr_2fr] gap-12 relative">
      <div className="text-left">
        <div className="font-black text-[15px] tracking-[3px] mb-4 text-secondary uppercase">competitive edge</div>
        <div className="text-5xl text-accent font-bold leading-18">Why Partner With Us?</div>
        <p className="mt-8 text-lg text-muted-foreground">
          We offer a unique combination of technical excellence and African market experience, delivering results that matter.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-12">
        {reasons.map((reason) => (
          <div key={reason.id} className="flex items-start gap-x-6 text-left">
            <div className="font-black text-4xl text-secondary leading-10 opacity-10">{reason.id}</div>
            <div>
              <div className="text-lg font-bold leading-7">{reason.title}</div>
              <div className="text-sm font-normal text-muted-foreground leading-5">{reason.description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Why;
