import React from 'react';

const industries = [
  {
    title: 'Manufacturing',
    image: '/industrial/industries/steel.svg',
  },
  {
    title: 'Utilities',
    image: '/industrial/industries/power.svg',
  },
  {
    title: 'Infrastructure',
    image: '/industrial/industries/cement.svg',
  },
  {
    title: 'Marine',
    image: '/industrial/industries/pulp.svg',
  },
];

const Industries: React.FC = () => {
  return (
    <section className="px-20 py-28 bg-background">
      <h2 className="font-bold text-[40px] text-accent text-center mb-16">Industries Served</h2>

      <div className="grid grid-cols-4 gap-6">
        {industries.map((industry) => (
          <div key={industry.title} className="relative h-64 overflow-hidden rounded-sm">
            <img src={industry.image} alt={industry.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-linear-to-t from-accent/80 via-accent/30 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <div className="font-bold text-[17px] text-primary-foreground">{industry.title}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Industries;
