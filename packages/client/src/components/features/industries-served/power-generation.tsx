import { DropletIcon, ZapIcon } from 'lucide-react';
import React from 'react';
import { cn } from '../../../lib/utils';

const utilities = [
  {
    Icon: ZapIcon,
    title: 'Power Generation',
    description: 'Turbine cleaners, cooling water treatment, and fuel additives.',
  },
  {
    Icon: DropletIcon,
    title: 'Water Utilities',
    description: 'Flocculants, coagulants, and disinfection chemicals for large-scale municipal use.',
  },
];

const PowerGeneration: React.FC = () => {
  return (
    <section className="bg-card p-30 gap-x-16 items-center text-left grid grid-cols-2">
      <div className="space-y-6">
        <div className="text-[40px] leading-15 text-accent font-bold">Utilities & Power Generation</div>

        <p className="text-base text-card-foreground leading-6 font-normal">
          Supporting the infrastructure that provides essential services to millions. Our chemical programs are designed for reliability and
          environmental compliance.
        </p>

        <div className="grid grid-cols-2 bg-background border border-popover rounded-[4px]">
          {utilities.map((util, index) => (
            <div
              key={util.title}
              className={cn({
                'space-y-2 p-8': true,
                'pr-0': index % 2 === 0,
                'pl-0': index % 2 !== 0,
              })}
            >
              <util.Icon size={34} className="text-secondary" />

              <div className="text-base leading-6 text-accent font-bold">{util.title}</div>

              <div className="text-sm text-card-foreground">{util.description}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="">
        <img src="/industries-served/chart.svg" alt="Bar Chart" />
      </div>
    </section>
  );
};

export default PowerGeneration;
