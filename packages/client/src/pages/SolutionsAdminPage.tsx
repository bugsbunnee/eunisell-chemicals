import React, { useMemo, useState } from 'react';
import { CheckCircle2Icon, AlertCircleIcon, DownloadIcon, BarChart2Icon, TagIcon, HistoryIcon } from 'lucide-react';

import Table from '../components/features/enquiries/table';
import Pagination from '../components/features/enquiries/pagination';
import CmsHeader from '../components/features/cms-admin/header';
import CmsHeroCard from '../components/features/cms-admin/hero-card';
import CmsFilterBar from '../components/features/cms-admin/filter-bar';
import CmsPageHealth from '../components/features/cms-admin/page-health';
import CmsRecentActivity from '../components/features/cms-admin/recent-activity';
import CmsSystemTools from '../components/features/cms-admin/system-tools';
import { buildCmsColumns } from '../components/features/cms-admin/columns';
import type { CmsRow, StatusConfig } from '../lib/entities';

import useSolutionsAdminStore from '../store/solutions-admin';

// ─── static config ────────────────────────────────────────────────────────────

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

const COLUMNS = buildCmsColumns(STATUS_CONFIG);

// ─── data ─────────────────────────────────────────────────────────────────────

const ALL_SOLUTIONS: CmsRow[] = [
  {
    id: '1',
    title: 'Deepwater Production Chemicals',
    slug: '/solutions/deepwater-production',
    thumbnail: 'https://www.figma.com/api/mcp/asset/ef723a96-7098-4692-8102-bfc080303be3',
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
    thumbnail: 'https://www.figma.com/api/mcp/asset/fcf5ca9f-c2c9-4b47-acef-4ee2d46c49c1',
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
    thumbnail: 'https://www.figma.com/api/mcp/asset/247ab9fc-2485-4e68-89af-832283feb9f5',
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
    title: 'Flow Assurance Solutions',
    slug: '/solutions/flow-assurance',
    thumbnail: 'https://www.figma.com/api/mcp/asset/ef723a96-7098-4692-8102-bfc080303be3',
    categoryMain: 'Upstream',
    categorySub: 'Flow Assurance',
    industries: [{ initials: 'OG', bg: '#e6f3fa', text: '#0083ce' }],
    completedSections: 6,
    totalSections: 6,
    completionPct: 100,
    status: 'PUBLISHED',
    featured: true,
  },
  {
    id: '5',
    title: 'Oilfield Production Optimization',
    slug: '/solutions/production-optimization',
    thumbnail: 'https://www.figma.com/api/mcp/asset/fcf5ca9f-c2c9-4b47-acef-4ee2d46c49c1',
    categoryMain: 'Upstream',
    categorySub: 'Production',
    industries: [
      { initials: 'OG', bg: '#e6f3fa', text: '#0083ce' },
      { initials: 'PT', bg: '#f0fdf4', text: '#166534' },
    ],
    completedSections: 5,
    totalSections: 6,
    completionPct: 83,
    status: 'PUBLISHED',
    featured: true,
  },
  {
    id: '6',
    title: 'Environmental Compliance Services',
    slug: '/solutions/environmental',
    thumbnail: 'https://www.figma.com/api/mcp/asset/247ab9fc-2485-4e68-89af-832283feb9f5',
    categoryMain: 'Utility &',
    categorySub: 'Environmental',
    industries: [
      { initials: 'ENV', bg: '#f3e8ff', text: '#6b21a8' },
      { initials: 'MFG', bg: '#fef3c7', text: '#92400e' },
    ],
    completedSections: 3,
    totalSections: 6,
    completionPct: 50,
    status: 'DRAFT',
    featured: false,
  },
];

const PER_PAGE = 5;

// ─── page ─────────────────────────────────────────────────────────────────────

const SolutionsAdminPage: React.FC = () => {
  const store = useSolutionsAdminStore();
  const [categoryFilter, setCategoryFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  const result = useMemo(() => {
    let filtered = [...ALL_SOLUTIONS];

    if (store.query.search) {
      const q = store.query.search.toLowerCase();
      filtered = filtered.filter((s) => s.title.toLowerCase().includes(q));
    }
    if (categoryFilter) filtered = filtered.filter((s) => s.categoryMain === categoryFilter);
    if (statusFilter) filtered = filtered.filter((s) => s.status === statusFilter);

    const total = filtered.length;
    const page = store.query.page ?? 1;
    const data = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);
    return { data, meta: { total, page, limit: PER_PAGE, totalPages: Math.ceil(total / PER_PAGE) } };
  }, [store.query, categoryFilter, statusFilter]);

  const totals = useMemo(
    () => ({
      total: ALL_SOLUTIONS.length,
      published: ALL_SOLUTIONS.filter((s) => s.status === 'PUBLISHED').length,
      featured: ALL_SOLUTIONS.filter((s) => s.featured).length,
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
        title="Solutions Management"
        subtitle="Manage dynamic solution detail pages, hero content, and related documentation."
        ctaLabel="Add Solutions"
        onSearch={(q) => store.onChangeQuery({ search: q, page: 1 })}
      />

      <div className="flex gap-8 p-10 items-start">
        <div className="flex flex-col gap-6 flex-1 min-w-0">
          <CmsHeroCard
            badgeLabel="Content Module"
            title="Manage Solution Detail Pages"
            description={
              'Centralized hub for controlling how your chemical solutions are presented to industrial partners.\nAdjust hero visual assets, technical specs, and industry alignments.'
            }
            stats={heroStats}
            imageSrc="https://www.figma.com/api/mcp/asset/6ddfb12f-3c36-4278-9249-e439fefd91d9"
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

export default SolutionsAdminPage;
