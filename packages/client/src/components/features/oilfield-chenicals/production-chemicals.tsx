import { CheckCircleIcon } from 'lucide-react';
import React from 'react';

const chemicals = ['Demulsifiers', 'Deoilers', 'Corrosion Inhibitors', 'Scale Inhibitors', 'Biocides', 'Oxygen Scavengers'];

const ProductionChemicals: React.FC = () => {
  return (
    <section className="bg-card text-left">
      {/* Mobile */}
      <div className="md:hidden px-6 py-16 flex flex-col gap-6">
        <h2 className="text-[28px] leading-9 text-accent">Production Chemicals</h2>
        <p className="text-[16px] leading-6.5 text-card-foreground">
          Our production chemicals are designed to maximize recovery and ensure efficient separation of oil, water, and gas phases under varied operating conditions.
        </p>
        <div className="grid grid-cols-2 gap-3">
          {chemicals.map((chemical) => (
            <div key={chemical} className="flex items-center gap-2 text-[14px] leading-5 text-accent">
              <CheckCircleIcon size={14} className="text-secondary shrink-0" />
              {chemical}
            </div>
          ))}
        </div>
        <div className="relative mt-2 h-64 rounded-[8px] overflow-hidden">
          <img src="/oilfield-chemicals/production-chemical.svg" alt="Production Chemical" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 right-0 border-l-[3px] bg-background border-l-secondary p-4">
            <div className="text-[10px] text-secondary uppercase tracking-[1px]">Impact Insight</div>
            <p className="text-[13px] text-accent mt-1">Improved phase separation by 35% in recent offshore application.</p>
          </div>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:block py-16 px-45">
        <div className="grid grid-cols-2 gap-x-16 items-center">
          <div>
            <h2 className="text-4xl text-accent leading-10 font-bold">Production Chemicals</h2>

            <p className="text-lg text-muted-foreground mt-8">
              Our production chemicals are designed to maximize recovery and ensure efficient separation of oil, water, and gas phases under varied operating conditions.
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
        </div>
      </div>
    </section>
  );
};

export default ProductionChemicals;
