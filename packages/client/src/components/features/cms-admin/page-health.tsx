import type React from 'react';
import type { HealthItem } from '../../../lib/entities';

interface Props {
  items: HealthItem[];
  onAudit?: () => void;
}

const CmsPageHealth: React.FC<Props> = ({ items, onAudit }) => (
  <div className="bg-white border border-[#e5e8ec] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[8px] p-6 flex flex-col gap-4">
    <h3 className="text-[14px] text-accent uppercase tracking-[-0.35px] leading-5">Solution Page Health</h3>

    <div className="flex flex-col gap-5 pb-2">
      {items.map(({ icon: Icon, iconColor, title, description }) => (
        <div key={title} className="flex gap-3 items-start">
          <div className="shrink-0 mt-1.5">
            <Icon size={16} style={{ color: iconColor }} />
          </div>
          <div>
            <p className="text-[14px] text-[#333] leading-5">{title}</p>
            <p className="text-[12px] text-[#777] leading-4">{description}</p>
          </div>
        </div>
      ))}
    </div>

    <button
      onClick={onAudit}
      className="w-full border border-border rounded-[4px] py-2 text-[12px] text-secondary tracking-[0.082px] uppercase text-center hover:bg-card transition-colors"
    >
      Run System Audit
    </button>
  </div>
);

export default CmsPageHealth;
