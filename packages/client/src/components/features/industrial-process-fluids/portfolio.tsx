import React from 'react';

import { ArrowRightIcon, ChevronRightIcon, CircleCheckIcon, PlusIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { paths } from '../../../lib/data';
import { cn } from '../../../lib/utils';
import { Reveal, Stagger, StaggerItem } from '../../common/animate';

const families = [
  {
    id: '01',
    title: 'Heat Transfer Fluids',
    description: 'Glycol-based and synthetic organic fluids for heating and cooling systems.',
    path: paths.chemicals,
  },
  {
    id: '02',
    title: 'Metalworking Fluids',
    description: 'Soluble oils, semi-synthetics, and neat oils for machining and grinding.',
    path: paths.chemicals,
  },
  {
    id: '03',
    title: 'Water Treatment',
    description: 'Corrosion and scale inhibitors for boilers, chillers, and cooling towers.',
    path: paths.chemicals,
  },
  {
    id: '04',
    title: 'Process Chemicals',
    description: 'Specialty catalysts, solvents, and reaction aids for chemical manufacturing.',
    path: paths.chemicals,
  },
];

const portfolios = [
  {
    title: 'Heat Transfer Fluids',
    badge: 'HT-SERIES',
    items: ['Synthetic Heat Transfer Oils', 'Inhibited Glycol Solutions', 'Thermal Insulation Coatings'],
  },
  {
    title: 'Metalworking Fluids',
    badge: 'MW-SERIES',
    items: ['Soluble Cutting Oils', 'Semi-Synthetic Coolants', 'Stamping & Drawing Lubricants'],
  },
];

const collapsed = ['Water Treatment Chemicals', 'Process & Specialty Chemicals'];

const Portfolio: React.FC = () => {
  return (
    <section className="bg-white md:bg-card md:px-30 md:py-30">
      {/* Mobile: Product Portfolios spec list */}
      <div className="md:hidden text-left">
        <div className="bg-accent p-6">
          <h2 className="font-bold text-[20px] leading-7 text-white">Product Portfolios</h2>
        </div>

        {portfolios.map((portfolio, index) => (
          <div key={portfolio.title} className={cn('p-6 border-b border-input flex flex-col gap-4', { 'bg-card/30': index % 2 === 1 })}>
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-[18px] leading-7 text-accent">{portfolio.title}</h3>
              <div className="bg-card rounded-[4px] px-2 py-1 text-[10px] leading-[15px] font-bold text-secondary">{portfolio.badge}</div>
            </div>

            <div className="flex flex-col gap-3">
              {portfolio.items.map((item) => (
                <div key={item} className="flex items-center gap-x-3">
                  <CircleCheckIcon size={10} className="text-secondary shrink-0" />
                  <span className="text-sm leading-5 text-[#4a4a4a]">{item}</span>
                </div>
              ))}
            </div>

            <Link to={paths.chemicals} className="text-xs leading-4 font-bold text-secondary uppercase flex items-center gap-x-2">
              View Specifications <ArrowRightIcon size={12} />
            </Link>
          </div>
        ))}

        {collapsed.map((title) => (
          <Link to={paths.chemicals} key={title} className="px-6 py-4 border-b border-input flex items-center justify-between">
            <span className="text-[16px] leading-6 font-bold text-accent">{title}</span>
            <PlusIcon size={16} className="text-secondary shrink-0" />
          </Link>
        ))}
      </div>

      {/* Desktop: Comprehensive Fluid Portfolio */}
      <div className="hidden md:block">
        <Reveal direction="left" distance={56} className="flex items-end justify-between gap-6 text-left">
          <div className="flex flex-col gap-4 max-w-150">
            <div className="font-medium text-sm leading-5 uppercase tracking-[1.4px] text-secondary">Product Families</div>
            <h2 className="font-bold text-5xl leading-15 text-accent">Comprehensive Fluid Portfolio</h2>
          </div>

          <Link to={paths.chemicals} className="text-base leading-6 font-bold text-secondary border-b-2 border-secondary pb-1 flex items-center gap-x-2 shrink-0">
            View Full Catalog <ChevronRightIcon size={14} />
          </Link>
        </Reveal>

        <div className="flex flex-row gap-1 mt-16 text-left">
          <Reveal direction="left" distance={64} className="group relative h-175 w-1/3 shrink-0 overflow-hidden">
            <img
              src="/industrial-process-fluids/portfolio.png"
              alt="Large industrial steel pipes and valves"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-accent/40 flex flex-col justify-end p-12">
              <h3 className="font-bold text-3xl leading-9 text-white mb-4">Specialized Engineering</h3>
              <p className="text-base leading-6 text-white/80">Every fluid in our catalog is backed by extensive laboratory testing and field performance data.</p>
            </div>
          </Reveal>

          <Stagger className="grid grid-cols-2 gap-1 flex-1">
            {families.map((family) => (
              <StaggerItem
                key={family.id}
                direction="right"
                className="group bg-white p-12 flex flex-col justify-between gap-8 transition-colors duration-300 hover:bg-secondary/2"
              >
                <div className="flex flex-col gap-4">
                  <div className="text-sm leading-5 font-bold text-secondary">{family.id}</div>
                  <div className="font-bold text-2xl leading-8 text-accent">{family.title}</div>
                  <p className="text-base text-card-foreground leading-6">{family.description}</p>
                </div>

                <Link to={family.path} className="text-base leading-6 font-bold text-sidebar-primary flex items-center gap-x-2">
                  Explore Products <ArrowRightIcon size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
