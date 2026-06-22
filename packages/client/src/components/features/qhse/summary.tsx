import React from 'react';
import { LeafIcon, ShieldUserIcon, TagsIcon } from 'lucide-react';

const cards = [
  {
    Icon: TagsIcon,
    title: 'Quality Management',
    description: 'Ensuring chemical purity and formulation accuracy through ISO-aligned laboratory standards and rigorous supply chain oversight.',
  },
  {
    Icon: ShieldUserIcon,
    title: 'Health & Safety',
    description: "Prioritizing the physical well-being of our workforce through advanced PPE, automated handling, and a 'Safety First' culture.",
  },
  {
    Icon: LeafIcon,
    title: 'Environmental',
    description: 'Minimizing our ecological footprint through spill prevention, efficient waste management, and sustainable chemical alternatives.',
  },
];

const Summary: React.FC = () => {
  return (
    <section className="py-24 px-30 border-t border-muted/20 text-left">
      <div className="grid grid-cols-2 gap-x-24 text-left">
        <div className="text-accent font-bold text-4xl text-left">A Comprehensive System for Safe, Reliable and Responsible Operations</div>

        <div className="text-lg text-card-foreground font-normal leading-[29.25px]">
          Our integrated Quality, Health, Safety, and Environmental (QHSE) management system is designed to meet international standards while
          addressing the unique technical challenges of the chemical and energy industries. We focus on continuous improvement and risk mitigation
          across every touchpoint.
        </div>
      </div>

      <div className="mt-30 gap-8 grid grid-cols-3">
        {cards.map((card) => (
          <div className="bg-card border border-border rounded-[2px] p-10 space-y-4" key={card.title}>
            <card.Icon size={30} className="text-secondary" />
            <div className="text-2xl text-accent font-bold leading-8">{card.title}</div>
            <p className="text-base leading-6.5 text-card-foreground">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Summary;
