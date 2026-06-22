import React from 'react';

const images = [
  {
    src: '/qhse/blending.svg',
    title: 'blending',
    description: 'automated precision',
  },
  {
    src: '/qhse/industrial.svg',
    title: 'warehousing',
    description: 'safe segregation',
  },
  {
    src: '/qhse/laboratory.svg',
    title: 'laboratory',
    description: 'analytical integrity',
  },
  {
    src: '/qhse/poilfield.svg',
    title: 'field support',
    description: 'operational support',
  },
];

const Safety: React.FC = () => {
  return (
    <section className="py-24 px-30 bg-card text-center">
      <div className="text-3xl leading-9 font-bold text-accent">Safety Embedded in Every Operation</div>

      <div className="mt-12 grid grid-cols-4 gap-x-6">
        {images.map((image) => (
          <div key={image.title} className="relative h-87.5 rounded-[2px] overflow-hidden">
            <img src={image.src} alt={image.title} className="h-full w-full object-cover" />

            <div className="absolute top-0 left-0 right-0 bottom-0 bg-linear-to-tr from-accent opacity-80 to-accent/0"></div>

            <div className="space-y-2 absolute left-6 bottom-6 text-left">
              <div className="text-xs uppercase leading-4 text-secondary font-bold">{image.title}</div>
              <div className="text-lg font-bold text-primary-foreground capitalize leading-7">{image.description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Safety;
