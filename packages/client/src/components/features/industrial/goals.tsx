import React from 'react';
import { ChartBarIcon, ShieldCheckIcon, SparklesIcon, TrophyIcon } from 'lucide-react';

const benefits = [
  {
    Icon: ChartBarIcon,
    title: 'Improve Process Efficiency',
    description: 'Optimization of chemical usage and reaction times to maximize facility throughput.',
  },
  {
    Icon: ShieldCheckIcon,
    title: 'Maintain Equipment Integrity',
    description: 'Proactive maintenance through advanced chemistry to prevent unplanned shutdowns.',
  },
  {
    Icon: SparklesIcon,
    title: 'Support Product Quality',
    description: 'Eliminating impurities and stabilizing formulations for superior end-product standards.',
  },
  {
    Icon: TrophyIcon,
    title: 'Achieve Operational Excellence',
    description: 'Comprehensive technical support that ensures compliance and environmental safety.',
  },
];

const Goals: React.FC = () => {
  return (
    <section className="px-20 py-28 bg-background">
      <h2 className="text-center font-bold text-[40px] text-accent mb-25">Key Operational Benefits</h2>

      <div className="grid grid-cols-4 gap-8">
        {benefits.map((benefit) => (
          <div key={benefit.title} className="p-10 border border-border rounded-sm text-left">
            <div className="w-9 h-9 mb-5">
              <benefit.Icon size={32} className="text-secondary" />
            </div>
            <div className="font-bold text-[17px] text-accent mb-3">{benefit.title}</div>
            <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Goals;
