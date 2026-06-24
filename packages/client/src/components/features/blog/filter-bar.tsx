import React, { useState } from 'react';
import { SearchIcon, ChevronDownIcon } from 'lucide-react';
import { cn } from '../../../lib/utils';

const categories = ['All Posts', 'Technical Articles', 'Industry Insights', 'Case Studies'];
const topics = ['Oilfield Chemicals', 'Industrial Chemicals', 'Water Treatment', 'Sustainability'];
const sortOptions = ['Newest', 'Oldest', 'Most Popular'];

const BlogFilterBar: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All Posts');
  const [activeTopic, setActiveTopic] = useState('Oilfield Chemicals');
  const [sortBy, setSortBy] = useState('Newest');
  const [search, setSearch] = useState('');
  const [topicOpen, setTopicOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  return (
    <div className="sticky top-0 z-20 backdrop-blur-[6px] bg-white/95 border-y border-border flex items-center gap-8 px-30 py-8 text-left">
      <div className="flex items-center gap-2 overflow-x-auto scrollbar-none min-w-0 flex-1">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={cn({
              'text-[14px] font-medium px-5 rounded-full transition-colors shrink-0': true,
              'bg-secondary text-white py-2.25': activeCategory === cat,
              'border border-border text-[#777] py-2 hover:border-secondary/40 hover:text-accent': activeCategory !== cat,
            })}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="h-6 w-px bg-border shrink-0" />

      <div className="relative shrink-0">
        <button
          onClick={() => {
            setTopicOpen((o) => !o);
            setSortOpen(false);
          }}
          className="flex items-center gap-2"
        >
          <span className="text-muted text-sm font-medium">Topic:</span>
          <span className="font-semibold text-accent text-sm whitespace-nowrap">{activeTopic}</span>
          <ChevronDownIcon size={10} className="text-accent" />
        </button>

        {topicOpen && (
          <div className="absolute top-full left-0 mt-2 bg-white border border-border shadow-md z-30 min-w-[180px]">
            {topics.map((t) => (
              <button
                key={t}
                onClick={() => {
                  setActiveTopic(t);
                  setTopicOpen(false);
                }}
                className={`w-full text-left px-4 py-2.5 text-sm hover:bg-card transition-colors ${
                  t === activeTopic ? 'font-semibold text-accent' : 'text-[#777]'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="flex items-center gap-4 shrink-0">
        <div className="relative w-75">
          <SearchIcon size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
          <input
            type="text"
            placeholder="Search articles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-card border border-border pl-11 pr-4 py-3 text-[14px] text-accent placeholder:text-[#9ca3af] outline-none focus:border-secondary/40 transition-colors"
          />
        </div>

        <div className="relative">
          <button
            onClick={() => {
              setSortOpen((o) => !o);
              setTopicOpen(false);
            }}
            className="border border-border flex items-center gap-2 px-4 py-2.5 hover:border-secondary/40 transition-colors"
          >
            <span className="font-semibold text-accent text-[14px] whitespace-nowrap">Sort by: {sortBy}</span>
            <ChevronDownIcon size={10} className="text-accent" />
          </button>

          {sortOpen && (
            <div className="absolute top-full right-0 mt-2 bg-white border border-border shadow-md z-30 min-w-37.5">
              {sortOptions.map((opt) => (
                <button
                  key={opt}
                  onClick={() => {
                    setSortBy(opt);
                    setSortOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2.5 text-[14px] hover:bg-card transition-colors ${
                    opt === sortBy ? 'font-semibold text-accent' : 'text-[#777]'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogFilterBar;
