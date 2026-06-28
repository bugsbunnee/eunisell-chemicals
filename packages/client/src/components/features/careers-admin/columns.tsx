import { MoreVerticalIcon, StarIcon, TrendingUpIcon, TrendingDownIcon } from 'lucide-react';
import type { Column } from '../enquiries/table';
import type { CareerRole, CareerStatus } from './types';

const STATUS_STYLE: Record<CareerStatus, { bg: string; text: string }> = {
  OPEN: { bg: 'rgba(31,193,107,0.1)', text: '#1fc16b' },
  DRAFT: { bg: 'rgba(164,164,164,0.1)', text: '#a4a4a4' },
  CLOSED: { bg: 'rgba(208,4,22,0.1)', text: '#d00416' },
};

export const COLUMNS: Column<CareerRole>[] = [
  {
    key: 'title',
    label: 'Job Title',
    headerClassName: '!pl-[20px]',
    cellClassName: '!pl-[20px] !pr-2 !py-[14px]',
    render: (row) => (
      <div>
        <p className="text-[14px] text-accent leading-5">{row.title}</p>
        <p className="text-[11px] text-[#777] leading-[16.5px]">
          {row.location} • {row.jobType} • {row.level}
        </p>
      </div>
    ),
  },
  {
    key: 'department',
    label: 'Department',
    cellClassName: '!py-[14px] !px-[20px]',
    render: (row) => <span className="text-[12px] text-[#777] leading-4">{row.department}</span>,
  },
  {
    key: 'dates',
    label: 'Posted Date',
    cellClassName: '!py-[14px] !px-[20px]',
    render: (row) => (
      <div>
        <p className="text-[12px] text-accent leading-4">{row.postedDate}</p>
        <p className="text-[10px] text-[#a4a4a4] leading-[15px]">Ends: {row.endDate}</p>
      </div>
    ),
  },
  {
    key: 'featured',
    label: 'Featured',
    cellClassName: '!py-[14px] !px-[20px]',
    render: (row) =>
      row.featured ? (
        <span
          className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] text-[#0083ce] tracking-[0.5px] uppercase"
          style={{ backgroundColor: 'rgba(0,131,206,0.1)' }}
        >
          <StarIcon size={8} fill="#0083ce" />
          YES
        </span>
      ) : (
        <span className="text-[10px] text-[#a4a4a4] tracking-[0.8px] uppercase">NO</span>
      ),
  },
  {
    key: 'status',
    label: 'Status',
    cellClassName: '!py-[14px] !px-[20px]',
    render: (row) => {
      const s = STATUS_STYLE[row.status];
      return (
        <span className="inline-block px-2 py-0.5 rounded-full text-[10px] tracking-[0.4px] uppercase" style={{ backgroundColor: s.bg, color: s.text }}>
          {row.status}
        </span>
      );
    },
  },
  {
    key: 'apps',
    label: 'Apps',
    cellClassName: '!py-[14px] !px-[20px]',
    render: (row) => (
      <div className="flex items-center gap-1.5">
        <span className="text-[12px] text-accent">{row.applications}</span>
        {row.appTrend === 'up' && <TrendingUpIcon size={10} className="text-[#1fc16b]" />}
        {row.appTrend === 'down' && <TrendingDownIcon size={10} className="text-[#d00416]" />}
      </div>
    ),
  },
  {
    key: 'actions',
    label: 'Actions',
    headerClassName: 'text-right',
    cellClassName: '!py-[14px] !pr-[20px] text-right',
    render: () => (
      <button className="inline-flex items-center justify-center size-8 rounded-full hover:bg-[#f6f9fc] transition-colors text-[#777]">
        <MoreVerticalIcon size={14} />
      </button>
    ),
  },
];
