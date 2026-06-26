import React from 'react';
import { HexagonIcon } from 'lucide-react';

interface Stat {
  label: string;
  value: number;
}

const stats: Stat[] = [
  { label: 'Published Articles', value: 42 },
  { label: 'Draft Content', value: 18 },
  { label: 'New Enquiries', value: 12 },
  { label: 'Open Roles', value: 4 },
  { label: 'Media Assets', value: 286 },
];

const StatsBar: React.FC = () => (
  <div className="grid grid-cols-5 gap-4 p-6 pb-0">
    {stats.map(({ label, value }) => (
      <div key={label} className="bg-white border border-border rounded-[4px] p-4 flex flex-col gap-3">
        <HexagonIcon size={22} className="text-card-foreground" strokeWidth={1.25} />
        <div>
          <p className="text-[12px] text-card-foreground leading-4">{label}</p>
          <p className="text-[28px] font-bold text-accent leading-9 mt-0.5">{value}</p>
        </div>
      </div>
    ))}
  </div>
);

export default StatsBar;
