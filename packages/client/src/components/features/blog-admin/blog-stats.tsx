import type React from 'react';
import type { BlogPost } from '../../../hooks/use-blog-posts';

import { cn } from '../../../lib/utils';

interface Props {
  data: BlogPost[];
  total: number;
}

const StatsRow: React.FC<Props> = ({ data, total }) => {
  const published = data.filter((p) => p.status === 'PUBLISHED').length;
  const drafts = data.filter((p) => p.status === 'DRAFT').length;
  const stats = [
    { label: 'Total Articles', value: total, color: 'text-accent' },
    { label: 'Published', value: published, color: 'text-[#1fc16b]' },
    { label: 'Drafts', value: drafts, color: 'text-[#dfb400]' },
  ];

  return (
    <div className="grid grid-cols-4 gap-4">
      {stats.map(({ label, value, color }) => (
        <div key={label} className="bg-white border border-border rounded-[8px] px-6 py-4 drop-shadow-[0px_1px_2px_rgba(0,0,0,0.04)]">
          <p className="text-[12px] text-[#777] uppercase tracking-[0.6px] font-medium">{label}</p>
          <p className={cn('text-[28px] font-bold leading-9 mt-1', color)}>{value}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsRow;
