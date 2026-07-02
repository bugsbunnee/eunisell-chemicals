import React from 'react';

const manufacturingImg = '/solution-detail/industry-manufacturing.png';
const utilitiesImg = '/solution-detail/industry-utilities.png';
const infrastructureImg = '/solution-detail/industry-infrastructure.png';
const marineImg = '/solution-detail/industry-marine.png';

const industries = [
  { title: 'Manufacturing', image: manufacturingImg },
  { title: 'Utilities', image: utilitiesImg },
  { title: 'Infrastructure', image: infrastructureImg },
  { title: 'Marine', image: marineImg },
];

const IndustriesServed: React.FC = () => (
  <section className="hidden md:block bg-accent py-24 px-30">
    <div className="flex flex-col gap-16">
      <h2 className="font-bold text-white text-center text-3xl leading-9 uppercase tracking-[3px]">Industries Served</h2>

      <div className="grid grid-cols-4 gap-4">
        {industries.map(({ title, image }) => (
          <div key={title} className="relative h-64 overflow-hidden">
            <div className="absolute inset-0 opacity-60">
              <img src={image} alt={title} className="w-full h-full object-cover" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-accent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="font-bold text-white text-[20px] leading-7">{title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default IndustriesServed;
