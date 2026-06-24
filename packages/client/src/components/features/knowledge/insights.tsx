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
      <div className="bg-white border-b border-[#e2e8f0] shadow-[0px_1px_1px_rgba(0,0,0,0.05)] py-4 px-6 md:px-30">
        <div className="flex md:hidden items-center gap-3 mb-3">
          <div className="relative flex-1">
            <SearchIcon size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-sidebar-foreground" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search resources..."
              className="w-full h-11 bg-[#f1f5f9] rounded-[4px] pl-10 pr-4 text-sm text-foreground placeholder:text-sidebar-foreground outline-none"
            />
          </div>

          <button className="h-11 border border-[#e2e8f0] rounded-[4px] px-4 flex items-center gap-2 text-[#475569] text-sm shrink-0">
            <ChevronDownIcon size={12} className="text-[#475569]" />
            Filter
          </button>
        </div>

        <div className="flex md:hidden overflow-x-auto -mx-6 px-6 gap-1 [&::-webkit-scrollbar]:hidden">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn({
                'text-sm shrink-0 cursor-pointer transition-colors whitespace-nowrap px-2 py-2': true,
                'font-bold text-accent border-b-2 border-secondary': activeTab === tab,
                'font-medium text-[#94a3b8]': activeTab !== tab,
              })}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center justify-between max-w-[1560px]">
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
                className="w-full h-9 bg-[#f1f5f9] rounded-[4px] pl-12 pr-4 text-sm text-foreground placeholder:text-sidebar-foreground outline-none focus:ring-1 focus:ring-secondary/40"
              />
            </div>

            <div className="relative">
              <select
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="h-9 border border-border rounded-[4px] pl-4 pr-9 text-sm text-[#475569] bg-white outline-none appearance-none cursor-pointer focus:ring-1 focus:ring-secondary/40"
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
                className="h-9 border border-[#e2e8f0] rounded-[4px] pl-4 pr-9 text-sm text-[#475569] bg-white outline-none appearance-none cursor-pointer focus:ring-1 focus:ring-secondary/40"
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

      <div className="py-12 px-6 md:py-24 md:px-30">
        <div className="max-w-[1560px] mx-auto flex flex-col gap-8 md:gap-10">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-accent text-[20px] md:text-[30px] leading-7 md:leading-9">Latest Articles</h2>
            <a href="#" className="font-bold text-secondary text-[12px] md:text-sm tracking-[0.6px] md:tracking-[0.7px] uppercase">
              View All
            </a>
          </div>

          {filtered.length === 0 ? (
            <p className="text-muted-foreground text-[15px] py-8">No articles match your filters.</p>
          ) : (
            <div className="flex flex-col gap-10 md:grid md:grid-cols-3 md:gap-8">
              {filtered.map((article) => (
                <div key={article.title} className="flex flex-col gap-3 md:gap-4">
                  <div className="h-[208px] md:h-64 bg-[#f1f5f9] overflow-hidden shrink-0">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-[157%] object-cover mt-[-28%] md:h-full md:mt-0 md:object-cover"
                    />
                  </div>

                  <div className="flex items-center gap-3 pt-1 md:pt-2">
                    <span className="font-bold text-secondary text-[10px] tracking-[1px] uppercase">{article.category}</span>
                    <span className="text-popover-foreground text-[10px]">{article.date}</span>
                  </div>

                  <h3 className="font-bold text-accent text-[18px] md:text-xl leading-[24.75px] md:leading-7">{article.title}</h3>

                  <p className="text-[#64748b] text-[12px] md:text-sm leading-[19.5px] md:leading-[22.75px]">{article.excerpt}</p>

                  <div className="flex items-center gap-2 pt-1 md:pt-2">
                    <span className="font-bold text-accent text-[12px] md:text-sm">Read More</span>
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
