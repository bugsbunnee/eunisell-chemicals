import React from 'react';

import { cn } from '../../../lib/utils';
import { ArchiveIcon, PencilIcon, PenLineIcon } from 'lucide-react';

const RECENT_ACTIVITY = [
  {
    icon: PenLineIcon,
    iconBg: 'bg-[#eff6ff]',
    iconColor: 'text-[#0083ce]',
    actor: 'Admin-Sarah',
    verb: 'published',
    subject: "'Improving Industrial Performance'",
    time: 'Today, 14:22',
  },
  { icon: PencilIcon, iconBg: 'bg-[#fffbeb]', iconColor: 'text-[#f59e0b]', actor: 'Dr. Smith', verb: 'updated draft', subject: "'Managing Flow Assurance'", time: 'Today, 10:15' },
  { icon: ArchiveIcon, iconBg: 'bg-[#fef2f2]', iconColor: 'text-[#fb3748]', actor: 'System', verb: 'archived', subject: "'Chemical Safety Vol 1'", time: 'Yesterday, 18:30' },
];

const RecentBlog: React.FC = () => {
  return (
    <div className="bg-white border border-border drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[6px] pb-2">
      <div className="border-b border-border p-6">
        <h3 className="text-[16px] text-accent leading-6">Recent Blog Activity</h3>
      </div>

      <div className="p-6 flex flex-col gap-4">
        {RECENT_ACTIVITY.map((item) => (
          <div key={item.subject} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={cn('size-8 rounded-full flex items-center justify-center shrink-0', item.iconBg)}>
                <item.icon size={13} className={item.iconColor} />
              </div>

              <p className="text-[14px] text-accent leading-5.25">
                <span className="font-medium">{item.actor}</span> <span className="text-card-foreground">{item.verb}</span> <span>{item.subject}</span>
              </p>
            </div>

            <p className="text-[12px] text-sidebar-accent shrink-0 ml-6">{item.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentBlog;
