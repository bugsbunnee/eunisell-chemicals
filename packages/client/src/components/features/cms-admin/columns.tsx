import { MoreVerticalIcon } from 'lucide-react';
import type { Column } from '../enquiries/table';
import type { CmsRow, StatusConfig } from '../../../lib/entities';
import CmsCompletionBar from './completion-bar';
import CmsIndustryBadges from './industry-badges';
import CmsStatusBadge from './status-badge';

export function buildCmsColumns(statusConfig: Record<string, StatusConfig>): Column<CmsRow>[] {
  return [
    {
      key: 'page',
      label: 'Page',
      headerClassName: 'pl-[14px]',
      cellClassName: '!pl-3',
      render: (row) => (
        <div className="flex items-center gap-3">
          <div className="w-[41px] h-[57px] rounded-[4px] border border-[#e5e8ec] bg-[#f6f9fc] overflow-hidden shrink-0">
            <img src={row.thumbnail} alt={row.title} className="w-full h-full object-cover" />
          </div>
          <div className="min-w-0">
            <p className="text-[14px] text-accent leading-5">{row.title}</p>
            <p className="text-[11px] text-[#777] leading-[16.5px]">{row.slug}</p>
          </div>
        </div>
      ),
    },
    {
      key: 'category',
      label: 'Category',
      render: (row) => (
        <div>
          <p className="text-[14px] text-[#333] leading-5">{row.categoryMain}</p>
          <p className="text-[14px] text-[#333] leading-5">{row.categorySub}</p>
        </div>
      ),
    },
    {
      key: 'industries',
      label: 'Industries',
      render: (row) => <CmsIndustryBadges badges={row.industries} />,
    },
    {
      key: 'completion',
      label: 'Completion',
      render: (row) => <CmsCompletionBar completed={row.completedSections} total={row.totalSections} pct={row.completionPct} />,
    },
    {
      key: 'status',
      label: 'Status',
      cellClassName: 'whitespace-nowrap',
      render: (row) => {
        const config = statusConfig[row.status];
        return config ? <CmsStatusBadge {...config} /> : null;
      },
    },
    {
      key: 'actions',
      label: 'Actions',
      headerClassName: 'text-right',
      cellClassName: 'text-right',
      render: () => (
        <button className="text-[#777] hover:text-accent transition-colors p-1">
          <MoreVerticalIcon size={16} />
        </button>
      ),
    },
  ];
}
