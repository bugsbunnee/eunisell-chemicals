import React from 'react';

const manufacturingImg = 'https://www.figma.com/api/mcp/asset/bab3d3e2-4fd4-4c6c-a736-6c5f934bdf05';
const utilitiesImg = 'https://www.figma.com/api/mcp/asset/cda3bc88-be08-4364-b875-3b08f25212c0';
const infrastructureImg = 'https://www.figma.com/api/mcp/asset/d3769684-6148-48a6-885c-ed6a117418bf';
const marineImg = 'https://www.figma.com/api/mcp/asset/cefdc75e-08ce-426d-afce-53047b7799e5';

const industries = [
  { title: 'Manufacturing', image: manufacturingImg },
  { title: 'Utilities', image: utilitiesImg },
  { title: 'Infrastructure', image: infrastructureImg },
  { title: 'Marine', image: marineImg },
];

const IndustriesServed: React.FC = () => (
  <section className="bg-accent py-24 px-30">
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
