import React from 'react';

const steps = [
  {
    number: '01.',
    title: 'Sustainable Sourcing',
    description: 'We partner with suppliers who prioritize low-emission manufacturing and ethical chemical extraction.',
  },
  {
    number: '02.',
    title: 'Spilling Prevention & Control',
    description: 'Equipped with state-of-the-art containment systems at all warehouse and terminal facilities.',
  },
  {
    number: '03.',
    title: 'Waste Circularity',
    description: 'Implementing advanced recycling protocols for chemical packaging and operational byproducts.',
  },
];

const Responsibility: React.FC = () => {
  return (
    <section className="bg-white text-left">
      {/* Mobile layout */}
      <div className="md:hidden px-6 py-16 flex flex-col gap-6">
        <div className="h-[264px] rounded-[6px] overflow-hidden">
          <img src="/qhse/sustainability.svg" alt="Sustainability" className="w-full h-full object-cover" />
        </div>

        <h2 className="font-bold text-[28px] leading-[36px] text-accent">Environmental Responsibility</h2>

        <p className="text-[16px] leading-[26px] text-card-foreground">
          Dedicated to preserving the ecosystems where we operate. We adhere to international laws to minimize footprint.
        </p>

        <div className="flex flex-col gap-8 pt-2">
          {steps.map(({ number, title, description }) => (
            <div key={number} className="flex gap-4 items-start">
              <span className="font-bold text-[20px] leading-6 text-secondary shrink-0 w-10">{number}</span>
              <div className="space-y-1">
                <h5 className="font-bold text-[16px] leading-6 text-accent">{title}</h5>
                <p className="text-[14px] leading-[22.75px] text-card-foreground">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:block p-30">
        <div className="max-w-[1560px] w-full grid grid-cols-2 gap-x-16 items-center">
          <div className="rounded-[6px] w-full h-full relative">
            <img src="/qhse/sustainability.svg" alt="Sustainability" className="w-full h-full object-cover rounded-[6px]" />
          </div>

          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-accent leading-10">Environmental Responsibility</h2>

            <p className="text-lg font-normal text-card-foreground leading-[29.25px]">
              Eunisell Chemicals is dedicated to preserving the ecosystems where we operate. We strictly adhere to local and international
              environmental laws, ensuring our footprints are minimized through innovative chemical technology and operational discipline.
            </p>

            <div className="space-y-8">
              {steps.map(({ number, title, description }) => (
                <div key={number} className="flex gap-4 items-start">
                  <span className="text-3xl font-bold text-secondary leading-9 shrink-0 w-12 text-center">{number}</span>
                  <div className="space-y-1">
                    <h5 className="text-xl font-bold text-accent leading-7.5">{title}</h5>
                    <p className="text-base font-normal text-card-foreground leading-6">{description}</p>
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

export default Responsibility;
