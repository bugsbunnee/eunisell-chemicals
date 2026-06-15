import React from 'react';
import { BuildingIcon, ConstructionIcon, DrillIcon, FactoryIcon, ShipIcon, UtensilsIcon, UtilityPoleIcon, ZapIcon } from 'lucide-react';

const industries = [
  {
    Icon: DrillIcon,
    title: 'Oil & Gas',
    description: 'Upstream • Midstream • Offshore • FPSOs • Refineries',
  },
  {
    Icon: FactoryIcon,
    title: 'Manufacturing',
    description: 'Consumer Goods • Processing Plants • Industrial',
  },
  {
    Icon: ShipIcon,
    title: 'Marine & Offshore',
    description: 'Offshore Operations • Marine Vessels • FPSO',
  },
  {
    Icon: ZapIcon,
    title: 'Utilities',
    description: 'Power Generation • Water Utilities',
  },
  {
    Icon: BuildingIcon,
    title: 'Infrastructure',
    description: 'Construction • Civil • Industrial Facilities',
  },
  {
    Icon: UtensilsIcon,
    title: 'Food & Beverage',
    description: 'Processing • Quality Control • Hygiene',
  },
  {
    Icon: ConstructionIcon,
    title: 'Construction',
    description: 'Civil Engineering • Specialty Chemicals',
  },
  {
    Icon: UtilityPoleIcon,
    title: 'Power & Energy',
    description: 'Power Plants • Grid Infrastructure',
  },
];

const CriticalIndustries: React.FC = () => {
  return (
    <section className="bg-accent-bg py-24 px-20">
      <div className="flex flex-col items-center justify-center">
        <div className="text-[10px] text-secondary uppercase font-semibold">our industries</div>
        <h2 className="max-w-213 text-accent font-bold capitalize text-[44px] my-4">Serving Critical Industries Across Africa</h2>
      </div>

      <div className="w-full mt-16 grid grid-cols-4 gap-4">
        {industries.map((industry) => (
          <div key={industry.title} className="p-7 bg-accent text-left rounded-lg">
            <industry.Icon className="text-primary-foreground/40" size={18} />

            <div className="mt-13.75">
              <div className="text-[17px] text-primary-foreground capitalize font-bold">{industry.title}</div>
              <p className="mt-1.5 text-primary-foreground/50 text-xs">{industry.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CriticalIndustries;
