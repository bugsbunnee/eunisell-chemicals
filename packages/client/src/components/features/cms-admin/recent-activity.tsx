import type React from 'react';
import type { ActivityItem } from '../../../lib/entities';

interface Props {
  items: ActivityItem[];
}

const CmsRecentActivity: React.FC<Props> = ({ items }) => (
  <div className="bg-white border border-[#e5e8ec] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[8px] p-6 flex flex-col gap-4">
    <h3 className="text-[14px] text-accent uppercase tracking-[-0.35px] leading-5">Recent Activity</h3>

    <div className="border-l border-[#e5e8ec] pl-6 flex flex-col gap-6">
      {items.map(({ time, text, link, dotColor }) => (
        <div key={link} className="relative flex flex-col gap-1">
          <div className="absolute -left-7.75 top-0 size-2.5 rounded-full border-2 border-white" style={{ backgroundColor: dotColor }} />

          <p className="text-[12px] text-[#777] leading-4">{time}</p>

          <p className="text-[14px] text-[#333] leading-5">
            {text}
            <span className="text-secondary">{link}</span>
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default CmsRecentActivity;
