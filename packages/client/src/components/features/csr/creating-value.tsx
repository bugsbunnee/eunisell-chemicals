import React from 'react';
import { Building2Icon, GraduationCapIcon, HeartHandshakeIcon } from 'lucide-react';

const cards = [
  {
    Icon: Building2Icon,
    title: 'Community Development',
    mobileDesc: 'Strengthening local infrastructure and fostering belonging through shared sporting passion.',
    description: 'Strengthening local infrastructure and fostering a sense of belonging through shared sporting passion.',
  },
  {
    Icon: GraduationCapIcon,
    title: 'Youth Empowerment',
    mobileDesc: 'Providing pathways for young talent to excel in professional environments and secure their futures.',
    description: 'Providing pathways for young talent to excel in professional environments and secure their futures.',
  },
  {
    Icon: HeartHandshakeIcon,
    title: 'Positive Social Engagement',
    mobileDesc: 'Promoting healthy lifestyles and discipline as cornerstones of a productive society.',
    description: 'Promoting healthy lifestyles and discipline as cornerstones of a productive society.',
  },
];

const CreatingValue: React.FC = () => {
  return (
    <section className="bg-card text-left">
      {/* Mobile layout */}
      <div className="md:hidden px-6 py-16 flex flex-col gap-6">
        <h2 className="font-bold text-[30px] leading-[37.5px] text-accent">Creating Value Beyond Business</h2>

        <p className="text-[16px] leading-[26px] text-card-foreground">
          At Eunisell Chemicals, our responsibility extends far beyond the industrial solutions we provide. We integrate social, environmental, and
          economic considerations into our operational DNA.
        </p>

        <div className="flex flex-col gap-6 pt-4">
          {cards.map(({ Icon, title, mobileDesc }) => (
            <div
              key={title}
              className="bg-white border border-border drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-4 items-start p-6 rounded-[8px]"
            >
              <div className="bg-secondary/10 flex items-center justify-center rounded-full shrink-0 size-12">
                <Icon size={24} className="text-secondary" />
              </div>
              <div>
                <h4 className="font-bold text-[20px] leading-7 text-accent">{title}</h4>
                <p className="text-[14px] leading-[22.75px] text-card-foreground mt-1">{mobileDesc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:block p-30">
        <div className="max-w-[1560px] w-full grid grid-cols-2 gap-x-30 items-center">
          <div className="space-y-[23.4px]">
            <h2 className="text-5xl font-bold text-accent leading-18">Creating Value Beyond Business</h2>

            <p className="text-lg font-normal text-card-foreground leading-[29.3px]">
              At Eunisell Chemicals, our responsibility extends far beyond the industrial solutions we provide. We view Corporate Social
              Responsibility as a core strategic pillar, integrating social, environmental, and economic considerations into our operational DNA.
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
      </div>
    </section>
  );
};

export default CreatingValue;
