import React from 'react';
import { Reveal, Stagger, StaggerItem } from '../../common/animate';

const areas = [
  {
    image: '/industrial-process-fluids/heat-transfer.png',
    title: 'Heat Transfer',
    description: 'Primary & secondary cooling loops.',
  },
  {
    image: '/industrial-process-fluids/metalworking.png',
    title: 'Metalworking',
    description: 'Precision machining and forming.',
  },
  {
    image: '/industrial-process-fluids/boiler-systems.png',
    title: 'Boiler Systems',
    description: 'Steam generation and condensate.',
  },
  {
    image: '/industrial-process-fluids/cooling-towers.png',
    title: 'Cooling Towers',
    description: 'Open loop thermal management.',
  },
  {
    image: '/industrial-process-fluids/refrigeration.png',
    title: 'Refrigeration',
    description: 'Low temperature process cooling.',
  },
];

const landscapes = [
  {
    image: '/industrial-process-fluids/industrial-refrigeration.png',
    title: 'Industrial Refrigeration',
    description: 'Precision cooling for food processing and storage.',
  },
  {
    image: '/industrial-process-fluids/power-generation.png',
    title: 'Power Generation',
    description: 'High-temp thermal fluids for solar and gas plants.',
  },
];

const ApplicationAreas: React.FC = () => {
  return (
    <section className="px-6 py-16 md:px-30 md:py-30 bg-white">
      {/* Mobile: Application Landscapes */}
      <div className="md:hidden text-left">
        <Reveal direction="left">
          <h2 className="font-bold text-[24px] leading-8 text-accent">Application Landscapes</h2>
        </Reveal>

        <Stagger className="flex flex-col gap-6 mt-8">
          {landscapes.map((landscape) => (
            <StaggerItem key={landscape.title} className="relative h-50 rounded-xl overflow-hidden shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]">
              <img src={landscape.image} alt={landscape.title} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-accent to-transparent p-4">
                <div className="font-bold text-[16px] leading-6 text-white">{landscape.title}</div>
                <p className="text-xs leading-4 text-white/80">{landscape.description}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      {/* Desktop: Application Areas */}
      <div className="hidden md:block">
        <Reveal className="flex flex-col items-center gap-4">
          <h2 className="font-bold text-4xl leading-10 text-accent text-center">Application Areas</h2>
          <p className="text-base leading-6 text-card-foreground text-center">Critical solutions for every stage of your industrial process.</p>
        </Reveal>

        <Stagger stagger={0.08} className="grid grid-cols-5 gap-6 mt-16 text-left">
          {areas.map((area) => (
            <StaggerItem key={area.title} lift className="group bg-white border border-ring rounded-lg p-6 flex flex-col gap-4 transition-shadow duration-300 hover:shadow-xl">
              <div className="h-40 rounded-[4px] bg-[#f9fafb] overflow-hidden mb-2">
                <img src={area.image} alt={area.title} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
              </div>
              <div className="font-bold text-lg leading-7 text-accent">{area.title}</div>
              <p className="text-sm text-card-foreground leading-5">{area.description}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
};

export default ApplicationAreas;
