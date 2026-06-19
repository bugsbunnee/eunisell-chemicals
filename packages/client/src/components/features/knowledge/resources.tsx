import React from 'react';
import { ArrowRightIcon, CalendarIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const resources = [
  {
    image: '/solutions/chemicals.svg',
    category: 'Technical Article',
    title: 'Scale Inhibitor Selection for High-Temperature Reservoir Conditions',
    date: 'Feb 2025',
    excerpt: 'A systematic approach to selecting and dosing scale inhibitors for HPHT reservoir applications in deepwater environments.',
  },
  {
    image: '/solutions/blending.svg',
    category: 'White Paper',
    title: 'Optimizing Demulsifier Performance in Crude Oil Processing',
    date: 'Jan 2025',
    excerpt: 'Field evaluation of demulsifier formulations across multiple crude grades and variable water-cut processing conditions.',
  },
  {
    image: '/solutions/lab.svg',
    category: 'Case Study',
    title: 'H₂S Scavenger Program: Offshore Niger Delta Application',
    date: 'Dec 2024',
    excerpt: 'Results of a targeted hydrogen sulfide management program deployed across four offshore production facilities.',
  },
  {
    image: '/solutions/technical-services.svg',
    category: 'Industry Insight',
    title: 'Chemical Supply Chain Resilience in Sub-Saharan Africa',
    date: 'Nov 2024',
    excerpt: 'Strategies for maintaining chemical supply continuity and inventory security during periods of regional disruption.',
  },
];

const Resources: React.FC = () => {
  return (
    <section className="bg-accent-bg py-28 px-20">
      <div className="flex flex-col items-center mb-20">
        <div className="text-[10px] font-semibold uppercase text-secondary tracking-wider">Resource Library</div>
        <h2 className="text-5xl font-bold text-accent text-center mt-4 max-w-2xl capitalize">Latest Technical Publications</h2>
        <div className="w-24 h-1 bg-secondary mt-6" />
      </div>

      <div className="grid grid-cols-4 gap-8">
        {resources.map((resource) => (
          <div key={resource.title} className="bg-background flex flex-col">
            <div className="h-60 overflow-hidden bg-card">
              <img src={resource.image} alt={resource.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-6 flex flex-col flex-1 text-left">
              <div className="text-[9px] font-bold uppercase text-secondary tracking-[1.5px] mb-3">{resource.category}</div>
              <h3 className="text-base font-bold text-accent leading-snug mb-3 flex-1">{resource.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-5">{resource.excerpt}</p>
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center gap-x-2 text-xs text-muted-foreground">
                  <CalendarIcon size={10} />
                  <span>{resource.date}</span>
                </div>
                <Link to="#" className="text-xs font-bold text-secondary flex items-center gap-x-1 hover:gap-x-2 transition-all">
                  Read <ArrowRightIcon size={10} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Resources;
