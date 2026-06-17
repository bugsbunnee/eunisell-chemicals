import React from 'react';

import { ChartBarIcon, ShieldHalfIcon, TestTubeIcon } from 'lucide-react';

const benefits = [
  {
    Icon: ChartBarIcon,
    title: 'Production Optimization',
    description:
      'Maximizing throughput and recovery rates through advanced chemical injection and stimulation strategies designed for specific reservoir conditions.',
  },
  {
    Icon: ShieldHalfIcon,
    title: 'Asset Integrity',
    description:
      'Protecting infrastructure from corrosion, scaling, and microbial induced degradation to extend the lifecycle of high-value oilfield assets.',
  },
  {
    Icon: TestTubeIcon,
    title: 'Flow Assurance',
    description: 'Preventing the formation of hydrates, waxes, and asphaltenes that can obstruct pipelines and disrupt critical production streams.',
  },
];

const Optimization: React.FC = () => {
  return (
    <section className="py-16 px-45">
      <h2 className="text-4xl  text-accent font-bold">Optimizing Production. Protecting Assets. Improving Reliability.</h2>

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
    </section>
  );
};

export default Optimization;
