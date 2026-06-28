import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { cn } from '../../../lib/utils';
import { partners, paths } from '../../../lib/data';
import { PartnerCategory } from '../../../lib/entities';

const filters: { id: PartnerCategory; label: string; mobileLabel: string }[] = [
  { id: PartnerCategory.All, label: 'All Partners', mobileLabel: 'All Partners' },
  { id: PartnerCategory.Chemical, label: 'Chemical Manufacturers', mobileLabel: 'Manufacturers' },
  { id: PartnerCategory.Oilfield, label: 'Oilfield Chemical Partners', mobileLabel: 'Oilfield' },
  { id: PartnerCategory.Industrial, label: 'Industrial Solution Partners', mobileLabel: 'Industrial' },
  { id: PartnerCategory.Technical, label: 'Technical & Service Partners', mobileLabel: 'Technical' },
];

const PartnersGrid: React.FC = () => {
  const [active, setActive] = useState<PartnerCategory>(PartnerCategory.All);

  const visible = active === PartnerCategory.All ? partners : partners.filter((p) => p.category === active);

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
            <div key={p.id} className="bg-white border border-border rounded-[1px] shadow-[0px_16px_16px_rgba(0,0,0,0.08)] flex flex-col items-center text-center p-8 pt-8">
              <div className="flex items-center justify-center h-24 mb-5">
                <img src={p.src} alt={p.name} className="max-h-16 max-w-14 object-contain" />
              </div>
              <span className="font-bold text-secondary text-xs uppercase tracking-[1.5px] mb-3">{p.alt}</span>
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
            <div key={p.id} className="bg-white border border-[#e8e8e8] shadow-[0px_2px_2px_rgba(0,0,0,0.05)] flex flex-col items-center text-center p-6">
              <div className="flex items-center justify-center h-16 mb-4">
                <img src={p.src} alt={p.name} className="max-h-10 max-w-10 object-contain" />
              </div>
              <span className="font-bold text-secondary text-[10px] uppercase tracking-[1px] mb-1">{p.alt}</span>
              <h4 className="font-bold text-[18px] text-accent leading-7">{p.name}</h4>
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
