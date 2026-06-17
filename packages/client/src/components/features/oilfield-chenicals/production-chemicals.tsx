import { CheckCircleIcon } from 'lucide-react';
import React from 'react';

const chemicals = ['Demulsifiers', 'Deoilers', 'Corrosion Inhibitors', 'Scale Inhibitors', 'Biocides', 'Oxygen Scavengers'];

const ProductionChemicals: React.FC = () => {
  return (
    <section className="bg-card text-left py-16 px-45 grid grid-cols-2 gap-x-16 items-center">
      <div>
        <h2 className="text-4xl text-accent leading-10 font-bold">Production Chemicals</h2>

        <p className="text-lg text-muted-foreground mt-8">
          Our production chemicals are designed to maximize recovery and ensure efficient separation of oil, water, and gas phases under varied
          operating conditions.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-4">
          {chemicals.map((chemical) => (
            <div key={chemical} className="text-base font-medium leading-6 flex items-center gap-x-2">
              <CheckCircleIcon size={16} className="text-secondary" /> {chemical}
            </div>
          ))}
        </div>
      </div>

      <div className="relative">
        <img src="/oilfield-chemicals/production-chemical.svg" alt="Production Chemical" className="w-160 h-112 object-contain" />

        <div className="absolute -left-6 bottom-6 border-l-[3px] bg-background border-l-secondary p-6 text-left">
          <div className="text-xs font-semibold text-secondary uppercase">impact insight</div>
          <p className="text-sm font-bold mt-0 text-accent max-w-51.75">Improved phase separation by 35% in recent offshore application.</p>
        </div>
      </div>
    </section>
  );
};

export default ProductionChemicals;
