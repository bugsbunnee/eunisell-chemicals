import { CheckIcon } from 'lucide-react';
import React from 'react';

const steps = [
  {
    title: 'Food & Beverage',
    description: 'Hygiene solutions, additives, and processing chemicals.',
  },
  {
    title: 'Consumer Goods',
    description: 'Ingredients for personal care, home care, and detergents.',
  },
  {
    title: 'Processing Plants',
    description: 'Industrial grade solvents, surfactants, and catalyst solutions.',
  },
];

const ManufacturingSector: React.FC = () => {
  return (
    <section className="bg-white p-30 text-left">
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
    </section>
  );
};

export default ManufacturingSector;
