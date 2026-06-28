import type React from 'react';
import type { CmsFilter } from '../../../lib/entities';

interface Props {
  filters: CmsFilter[];
  total: number;
  entityLabel?: string;
}

const CmsFilterBar: React.FC<Props> = ({ filters, total, entityLabel = 'items' }) => (
  <div className="flex items-center gap-4 flex-wrap">
    {filters.map(({ placeholder, value, onChange, options }) => (
      <div key={placeholder} className="relative shrink-0">
        <select
          value={value}
          onChange={(e) => onChange(e.currentTarget.value)}
          className="min-w-35 appearance-none bg-white border border-[#e8e8e8] rounded-[4px] pl-5 pr-8 py-[8.5px] text-[14px] text-[#333] outline-none cursor-pointer focus:border-secondary/60 transition-colors"
        >
          <option value="">{placeholder}</option>
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>

        <svg className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-[#777]" width="10" height="6" viewBox="0 0 10 6" fill="none">
          <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    ))}

    <div className="flex-1 flex justify-end">
      <span className="text-[14px] text-[#777]">
        Showing <span className="text-black">{total}</span> {entityLabel}
      </span>
    </div>
  </div>
);

export default CmsFilterBar;
