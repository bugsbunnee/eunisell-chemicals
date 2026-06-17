import React from 'react';

const imagery = [
  {
    image: '/about/oil.svg',
    label: 'Oil & Gas',
  },
  {
    image: '/about/manufacturing.svg',
    label: 'Manufacturing',
  },
  {
    image: '/about/power.svg',
    label: 'Power & Energy',
  },
  {
    image: '/about/infra.svg',
    label: 'Infrastructure',
  },
];

const Imagery: React.FC = () => {
  return (
    <section className="grid grid-cols-4">
      {imagery.map((image) => (
        <div key={image.image} className="relative overflow-hidden">
          <img src={image.image} alt={image.label} className="w-full h-full object-cover" />
          <div className="absolute top-0 right-0 left-0 bottom-0 bg-accent/60"></div>

          <div className="absolute font-bold text-3xl text-primary-foreground z-50 left-12 bottom-28">{image.label}</div>
        </div>
      ))}
    </section>
  );
};

export default Imagery;
