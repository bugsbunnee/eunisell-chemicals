import React from 'react';

const steps = ['Upstream E&P', 'Midstream Transport', 'Offshore Operations', 'FPSO Support', 'Refineries & Petrochemicals'];
const mobileSteps = ['Upstream E&P Support', 'FPSO Specialty Chemicals', 'Midstream Transport', 'Offshore Operations', 'Refineries & Petrochemicals'];

const PrimarySector: React.FC = () => {
  return (
    <section className="bg-accent text-left">
      {/* Mobile layout */}
      <div className="md:hidden px-6 py-16 flex flex-col gap-4">
        <span className="font-bold text-[10px] uppercase text-secondary tracking-[1px] leading-[15px]">Primary Sector</span>

        <h2 className="font-bold text-[30px] leading-[37.5px] text-white">Oil & Gas Excellence</h2>

        <p className="text-[14px] leading-[22.75px] text-white/70 pt-[6.75px]">
          Recognized leader in African oilfield services, providing high-performance chemicals for the entire value chain.
        </p>

        <div className="flex flex-col gap-4 pt-4">
          {mobileSteps.map((step) => (
            <div key={step} className="flex gap-3 items-center">
              <div className="w-2 h-2 bg-secondary shrink-0" />
              <div className="text-[14px] leading-[20px] text-white">{step}</div>
            </div>
          ))}
        </div>

        <div className="relative mt-4 rounded-[4px] overflow-hidden h-[220px]">
          <img src="/industries-served/sector.svg" alt="Oil & Gas" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-linear-to-t from-accent/80 to-accent/0" />
          <div className="absolute bottom-4 left-4 bg-secondary px-4 py-3">
            <div className="font-bold text-[24px] leading-[24px] text-white">25+</div>
            <div className="text-[12px] leading-[15px] text-white/80 mt-1">Years Partnership</div>
          </div>
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:block p-30">
        <div className="max-w-[1560px] w-full grid grid-cols-2 gap-x-24 items-center">
          <div className="space-y-8">
            <div className="text-sm leading-5 uppercase text-secondary mb-4 font-bold tracking-[1.4px]">primary sector</div>
            <h2 className="text-5xl font-bold text-primary-foreground leading-15">Oil & Gas Excellence</h2>

            <p className="text-lg font-normal text-primary-foreground/70 leading-7 mt-8">
              Eunisell is a recognized leader in the Nigerian and African oilfield services sector, providing high-performance chemicals for the
              entire value chain.
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
      </div>
    </section>
  );
};

export default PrimarySector;
