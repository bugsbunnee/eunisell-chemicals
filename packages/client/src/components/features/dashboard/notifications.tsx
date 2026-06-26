import React from 'react';
import { BellIcon, FileEditIcon, DatabaseIcon } from 'lucide-react';
import { type LucideIcon } from 'lucide-react';

interface Notification {
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  title: string;
  subtitle: string;
}

const notifications: Notification[] = [
  {
    icon: BellIcon,
    iconBg: 'bg-secondary/10',
    iconColor: 'text-secondary',
    title: 'New enquiry from TotalEnergies',
    subtitle: 'Regarding Laboratory Services · 12 mins ago',
  },
  {
    icon: FileEditIcon,
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-600',
    title: 'Brochure draft updated',
    subtitle: 'Oilfield Chemicals v2 · 1 hour ago',
  },
  {
    icon: DatabaseIcon,
    iconBg: 'bg-green-50',
    iconColor: 'text-green-600',
    title: 'System Backup Completed',
    subtitle: 'Database safe & secure · 3 hours ago',
  },
];

const Notifications: React.FC = () => (
  <div className="bg-white border border-border rounded-[4px]">
    <div className="flex items-center justify-between px-5 py-4 border-b border-border">
      <h2 className="text-[15px] font-semibold text-accent">Notifications</h2>
      <span className="size-5 rounded-full bg-secondary text-white text-[10px] font-bold flex items-center justify-center">{notifications.length}</span>
    </div>

    <div className="divide-y divide-border">
      {notifications.map(({ icon: Icon, iconBg, iconColor, title, subtitle }) => (
        <div key={title} className="flex items-start gap-3 px-5 py-3.5">
          <div className={`size-8 rounded-full ${iconBg} flex items-center justify-center shrink-0 mt-0.5`}>
            <Icon size={14} className={iconColor} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[13px] font-medium text-accent leading-5">{title}</p>
            <p className="text-[11px] text-card-foreground mt-0.5">{subtitle}</p>
          </div>
        </div>
      ))}
    </div>

    <div className="px-5 py-3.5 bg-card flex items-center text-center justify-center">
      <button className=" flex items-center text-center justify-center gap-1 text-[12px] font-semibold text-secondary hover:text-secondary/80 transition-colors uppercase tracking-[0.5px]">
        Open Notification Centre
      </button>
    </div>
  </div>
);

export default Notifications;
