import React, { useMemo, useState } from 'react';
import type { CmsRow, StatusConfig } from '../lib/entities';

import { CheckCircle2Icon, AlertCircleIcon, DownloadIcon, BarChart2Icon, TagIcon, HistoryIcon, MoreVerticalIcon } from 'lucide-react';

import Table, { type Column } from '../components/features/enquiries/table';
import Pagination from '../components/features/enquiries/pagination';
import CmsHeader from '../components/features/cms-admin/header';
import CmsHeroCard from '../components/features/cms-admin/hero-card';
import CmsFilterBar from '../components/features/cms-admin/filter-bar';
import CmsPageHealth from '../components/features/cms-admin/page-health';
import CmsRecentActivity from '../components/features/cms-admin/recent-activity';
import CmsSystemTools from '../components/features/cms-admin/system-tools';
import CmsIndustryBadges from '../components/features/cms-admin/industry-badges';
import CmsCompletionBar from '../components/features/cms-admin/completion-bar';
import CmsStatusBadge from '../components/features/cms-admin/status-badge';

import useChemicalsAdminStore from '../store/chemicals-admin';

const STATUS_CONFIG: Record<string, StatusConfig> = {
  PUBLISHED: { label: 'PUBLISHED', bg: '#ecfdf5', border: '#d1fae5', text: '#065f46' },
  DRAFT: { label: 'DRAFT', bg: '#f3f4f6', border: '#e5e7eb', text: '#374151' },
  IN_REVIEW: { label: 'IN REVIEW', bg: '#fffbeb', border: '#fef3c7', text: '#92400e' },
};

const HEALTH_ITEMS = [
  { icon: CheckCircle2Icon, iconColor: '#10b981', title: 'SEO Optimization', description: 'All meta tags and descriptions optimized across 5 pages.' },
  { icon: CheckCircle2Icon, iconColor: '#10b981', title: 'Brochure Links', description: 'All 12 technical bulletins are reachable and current.' },
  { icon: AlertCircleIcon, iconColor: '#f59e0b', title: 'Hero Media Missing', description: '2 draft pages are missing 4K header visual assets.' },
];

const ACTIVITY_ITEMS = [
  { time: '2 hours ago', text: 'Okonkwo published ', link: 'Corrosion Inhibitors', dotColor: '#0083ce' },
  { time: 'Yesterday', text: 'M. Adebayo edited ', link: 'Water Treatment Specs', dotColor: '#afb1b3' },
  { time: '3 days ago', text: 'Draft created: ', link: 'Downstream Catalysts', dotColor: '#afb1b3' },
];

const SYSTEM_TOOLS = [
  { icon: DownloadIcon, label: 'Export List' },
  { icon: BarChart2Icon, label: 'Traffic Stats' },
  { icon: TagIcon, label: 'Bulk Tags' },
  { icon: HistoryIcon, label: 'History' },
];

