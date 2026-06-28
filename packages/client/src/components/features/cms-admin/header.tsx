import React from 'react';
import { SearchIcon, BellIcon, PlusIcon } from 'lucide-react';

interface Props {
  title: string;
  subtitle: string;
  ctaLabel: string;
  onSearch?: (q: string) => void;
  onCta?: () => void;
}

const CmsHeader: React.FC<Props> = ({ title, subtitle, ctaLabel, onSearch, onCta }) => (
  <div className="bg-white border-b border-border px-8 flex items-center justify-between shrink-0 h-20">
    <div>
      <h1 className="text-[20px] text-accent leading-7">{title}</h1>
      <p className="text-[12px] text-[#777] leading-4 max-w-md">{subtitle}</p>
    </div>

    <div className="flex items-center gap-6 shrink-0">
      <div className="relative">
        <SearchIcon size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9ca3af]" />
        <input
          type="text"
          placeholder={`Search ${title.toLowerCase()}...`}
          onChange={(e) => onSearch?.(e.currentTarget.value)}
          className="w-[288px] pl-10 pr-4 py-[9.5px] text-[14px] border border-border rounded-[4px] bg-card text-accent placeholder:text-[#9ca3af] outline-none focus:border-secondary/60 transition-colors"
        />
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <button className="size-10 flex items-center justify-center rounded-full bg-card text-card-foreground hover:text-accent transition-colors">
            <BellIcon size={16} />
          </button>
          <span className="absolute top-2 right-2 size-2 rounded-full bg-red-500 border-2 border-white" />
        </div>

        <button onClick={onCta} className="flex items-center gap-2 bg-secondary text-white text-[14px] px-5 py-2.5 rounded-[6px] hover:bg-secondary/90 transition-colors shrink-0">
          <PlusIcon size={12} /> {ctaLabel}
        </button>
      </div>
    </div>
  </div>
);

export default CmsHeader;
