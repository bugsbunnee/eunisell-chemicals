import React from 'react';

const imagery = [
  {
    image: '/about/oil.svg',
    label: 'Oil & Gas',
    description: 'Upstream, midstream, and downstream production chemical solutions.',
  },
  {
    image: '/about/manufacturing.svg',
    label: 'Manufacturing',
    description: 'Specialty chemicals for consumer goods and heavy industry processing.',
  },
  {
    image: '/about/power.svg',
    label: 'Power & Energy',
    description: 'Chemical management for grid utilities and renewable energy sites.',
  },
  {
    image: '/about/infra.svg',
    label: 'Infrastructure',
    description: 'Corrosion protection and maintenance solutions for civil infrastructure.',
  },
];

const Imagery: React.FC = () => {
  return (
    <section className="flex flex-col md:grid md:grid-cols-4">
      {imagery.map((image, i) => (
        <div key={image.image} className={`relative overflow-hidden h-[240px] md:h-auto${i === 3 ? ' hidden md:block' : ''}`}>
          <img src={image.image} alt={image.label} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-accent/60"></div>

          <div className="absolute z-50 left-8 md:left-12 bottom-8 md:bottom-28">
            <div className="font-bold text-[20px] md:text-3xl text-primary-foreground">{image.label}</div>
            <div className="text-[12px] text-primary-foreground/70 mt-1 md:hidden max-w-[240px]">{image.description}</div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Imagery;
