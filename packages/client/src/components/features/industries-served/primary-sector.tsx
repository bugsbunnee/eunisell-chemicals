import React from 'react';

const steps = ['Upstream E&P', 'Midstream Transport', 'Offshore Operations', 'FPSO Support', 'Refineries & Petrochemicals'];

const PrimarySector: React.FC = () => {
  return (
    <section className="bg-accent p-30 text-left">
      <div className="max-w-[1560px] w-full grid grid-cols-2 gap-x-24 items-center">
        <div className="space-y-8">
          <div className="text-sm leading-5 uppercase text-secondary mb-4 font-bold tracking-[1.4px]">primary sector</div>
          <h2 className="text-5xl font-bold text-primary-foreground leading-15">Oil & Gas Excellence</h2>

          <p className="text-lg font-normal text-primary-foreground/70 leading-7 mt-8">
            Eunisell is a recognized leader in the Nigerian and African oilfield services sector, providing high-performance chemicals for the entire
            value chain.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {steps.map((step) => (
              <div key={step} className="flex gap-3 items-center">
                <div className="w-2 h-2 bg-secondary" />
                <div className="flex-1 text-base font-normal text-primary-foreground leading-7.5">{step}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[6px] w-full h-full relative">
          <img src="/industries-served/sector.svg" alt="Coach instructing a young player" className="w-full h-full object-cover rounded-[6px]" />

          <div className="absolute bg-secondary p-8 -bottom-10 -left-10">
            <div className="font-bold text-[32px] leading-8 text-white">25+</div>

            <div className="font-normal text-sm leading-6 text-white/80 mt-2 max-w-55">
              Years of Partnership with IOCs and NOCs across the region.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrimarySector;
