import React from 'react';
import { CogIcon, CompassIcon, FactoryIcon } from 'lucide-react';

const cards = [
  {
    Icon: FactoryIcon,
    title: 'Industry Experience',
    description: 'Over 27 years of specialized expertise in chemical distribution and production across West Africa.',
  },
  {
    Icon: CompassIcon,
    title: 'Strategic Direction',
    description: 'Visionary planning focused on high-growth sectors and sustainable industrial performance.',
  },
  {
    Icon: CogIcon,
    title: 'Operational Excellence',
    description: 'Rigorous standards of safety, quality control, and supply chain efficiency across all regions.',
  },
];

const Guide: React.FC = () => {
  return (
    <section className="py-16 px-6 md:py-24 md:px-30 bg-card text-left">
      <div className="flex flex-col md:grid md:grid-cols-2 md:gap-x-24 gap-4">
        <div className="text-accent font-bold text-[28px] md:text-[40px] leading-[35px] md:leading-[50px]">
          Guiding Eunisell with Experience and Insight
        </div>

        <div className="text-[16px] md:text-lg text-card-foreground font-normal leading-[26px] md:leading-[29.3px]">
          Our leadership approach is rooted in technical proficiency and operational rigour, ensuring that every strategic decision enhances value for
          our clients and stakeholders.
        </div>
      </div>

      <div className="mt-8 md:mt-30 flex flex-col md:grid md:grid-cols-3 gap-6 md:gap-8">
        {cards.map((card) => (
          <div className="bg-background border border-sidebar-accent/20 rounded-[2px] p-6 md:p-10 space-y-4 md:space-y-6" key={card.title}>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-secondary/10 flex items-center justify-center">
              <card.Icon size={24} className="text-secondary" />
            </div>
            <div className="text-[20px] md:text-2xl text-accent font-bold leading-[30px] md:leading-9">{card.title}</div>
            <p className="text-sm md:text-base leading-[22px] md:leading-6.5 text-card-foreground">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Guide;
