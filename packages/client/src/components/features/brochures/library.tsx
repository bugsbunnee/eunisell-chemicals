import React, { useState } from 'react';
import BrochureCard from './brochure-card';

import { SearchIcon } from 'lucide-react';
import { cn } from '../../../lib/utils';
import { Reveal, Stagger, StaggerItem } from '../../common/animate';

import type { Brochure } from './brochure-card';

enum FilterCategory {
  All = 'all',
  Corporate = 'corporate',
  Industrial = 'industrial',
  Oilfield = 'oilfield',
  Production = 'production',
}

const filters: { id: FilterCategory; label: string; shortLabel: string }[] = [
  { id: FilterCategory.All, label: 'All Brochures', shortLabel: 'All' },
  { id: FilterCategory.Corporate, label: 'Corporate Profile', shortLabel: 'Corporate' },
  { id: FilterCategory.Industrial, label: 'Industrial Chemical Brochure', shortLabel: 'Industrial' },
  { id: FilterCategory.Oilfield, label: 'Oilfield Chemical Brochure', shortLabel: 'Oilfield' },
  { id: FilterCategory.Production, label: 'Production Chemical Brochures', shortLabel: 'Production' },
];

const brochures: Brochure[] = [
  {
    id: 1,
    category: 'corporate' as FilterCategory,
    badgeLabel: 'Industrial',
    badgeColor: 'bg-secondary',
    image: '/brochures/covers/corporate-profile.jpg',
    title: 'Corporate Profile',
    description: "An overview of Eunisell's businesses, capabilities, and track record across Africa's energy and industrial sectors.",
    file: '/brochures/files/process-chemicals-catalysts-catalog.pdf',
    fileSize: 'PDF (4.2 MB)',
    updatedAt: 'Updated: Jan 2026',
  },
  {
    id: 2,
    category: 'oilfield' as FilterCategory,
    badgeLabel: 'Industrial',
    badgeColor: 'bg-secondary',
    image: '/brochures/covers/oilfield-chemical-services.jpg',
    title: 'Oil Field Chemical & Services',
    description: "Comprehensive guide to Eunisell's upstream and downstream chemical solutions for the energy sector.",
    file: '/brochures/files/oilfield-chemicals-solutions.pdf',
    fileSize: 'PDF (4.2 MB)',
    updatedAt: 'Updated: Jan 2026',
  },
  {
    id: 3,
    category: 'industrial' as FilterCategory,
    badgeLabel: 'Industrial',
    badgeColor: 'bg-secondary',
    image: '/brochures/covers/food-beverage.jpg',
    title: 'Food & Beverage Chemical Solutions',
    description: 'Specialty chemicals and hygiene solutions engineered for food and beverage processing operations.',
    file: '/brochures/files/process-chemicals-catalysts-catalog.pdf',
    fileSize: 'PDF (4.2 MB)',
    updatedAt: 'Updated: Jan 2026',
  },
  {
    id: 4,
    category: 'production' as FilterCategory,
    badgeLabel: 'Industrial',
    badgeColor: 'bg-secondary',
    image: '/brochures/covers/water-process-solutions.jpg',
    title: 'Advanced Water & Process Solutions for Oil & Gas Operations',
    description: 'Water treatment and process chemistry for produced water, injection systems, and field operations.',
    file: '/brochures/files/oilfield-chemicals-solutions.pdf',
    fileSize: 'PDF (4.2 MB)',
    updatedAt: 'Updated: Jan 2026',
  },
  {
    id: 5,
    category: 'industrial' as FilterCategory,
    badgeLabel: 'Industrial',
    badgeColor: 'bg-secondary',
    image: '/brochures/covers/building-construction.jpg',
    title: 'Building & Construction Solutions',
    description: 'Construction chemicals and admixtures supporting durable, efficient building projects.',
    file: '/brochures/files/sustainable-manufacturing-additives.pdf',
    fileSize: 'PDF (4.2 MB)',
    updatedAt: 'Updated: Jan 2026',
  },
  {
    id: 6,
    category: 'industrial' as FilterCategory,
    badgeLabel: 'Industrial',
    badgeColor: 'bg-secondary',
    image: '/brochures/covers/aluminium-can.png',
    title: 'Aluminium Can Processing Solutions',
    description: 'Metal cleaning and surface treatment chemistry for aluminium can manufacturing lines.',
    file: '/brochures/files/sustainable-manufacturing-additives.pdf',
    fileSize: 'PDF (4.2 MB)',
    updatedAt: 'Updated: Jan 2026',
  },
];

