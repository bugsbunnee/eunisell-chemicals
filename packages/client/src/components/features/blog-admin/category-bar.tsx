import React from 'react';
import { cn } from '../../../lib/utils';

interface Props {
  label: string;
  count: number;
  total: number;
  barColor: string;
  badgeBg: string;
  badgeText: string;
}

const CategoryBar: React.FC<Props> = ({ label, count, total, barColor, badgeBg, badgeText }) => {
  const pct = total > 0 ? Math.round((count / total) * 100) : 0;
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <p className="text-[14px] text-card-foreground leading-5.25">{label}</p>
        <span className={cn('text-[12px] px-2 py-0.5 rounded-[4px] leading-4.5', badgeBg, badgeText)}>{count}</span>
      </div>
      <div className="bg-[#f1f5f9] h-1.5 rounded-full">
        <div className={cn('h-full rounded-full', barColor)} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
};

export default CategoryBar;
