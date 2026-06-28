import type React from 'react';
import type { Action } from '../../../lib/entities';

interface Props {
  actions: Action[];
}

const QuickActions: React.FC<Props> = ({ actions }) => (
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
