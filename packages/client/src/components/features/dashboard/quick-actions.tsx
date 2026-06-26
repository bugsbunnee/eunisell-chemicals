import React from 'react';
import { SquarePenIcon, FileUpIcon, UserRoundPlusIcon, MegaphoneIcon, type LucideIcon } from 'lucide-react';

interface Action {
  label: string;
  icon: LucideIcon;
  iconColor: string;
}

const actions: Action[] = [
  { label: 'CREATE BLOG', icon: SquarePenIcon, iconColor: 'text-secondary' },
  { label: 'UPLOAD BROCHURE', icon: FileUpIcon, iconColor: 'text-secondary' },
  { label: 'ADD USER', icon: UserRoundPlusIcon, iconColor: 'text-accent' },
  { label: 'POST ALERT', icon: MegaphoneIcon, iconColor: 'text-red-500' },
];

const QuickActions: React.FC = () => (
  <div className="bg-white border border-border rounded-[4px]">
    <div className="px-5 py-4 border-b border-border">
      <h2 className="text-[15px] font-semibold text-accent">Quick Actions</h2>
    </div>
    <div className="grid grid-cols-2 gap-3 p-4">
      {actions.map(({ label, icon: Icon, iconColor }) => (
        <button
          key={label}
          className="flex flex-col items-center justify-center gap-2.5 bg-card border border-border rounded-lg py-5 px-3 hover:border-secondary/40 hover:bg-secondary/5 transition-colors group"
        >
          <Icon size={22} className={`${iconColor} group-hover:opacity-80 transition-opacity`} />
          <span className="text-[10px] font-bold tracking-[0.6px] text-card-foreground group-hover:text-secondary transition-colors text-center leading-tight">{label}</span>
        </button>
      ))}
    </div>
  </div>
);

export default QuickActions;
