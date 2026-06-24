import React from 'react';

const industries = [
  {
    title: 'Steels & Metal',
    image: '/industrial-manufacturing/steel.svg',
  },
  {
    title: 'Cement & Mining',
    image: '/industrial-manufacturing/cement.svg',
  },
  {
    title: 'Pulp & Paper',
    image: '/industrial-manufacturing/pulp.svg',
  },
  {
    title: 'Power Generation',
    image: '/industrial-manufacturing/power.svg',
  },
];

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
        <div className="grid grid-cols-4 mt-16">
          {industries.map((industry) => (
            <div key={industry.title} className="relative h-64 overflow-hidden">
              <img src={industry.image} alt={industry.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-accent/80 via-accent/30 to-transparent" />
              <div className="absolute bottom-12 left-12">
                <div className="font-bold text-lg leading-8 text-accent">{industry.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats grid — 2×2 on mobile, 4-col on desktop */}
      <div className="grid grid-cols-2 md:grid-cols-4 bg-card px-6 py-16 md:px-30 md:py-28 gap-8 md:gap-0">
        {footnotes.map((note) => (
          <div key={note.title} className="text-center md:text-left space-y-2 md:space-y-4">
            <div className="font-bold text-[30px] md:text-6xl text-secondary leading-9 md:leading-15">{note.title}</div>
            <div className="font-bold text-[10px] md:text-sm tracking-[1.4px] text-accent uppercase leading-[15px] md:leading-5">
              {note.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Industries;
