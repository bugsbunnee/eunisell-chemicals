import React from 'react';
import { DiamondIcon } from 'lucide-react';

const levels = [
  { level: 'LEVEL 01', title: 'Foundation Mastery' },
  { level: 'LEVEL 02', title: 'Safety Proficiency' },
  { level: 'LEVEL 03', title: 'Technical Operations' },
  { level: 'LEVEL 04', title: 'Lab Specialization' },
  { level: 'LEVEL 05', title: 'Project Leadership' },
  { level: 'LEVEL 06', title: 'Strategic Analysis' },
  { level: 'LEVEL 07', title: 'Regional Management' },
  { level: 'LEVEL 08', title: 'Global Technical Advisor' },
];

const mobileCards = [
  {
    title: 'Technical Impact',
    description: 'Directly contribute to large-scale industrial solutions that power nations.',
  },
  {
    title: 'Professional Growth',
    description: 'Access continuous learning through world-class development frameworks.',
  },
  {
    title: 'Purposeful Work',
    description: 'Be part of a sustainable future by advancing green chemistry.',
  },
];

const TechnicalFramework: React.FC = () => (
  <section>
    {/* Mobile — "Solving Real Industrial Challenges" */}
    <div className="md:hidden bg-card px-6 py-16 flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-accent text-[28px] leading-10.5">Solving Real Industrial Challenges</h2>
        <p className="text-[#606060] text-[16px] leading-[27.2px]">
          At Eunisell Chemicals, our people are our greatest catalyst for change. We bridge the gap between chemical innovation and industrial performance.
        </p>
      </div>

      <div className="flex flex-col gap-4 text-left">
        {mobileCards.map((card) => (
          <div key={card.title} className="bg-white border-l-4 border-secondary shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-2 p-6">
            <h4 className="font-bold text-accent text-[18px] leading-6.75">{card.title}</h4>
            <p className="text-[#606060] text-[14px] leading-5.25">{card.description}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Desktop — 8-stage framework */}
    <div className="hidden md:block bg-accent py-24 px-30 text-center">
      <div className="max-w-[1776px] mx-auto">
        <div className="flex flex-col items-center mb-18 gap-4">
          <DiamondIcon size={24} className="text-secondary" />
          <h2 className="font-bold text-white text-[40px] leading-15">Technical Development Framework</h2>
          <p className="text-[#afb1b3] text-[16px] leading-6">Our 8-stage framework ensures your skills stay at the cutting edge of industrial chemistry.</p>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {levels.map((l) => (
            <div key={l.level} className="border border-white/20 p-6 flex flex-col gap-2 items-center text-center">
              <span className="font-bold text-secondary text-[12px] leading-4.5 uppercase tracking-wide">{l.level}</span>
              <h5 className="font-bold text-white text-[16px] leading-6">{l.title}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TechnicalFramework;
