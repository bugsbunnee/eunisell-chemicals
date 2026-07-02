import React from 'react';
import { CircleCheckIcon, CogIcon, FlaskConicalIcon, ShieldCheckIcon, ThermometerIcon, TruckIcon, UsersIcon } from 'lucide-react';
import { Reveal, Stagger, StaggerItem } from '../../common/animate';

const benefits = [
  {
    Icon: ThermometerIcon,
    title: 'Heat Transfer',
    description: 'Superior thermal stability and conductivity for efficient heating and cooling across extreme temperature ranges.',
  },
  {
    Icon: CogIcon,
    title: 'Metalworking',
    description: 'Advanced lubricants and coolants that improve tool life, surface finish, and machining precision.',
  },
  {
    Icon: ShieldCheckIcon,
    title: 'Protect Systems',
    description: 'Inhibitors that provide multi-metal protection and prevent chemical breakdown of system components.',
  },
  {
    Icon: CircleCheckIcon,
    title: 'Production Quality',
    description: 'Consistent chemical purity ensures predictable process outcomes and high-quality end products.',
  },
];

const reasons = [
  {
    Icon: FlaskConicalIcon,
    title: 'Laboratory Certified',
    description: 'Rigorous testing in our ISO-certified facilities ensures batch consistency and performance.',
  },
  {
    Icon: TruckIcon,
    title: 'Global Logistics',
    description: 'Efficient supply chain management ensuring just-in-time delivery for continuous operations.',
  },
  {
    Icon: UsersIcon,
    title: 'Technical Consultation',
    description: 'Dedicated application engineers to help you select the optimal fluid for your machinery.',
  },
];

const Benefits: React.FC = () => {
  return (
    <section className="px-6 py-16 md:px-30 md:py-25 bg-white md:bg-accent">
      {/* Mobile: Why Eunisell for Process Fluids? */}
      <div className="md:hidden">
        <Reveal>
          <h2 className="font-bold text-[24px] leading-8 text-accent text-center">Why Eunisell for Process Fluids?</h2>
        </Reveal>

        <Stagger className="flex flex-col gap-6 mt-10 text-left">
          {reasons.map((reason) => (
            <StaggerItem key={reason.title} direction="left" className="flex items-start gap-x-4">
              <div className="size-12 rounded-full bg-card flex items-center justify-center shrink-0">
                <reason.Icon size={16} className="text-secondary" />
              </div>
              <div>
                <div className="font-bold text-[16px] leading-6 text-accent">{reason.title}</div>
                <p className="text-sm text-[#4a4a4a] leading-5 mt-1">{reason.description}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      {/* Desktop: Precision Engineered Benefits */}
      <div className="hidden md:block">
        <Reveal className="flex flex-col items-center gap-4">
          <h2 className="font-bold text-4xl leading-10 text-white text-center">Precision Engineered Benefits</h2>
          <div className="bg-secondary h-1 w-20" />
        </Reveal>

        <Stagger className="grid grid-cols-4 gap-8 mt-20 text-left">
          {benefits.map((benefit) => (
            <StaggerItem key={benefit.title} className="group flex flex-col items-start gap-6">
              <div className="size-16 rounded-full bg-secondary/20 border border-secondary/30 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-secondary/30">
                <benefit.Icon size={24} className="text-secondary" />
              </div>
              <div className="font-bold text-xl leading-7 text-white">{benefit.title}</div>
              <p className="text-base text-white/60 leading-6.5">{benefit.description}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
};

export default Benefits;
