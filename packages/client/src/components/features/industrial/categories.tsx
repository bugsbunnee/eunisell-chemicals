import React from 'react';
import { ArrowRightIcon } from 'lucide-react';

const categories = [
  {
    id: '01',
    title: 'Water Treatment',
    description:
      'Boiler water treatment, cooling tower chemistry, and wastewater management solutions designed to prevent scaling, corrosion, and biological fouling.',
  },
  {
    id: '02',
    title: 'Cleaning & Maintenance',
    description: 'Heavy-duty degreasers, specialty solvents, and industrial cleaning agents for the upkeep of machinery and manufacturing surfaces.',
  },
  {
    id: '03',
    title: 'Specialty Industrial Chemicals',
    description: 'Tailored formulations for unique manufacturing processes including catalysts, additives, and high-performance lubricants.',
  },
  {
    id: '04',
    title: 'Supply & Distribution',
    description: 'Strategic chemical logistics and inventory management ensuring the right products arrive on time, every time.',
  },
];

const Categories: React.FC = () => {
  return (
    <section className="flex w-full min-h-255">
      <div className="w-3xl shrink-0 overflow-hidden">
        <img src="/industrial/storage.svg" alt="Industrial chemical laboratory" className="w-full h-full object-cover" />
      </div>

      <div className="flex-1 bg-background flex items-center px-20 py-32">
        <div className="w-full text-left">
          <h2 className="font-bold text-[40px] text-accent mb-16">Specialized Industrial Categories</h2>

          <div>
            {categories.map((cat) => (
              <div key={cat.id} className="border-t border-border pt-8 pb-6">
                <div className="flex items-start justify-between gap-x-8">
                  <div className="flex items-start gap-x-8 flex-1">
                    <span className="font-black text-[40px] leading-none text-secondary/30 shrink-0 w-12">{cat.id}</span>
                    <div>
                      <div className="font-bold text-[22px] text-accent mb-3">{cat.title}</div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{cat.description}</p>
                    </div>
                  </div>
                  <ArrowRightIcon size={16} className="text-secondary shrink-0 mt-2" />
                </div>
              </div>
            ))}
            <div className="border-t border-border" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
