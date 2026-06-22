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
    <section className="bg-white p-30 text-left">
      <div className="max-w-[1560px] w-full grid grid-cols-2 gap-x-16 items-center">
        <div className="rounded-[6px] w-full h-full relative">
          <img src="/qhse/sustainability.svg" alt="Sustainability" className="w-full h-full object-cover rounded-[6px]" />
        </div>

        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-accent leading-10">Environmental Responsibility</h2>

          <p className="text-lg font-normal text-card-foreground leading-[29.25px]">
            Eunisell Chemicals is dedicated to preserving the ecosystems where we operate. We strictly adhere to local and international environmental
            laws, ensuring our footprints are minimized through innovative chemical technology and operational discipline.
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
    </section>
  );
};

export default Responsibility;
