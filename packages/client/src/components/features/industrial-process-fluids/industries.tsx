import React from 'react';
import { FactoryIcon, FlaskConicalIcon, FuelIcon, ZapIcon } from 'lucide-react';
import { Reveal, Stagger, StaggerItem } from '../../common/animate';

const industries = [
  {
    image: '/industrial-process-fluids/automotive.png',
    title: 'Automotive',
  },
  {
    image: '/industrial-process-fluids/food-beverage.png',
    title: 'Food & Beverage',
  },
  {
    image: '/industrial-process-fluids/pharmaceutical.png',
    title: 'Pharmaceutical',
  },
  {
    image: '/industrial-process-fluids/oil-gas.png',
    title: 'Oil & Gas',
  },
];

const sectors = [
  {
    Icon: FuelIcon,
    title: 'Oil & Gas',
  },
  {
    Icon: FlaskConicalIcon,
    title: 'Petrochemical',
  },
  {
    Icon: FactoryIcon,
    title: 'Manufacturing',
  },
  {
    Icon: ZapIcon,
    title: 'Energy',
  },
];

const Industries: React.FC = () => {
  return (
    <section className="px-6 py-16 md:px-30 md:py-30 bg-white">
      {/* Mobile: Industries Served */}
      <div className="md:hidden text-left">
        <Reveal direction="left">
          <h2 className="font-bold text-[24px] leading-8 text-accent">Industries Served</h2>
        </Reveal>

        <Stagger className="grid grid-cols-2 gap-4 mt-8">
          {sectors.map((sector) => (
            <StaggerItem key={sector.title} className="bg-card border border-input rounded-lg px-4 py-[50.75px] flex flex-col items-center justify-center gap-3">
              <sector.Icon size={24} className="text-secondary" />
              <div className="font-bold text-xs leading-4 uppercase tracking-[-0.3px] text-accent text-center">{sector.title}</div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      {/* Desktop: Industries Empowered by Our Chemistry */}
      <div className="hidden md:block">
        <Reveal direction="left" distance={56} className="flex flex-row items-center justify-between gap-4 text-left">
          <h2 className="font-bold text-4xl leading-10 text-accent">Industries Empowered by Our Chemistry</h2>
          <p className="text-base leading-6 text-card-foreground max-w-115 text-left shrink-0">
            Providing world-class technical support across Africa's most demanding industrial sectors.
          </p>
        </Reveal>

        <Stagger className="grid grid-cols-4 gap-8 mt-16 text-left">
          {industries.map((industry) => (
            <StaggerItem key={industry.title} className="group relative h-100 overflow-hidden">
              <img
                src={industry.image}
                alt={industry.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-accent/60 transition-colors duration-500 group-hover:bg-accent/40 flex flex-col justify-end p-10">
                <div className="font-bold text-xl leading-7 text-white uppercase tracking-[1px] transition-transform duration-500 group-hover:-translate-y-2">{industry.title}</div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
};

export default Industries;
