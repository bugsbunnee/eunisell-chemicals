import React from 'react';
import { Building2Icon, GraduationCapIcon, HeartHandshakeIcon } from 'lucide-react';

const cards = [
  {
    Icon: Building2Icon,
    title: 'Community Development',
    description: 'Strengthening local infrastructure and fostering a sense of belonging through shared sporting passion.',
  },
  {
    Icon: GraduationCapIcon,
    title: 'Youth Empowerment',
    description: 'Providing pathways for young talent to excel in professional environments and secure their futures.',
  },
  {
    Icon: HeartHandshakeIcon,
    title: 'Positive Social Engagement',
    description: 'Promoting healthy lifestyles and discipline as cornerstones of a productive society.',
  },
];

const CreatingValue: React.FC = () => {
  return (
    <section className="bg-card p-30 text-left">
      <div className="max-w-[1560px] w-full grid grid-cols-2 gap-x-30 items-center">
        <div className="space-y-[23.4px]">
          <h2 className="text-5xl font-bold text-accent leading-18">Creating Value Beyond Business</h2>

          <p className="text-lg font-normal text-card-foreground leading-[29.3px]">
            At Eunisell Chemicals, our responsibility extends far beyond the industrial solutions we provide. We view Corporate Social Responsibility
            as a core strategic pillar, integrating social, environmental, and economic considerations into our operational DNA.
          </p>

          <p className="text-lg font-normal text-card-foreground leading-[29.3px]">
            Our approach is built on the philosophy of shared value—ensuring that as our business grows, so do the communities we serve. Through
            strategic partnerships, we tackle systemic challenges such as unemployment and lack of infrastructure by providing access to world-class
            sporting opportunities.
          </p>
        </div>

        <div className="space-y-6">
          {cards.map(({ Icon, title, description }) => (
            <div key={title} className="bg-white drop-shadow-[0px_2px_2px_rgba(0,0,0,0.05)] flex gap-6 items-start p-8 rounded-[6px]">
              <div className="bg-secondary/10 flex items-center justify-center rounded-full shrink-0 size-16">
                <Icon size={30} className="text-secondary" />
              </div>

              <div className="space-y-2 flex-1">
                <h4 className="text-[xl font-bold text-accent leading-7.5 tracking-[-0.332px]">{title}</h4>

                <p className="text-base font-normal text-card-foreground leading-6">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreatingValue;
