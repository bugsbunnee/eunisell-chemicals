import type React from 'react';
import type { IndustryBadge } from '../../../lib/entities';

interface Props {
  badges: IndustryBadge[];
}

const CmsIndustryBadges: React.FC<Props> = ({ badges }) => (
  <div className="flex items-center">
    {badges.map((badge, i) => (
      <div
        key={badge.initials}
        className="size-7 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-medium shrink-0 relative"
        style={{
          backgroundColor: badge.bg,
          color: badge.text,
          marginLeft: i > 0 ? '-8px' : '0',
          zIndex: badges.length - i,
        }}
      >
        {badge.initials}
      </div>
    ))}
  </div>
);

export default CmsIndustryBadges;