const PER_PAGE = 6;

const BrochureLibrary: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>(FilterCategory.All);
  const [search, setSearch] = useState('');
  const [visibleCount, setVisibleCount] = useState(PER_PAGE);

  const matching = brochures.filter((b) => {
    const matchesFilter = activeFilter === 'all' || b.category === activeFilter;
    const matchesSearch = search.trim() === '' || b.title.toLowerCase().includes(search.toLowerCase()) || b.description.toLowerCase().includes(search.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  const visible = matching.slice(0, visibleCount);

  const selectFilter = (filter: FilterCategory) => {
    setActiveFilter(filter);
    setVisibleCount(PER_PAGE);
  };

  return (
    <React.Fragment>
      <section className="bg-white px-6 py-10 md:px-30 md:py-26.25 md:pb-7.75 flex justify-center">
        <Reveal direction="left" distance={56} className="w-full flex flex-col gap-6 md:gap-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div className="space-y-3 md:space-y-4 text-left md:max-w-[50%]">
              <span className="font-bold text-secondary text-xs md:text-sm uppercase tracking-[1.2px] md:tracking-[1.4px] leading-[18px] md:leading-5">Brochure Library</span>
              <h2 className="font-bold text-2xl md:text-4xl text-accent leading-8 md:leading-10 md:max-w-186 md:whitespace-nowrap">
                <span className="md:hidden">Find Resources</span>
                <span className="hidden md:inline">Find the Right Brochure for Your Operation</span>
              </h2>
            </div>

            <div className="relative w-full md:w-90">
              <SearchIcon size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search brochures..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setVisibleCount(PER_PAGE);
                }}
                className="w-full bg-card border border-input rounded-[4px] pl-12 pr-4 py-4.25 text-[15px] text-card-foreground placeholder:text-sidebar-foreground focus:outline-none focus:ring-2 focus:ring-secondary/20"
              />
            </div>
          </div>

          <div className="flex gap-3 overflow-x-auto pb-1 -mx-6 px-6 md:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => selectFilter(filter.id)}
                className={cn(
                  'shrink-0 px-6 py-2 rounded-full text-[13px] font-medium transition-all whitespace-nowrap',
                  activeFilter === filter.id ? 'bg-secondary text-white font-semibold' : 'bg-card border border-input text-accent'
                )}
              >
                {filter.shortLabel}
              </button>
            ))}
          </div>

          <div className="hidden md:flex bg-card rounded-md p-1 gap-2 w-fit">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => selectFilter(filter.id)}
                className={cn({
                  'px-8 py-3 rounded-[4px] text-sm font-medium transition-all whitespace-nowrap': true,
                  'bg-white drop-shadow-[0px_2px_2px_rgba(0,0,0,0.05)] text-secondary font-semibold': activeFilter === filter.id,
                  'text-accent': activeFilter !== filter.id,
                })}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="bg-white md:bg-card px-6 py-10 md:px-30 md:py-25 flex justify-center">
        <div className="w-full max-w-360 flex flex-col gap-8 md:gap-16">
          <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {visible.map((brochure) => (
              <StaggerItem key={brochure.id} lift className="h-full">
                <BrochureCard brochure={brochure} />
              </StaggerItem>
            ))}

            {visible.length === 0 && <div className="col-span-1 md:col-span-3 text-center py-20 text-muted-foreground text-sm">No brochures match your search.</div>}
          </Stagger>

          {matching.length > visibleCount && (
            <div className="flex justify-center">
              <button
                onClick={() => setVisibleCount((count) => count + PER_PAGE)}
                className="w-full md:w-auto border-2 border-accent text-accent font-bold md:font-normal text-sm md:text-base py-4 md:px-12 rounded-[4px] leading-5 md:leading-6"
              >
                Load More Brochures
              </button>
            </div>
          )}
        </div>
      </section>
    </React.Fragment>
  );
};

export default BrochureLibrary;
