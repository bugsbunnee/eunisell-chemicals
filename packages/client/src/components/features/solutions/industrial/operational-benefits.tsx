import React from 'react';
import { TrendingUpIcon, WrenchIcon, FlaskConicalIcon, AwardIcon, type LucideIcon } from 'lucide-react';
import { Reveal, Stagger, StaggerItem } from '../../../common/animate';

const benefits: { icon: LucideIcon; title: string; description: string; mobileDescription?: string; desktopOnly?: boolean }[] = [
  {
    icon: TrendingUpIcon,
    title: 'Improve Process Efficiency',
    description: 'Optimization of chemical usage and reaction times to maximize facility throughput.',
    mobileDescription: 'Optimization of chemical usage and reaction times.',
  },
  {
    icon: WrenchIcon,
    title: 'Maintain Equipment Integrity',
    description: 'Proactive maintenance through advanced chemistry to prevent unplanned shutdowns.',
    mobileDescription: 'Proactive maintenance to prevent unplanned shutdowns.',
  },
  {
    icon: FlaskConicalIcon,
    title: 'Support Product Quality',
    description: 'Eliminating impurities and stabilizing formulations for superior end-product standards.',
    mobileDescription: 'Eliminating impurities and stabilizing formulations.',
  },
  {
    icon: AwardIcon,
    title: 'Achieve Operational Excellence',
    description: 'Comprehensive technical support that ensures compliance and environmental safety.',
    desktopOnly: true,
  },
];

const OperationalBenefits: React.FC = () => (
  <section className="bg-accent py-16 px-6 md:py-24 md:px-30">
    <div className="flex flex-col gap-10 md:gap-16">
      <Reveal>
        <h2 className="font-bold text-white text-[20px] md:text-3xl leading-7 md:leading-9 uppercase tracking-[2px] md:tracking-[3px] text-center">Key Operational Benefits</h2>
      </Reveal>

      <Stagger className="grid grid-cols-1 md:grid-cols-4 text-center md:text-left gap-4 md:gap-8">
        {benefits.map(({ icon: Icon, title, description, mobileDescription, desktopOnly }) => (
          <StaggerItem
            key={title}
            lift
            className={`bg-white/5 border border-white/10 flex-col items-center md:items-start gap-4 p-8 md:p-10 transition-colors duration-300 hover:bg-white/10 ${desktopOnly ? 'hidden md:flex' : 'flex'}`}
          >
            <Icon size={30} className="text-secondary md:hidden" />
            <Icon size={36} className="text-secondary hidden md:block" />
            <h5 className="font-bold text-white text-[18px] md:text-[20px] leading-7">{title}</h5>
            <p className="text-muted text-sm leading-[22.75px] md:hidden">{mobileDescription ?? description}</p>
            <p className="text-muted text-sm leading-[22.75px] hidden md:block">{description}</p>
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  </section>
);

export default OperationalBenefits;
