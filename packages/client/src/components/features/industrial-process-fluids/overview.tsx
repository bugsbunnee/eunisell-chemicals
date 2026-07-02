import React from 'react';
import { GaugeIcon, MicroscopeIcon, ShieldIcon } from 'lucide-react';
import { Reveal, Stagger, StaggerItem } from '../../common/animate';

const pillars = [
  {
    Icon: ShieldIcon,
    title: 'System Reliability',
    description: 'Formulations designed to prevent corrosion, scaling, and microbial degradation in closed and open-loop systems.',
    mobileDescription: 'Formulated to prevent corrosion and scale buildup, extending the lifespan of critical infrastructure.',
    border: 'border-l-secondary',
  },
  {
    Icon: GaugeIcon,
    title: 'Operational Efficiency',
    description: 'Optimized heat transfer coefficients and lubrication properties that reduce energy consumption and friction.',
    mobileDescription: 'Superior heat transfer properties and lubrication that reduce energy consumption and downtime.',
    border: 'border-l-sidebar-primary',
  },
  {
    Icon: MicroscopeIcon,
    title: 'Specialized Applications',
    description: 'Custom chemical solutions tailored for specific industrial processes, from metal forging to sub-zero refrigeration.',
    mobileDescription: 'Custom-engineered fluids designed for extreme pressures and specialized temperature ranges.',
    border: 'border-l-accent md:border-l-primary',
  },
];

const Overview: React.FC = () => {
  return (
    <section className="px-6 py-12 md:px-30 md:py-30 bg-card md:bg-white flex flex-col md:grid md:grid-cols-2 md:gap-x-25 md:items-center">
      <Reveal direction="left" distance={56} className="text-left">
        <div className="md:hidden font-medium text-xs leading-4 uppercase tracking-[2.4px] text-secondary">Excellence in Engineering</div>

        <h2 className="md:hidden font-bold text-[24px] leading-8 text-accent mt-3">Specialized Fluid Solutions for Complex Systems</h2>

        <h2 className="hidden md:block font-bold text-4xl leading-10 text-accent">Optimizing Industrial Performance Through Technical Chemistry</h2>

        <p className="hidden md:block mt-8 text-lg text-card-foreground leading-[29.25px]">
          Our process fluids are more than just consumables—they are critical components of your mechanical and thermal systems. By leveraging advanced chemical engineering, we
          help facilities reduce downtime, extend equipment lifespan, and minimize environmental impact.
        </p>

        <div className="hidden md:block mt-8 h-100 rounded-lg w-full overflow-hidden">
          <img src="/industrial-process-fluids/overview.png" alt="Technical blue liquid in glass laboratory flask" className="w-full h-full object-cover" />
        </div>
      </Reveal>

      <Stagger className="flex flex-col gap-4 md:gap-6 mt-8 md:mt-0">
        {pillars.map((pillar) => (
          <StaggerItem
            key={pillar.title}
            direction="right"
            className={`p-6 md:p-10 border-l-4 ${pillar.border} bg-white md:bg-card rounded-md md:rounded-none shadow-[0px_1px_1px_rgba(0,0,0,0.05)] text-left transition-shadow duration-300 hover:shadow-md`}
          >
            <pillar.Icon size={20} className="md:hidden text-secondary mb-3" />
            <div className="font-bold text-[16px] md:text-xl leading-6 md:leading-7 text-accent mb-2 md:mb-3">{pillar.title}</div>
            <p className="md:hidden text-sm text-[#4a4a4a] leading-5">{pillar.mobileDescription}</p>
            <p className="hidden md:block text-base text-card-foreground leading-6">{pillar.description}</p>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
};

export default Overview;
