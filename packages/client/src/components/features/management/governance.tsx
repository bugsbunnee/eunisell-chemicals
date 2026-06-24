import React from 'react';
import { cn } from '../../../lib/utils';

const policies = [
  {
    title: 'Accountability Standards',
    description: 'Structured reporting and oversight frameworks across all departments.',
    className: 'border-secondary',
  },
  {
    title: 'Operational Transparency',
    description: 'Open communication and clear performance benchmarks for stakeholders.',
    className: 'border-sidebar-accent',
  },
];

const Governance: React.FC = () => {
  return (
    <section className="flex flex-col md:grid md:grid-cols-2 md:gap-x-24 py-16 px-6 md:py-24 md:px-30 bg-background text-left gap-8">
      <div>
        <div className="text-[32px] md:text-5xl font-bold text-accent leading-[40px] md:leading-15">Strategic Governance</div>

        <p className="text-[16px] md:text-lg leading-[26px] md:leading-[29.3px] text-card-foreground font-normal mt-6 md:mt-8">
          Our management framework facilitates quick decision-making while maintaining accountability.
        </p>

        <p className="text-[16px] md:text-lg leading-[26px] md:leading-[29.3px] text-card-foreground font-normal mt-4 md:mt-6">
          Eunisell's team ensures every move aligns with our core mission of powering African industry.
        </p>

        <div className="flex flex-col gap-4 mt-8">
          {policies.map((policy) => (
            <div key={policy.title} className={cn('p-5 bg-card flex items-center gap-x-4 rounded-[2px] border-l-4', policy.className)}>
              <div>
                <div className="text-sm md:text-base leading-[21px] md:leading-7.5 text-accent font-semibold">{policy.title}</div>
                <div className="text-[13px] md:text-[15px] leading-[21px] md:leading-[22.5px] text-card-foreground font-normal">
                  {policy.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="bg-accent h-[52px] md:h-13.25 w-full md:w-auto px-10 text-[13px] md:text-sm uppercase text-white rounded-[2px] mt-8 md:mt-10 font-bold leading-[19.5px] md:leading-5.25 tracking-[0.65px] md:tracking-[0.7px]">
          Governance Report
        </button>
      </div>

      {/* Desktop-only right column content */}
      <div className="hidden md:flex flex-col space-y-6">
        <div className="text-5xl font-bold text-accent leading-15">Strategic Governance for Global Performance</div>

        <p className="text-lg leading-[29.3px] text-card-foreground font-normal">
          Our management framework is designed to facilitate quick decision-making while maintaining the highest levels of accountability. We believe
          that robust governance is the foundation of industrial trust.
        </p>

        <p className="text-lg leading-[29.3px] text-card-foreground font-normal">
          Eunisell's executive team works closely with technical directors to ensure that every investment and operational move aligns with our core
          mission.
        </p>
      </div>
    </section>
  );
};

export default Governance;
