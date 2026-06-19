import React, { useState } from 'react';
import { ArrowRightIcon, CalendarIcon, ClockIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = ['All', 'Case Studies', 'White Papers', 'Technical Notes'];

const featuredArticle = {
  category: 'Case Study',
  title: 'Corrosion Inhibition Performance in Deepwater Offshore Applications',
  excerpt:
    "This field case study documents the deployment of Eunisell's advanced corrosion inhibitor package in a challenging deepwater environment, achieving a 42% reduction in metal loss rates over a 12-month evaluation period across six production assets.",
  date: 'March 2025',
  readTime: '8 min read',
};

const kpis = [
  { value: '42%', label: 'Metal Loss Reduction' },
  { value: '6 Sites', label: 'Field Applications' },
  { value: '12 Months', label: 'Evaluation Period' },
  { value: '2,400+', label: 'Resource Downloads' },
];

const Featured: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <section className="bg-background py-28 px-20">
      <div className="grid grid-cols-2 gap-x-24 items-start">
        <div className="relative w-full overflow-hidden rounded-sm aspect-[5/6]">
          <img src="/solutions/solution-how.svg" alt="Featured Technical Resource" className="w-full h-full object-cover" />

          <div className="absolute left-6 bottom-6 bg-background p-5 rounded-xs max-w-xs text-left border-l-4 border-l-secondary">
            <div className="text-[9px] uppercase font-bold text-secondary tracking-wider mb-1">Highlighted Outcome</div>
            <p className="text-sm font-bold text-accent leading-snug">42% reduction in corrosion rates across six offshore assets.</p>
          </div>
        </div>

        <div className="text-left pt-4">
          <div className="text-[10px] font-black uppercase text-secondary tracking-[2px] mb-6">Featured Resource</div>

          <div className="flex flex-wrap gap-x-3 gap-y-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-1.5 rounded-full text-sm font-medium border transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-secondary text-white border-secondary'
                    : 'bg-card border-muted text-muted-foreground hover:border-secondary hover:text-secondary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="border-l-4 border-l-secondary pl-8">
            <div className="text-[9px] uppercase font-bold text-secondary tracking-[1.5px] mb-3">{featuredArticle.category}</div>
            <h2 className="text-[32px] font-bold text-accent leading-tight mb-6">{featuredArticle.title}</h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">{featuredArticle.excerpt}</p>

            <div className="flex items-center gap-x-6 text-xs text-muted-foreground mb-10">
              <div className="flex items-center gap-x-2">
                <CalendarIcon size={11} />
                <span>{featuredArticle.date}</span>
              </div>
              <div className="flex items-center gap-x-2">
                <ClockIcon size={11} />
                <span>{featuredArticle.readTime}</span>
              </div>
            </div>

            <Link to="#" className="text-secondary font-bold text-sm flex items-center gap-x-2 hover:gap-x-3 transition-all">
              Read Full Article <ArrowRightIcon size={14} />
            </Link>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-4">
            {kpis.map((kpi) => (
              <div key={kpi.label} className="p-5 bg-card rounded-xs text-left">
                <div className="text-2xl font-black text-secondary">{kpi.value}</div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-wider mt-1">{kpi.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
