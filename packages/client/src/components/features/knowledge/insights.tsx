import React, { useState } from 'react';
import { ArrowRightIcon, ChevronDownIcon, SearchIcon } from 'lucide-react';
import { cn } from '../../../lib/utils';

const TABS = ['All Resources', 'Articles', 'Insights', 'Brochures', 'Bulletins'] as const;

const INDUSTRIES = ['Oil & Gas', 'Manufacturing', 'Marine', 'Construction'];
const TOPICS = ['Flow Assurance', 'Water Treatment', 'Corrosion Management', 'Filtration'];

const articles = [
  {
    image: '/solutions/chemicals.svg',
    category: 'Flow Assurance',
    type: 'Articles',
    date: 'May 12, 2024',
    title: 'Managing Paraffin Deposition in Offshore Oil Production',
    excerpt: 'An analysis of thermodynamic inhibitors and mechanical solutions for subsea pipelines in deepwater assets...',
  },
  {
    image: '/home/water-solutions.svg',
    category: 'Water Treatment',
    type: 'Insights',
    date: 'Apr 28, 2024',
    title: 'Advanced Cooling Tower Maintenance: A Chemical Approach',
    excerpt: 'Optimizing scale inhibition and biocidal control to extend the lifecycle of critical cooling infrastructure...',
  },
  {
    image: '/solutions/lab.svg',
    category: 'Corrosion Management',
    type: 'Articles',
    date: 'Apr 15, 2024',
    title: 'Next-Gen Film Forming Amines for Asset Integrity',
    excerpt: 'Comparative performance data of film-forming amines versus traditional neutralizing agents in steam circuits...',
  },
];

const Insights: React.FC = () => {
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]>('All Resources');
  const [search, setSearch] = useState('');
  const [industry, setIndustry] = useState('');
  const [topic, setTopic] = useState('');

  const filtered = articles.filter((a) => {
    if (activeTab !== 'All Resources' && a.type !== activeTab) return false;
    if (search && !a.title.toLowerCase().includes(search.toLowerCase())) return false;
    if (topic && a.category !== topic) return false;
    return true;
  });

  return (
    <section className="bg-background text-left">
      <div className="bg-white border-b border-[#e2e8f0] shadow-[0px_1px_1px_rgba(0,0,0,0.05)] py-4 px-30">
        <div className="flex items-center justify-between max-w-[1560px]">
          <div className="flex gap-8 items-center">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn({
                  'text-[16px] shrink-0 cursor-pointer transition-colors': true,
                  'font-bold text-accent border-b-2 border-secondary px-2 py-2': activeTab === tab,
                  'font-medium text-[#94a3b8] px-2 py-2.25 hover:text-accent': activeTab !== tab,
                })}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="relative w-75">
              <SearchIcon size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-sidebar-foreground" />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search resources..."
                className="w-full h-9 bg-[#f1f5f9] rounded-[4px] pl-12 pr-4 text-[14px] text-foreground placeholder:text-sidebar-foreground outline-none focus:ring-1 focus:ring-secondary/40"
              />
            </div>

            <div className="relative">
              <select
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="h-9 border border-border rounded-[4px] pl-4 pr-9 text-[14px] text-[#475569] bg-white outline-none appearance-none cursor-pointer focus:ring-1 focus:ring-secondary/40"
              >
                <option value="">Industry</option>

                {INDUSTRIES.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>

              <ChevronDownIcon size={10} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#475569] pointer-events-none" />
            </div>

            <div className="relative">
              <select
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="h-9 border border-[#e2e8f0] rounded-[4px] pl-4 pr-9 text-[14px] text-[#475569] bg-white outline-none appearance-none cursor-pointer focus:ring-1 focus:ring-secondary/40"
              >
                <option value="">Topic</option>

                {TOPICS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>

              <ChevronDownIcon size={10} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#475569] pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      <div className="py-24 px-30">
        <div className="max-w-[1560px] mx-auto flex flex-col gap-10">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-accent text-[30px] leading-9">Latest Technical Articles</h2>

            <a href="#" className="font-bold text-secondary text-sm tracking-[0.7px] uppercase">
              View All Articles
            </a>
          </div>

          {filtered.length === 0 ? (
            <p className="text-muted-foreground text-[15px] py-8">No articles match your filters.</p>
          ) : (
            <div className="grid grid-cols-3 gap-8">
              {filtered.map((article) => (
                <div key={article.title} className="flex flex-col gap-4">
                  <div className="h-64 bg-[#f1f5f9] overflow-hidden shrink-0">
                    <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <span className="font-bold text-secondary text-xs tracking-[1.2px] uppercase">{article.category}</span>
                    <span className="text-popover-foreground text-xs">{article.date}</span>
                  </div>

                  <h3 className="font-bold text-accent text-xl leading-7">{article.title}</h3>

                  <p className="text-[#64748b] text-sm leading-[22.75px]">{article.excerpt}</p>

                  <div className="flex items-center gap-2 pt-2">
                    <span className="font-bold text-accent text-sm">Read More</span>
                    <ArrowRightIcon size={10} className="text-accent" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Insights;
