import React from 'react';

import { DiamondIcon } from 'lucide-react';
import { cn } from '../../../lib/utils';

const policies = [
  {
    title: 'Strategic Direction',
    description: 'Aligning resources with high-value energy and manufacturing sectors.',
    className: 'border-secondary',
  },
  {
    title: 'Operational Discipline',
    description: 'Maximizing asset performance through data-driven management.',
    className: 'border-sidebar-accent',
  },
  {
    title: 'Growth Agenda',
    description: 'Expanding our footprint across the Sub-Saharan energy landscape.',
    className: 'border-accent',
  },
];

const Governance: React.FC = () => {
  return (
    <section className="py-24 px-30 bg-background grid grid-cols-2 text-left gap-x-24">
      <div>
        <div className="text-5xl font-bold text-accent leading-15">Strategic Governance for Global Performance</div>

        <p className="text-lg leading-[29.3px] text-card-foreground font-normal mt-8">
          Our management framework is designed to facilitate quick decision- making while maintaining the highest levels of accountability. We believe
          that robust governance is the foundation of industrial trust.
        </p>

        <p className="text-lg leading-[29.3px] text-card-foreground font-normal mt-6">
          Eunisell’s executive team works closely with technical directors to ensure that every investment and operational move aligns with our core
          mission of providing premium chemical solutions that power African industry.
        </p>

        <button className="bg-accent h-13.25 py-4 px-10 text-sm uppercase text-white rounded-[2px] mt-16 font-bold leading-5.25 tracking-[0.7px]">
          Read Annual Governance Report
        </button>
      </div>

      <div className="space-y-6">
        {policies.map((policy) => (
          <div className={cn('p-8 bg-card flex items-center gap-x-8 px-8 rounded-[2px] border-l-4', policy.className)}>
            <DiamondIcon size={30} className="text-accent" />

            <div>
              <div className="text-xl leading-7.5 text-accent font-bold">{policy.title}</div>
              <div className="text-[15px] leading-[22.5px] text-card-foreground font-normal">{policy.description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Governance;
