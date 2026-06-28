import React from 'react';

import type { LucideIcon } from 'lucide-react';

import { useBlogStats, type BlogStats } from '../../../hooks/use-blog-posts';
import { cn } from '../../../lib/utils';
import { HexagonIcon, TriangleIcon, DiamondIcon, CalendarClockIcon, ArchiveIcon, CheckCircle2Icon } from 'lucide-react';

interface StatCard {
  label: string;
  countKey: keyof Omit<BlogStats, 'categoryBreakdown'>;
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
}

const STAT_CARDS: StatCard[] = [
  { label: 'Total Articles', countKey: 'total', icon: HexagonIcon, iconBg: 'bg-[#f6f9fc]', iconColor: 'text-card-foreground' },
  { label: 'Published', countKey: 'published', icon: CheckCircle2Icon, iconBg: 'bg-[#f0fdf4]', iconColor: 'text-[#1fc16b]' },
  { label: 'Drafts', countKey: 'drafts', icon: TriangleIcon, iconBg: 'bg-[#eff6ff]', iconColor: 'text-[#0083ce]' },
  { label: 'In Review', countKey: 'inReview', icon: DiamondIcon, iconBg: 'bg-[#fffbeb]', iconColor: 'text-[#f59e0b]' },
  { label: 'Scheduled', countKey: 'scheduled', icon: CalendarClockIcon, iconBg: 'bg-[#eef2ff]', iconColor: 'text-[#6366f1]' },
  { label: 'Archived', countKey: 'archived', icon: ArchiveIcon, iconBg: 'bg-[#f8fafc]', iconColor: 'text-[#afb1b3]' },
];

const StatCards: React.FC = () => {
  const { data: stats } = useBlogStats();

  return (
    <div className="grid grid-cols-6 gap-4">
      {STAT_CARDS.map(({ label, countKey, icon: Icon, iconBg, iconColor }) => (
        <div key={label} className="bg-white border border-border drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[6px] p-6 flex flex-col">
          <div className={cn('size-12 rounded-[6px] flex items-center justify-center shrink-0', iconBg)}>
            <Icon size={22} className={iconColor} />
          </div>
          <p className="text-[12px] text-card-foreground tracking-[0.6px] uppercase mt-4">{label}</p>
          <p className="text-[24px] text-accent leading-9">{stats?.[countKey] ?? 0}</p>
        </div>
      ))}
    </div>
  );
};

export default StatCards;
