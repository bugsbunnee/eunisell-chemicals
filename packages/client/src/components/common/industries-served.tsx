import type React from 'react';

const images = [
  { src: '/industries-served/oil.svg', title: 'oil & gas' },
  { src: '/industries-served/manufacture.svg', title: 'manufacturing' },
  { src: '/industries-served/utils.svg', title: 'utilities' },
  { src: '/industries-served/infra.svg', title: 'infrastructure' },
  { src: '/industries-served/marine.svg', title: 'marine' },
];

const IndustriesServed: React.FC = () => {
  return (
    <div className="grid grid-cols-5 gap-x-4">
      {images.map((image) => (
        <div key={image.title} className="relative h-125 overflow-hidden">
          <img src={image.src} alt={image.title} className="h-full w-full object-cover" />
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-linear-to-tr from-accent opacity-80 to-accent/0" />
          <div className="space-y-2 absolute left-8 bottom-8 text-left">
            <div className="text-xl capitalize leading-8 text-primary-foreground font-bold">{image.title}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default IndustriesServed;
