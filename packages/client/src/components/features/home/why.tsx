import React from 'react';
import SectionWithTitle from '../../layout/section-with-title';

import { reasons } from '../../../lib/data';

const Why: React.FC = () => {
  return (
    <SectionWithTitle
      legend="Why choose us"
      title="Why Eunisell Chemicals?"
      description="Delivering measurable value through technical excellence, a proven track record, and an unwavering commitment to client success across Africa."
    >
      <div className="mt-10 md:mt-16 flex flex-col gap-6 md:grid md:gap-5 md:grid-cols-4">
        {reasons.map((reason) => (
          <div
            key={reason.title}
            className="rounded-[2px] relative text-left px-6 py-7 md:px-7 md:py-9 border border-t-2 border-secondary overflow-hidden"
          >
            <div className="w-7 h-7 rounded-full border border-secondary flex items-center justify-center">{<reason.Icon size={12} />}</div>

            <div className="absolute text-secondary-foreground font-black text-[80px] right-3.25 top-4">{reason.id}</div>

            <div className="mt-4 font-bold text-[18px] md:text-base text-accent">{reason.title}</div>
            <div className="mt-[7.2px] text-sm md:text-[13px]">{reason.description}</div>
          </div>
        ))}
      </div>
    </SectionWithTitle>
  );
};

export default Why;
