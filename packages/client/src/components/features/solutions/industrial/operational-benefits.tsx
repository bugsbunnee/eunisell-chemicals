import React from 'react';
import { TrendingUpIcon, WrenchIcon, FlaskConicalIcon, AwardIcon, type LucideIcon } from 'lucide-react';

const benefits: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: TrendingUpIcon,
    title: 'Improve Process Efficiency',
    description: 'Optimization of chemical usage and reaction times to maximize facility throughput.',
  },
  {
    icon: WrenchIcon,
    title: 'Maintain Equipment Integrity',
    description: 'Proactive maintenance through advanced chemistry to prevent unplanned shutdowns.',
  },
  {
    icon: FlaskConicalIcon,
    title: 'Support Product Quality',
    description: 'Eliminating impurities and stabilizing formulations for superior end-product standards.',
  },
  {
    icon: AwardIcon,
    title: 'Achieve Operational Excellence',
    description: 'Comprehensive technical support that ensures compliance and environmental safety.',
  },
];

const OperationalBenefits: React.FC = () => (
  <section className="bg-accent py-24 px-30">
    <div className="flex flex-col gap-16">
      <h2 className="font-bold text-white text-3xl leading-9 uppercase tracking-[3px] text-center">Key Operational Benefits</h2>

      <div className="grid grid-cols-4 text-left gap-8">
        {benefits.map(({ icon: Icon, title, description }) => (
          <div key={title} className="bg-white/5 border border-white/10 flex flex-col gap-4 p-10">
            <Icon size={36} className="text-secondary" />
            <h5 className="font-bold text-white text-[20px] leading-7">{title}</h5>
            <p className="text-muted text-sm leading-[22.75px]">{description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default OperationalBenefits;
