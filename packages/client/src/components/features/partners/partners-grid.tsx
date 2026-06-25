import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../../lib/utils';
import { paths } from '../../../lib/data';

type PartnerCategory = 'all' | 'chemical' | 'oilfield' | 'industrial' | 'technical';

const filters: { id: PartnerCategory; label: string; mobileLabel: string }[] = [
  { id: 'all', label: 'All Partners', mobileLabel: 'All Partners' },
  { id: 'chemical', label: 'Chemical Manufacturers', mobileLabel: 'Manufacturers' },
  { id: 'oilfield', label: 'Oilfield Chemical Partners', mobileLabel: 'Oilfield' },
  { id: 'industrial', label: 'Industrial Solution Partners', mobileLabel: 'Industrial' },
  { id: 'technical', label: 'Technical & Service Partners', mobileLabel: 'Technical' },
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
      {/* Desktop filter bar */}
      <div className="hidden md:flex bg-background mt-6 justify-center px-30">
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

      {/* Mobile filter bar — horizontally scrollable */}
      <div className="md:hidden -mx-0 overflow-x-auto [&::-webkit-scrollbar]:hidden px-6 pt-12">
        <div className="flex gap-2 w-max">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActive(f.id)}
              className={cn({
                'px-6 py-3 rounded-[1px] text-[13px] transition-all whitespace-nowrap shrink-0': true,
                'bg-secondary text-white font-bold shadow-[0px_2px_2px_rgba(0,0,0,0.05)]': active === f.id,
                'bg-card border border-[#e8e8e8] text-card-foreground font-medium': active !== f.id,
              })}
            >
              {f.mobileLabel}
            </button>
          ))}
        </div>
      </div>

      {/* Desktop grid */}
      <section className="hidden md:block bg-background px-30 pt-12.5 pb-30.5">
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

      {/* Mobile grid */}
      <section className="md:hidden bg-background px-6 pt-6 pb-16">
        <div className="flex flex-col gap-4">
          {visible.map((p) => (
            <div
              key={p.id}
              className="bg-white border border-[#e8e8e8] shadow-[0px_2px_2px_rgba(0,0,0,0.05)] flex flex-col items-center text-center p-6"
            >
              <div className="flex items-center justify-center h-16 mb-4">
                <img src={p.logo} alt={p.name} className="max-h-10 max-w-10 object-contain" />
              </div>
              <span className="font-bold text-secondary text-[10px] uppercase tracking-[1px] mb-1">{p.categoryLabel}</span>
              <h4 className="font-bold text-[18px] text-accent leading-[28px]">{p.name}</h4>
            </div>
          ))}

          {visible.length === 0 && <p className="text-center py-12 text-muted-foreground text-sm">No partners in this category.</p>}
        </div>

        <Link
          to={paths.partners}
          className="mt-8 flex items-center justify-center w-full border border-[#e8e8e8] py-4 text-accent text-[14px] uppercase tracking-[1.4px] font-medium"
        >
          View All Partners
        </Link>
      </section>
    </React.Fragment>
  );
};

export default PartnersGrid;
