import React from 'react';
import { ArrowRightIcon, PlusIcon } from 'lucide-react';
import { Reveal, Stagger, StaggerItem } from '../../../common/animate';

const categories = [
  {
    number: '01',
    title: 'Water Treatment',
    description: 'Boiler water treatment, cooling tower chemistry, and wastewater management solutions designed to prevent scaling, corrosion, and biological fouling.',
  },
  {
    number: '02',
    title: 'Cleaning & Maintenance',
    description: 'Heavy-duty degreasers, specialty solvents, and industrial cleaning agents for the upkeep of machinery and manufacturing surfaces.',
  },
  {
    number: '03',
    title: 'Specialty Industrial Chemicals',
    description: 'Tailored formulations for unique manufacturing processes including catalysts, additives, and high-performance lubricants.',
  },
  {
    number: '04',
    title: 'Supply & Distribution',
    description: 'Strategic chemical logistics and inventory management ensuring the right products arrive on time, every time.',
  },
];

const mobileCategories = [
  {
    number: '01',
    title: 'Water Treatment',
    description: 'Boiler water treatment, cooling tower chemistry, and wastewater management solutions.',
  },
  {
    number: '02',
    title: 'Cleaning & Maintenance',
    description: 'Heavy-duty degreasers and specialty solvents for manufacturing equipment upkeep.',
  },
  {
    number: '03',
    title: 'Specialty Chemicals',
    description: 'Tailored formulations including catalysts, additives, and high-performance lubricants.',
  },
];

const SpecializedCategories: React.FC = () => (
  <React.Fragment>
    {/* Mobile */}
    <section className="md:hidden bg-white px-6 py-16 flex flex-col gap-10 text-left">
      <Reveal direction="left">
        <h3 className="font-bold text-accent text-[24px] leading-8">Specialized Categories</h3>
      </Reveal>

      <Stagger className="flex flex-col gap-10">
        {mobileCategories.map(({ number, title, description }) => (
          <StaggerItem key={number} direction="left" className="border-b border-input pb-6 flex flex-col gap-3.75">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="font-light text-input text-[24px] leading-8">{number}</span>
                <h4 className="font-bold text-accent text-[18px] leading-7">{title}</h4>
              </div>
              <ArrowRightIcon size={14} className="text-secondary shrink-0" />
            </div>
            <p className="text-[#777] text-sm leading-[22.75px]">{description}</p>
          </StaggerItem>
        ))}
      </Stagger>
    </section>

    {/* Desktop */}
    <section className="hidden md:grid grid-cols-[1fr_2fr] min-h-255 text-left">
      <div className="relative shrink-0 overflow-hidden">
        <img src="/solution-detail/lab.png" alt="Chemical research laboratory" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-linear-to-r from-transparent to-white" />
      </div>

      <div className="flex flex-col gap-16 px-20 py-32">
        <Reveal direction="left" distance={56}>
          <h2 className="font-bold text-accent text-3xl leading-10">Specialized Industrial Categories</h2>
        </Reveal>

        <Stagger className="space-y-12 text-left">
          {categories.map(({ number, title, description }) => (
            <StaggerItem key={number} direction="left" distance={48} className="group flex flex-col gap-4">
              <div className="flex items-center justify-between border-b border-border pb-6">
                <div className="flex items-center gap-6">
                  <span className="font-light text-border text-3xl leading-10 tracking-[-1.125px]">{number}</span>
                  <h4 className="font-bold text-accent text-[24px] leading-8">{title}</h4>
                </div>
                <PlusIcon size={16} className="text-secondary shrink-0 transition-transform duration-300 group-hover:rotate-90" />
              </div>
              <p className="text-[#777] text-base leading-6">{description}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  </React.Fragment>
);

export default SpecializedCategories;
