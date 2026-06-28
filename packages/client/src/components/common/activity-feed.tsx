import React from 'react';

import { InboxIcon, LogInIcon, PencilIcon, PenLineIcon, ShieldAlertIcon, Trash2Icon, type LucideIcon } from 'lucide-react';

import dayjs from '../../lib/dayjs';
import { cn } from '../../lib/utils';
import type { ActivityLogItem } from '../../hooks/use-activity';

interface IconConfig {
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
}

const ACTION_ICON_MAP: Record<string, IconConfig> = {
  'new-blog-post': { icon: PenLineIcon, iconBg: 'bg-[#eff6ff]', iconColor: 'text-[#0083ce]' },
  'update-blog-post': { icon: PencilIcon, iconBg: 'bg-[#fffbeb]', iconColor: 'text-[#f59e0b]' },
  'delete-blog-post': { icon: Trash2Icon, iconBg: 'bg-[#fef2f2]', iconColor: 'text-[#fb3748]' },
  login: { icon: LogInIcon, iconBg: 'bg-green-50', iconColor: 'text-green-600' },
  'new-enquiry': { icon: InboxIcon, iconBg: 'bg-secondary/10', iconColor: 'text-secondary' },
};

const FALLBACK_ICON: IconConfig = { icon: ShieldAlertIcon, iconBg: 'bg-[#f6f9fc]', iconColor: 'text-card-foreground' };

interface Props {
  items: ActivityLogItem[];
  isLoading?: boolean;
  emptyText?: string;
  className?: string;
  itemClassName?: string;
  iconSize?: number;
}

const SkeletonRow: React.FC = () => (
  <div className="flex items-start gap-3 px-5 py-4 animate-pulse">
    <div className="size-8 rounded-full bg-[#f0f0f0] shrink-0" />
    <div className="flex-1 flex flex-col gap-1.5 pt-0.5">
      <div className="h-3 bg-[#f0f0f0] rounded w-4/5" />
      <div className="h-2.5 bg-[#f0f0f0] rounded w-1/3" />
    </div>
  </div>
);

const ActivityFeed: React.FC<Props> = ({ items, isLoading, emptyText = 'No recent activity', className, itemClassName, iconSize = 15 }) => {
  if (isLoading) {
    return (
      <div className={cn('divide-y divide-border', className)}>
        {Array.from({ length: 3 }).map((_, i) => (
          <SkeletonRow key={i} />
        ))}
      </div>
    );
  }

  if (!items.length) {
    return <div className={cn('px-5 py-8 text-center text-[13px] text-card-foreground', className)}>{emptyText}</div>;
  }

  return (
    <div className={cn('divide-y divide-border', className)}>
      {items.map((item) => {
        const { icon: Icon, iconBg, iconColor } = ACTION_ICON_MAP[item.action] ?? FALLBACK_ICON;
        return (
          <div key={item.id} className={cn('flex items-start gap-3 px-5 py-4', itemClassName)}>
            <div className={cn('size-8 rounded-full flex items-center justify-center shrink-0 mt-0.5', iconBg)}>
              <Icon size={iconSize} className={iconColor} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[13px] text-accent leading-5">{item.description}</p>
              <p className="text-[11px] text-card-foreground mt-0.5">{dayjs(item.createdAt).fromNow()}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ActivityFeed;
