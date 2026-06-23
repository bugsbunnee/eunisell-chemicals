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

const TechnicalFramework: React.FC = () => (
  <section className="bg-accent py-24 px-30 text-center">
    <div className="max-w-[1776px] mx-auto">
      {/* Heading */}
      <div className="flex flex-col items-center mb-[72px] gap-4">
        <DiamondIcon size={24} className="text-secondary" />
        <h2 className="font-bold text-white text-[40px] leading-[60px]">Technical Development Framework</h2>
        <p className="text-[#afb1b3] text-[16px] leading-[24px]">
          Our 8-stage framework ensures your skills stay at the cutting edge of industrial chemistry.
        </p>
      </div>

      {/* 4-col grid, 2 rows */}
      <div className="grid grid-cols-4 gap-4">
        {levels.map((l) => (
          <div key={l.level} className="border border-white/20 p-6 flex flex-col gap-2 items-center text-center">
            <span className="font-bold text-secondary text-[12px] leading-[18px] uppercase tracking-wide">{l.level}</span>
            <h5 className="font-bold text-white text-[16px] leading-[24px]">{l.title}</h5>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TechnicalFramework;
