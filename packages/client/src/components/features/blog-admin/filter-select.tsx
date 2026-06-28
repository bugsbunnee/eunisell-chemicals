import React from 'react';

interface Props {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  options: string[];
}

const FilterSelect: React.FC<Props> = ({ label, value, onChange, placeholder, options }) => (
  <div className="flex flex-col gap-1">
    <span className="text-[11px] text-card-foreground uppercase">{label}</span>

    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
        className="w-full appearance-none bg-card border border-border rounded-[4px] pl-3 pr-7 py-[8.5px] text-[13px] text-black outline-none focus:border-secondary/60 transition-colors cursor-pointer"
      >
        <option value="">{placeholder}</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>

      <svg className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-card-foreground" width="10" height="6" viewBox="0 0 10 6" fill="none">
        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  </div>
);

export default FilterSelect;
