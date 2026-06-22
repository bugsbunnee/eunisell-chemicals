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
    <section className="py-24 px-30 bg-card text-left">
      <div className="grid grid-cols-2 gap-x-24 text-left">
        <div className="text-accent font-bold text-[40px] leading-[50px] text-left">
          Guiding Eunisell with Experience, Discipline and Industry Insight
        </div>

        <div className="text-lg text-card-foreground font-normal leading-[29.3px]">
          Our leadership approach is rooted in technical proficiency and operational rigour, ensuring that every strategic decision enhances value for
          our clients and stakeholders.
        </div>
      </div>

      <div className="mt-30 gap-8 grid grid-cols-3">
        {cards.map((card) => (
          <div className="bg-background border border-sidebar-accent/20 rounded-[2px] p-10 space-y-6" key={card.title}>
            <div className="w-12 h-12 bg-secondary/10 flex items-center justify-center">
              <card.Icon size={30} className="text-secondary" />
            </div>
            <div className="text-2xl text-accent font-bold leading-9">{card.title}</div>
            <p className="text-base leading-6.5 text-card-foreground">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Guide;
