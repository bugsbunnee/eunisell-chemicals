import React from 'react';

const industries = [
  {
    title: 'Oil & Gas',
    subtitle: 'Upstream • Midstream • Offshore',
    image: '/about/oil.svg',
  },
  {
    title: 'Manufacturing',
    subtitle: 'Processing Plants • Heavy Industry',
    image: '/about/manufacturing.svg',
  },
  {
    title: 'Power & Infrastructure',
    subtitle: 'Power Plants • Civil Engineering',
    image: '/about/power.svg',
  },
  {
    title: 'Marine & Utilities',
    subtitle: 'Marine Vessels • Water Utilities',
    image: '/about/infra.svg',
  },
];

const Gallery: React.FC = () => {
  return (
    <section className="px-30 py-28 bg-background">
      <div className="text-center mb-14">
        <div className="text-[10px] text-secondary uppercase font-semibold tracking-widest mb-4">sector coverage</div>
        <h2 className="font-bold text-[40px] text-accent">Sectors We Power Across Africa</h2>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {industries.map((industry) => (
          <div key={industry.title} className="relative h-[400px] overflow-hidden rounded-sm">
            <img src={industry.image} alt={industry.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-linear-to-t from-accent/90 via-accent/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="font-bold text-[20px] text-primary-foreground mb-1">{industry.title}</div>
              <div className="text-xs text-primary-foreground/60">{industry.subtitle}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
