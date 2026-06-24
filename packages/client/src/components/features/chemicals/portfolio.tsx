import React from 'react';
import { CogIcon, DropletsIcon, ActivityIcon } from 'lucide-react';

const features = [
  {
    Icon: CogIcon,
    title: 'Industrial Performance',
    description: 'Enhancing efficiency and output through precision-engineered process fluids and additives.',
  },
  {
    Icon: DropletsIcon,
    title: 'Water & Hygiene Reliability',
    description: 'Critical water treatment and sanitation solutions for institutional and industrial safety.',
  },
  {
    Icon: ActivityIcon,
    title: 'Technical Diagnostics',
    description: 'Insight-driven fluid monitoring to prevent downtime and extend equipment life.',
  },
];

const ChemicalsPortfolio: React.FC = () => {
  return (
    <section className="bg-background p-30 text-left">
      <div className="max-w-360 mx-auto px-8 flex gap-18 items-start">
        <div className="flex-1 flex flex-col gap-8">
          <h2 className="font-bold text-accent text-[48px] leading-tight">
            A Structured Chemical
            <br />
            Portfolio for Critical
            <br />
            Operations
          </h2>

          <div className="h-0.5 w-20 bg-secondary" />

          <p className="text-[#777] text-[18px] leading-relaxed">
            Eunisell provides a comprehensive ecosystem of chemical products designed for reliability in the most demanding environments. Our
            portfolio is categorized to address the specific lifecycle needs of fluids, infrastructure, and operational efficiency across multiple
            industrial sectors.
          </p>
        </div>

        <div className="flex-1 flex flex-col gap-6">
          {features.map(({ Icon, title, description }) => (
            <div key={title} className="bg-card border border-input rounded-[6px] p-6 flex gap-6 items-start">
              <div className="bg-secondary/10 rounded-full w-12 h-12 flex items-center justify-center shrink-0">
                <Icon size={20} className="text-secondary" />
              </div>

              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-accent text-[18px] leading-normal">{title}</h4>
                <p className="text-[#777] text-[16px] leading-normal">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChemicalsPortfolio;
