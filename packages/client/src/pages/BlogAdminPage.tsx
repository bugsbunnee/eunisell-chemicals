import React, { useMemo, useState } from 'react';

import { SearchIcon, BellIcon, PlusIcon, ArrowUpDownIcon, DownloadIcon, MoreVerticalIcon, StarIcon, CalendarIcon, PenLineIcon } from 'lucide-react';

import { useNavigate } from 'react-router-dom';
import { useBlogPosts, useBlogStats, type BlogPost, type BlogStatus } from '../hooks/use-blog-posts';
import { cn } from '../lib/utils';
import { paths } from '../lib/data';

import type { Action } from '../lib/entities';

import CategoryBar from '../components/features/blog-admin/category-bar';
import FilterSelect from '../components/features/blog-admin/filter-select';
import Pagination from '../components/features/enquiries/pagination';
import QuickActions from '../components/features/dashboard/quick-actions';
import RecentBlog from '../components/features/blog-admin/recent-blog';
import StatCards from '../components/features/blog-admin/stat-cards';
import Table, { type Column } from '../components/features/enquiries/table';

import useBlogAdminStore from '../store/blog-admin';

const STATUS_CONFIG: Record<BlogStatus, { label: string; bg: string; text: string }> = {
  PUBLISHED: { label: 'Published', bg: 'bg-[rgba(31,193,107,0.1)]', text: 'text-[#1fc16b]' },
  IN_REVIEW: { label: 'In Review', bg: 'bg-[rgba(251,55,72,0.1)]', text: 'text-[#fb3748]' },
  DRAFT: { label: 'Draft', bg: 'bg-[rgba(0,131,206,0.1)]', text: 'text-[#0083ce]' },
  SCHEDULED: { label: 'Scheduled', bg: 'bg-[rgba(99,102,241,0.1)]', text: 'text-[#6366f1]' },
  ARCHIVED: { label: 'Archived', bg: 'bg-[rgba(175,177,179,0.15)]', text: 'text-[#afb1b3]' },
};

const TABS = [
  { key: '', label: 'All Articles', countKey: 'total' as const },
  { key: 'PUBLISHED', label: 'Published', countKey: 'published' as const },
  { key: 'DRAFT', label: 'Drafts', countKey: 'drafts' as const },
  { key: 'IN_REVIEW', label: 'In Review', countKey: 'inReview' as const },
];

