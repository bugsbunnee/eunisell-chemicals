import React from 'react';
import { BuildingIcon, ConstructionIcon, DrillIcon, FactoryIcon, ShipIcon, UtensilsIcon, UtilityPoleIcon, ZapIcon } from 'lucide-react';
import { cn } from '../../../lib/utils';

const industries = [
  {
    Icon: DrillIcon,
    title: 'Oil & Gas',
    description: 'Upstream • Midstream • Offshore • FPSOs • Refineries',
    bg: 'bg-linear-to-br from-[#0D2035] to-[#001018]',
  },
  {
    Icon: FactoryIcon,
    title: 'Manufacturing',
    description: 'Consumer Goods • Processing Plants • Industrial',
    bg: 'bg-linear-to-br from-[#1A3550] to-[#0D2238]',
  },
  {
    Icon: ShipIcon,
    title: 'Marine & Offshore',
    description: 'Offshore Operations • Marine Vessels • FPSO',
    bg: 'bg-linear-to-br from-[#0A1F35] to-[#010D18]',
  },
  {
    Icon: ZapIcon,
    title: 'Utilities',
    description: 'Power Generation • Water Utilities',
    bg: 'bg-linear-to-br from-[#152840] to-[#0A1A28]',
  },
  {
    Icon: BuildingIcon,
    title: 'Infrastructure',
    description: 'Construction • Civil • Industrial Facilities',
    bg: 'bg-linear-to-br from-[#1A3248] to-[#0D1F30]',
  },
  {
    Icon: UtensilsIcon,
    title: 'Food & Beverage',
    description: 'Processing • Quality Control • Hygiene',
    bg: 'bg-linear-to-br from-[#1E3D5C] to-[#0F2030]',
  },
  {
    Icon: ConstructionIcon,
    title: 'Construction',
    description: 'Civil Engineering • Specialty Chemicals',
    bg: 'bg-linear-to-br from-[#152035] to-[#080F1A]',
  },
  {
    Icon: UtilityPoleIcon,
    title: 'Power & Energy',
    description: 'Power Plants • Grid Infrastructure',
    bg: 'bg-linear-to-br from-[#162040] to-[#0A1428]',
  },
];

const CriticalIndustries: React.FC = () => {
  return (
    <section className="bg-accent-bg py-24 px-20">
      <div className="flex flex-col items-center justify-center">
        <div className="text-[15px] font-black text-secondary uppercase tracking-[3px]">our industries</div>
        <h2 className="max-w-213 text-accent font-bold capitalize text-[44px] my-4">Serving Critical Industries Across Africa</h2>
      </div>

      <div className="w-full mt-16 grid grid-cols-4 gap-4">
        {industries.map((industry) => (
          <div key={industry.title} className={cn('p-7 bg-accent text-left rounded-[4px]', industry.bg)}>
            <industry.Icon className="text-primary-foreground/40" size={18} />

            <div className="mt-13.75">
              <div className="text-[17px] text-primary-foreground capitalize font-bold">{industry.title}</div>
              <p className="mt-1.5 text-primary-foreground/50 text-xs">{industry.description}</p>
              <div className="w-8 h-0.5 bg-secondary mt-3"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CriticalIndustries;
