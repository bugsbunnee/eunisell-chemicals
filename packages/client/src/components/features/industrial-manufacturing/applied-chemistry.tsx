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

const ImageCard = ({ title, description, image, className = '' }: { title: string; description: string; image: string; className?: string }) => (
  <div className={`rounded-[2px] overflow-hidden relative ${className}`}>
    <img src={image} alt={title} className="w-full h-full object-cover z-10 relative" />
    <div className="absolute inset-0 bg-linear-to-t from-accent/90 to-accent/5 z-50" />
    <div className="absolute z-50 left-4 md:left-8 bottom-4 md:bottom-8 right-4 md:right-8 text-left">
      <div className="font-bold text-[16px] md:text-xl leading-6 md:leading-8 text-white mb-1 md:mb-2">{title}</div>
      <p className="text-[10px] md:text-sm text-white/70 leading-4 md:leading-5">{description}</p>
    </div>
  </div>
);

const AppliedChemistry: React.FC = () => {
  return (
    <section className="px-6 py-16 md:px-30 md:py-28 bg-background">
      <h2 className="font-bold text-[24px] md:text-4xl leading-[30px] md:leading-10 text-accent text-center md:mx-auto">Applied Chemistry</h2>

      {/* Mobile: 2×2 grid (first 4 only) */}
      <div className="md:hidden grid grid-cols-2 gap-4 mt-8">
        {areas.slice(0, 4).map((area) => (
          <ImageCard key={area.title} {...area} className="h-[200px]" />
        ))}
      </div>

      {/* Desktop: 3-col grid (all 9) */}
      <div className="hidden md:grid grid-cols-3 gap-8 mt-16">
        {areas.map((area) => (
          <ImageCard key={area.title} {...area} className="h-100" />
        ))}
      </div>

      {/* Desktop: wide banner at bottom */}
      <div className="hidden md:block rounded-[2px] h-100 mt-8 overflow-hidden relative">
        <img src="/industrial-manufacturing/industrial-chemical.svg" alt="Industrial Chemical" className="w-full h-full object-cover z-10 relative" />
        <div className="absolute top-0 right-0 left-0 bottom-0 bg-linear-to-t from-accent/90 to-accent/5 z-50" />
        <div className="absolute z-50 left-8 bottom-8 right-8 text-left">
          <div className="font-bold text-xl leading-8 text-white mb-2">Industrial Chemical</div>
          <p className="text-sm text-white/70 leading-5">High-performance industry chemicals</p>
        </div>
      </div>
    </section>
  );
};

export default AppliedChemistry;
