import React, { useState } from 'react';
import BrochureCard from './brochure-card';

import { SearchIcon } from 'lucide-react';
import { cn } from '../../../lib/utils';

import type { Brochure } from './brochure-card';

enum FilterCategory {
  All = 'all',
  Corporate = 'corporate',
  Industrial = 'industrial',
  Oilfield = 'oilfield',
}

const filters: { id: FilterCategory; label: string }[] = [
  { id: FilterCategory.All, label: 'All Brochures' },
  { id: FilterCategory.Corporate, label: 'Corporate Brochures' },
  { id: FilterCategory.Industrial, label: 'Industrial Brochures' },
  { id: FilterCategory.Oilfield, label: 'Oilfield Chemical Brochures' },
];

const brochures: Brochure[] = [
  {
    id: 1,
    category: 'industrial' as FilterCategory,
    badgeLabel: 'Industrial',
    badgeColor: 'bg-secondary',
    image: '/brochures/card-1.jpg',
    title: 'Process Chemicals & Catalysts Catalog',
    description: 'Complete technical data sheets and application guides for our range of industrial process catalysts and additives.',
    fileSize: 'PDF (4.2 MB)',
    updatedAt: 'Updated: Jan 2026',
  },
  {
    id: 2,
    category: 'oilfield' as FilterCategory,
    badgeLabel: 'Oilfield',
    badgeColor: 'bg-accent',
    image: '/brochures/card-2.jpg',
    title: 'Oilfield Chemicals & Solutions',
    description: "Comprehensive guide to Eunisell's upstream and downstream chemical solutions for the energy sector.",
    fileSize: 'PDF (12.8 MB)',
    updatedAt: 'Updated: Dec 2025',
  },
  {
    id: 3,
    category: 'industrial' as FilterCategory,
    badgeLabel: 'Manufacturing',
    badgeColor: 'bg-secondary',
    image: '/brochures/card-3.jpg',
    title: 'Sustainable Manufacturing Additives',
    description: 'Technical specifications for our eco-conscious chemical additives designed for modern manufacturing processes.',
    fileSize: 'PDF (5.1 MB)',
    updatedAt: 'Updated: Feb 2026',
  },
];

const BrochureLibrary: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>(FilterCategory.All);
  const [search, setSearch] = useState('');

  const visible = brochures.filter((b) => {
    const matchesFilter = activeFilter === 'all' || b.category === activeFilter;
    const matchesSearch =
      search.trim() === '' || b.title.toLowerCase().includes(search.toLowerCase()) || b.description.toLowerCase().includes(search.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <React.Fragment>
      <section className="bg-white px-30 py-26.25 flex justify-center">
        <div className="w-full flex flex-col gap-10">
          <div className="flex items-end justify-between">
            <div className="space-y-4 text-left">
              <span className="font-bold text-secondary text-sm uppercase tracking-[1.4px] leading-5">Brochure Library</span>

              <h2 className="font-bold text-4xl text-accent leading-10">Find the Right Brochure for Your Operation</h2>
            </div>

            <div className="relative w-90">
              <SearchIcon size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />

              <input
                type="text"
                placeholder="Search brochures..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-card border border-input rounded-[4px] pl-12 pr-4 py-4.25 text-[15px] text-card-foreground placeholder:text-sidebarforeground focus:outline-none focus:ring-2 focus:ring-secondary/20"
              />
            </div>
          </div>

          <div className="bg-card rounded-md p-2 flex gap-2 w-fit">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={cn({
                  'px-8 py-3 rounded-[4px] text-sm font-medium transition-all': true,
                  'bg-white shadow-sm text-secondary font-semibold': activeFilter === filter.id,
                  'text-accent': activeFilter !== filter.id,
                })}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-card px-30 py-25 flex justify-center">
        <div className="w-full max-w-360 flex flex-col gap-16">
          <div className="grid grid-cols-3 gap-8">
            {visible.map((brochure) => (
              <BrochureCard key={brochure.id} brochure={brochure} />
            ))}

            {visible.length === 0 && (
              <div className="col-span-3 text-center py-20 text-muted-foreground text-sm">No brochures match your search.</div>
            )}
          </div>

          <div className="flex justify-center">
            <button className="border-2 border-accent text-accent font-bold text-base px-12 py-4 rounded-[4px] leading-6">Load More Brochures</button>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default BrochureLibrary;