const COLUMNS: Column<CmsRow>[] = [
  {
    key: 'page',
    label: 'Page',
    headerClassName: 'pl-[14px]',
    cellClassName: '!pl-3',
    render: (row) => (
      <div className="flex items-center gap-3">
        <div className="w-10.25 h-14.25 rounded-[4px] border border-[#e5e8ec] bg-[#f6f9fc] overflow-hidden shrink-0">
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
      const config = STATUS_CONFIG[row.status];
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

const ALL_CHEMICALS: CmsRow[] = [
  {
    id: '1',
    title: 'Deepwater Production Chemicals',
    slug: '/solutions/deepwater-production',
    thumbnail: 'https://www.figma.com/api/mcp/asset/85e4b1f1-cb62-4eba-b22c-cd522d0e9e81',
    categoryMain: 'Upstream',
    categorySub: 'Oil & Gas',
    industries: [
      { initials: 'OG', bg: '#e6f3fa', text: '#0083ce' },
      { initials: 'PT', bg: '#f0fdf4', text: '#166534' },
    ],
    completedSections: 6,
    totalSections: 6,
    completionPct: 100,
    status: 'PUBLISHED',
    featured: true,
  },
  {
    id: '2',
    title: 'Refinery Process Catalysts',
    slug: '/solutions/refinery-catalysts',
    thumbnail: 'https://www.figma.com/api/mcp/asset/566c9d62-c965-4d90-a70d-acf682da0d7e',
    categoryMain: 'Downstream',
    categorySub: 'Processing',
    industries: [{ initials: 'MFG', bg: '#fef3c7', text: '#92400e' }],
    completedSections: 4,
    totalSections: 6,
    completionPct: 65,
    status: 'DRAFT',
    featured: false,
  },
  {
    id: '3',
    title: 'Industrial Water Treatment',
    slug: '/solutions/water-treatment',
    thumbnail: 'https://www.figma.com/api/mcp/asset/013e3c8e-8a4b-487c-8ba6-ac4bc0da2d7d',
    categoryMain: 'Utility &',
    categorySub: 'Maintenance',
    industries: [
      { initials: 'WT', bg: '#e6f3fa', text: '#0083ce' },
      { initials: 'ENV', bg: '#f3e8ff', text: '#6b21a8' },
    ],
    completedSections: 5,
    totalSections: 6,
    completionPct: 80,
    status: 'IN_REVIEW',
    featured: false,
  },
  {
    id: '4',
    title: 'Corrosion Inhibitors',
    slug: '/solutions/corrosion-inhibitors',
    thumbnail: 'https://www.figma.com/api/mcp/asset/85e4b1f1-cb62-4eba-b22c-cd522d0e9e81',
    categoryMain: 'Upstream',
    categorySub: 'Production',
    industries: [{ initials: 'OG', bg: '#e6f3fa', text: '#0083ce' }],
    completedSections: 6,
    totalSections: 6,
    completionPct: 100,
    status: 'PUBLISHED',
    featured: true,
  },
  {
    id: '5',
    title: 'Scale Inhibitors',
    slug: '/solutions/scale-inhibitors',
    thumbnail: 'https://www.figma.com/api/mcp/asset/566c9d62-c965-4d90-a70d-acf682da0d7e',
    categoryMain: 'Upstream',
    categorySub: 'Flow Assurance',
    industries: [{ initials: 'OG', bg: '#e6f3fa', text: '#0083ce' }],
    completedSections: 5,
    totalSections: 6,
    completionPct: 83,
    status: 'PUBLISHED',
    featured: true,
  },
  {
    id: '6',
    title: 'Demulsifiers',
    slug: '/solutions/demulsifiers',
    thumbnail: 'https://www.figma.com/api/mcp/asset/013e3c8e-8a4b-487c-8ba6-ac4bc0da2d7d',
    categoryMain: 'Downstream',
    categorySub: 'Separation',
    industries: [
      { initials: 'OG', bg: '#e6f3fa', text: '#0083ce' },
      { initials: 'PT', bg: '#f0fdf4', text: '#166534' },
    ],
    completedSections: 3,
    totalSections: 6,
    completionPct: 50,
    status: 'DRAFT',
    featured: false,
  },
];

const PER_PAGE = 5;

const ChemicalsAdminPage: React.FC = () => {
  const store = useChemicalsAdminStore();
  const [categoryFilter, setCategoryFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  const result = useMemo(() => {
    let filtered = [...ALL_CHEMICALS];

    if (store.query.search) {
      const q = store.query.search.toLowerCase();
      filtered = filtered.filter((c) => c.title.toLowerCase().includes(q));
    }
    if (categoryFilter) filtered = filtered.filter((c) => c.categoryMain === categoryFilter);
    if (statusFilter) filtered = filtered.filter((c) => c.status === statusFilter);

    const total = filtered.length;
    const page = store.query.page ?? 1;
    const data = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);
    return { data, meta: { total, page, limit: PER_PAGE, totalPages: Math.ceil(total / PER_PAGE) } };
  }, [store.query, categoryFilter, statusFilter]);

  const totals = useMemo(
    () => ({
      total: ALL_CHEMICALS.length,
      published: ALL_CHEMICALS.filter((c) => c.status === 'PUBLISHED').length,
      featured: ALL_CHEMICALS.filter((c) => c.featured).length,
    }),
    []
  );

  const filters = [
    {
      placeholder: 'All Categories',
      value: categoryFilter,
      onChange: (v: string) => {
        setCategoryFilter(v);
        store.onChangeQuery({ page: 1 });
      },
      options: ['Upstream', 'Downstream', 'Utility & Maintenance'],
    },
    {
      placeholder: 'Status',
      value: statusFilter,
      onChange: (v: string) => {
        setStatusFilter(v);
        store.onChangeQuery({ page: 1 });
      },
      options: ['PUBLISHED', 'DRAFT', 'IN_REVIEW'],
    },
    { placeholder: 'Related Industry', value: '', onChange: () => {}, options: ['Oil & Gas', 'Manufacturing', 'Water Treatment', 'Environmental'] },
    { placeholder: 'Featured', value: '', onChange: () => {}, options: ['Featured', 'Not Featured'] },
  ];

  const heroStats = [
    { label: 'Total Solutions', value: `0${totals.total}`, borderColor: '#0083ce' },
    { label: 'Published', value: `0${totals.published}`, borderColor: '#10b981' },
    { label: 'Featured', value: `0${totals.featured}`, borderColor: '#f59e0b' },
    { label: 'Last Updated', value: 'Today', borderColor: '#6366f1' },
  ];

  return (
    <main className="h-screen overflow-y-auto bg-card flex flex-col text-left">
      <CmsHeader
        title="Chemical Management"
        subtitle="Manage dynamic chemical detail pages, hero content, and related documentation."
        ctaLabel="Add Chemicals"
        onSearch={(q) => store.onChangeQuery({ search: q, page: 1 })}
      />

      <div className="flex gap-8 p-10 items-start">
        <div className="flex flex-col gap-6 flex-1 min-w-0">
          <CmsHeroCard
            badgeLabel="Content Module"
            title="Manage Chemicals Detail Pages"
            description={
              'Centralized hub for controlling how your chemicals are presented to industrial partners.\nAdjust hero visual assets, technical specs, and industry alignments.'
            }
            stats={heroStats}
            imageSrc="https://www.figma.com/api/mcp/asset/4c9c8d1d-b75f-4c6b-900d-f912d794abf6"
          />

          <CmsFilterBar filters={filters} total={result.meta.total} entityLabel="solutions" />

          <div className="bg-white border border-[#e5e8ec] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] rounded-[8px] overflow-hidden">
            <Table columns={COLUMNS} data={result.data} loading={false} keyExtractor={(r) => r.id} selectable />
            <Pagination
              page={result.meta.page}
              totalPages={result.meta.totalPages}
              total={result.meta.total}
              perPage={result.meta.limit}
              onPageChange={(page) => store.onChangeQuery({ page })}
            />
          </div>
        </div>

        <div className="w-[320px] shrink-0 flex flex-col gap-6">
          <CmsPageHealth items={HEALTH_ITEMS} />
          <CmsRecentActivity items={ACTIVITY_ITEMS} />
          <CmsSystemTools tools={SYSTEM_TOOLS} />
        </div>
      </div>
    </main>
  );
};

export default ChemicalsAdminPage;
