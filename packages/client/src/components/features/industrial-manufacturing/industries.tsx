import React from 'react';
import IndustriesServed from '../../common/industries-served';

const footnotes = [
  {
    title: '99.8%',
    description: 'On-Time Delivery',
  },
  {
    title: '500+',
    description: 'Industrial Formulations',
  },
  {
    title: '24/7',
    description: 'Technical Support',
  },
  {
    title: 'ISO',
    description: 'Certified Excellence',
  },
];

const Industries: React.FC = () => {
  return (
    <section>
      {/* Desktop: industries image grid */}
      <div className="hidden md:block px-30 py-28 bg-background">
        <div className="flex items-center justify-center">
          <div className="space-y-4">
            <h2 className="font-bold text-4xl leading-10 text-accent text-center capitalize">Industries we empower</h2>
            <div className="w-30 h-1 bg-secondary mx-auto" />
          </div>
        </div>

        <div className="mt-16">
          <IndustriesServed />
        </div>
      </div>

      {/* Stats grid — 2×2 on mobile, 4-col on desktop */}
      <div className="grid grid-cols-2 md:grid-cols-4 bg-card px-6 py-16 md:px-30 md:py-28 gap-8 md:gap-0">
        {footnotes.map((note) => (
          <div key={note.title} className="text-center md:text-left space-y-2 md:space-y-4">
            <div className="font-bold text-[30px] md:text-6xl text-secondary leading-9 md:leading-15">{note.title}</div>
            <div className="font-bold text-[10px] md:text-sm tracking-[1.4px] text-accent uppercase leading-[15px] md:leading-5">{note.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Industries;