const BlogAdminPage: React.FC = () => {
  const [categoryFilter, setCategoryFilter] = useState('');
  const [topicFilter, setTopicFilter] = useState('');

  const navigate = useNavigate();
  const store = useBlogAdminStore();
  const result = useBlogPosts();

  const { data: stats } = useBlogStats();

  const actions = useMemo(() => {
    const actions: Action[] = [
      { label: 'Create Draft', icon: PenLineIcon, iconColor: 'text-secondary', onPress: () => navigate(paths.blogAdmin) },
      { label: 'Upload Asset', icon: DownloadIcon, iconColor: 'text-secondary', onPress: () => navigate(paths.blogAdmin) },
    ];

    return actions;
  }, [navigate]);

  return (
    <main className="h-screen overflow-y-auto bg-card flex flex-col text-left">
      <div className="bg-white border-b border-border px-8 flex items-center justify-between shrink-0 h-20">
        <div>
          <h1 className="text-[24px] text-accent leading-8 tracking-[0.0234px]">Blog Articles</h1>

          <p className="text-[14px] text-card-foreground leading-6 max-w-md">Manage, edit and publish technical blogs and industry insights.</p>
        </div>

        <div className="flex items-center gap-6 shrink-0">
          <div className="relative">
            <SearchIcon size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9ca3af]" />

            <input
              type="text"
              placeholder="Search brochures..."
              onChange={(e) => store.onChangeQuery({ search: e.currentTarget.value, page: 1 })}
              className="w-[288px] pl-10 pr-4 py-[9.5px] text-[14px] border border-border rounded-[4px] bg-card text-accent placeholder:text-[#9ca3af] outline-none focus:border-secondary/60 transition-colors"
            />
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <button className="size-10 flex items-center justify-center rounded-full bg-card text-card-foreground hover:text-accent transition-colors">
                <BellIcon size={16} />
              </button>

              <span className="absolute top-2 right-2 size-2 rounded-full bg-red-500 border-2 border-white" />
            </div>

            <button className="flex items-center gap-2 bg-secondary text-white text-[14px] px-5 py-2.5 rounded-[6px] hover:bg-secondary/90 transition-colors shrink-0">
              <PlusIcon size={12} /> Create Blog Article
            </button>
          </div>
        </div>
      </div>

      <div className="p-8 flex flex-col gap-8">
        <StatCards />

        <div className="grid grid-cols-[1fr_360px] gap-8 items-start">
          <div className="flex flex-col gap-8 min-w-0">
            <div className="bg-white border border-border drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[6px] p-6 flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {TABS.map((tab) => (
                    <button
                      key={tab.key}
                      onClick={() => store.onChangeQuery({ status: tab.key || undefined, page: 1 })}
                      className={cn({
                        'px-4 py-[7.5px] rounded-[4px] text-[13px] tracking-[0.025px] transition-colors': true,
                        'bg-secondary text-white': store.query.status === tab.key,
                        'bg-card border border-border text-card-foreground hover:border-secondary/40 hover:text-secondary': store.query.status !== tab.key,
                      })}
                    >
                      {tab.label} ({(stats?.[tab.countKey] ?? 0) as number})
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button className="flex items-center gap-1.5 bg-card border border-border px-3 py-1.75 rounded-[4px] text-[13px] text-card-foreground hover:border-secondary/40 hover:text-secondary transition-colors">
                    <ArrowUpDownIcon size={13} />
                    Sort By
                  </button>

                  <button className="flex items-center gap-1.5 bg-card border border-border px-3 py-1.75 rounded-[4px] text-[13px] text-card-foreground hover:border-secondary/40 hover:text-secondary transition-colors">
                    <DownloadIcon size={13} />
                    Export
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-5 gap-3 items-end">
                <FilterSelect
                  label="Category"
                  value={categoryFilter}
                  onChange={(v) => {
                    setCategoryFilter(v);
                    store.onChangeQuery({ category: v || undefined, page: 1 });
                  }}
                  placeholder="All Categories"
                  options={['Technical Bulletin', 'Industry Insights', 'Company Updates']}
                />

                <FilterSelect
                  label="Topic"
                  value={topicFilter}
                  onChange={(v) => setTopicFilter(v)}
                  placeholder="All Topics"
                  options={['Chemical Engineering', 'Oilfield Chemicals', 'Safety', 'Digitalization', 'Company News', 'Events', 'Market Analysis', 'Sustainability']}
                />

                <FilterSelect
                  label="Author"
                  value=""
                  onChange={() => {}}
                  placeholder="All Authors"
                  options={['Dr. Smith', 'Sarah K.', 'Marketing Team', 'Engr. Bayo', 'Tunde F.', 'Engr. Chioma']}
                />

                <div className="flex flex-col gap-1">
                  <span className="text-[11px] text-card-foreground uppercase tracking-[0.6px]">Date Range</span>
                  <div className="bg-card border border-border rounded-[4px] flex items-center gap-2 px-3 py-[8.5px]">
                    <CalendarIcon size={14} className="text-card-foreground shrink-0" />
                    <span className="text-[13px] text-card-foreground">Oct 2023 - Jan 2024</span>
                  </div>
                </div>

                <button className="bg-accent text-white text-[13px] py-2 rounded-[4px] hover:bg-accent/90 transition-colors">Apply Filters</button>
              </div>
            </div>

            <div className="bg-white border border-border shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] rounded-[6px] overflow-hidden">
              <Table columns={columns} data={result.data?.data ?? []} loading={result.isLoading} keyExtractor={(row) => row.id} selectable />

              <Pagination
                page={store.query.page ?? 1}
                totalPages={result.data?.meta.totalPages ?? 1}
                total={result.data?.meta.total ?? 0}
                perPage={result.data?.meta.limit ?? 10}
                onPageChange={(page) => store.onChangeQuery({ page })}
              />
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="bg-white border border-border drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[6px]">
              <div className="border-b border-border p-6">
                <h3 className="text-[16px] text-accent leading-6">Category Overview</h3>
              </div>

              <div className="p-6 flex flex-col gap-4">
                <CategoryBar
                  label="Technical Articles"
                  count={stats?.categoryBreakdown.technical ?? 0}
                  total={stats?.total ?? 0}
                  barColor="bg-secondary"
                  badgeBg="bg-[#eff6ff]"
                  badgeText="text-secondary"
                />

                <CategoryBar
                  label="Industry Insights"
                  count={stats?.categoryBreakdown.insights ?? 0}
                  total={stats?.total ?? 0}
                  barColor="bg-[#1fc16b]"
                  badgeBg="bg-[#f0fdf4]"
                  badgeText="text-[#1fc16b]"
                />

                <CategoryBar
                  label="Company Updates"
                  count={stats?.categoryBreakdown.updates ?? 0}
                  total={stats?.total ?? 0}
                  barColor="bg-[#f59e0b]"
                  badgeBg="bg-[#fffbeb]"
                  badgeText="text-[#f59e0b]"
                />
              </div>
            </div>

            <QuickActions actions={actions} />
          </div>
        </div>

        <RecentBlog />
      </div>
    </main>
  );
};

