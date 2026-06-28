import type React from 'react';
import type { StatPillar } from '../../../lib/entities';

interface Props {
  badgeLabel: string;
  title: string;
  description: string;
  stats: StatPillar[];
  imageSrc: string;
}

const CmsHeroCard: React.FC<Props> = ({ badgeLabel, title, description, stats, imageSrc }) => (
  <div className="bg-white border border-[#e5e8ec] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[8px] p-8 flex items-start justify-between">
    <div className="flex flex-col gap-[6.9px] max-w-2xl pt-1">
      <span className="inline-flex items-center bg-[#e6f3fa] text-[#0083ce] text-[10px] tracking-[1px] uppercase px-2 py-[2.5px] rounded-[4px] self-start">{badgeLabel}</span>

      <h2 className="text-[24px] text-accent leading-8 mt-1">{title}</h2>

      <p className="text-[14px] text-[#777] leading-[22.75px] max-w-158.25 whitespace-pre-line">{description}</p>

      <div className="flex gap-8 mt-6.25">
        {stats.map(({ label, value, borderColor }) => (
          <div key={label} className="flex flex-col pl-4 border-l-2" style={{ borderColor }}>
            <span className="text-[12px] text-[#777] uppercase tracking-[-0.3px] leading-4">{label}</span>
            <span className="text-[24px] text-accent leading-8">{value}</span>
          </div>
        ))}
      </div>
    </div>

    <div className="bg-[#f6f9fc] rounded-[12px] w-36.75 h-48 flex items-center justify-center shrink-0">
      <img src={imageSrc} alt="" className="size-32 object-contain" />
    </div>
  </div>
);

export default CmsHeroCard;
