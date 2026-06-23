import React from 'react';
import { PlusIcon } from 'lucide-react';

const labImage = 'https://www.figma.com/api/mcp/asset/05d6e330-e6c0-4034-9200-f0f17619ce03';

const categories = [
  {
    number: '01',
    title: 'Water Treatment',
    description:
      'Boiler water treatment, cooling tower chemistry, and wastewater management solutions designed to prevent scaling, corrosion, and biological fouling.',
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

const SpecializedCategories: React.FC = () => (
  <section className="flex min-h-[1020px]">
    <div className="relative w-3xl shrink-0 overflow-hidden">
      <img src={labImage} alt="Chemical research laboratory" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-linear-to-r from-transparent to-white" />
    </div>

    <div className="flex-1 flex flex-col gap-16 px-20 py-32">
      <h2 className="font-bold text-accent text-3xl leading-10">Specialized Industrial Categories</h2>

      <div className="space-y-12 text-left">
        {categories.map(({ number, title, description }) => (
          <div key={number} className="flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-border pb-6">
              <div className="flex items-center gap-6">
                <span className="font-light text-border text-3xl leading-10 tracking-[-1.125px]">{number}</span>
                <h4 className="font-bold text-accent text-[24px] leading-8">{title}</h4>
              </div>
              <PlusIcon size={16} className="text-secondary shrink-0" />
            </div>
            <p className="text-[#777] text-base leading-6">{description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SpecializedCategories;