const columns: Column<BlogPost>[] = [
  {
    key: 'article',
    label: 'Article Title',
    cellClassName: '!pl-3',
    render: (row) => (
      <div className="min-w-0">
        <p className="text-[14px] text-accent leading-5.25 line-clamp-2">{row.title}</p>
        <p className="text-[12px] text-muted leading-4.5 mt-0.5">Topic: {row.topic}</p>
      </div>
    ),
  },
  {
    key: 'category',
    label: 'Category',
    cellClassName: 'whitespace-nowrap !pl-6 !pr-3',
    render: (row) => <p className="text-[14px] text-card-foreground leading-5.25">{row.category}</p>,
  },
  {
    key: 'author',
    label: 'Author',
    cellClassName: 'whitespace-nowrap',
    render: (row) => (
      <div className="flex items-center gap-2">
        <span className="size-6 rounded-full bg-secondary/20 text-secondary text-[10px] font-bold flex items-center justify-center shrink-0">{row.authorInitials}</span>
        <span className="text-[14px] text-card-foreground leading-5.25">{row.authorName}</span>
      </div>
    ),
  },
  {
    key: 'status',
    label: 'Status',
    cellClassName: 'whitespace-nowrap',
    render: (row) => {
      const s = STATUS_CONFIG[row.status];
      return <span className={cn('inline-flex items-center px-2.5 py-[0.5px] rounded-full text-[10px] uppercase tracking-[0.5px]', s.bg, s.text)}>{s.label}</span>;
    },
  },
  {
    key: 'featured',
    label: 'Featured',
    cellClassName: 'whitespace-nowrap',
    render: (row) =>
      row.featured ? (
        <span className="inline-flex items-center bg-secondary text-white text-[10px] uppercase tracking-[0.07px] px-2 py-[0.5px] rounded-[4px]">Featured</span>
      ) : (
        <StarIcon size={16} className="text-[#d1d5db]" />
      ),
  },
  {
    key: 'lastUpdated',
    label: 'Last Updated',
    cellClassName: 'whitespace-nowrap',
    render: (row) => <p className="text-[13px] text-card-foreground leading-[19.5px]">{row.lastUpdated}</p>,
  },
  {
    key: 'actions',
    label: 'Actions',
    headerClassName: 'text-right',
    cellClassName: 'text-right',
    render: () => (
      <button className="text-card-foreground hover:text-accent transition-colors p-1">
        <MoreVerticalIcon size={16} />
      </button>
    ),
  },
];

export default BlogAdminPage;
