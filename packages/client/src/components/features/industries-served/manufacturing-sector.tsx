import { CheckIcon } from 'lucide-react';
import React from 'react';

const steps = [
  {
    title: 'Food & Beverage',
    description: 'Hygiene solutions, additives, and processing chemicals.',
    mobileDesc: 'Hygiene solutions and additives.',
  },
  {
    title: 'Consumer Goods',
    description: 'Ingredients for personal care, home care, and detergents.',
    mobileDesc: 'Ingredients for personal and home care.',
  },
  {
    title: 'Processing Plants',
    description: 'Industrial grade solvents, surfactants, and catalyst solutions.',
    mobileDesc: 'Industrial grade solvents and surfactants.',
  },
];

const ManufacturingSector: React.FC = () => {
  return (
    <section className="bg-white text-left">
      {/* Mobile layout */}
      <div className="md:hidden px-6 py-16 flex flex-col gap-4">
        <span className="font-bold text-[10px] uppercase text-secondary tracking-[1px] leading-[15px]">Manufacturing Sector</span>

        <h2 className="font-bold text-[28px] leading-[35px] text-accent">Consumer & Industrial</h2>

        <p className="text-[14px] leading-[22.75px] text-card-foreground pt-[6.75px]">
          Supplying critical chemical raw materials and technical support to industries powering the African economy.
        </p>

        <div className="flex flex-col gap-6 pt-4">
          {steps.slice(0, 2).map((step) => (
            <div key={step.title} className="flex gap-4 items-start">
              <div className="w-3 h-3.5 shrink-0 mt-1">
                <CheckIcon size={14} className="text-secondary" />
              </div>
              <div>
                <div className="font-bold text-[14px] leading-[20px] text-accent">{step.title}</div>
                <div className="text-[12px] leading-[16px] text-card-foreground">{step.mobileDesc}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="h-[264px] rounded-[4px] overflow-hidden mt-2">
          <img src="/industries-served/manufacturing-sector.svg" alt="Manufacturing Sector" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:block p-30">
        <div className="max-w-[1560px] w-full grid grid-cols-2 items-center">
          <div className="rounded-[4px] w-full h-full relative overflow-hidden">
            <img src="/industries-served/manufacturing-sector.svg" alt="Manufacturing Sector" className="w-full h-full object-cover" />
          </div>

          <div className="space-y-8 p-16.5 bg-background">
            <div>
              <div className="text-sm leading-5 uppercase text-secondary mb-4 font-bold tracking-[1.4px]">manufacturing sector</div>
              <h2 className="text-5xl font-bold text-accent leading-15">Consumer & Industrial Manufacturing</h2>
            </div>

            <p className="text-lg font-normal text-card-foreground leading-8">
              We supply critical chemical raw materials and technical support to the industries that power the African economy, ensuring quality and
              consistency.
            </p>

            <div className="space-y-6">
              {steps.map((step) => (
                <div key={step.title} className="flex gap-4 items-start">
                  <CheckIcon size={24} className="text-secondary" />
                  <div className="flex-1">
                    <h5 className="text-base font-bold text-accent leading-6">{step.title}</h5>
                    <p className="text-base font-normal text-card-foreground leading-6">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManufacturingSector;
