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

        <div className="space-y-4">
          {chemicals.map((chemical) => (
            <div key={chemical} className="flex gap-x-3 items-center py-[12.5px] text-sm border-b border-b-border leading-5 text-accent">
              <CheckCircleIcon size={14} className="text-secondary shrink-0" />
              {chemical}
            </div>
          ))}
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:block py-16 px-30">
        <div className="grid grid-cols-[1fr_2fr] gap-x-16 items-start">
          <div className="pt-19.25">
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

          <div className="relative space-y-4.25">
            <div className="grid grid-cols-3 gap-4.25">
              <img src="/oilfield-chemicals/production-chemicals-1.svg" alt="Production Chemical 1" className="w-full aspect-290/450 rounded-[10px] object-cover" />
              <img src="/oilfield-chemicals/production-chemicals-2.svg" alt="Production Chemical 2" className="w-full aspect-290/450 rounded-[10px] object-cover" />
              <img src="/oilfield-chemicals/production-chemicals-3.svg" alt="Production Chemical 3" className="w-full aspect-290/450 rounded-[10px] object-cover" />
            </div>

            <div className="grid grid-cols-2 gap-4.25">
              <div className="w-full aspect-video rounded-[10px] overflow-hidden">
                <img src="/oilfield-chemicals/production-chemicals-4.svg" alt="Production Chemical 4" className="w-full h-full object-cover" />
              </div>

              <div className="w-full aspect-video rounded-[10px] overflow-hidden">
                <img src="/oilfield-chemicals/production-chemicals-5.svg" alt="Production Chemical 5" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductionChemicals;
