import React from 'react';

import { ChartBarIcon, ShieldHalfIcon, TestTubeIcon } from 'lucide-react';

const benefits = [
  {
    Icon: ChartBarIcon,
    title: 'Production Optimization',
    description: 'Maximizing throughput and recovery rates through advanced chemical injection and stimulation strategies designed for specific reservoir conditions.',
  },
  {
    Icon: ShieldHalfIcon,
    title: 'Asset Integrity',
    description: 'Protecting infrastructure from corrosion, scaling, and microbial induced degradation to extend the lifecycle of high-value oilfield assets.',
  },
  {
    Icon: TestTubeIcon,
    title: 'Flow Assurance',
    description: 'Preventing the formation of hydrates, waxes, and asphaltenes that can obstruct pipelines and disrupt critical production streams.',
  },
];

const Optimization: React.FC = () => {
  return (
    <section className="bg-white">
      {/* Mobile */}
      <div className="md:hidden px-6 py-16 flex flex-col gap-8 text-left">
        <div className="flex flex-col gap-3">
          <h2 className="text-[28px] leading-9 text-accent">Optimizing Production. Protecting Assets.</h2>
          <div className="w-16 h-1 bg-secondary" />
        </div>
        <div className="flex flex-col gap-4">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="p-6 border-t-4 border-t-secondary bg-card">
              <div className="w-10 h-10 bg-background rounded-xl shadow-sm mb-4 flex items-center justify-center">
                <benefit.Icon size={18} className="text-secondary" />
              </div>
              <div className="text-[18px] leading-7 text-accent mb-2">{benefit.title}</div>
              <p className="text-card-foreground text-[14px] leading-5">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:block py-16 px-30">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-4xl text-accent">Optimizing Production. Protecting Assets. Improving Reliability.</h2>
          <div className="w-24 h-1 bg-secondary" />
        </div>

        <div className="grid grid-cols-3 gap-8 mt-16">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="p-8 border-t-4 border-t-secondary bg-card text-left">
              <div className="w-12 h-12 bg-background rounded-xl shadow-sm mb-4 flex items-center justify-center">
                <benefit.Icon size={20} className="text-secondary" />
              </div>
              <div className="font-bold text-xl text-accent mb-4">{benefit.title}</div>
              <p className="text-card-foreground text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Optimization;
