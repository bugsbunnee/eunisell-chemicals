import React from 'react';

const areas = [
  {
    title: 'Aluminium Can Processing',
    description: 'Can processing',
    image: '/industrial-manufacturing/water-treatment.svg',
  },
  {
    title: 'Food & Beverage',
    description: 'Sanitization and process-specific additives.',
    image: '/industrial-manufacturing/food-and-beverage.svg',
  },
  {
    title: 'Cleaning & Hygiene',
    description: 'Prevention of scale and bio-fouling in HVAC.',
    image: '/industrial-manufacturing/cleaning-and-hygiene.svg',
  },
  {
    title: 'Refining Chemicals',
    description: 'High-performance refining chemicals',
    image: '/industrial-manufacturing/refining-chemicals.svg',
  },
  {
    title: 'Specialized Lubricants',
    description: 'High-performance lubricants',
    image: '/industrial-manufacturing/specialized-lubricants.svg',
  },
  {
    title: 'Construction Chemicals',
    description: 'High-performance construction chemicals for building project',
    image: '/industrial-manufacturing/construction-chemicals.svg',
  },
  {
    title: 'Marine Chemical',
    description: 'High-performance marine chemicals',
    image: '/industrial-manufacturing/marine.svg',
  },
  {
    title: 'Water Treatment Chemicals',
    description: 'High-performance water treatment chemicals',
    image: '/industrial-manufacturing/water.svg',
  },
  {
    title: 'Metal Cleaning Chemicals',
    description: 'High-performance metal cleaning chemicals',
    image: '/industrial-manufacturing/metal-cleaning.svg',
  },
];

const AppliedChemistry: React.FC = () => {
  return (
    <section className="px-30 py-28 bg-background">
      <h2 className="font-bold text-4xl leading-10 text-accent mx-auto">Applied Chemistry</h2>

      <div className="grid grid-cols-3 gap-8 mt-16">
        {areas.map((area) => (
          <div key={area.title} className="rounded-[2px] h-100 overflow-hidden relative">
            <img src={area.image} alt={area.title} className="w-full h-full object-cover z-10 relative" />

            <div className="absolute top-0 right-0 left-0 bottom-0 bg-linear-to-t from-accent/90 to-accent/5 z-50"></div>

            <div className="absolute z-50 left-8 bottom-8 right-8 text-left">
              <div className="font-bold text-xl leading-8 text-white mb-2">{area.title}</div>
              <p className="text-sm text-white/70 leading-5">{area.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-[2px] h-100 mt-8 overflow-hidden relative">
        <img src="/industrial-manufacturing/industrial-chemical.svg" alt="Industrial Chemical" className="w-full h-full object-cover z-10 relative" />

        <div className="absolute top-0 right-0 left-0 bottom-0 bg-linear-to-t from-accent/90 to-accent/5 z-50"></div>

        <div className="absolute z-50 left-8 bottom-8 right-8 text-left">
          <div className="font-bold text-xl leading-8 text-white mb-2">Industrial Chemical</div>
          <p className="text-sm text-white/70 leading-5">High-performance industry chemicals</p>
        </div>
      </div>
    </section>
  );
};

export default AppliedChemistry;
