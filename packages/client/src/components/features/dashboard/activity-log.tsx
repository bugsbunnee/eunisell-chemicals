import React from 'react';
import { UserPenIcon, DatabaseIcon, ShieldAlertIcon, type LucideIcon } from 'lucide-react';

interface Activity {
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  text: string;
  time: string;
}

const activities: Activity[] = [
  {
    icon: UserPenIcon,
    iconBg: 'bg-secondary/10',
    iconColor: 'text-secondary',
    text: "Admin-Sarah modified 'Industry Services' page content.",
    time: 'Today, 14:22',
  },
  {
    icon: DatabaseIcon,
    iconBg: 'bg-green-50',
    iconColor: 'text-green-600',
    text: 'System successfully backed up production database.',
    time: 'Today, 10:00',
  },
  {
    icon: ShieldAlertIcon,
    iconBg: 'bg-red-50',
    iconColor: 'text-red-500',
    text: 'Security: 3 failed login attempts blocked from IP 192.168.1.1.',
    time: 'Yesterday, 23:41',
  },
];

const ActivityLog: React.FC = () => (
  <div className="bg-white border border-border rounded-[4px]">
    <div className="px-5 py-4 border-b border-border">
      <h2 className="text-[15px] font-semibold text-accent">Recent Activity Log</h2>
    </div>

    <div className="divide-y divide-border">
      {activities.map(({ icon: Icon, iconBg, iconColor, text, time }) => (
        <div key={text} className="flex items-start gap-3 px-5 py-4">
          <div className={`size-8 rounded-full ${iconBg} flex items-center justify-center shrink-0 mt-0.5`}>
            <Icon size={15} className={iconColor} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[13px] text-accent leading-5">{text}</p>
            <p className="text-[11px] text-card-foreground mt-0.5">{time}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ActivityLog;
