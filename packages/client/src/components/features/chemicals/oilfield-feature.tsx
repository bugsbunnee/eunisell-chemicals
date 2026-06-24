import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { cn } from '../../../lib/utils';

const categories = [
  { label: 'Production Chemicals', active: true },
  { label: 'Drilling & Completion Fluids', active: false },
  { label: 'Flow Assurance Programs', active: false },
  { label: 'Enhanced Oil Recovery (EOR)', active: false },
];

const ChemicalsOilfieldFeature: React.FC = () => {
  return (
    <section className="bg-accent p-30 text-left">
      <div className="max-w-360 mx-auto px-8 grid grid-cols-2 items-center gap-18">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <span className="text-secondary text-sm font-bold uppercase tracking-[1px]">Oilfield Chemicals</span>

            <h2 className="font-bold text-white text-[48px] leading-tight">
              Maximizing Reservoir
              <br />
              Potential & Asset Integrity
            </h2>
          </div>

          <p className="text-white/60 text-[18px] leading-relaxed">
            From the reservoir to the refinery, our upstream chemical solutions address the critical challenges of scale, corrosion, and emulsion in
            complex oil and gas environments.
          </p>

          <div className="flex flex-col gap-5">
            {categories.map(({ label, active }) => (
              <div
                key={label}
                className={cn({
                  'flex items-center justify-between p-5 border-l-4 border-secondary': true,
                  'bg-white/5': active,
                  'bg-white/5 opacity-70': !active,
                })}
              >
                <span className="font-bold text-white text-[18px]">{label}</span>
                <ArrowRightIcon size={14} className="text-white shrink-0" />
              </div>
            ))}
          </div>
        </div>

        <div className="h-150 rounded-[6px] overflow-hidden border border-white/10 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
          <img src="/oilfield-chemicals/reservoir.svg" alt="Offshore oil platform" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default ChemicalsOilfieldFeature;
