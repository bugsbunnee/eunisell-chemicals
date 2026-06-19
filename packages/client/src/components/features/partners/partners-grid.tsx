import React, { useState } from 'react';
import { cn } from '../../../lib/utils';

type PartnerCategory = 'all' | 'chemical' | 'oilfield' | 'industrial' | 'technical';

const filters: { id: PartnerCategory; label: string }[] = [
  { id: 'all', label: 'All Partners' },
  { id: 'chemical', label: 'Chemical Manufacturers' },
  { id: 'oilfield', label: 'Oilfield Chemical Partners' },
  { id: 'industrial', label: 'Industrial Solution Partners' },
  { id: 'technical', label: 'Technical & Service Partners' },
];

const partners = [
  {
    id: 1,
    category: 'technical' as PartnerCategory,
    logo: '/partners/antara-groupe.png',
    categoryLabel: 'Technical Services',
    name: 'Antara Groupe',
    description: 'Expert consultancy and laboratory services for specialized industrial chemical applications.',
  },
  {
    id: 2,
    category: 'chemical' as PartnerCategory,
    logo: '/partners/basf.png',
    categoryLabel: 'Global Manufacturer',
    name: 'BASF',
    description: 'Leading provider of high-performance chemicals for automotive and industrial sectors.',
  },
  {
    id: 3,
    category: 'chemical' as PartnerCategory,
    logo: '/partners/clariant.png',
    categoryLabel: 'Specialty Chemicals',
    name: 'Clariant',
    description: 'Innovating sustainable specialty chemical solutions for energy and resources.',
  },
  {
    id: 4,
    category: 'industrial' as PartnerCategory,
    logo: '/partners/dow.png',
    categoryLabel: 'Industrial Solutions',
    name: 'Dow',
    description: 'Materials science leader providing chemical intermediates and industrial plastics.',
  },
  {
    id: 5,
    category: 'industrial' as PartnerCategory,
    logo: '/partners/dupont.png',
    categoryLabel: 'Technical Materials',
    name: 'DuPont',
    description: 'Specialized technical polymers and protection materials for hazardous environments.',
  },
  {
    id: 6,
    category: 'chemical' as PartnerCategory,
    logo: '/partners/honeywell.png',
    categoryLabel: 'Performance Materials',
    name: 'Honeywell',
    description: 'Advanced materials and process technologies for refining and petrochemical industries.',
  },
  {
    id: 7,
    category: 'chemical' as PartnerCategory,
    logo: '/partners/nouryon.png',
    categoryLabel: 'Specialty Chemicals',
    name: 'Nouryon',
    description: 'Global leader in essential chemistry for paper, plastics, and personal care.',
  },
  {
    id: 8,
    category: 'technical' as PartnerCategory,
    logo: '/partners/quaker-houghton.png',
    categoryLabel: 'Industrial Fluids',
    name: 'Quaker Houghton',
    description: 'Primary provider of industrial process fluids for metals and heavy manufacturing.',
  },
];

const PartnersGrid: React.FC = () => {
  const [active, setActive] = useState<PartnerCategory>('all');

  const visible = active === 'all' ? partners : partners.filter((p) => p.category === active);

  return (
    <React.Fragment>
      <div className="bg-background mt-6 flex justify-center px-30">
        <div className="bg-card border-border border rounded-[1px] p-1 flex gap-2">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActive(f.id)}
              className={cn({
                'px-8 py-3 rounded-[1px] text-sm transition-all whitespace-nowrap': true,
                'bg-secondary shadow-sm text-white font-bold drop-shadow-[0px_2px_2px_rgba(0,0,0,0.05)]': active === f.id,
                'text-card-foreground font-medium': active !== f.id,
              })}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <section className="bg-background px-30 pt-12.5 pb-30.5">
        <div className="grid grid-cols-4 gap-6">
          {visible.map((p) => (
            <div
              key={p.id}
              className="bg-white border border-border rounded-[1px] shadow-[0px_16px_16px_rgba(0,0,0,0.08)] flex flex-col items-center text-center p-8 pt-8"
            >
              <div className="flex items-center justify-center h-24 mb-5">
                <img src={p.logo} alt={p.name} className="max-h-16 max-w-14 object-contain" />
              </div>

              <span className="font-bold text-secondary text-xs uppercase tracking-[1.5px] mb-3">{p.categoryLabel}</span>

              <h4 className="font-bold text-xl text-accent leading-7 mb-3">{p.name}</h4>

              <p className="text-sm text-card-foreground leading-[22.75px]">{p.description}</p>
            </div>
          ))}

          {visible.length === 0 && <div className="col-span-4 text-center py-20 text-muted-foreground text-sm">No partners in this category.</div>}
        </div>
      </section>
    </React.Fragment>
  );
};

export default PartnersGrid;
