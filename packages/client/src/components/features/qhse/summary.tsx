import React from 'react';
import { LeafIcon, ShieldUserIcon, TagsIcon } from 'lucide-react';

const cards = [
  {
    Icon: TagsIcon,
    title: 'Quality Management',
    mobileTitle: 'Quality',
    description: 'Ensuring chemical purity and formulation accuracy through ISO-aligned laboratory standards and rigorous supply chain oversight.',
    mobileDescription: 'Ensuring chemical purity through ISO-aligned laboratory standards and supply chain oversight.',
  },
  {
    Icon: ShieldUserIcon,
    title: 'Health & Safety',
    mobileTitle: 'Health & Safety',
    description: "Prioritizing the physical well-being of our workforce through advanced PPE, automated handling, and a 'Safety First' culture.",
    mobileDescription: 'Prioritizing the physical well-being of our workforce through advanced PPE and safety culture.',
  },
  {
    Icon: LeafIcon,
    title: 'Environmental',
    mobileTitle: 'Environmental',
    description: 'Minimizing our ecological footprint through spill prevention, efficient waste management, and sustainable chemical alternatives.',
    mobileDescription: 'Minimizing ecological footprint through spill prevention and efficient waste management.',
  },
];

const Summary: React.FC = () => {
  return (
    <section className="border-t border-muted/20 text-left">
      {/* Mobile layout */}
      <div className="md:hidden px-6 py-16 flex flex-col gap-6">
        <h2 className="font-bold text-[30px] leading-[37.5px] text-accent">Comprehensive Safe Operations</h2>

        <p className="text-[16px] leading-[26px] text-card-foreground">
          Our integrated QHSE management system meets international standards while addressing the unique challenges of the chemical industry.
        </p>

        <div className="flex flex-col gap-4 pt-4">
          {cards.map((card) => (
            <div key={card.title} className="bg-card border border-border rounded-[2px] p-6 flex flex-col gap-3">
              <card.Icon size={24} className="text-secondary" />
              <div className="font-bold text-[20px] leading-[28px] text-accent">{card.mobileTitle}</div>
              <p className="text-[14px] leading-[22.75px] text-card-foreground">{card.mobileDescription}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:block py-24 px-30">
        <div className="grid grid-cols-2 gap-x-24">
          <div className="text-accent font-bold text-4xl">A Comprehensive System for Safe, Reliable and Responsible Operations</div>
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
      </div>
    </section>
  );
};

export default Summary;
