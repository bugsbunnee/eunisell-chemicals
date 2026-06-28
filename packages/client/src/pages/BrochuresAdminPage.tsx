import React, { useState, useMemo } from 'react';
import {
  BellIcon,
  PlusIcon,
  SearchIcon,
  FileTextIcon,
  DownloadIcon,
  Link2Icon,
  TagIcon,
  BarChart2Icon,
  Trash2Icon,
  PackageIcon,
  UploadIcon,
  CheckIcon,
  PencilIcon,
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// ─── assets ──────────────────────────────────────────────────────────────────

const COVER_CORPORATE = 'https://www.figma.com/api/mcp/asset/74ffb2f3-a400-447f-8116-8117087a119c';
const COVER_INDUSTRIAL = 'https://www.figma.com/api/mcp/asset/2d7e42cf-482b-4c2f-a046-93fed1a72394';
const COVER_OILFIELD = 'https://www.figma.com/api/mcp/asset/b155d0f9-e920-471d-9ba9-ec0dda702195';

// ─── types ────────────────────────────────────────────────────────────────────

type BrochureCategory = 'Corporate' | 'Industrial' | 'Oilfield';
type BrochureStatus = 'Published' | 'Draft' | 'Archived';

interface BrochureItem {
  id: string;
  title: string;
  description: string;
  category: BrochureCategory;
  status: BrochureStatus;
  fileSize: string;
  downloads: number;
  cover: string;
}

// ─── static data ─────────────────────────────────────────────────────────────

const ALL_BROCHURES: BrochureItem[] = [
  {
    id: '1',
    title: 'Corporate Profile 2024',
    description: "A comprehensive look at Eunisell's global operations, vision, and core values in the energy sector.",
    category: 'Corporate',
    status: 'Published',
    fileSize: '4.2 MB',
    downloads: 452,
    cover: COVER_CORPORATE,
  },
  {
    id: '2',
    title: 'Industrial & Manufacturing',
    description: 'Technical specifications and application guides for our manufacturing chemical solutions.',
    category: 'Industrial',
    status: 'Published',
    fileSize: '3.8 MB',
    downloads: 218,
    cover: COVER_INDUSTRIAL,
  },
  {
    id: '3',
    title: 'Produced Water Treatment',
    description: 'Novel chemical treatments for sustainable water management in oilfield operations.',
    category: 'Oilfield',
    status: 'Draft',
    fileSize: '5.1 MB',
    downloads: 89,
    cover: COVER_OILFIELD,
  },
  {
    id: '4',
    title: 'Oilfield Chemicals Overview',
    description: 'Complete product line for upstream and downstream oilfield chemical applications.',
    category: 'Oilfield',
    status: 'Published',
    fileSize: '6.3 MB',
    downloads: 321,
    cover: COVER_OILFIELD,
  },
  {
    id: '5',
    title: 'Corrosion Control Solutions',
    description: 'Advanced corrosion inhibition technologies for pipeline and production facility protection.',
    category: 'Industrial',
    status: 'Published',
    fileSize: '2.9 MB',
    downloads: 187,
    cover: COVER_INDUSTRIAL,
  },
  {
    id: '6',
    title: 'Annual Report 2023',
    description: "Financial performance and sustainability highlights from Eunisell's fiscal year 2023.",
    category: 'Corporate',
    status: 'Published',
    fileSize: '8.1 MB',
    downloads: 534,
    cover: COVER_CORPORATE,
  },
  {
    id: '7',
    title: 'Flow Assurance Chemicals',
    description: 'Wax inhibitors, hydrate control, and pour point depressants for sub-sea pipeline integrity.',
    category: 'Oilfield',
    status: 'Published',
    fileSize: '3.2 MB',
    downloads: 276,
    cover: COVER_OILFIELD,
  },
  {
    id: '8',
    title: 'Laboratory Services Brochure',
    description: 'NAFDAC-accredited analytical testing, fluid compatibility studies, and performance evaluation.',
    category: 'Industrial',
    status: 'Published',
    fileSize: '1.8 MB',
    downloads: 143,
    cover: COVER_INDUSTRIAL,
  },
  {
    id: '9',
    title: 'CSR & Sustainability Report',
    description: "Overview of Eunisell's community engagement, environmental programs, and safety initiatives.",
    category: 'Corporate',
    status: 'Published',
    fileSize: '5.5 MB',
    downloads: 201,
    cover: COVER_CORPORATE,
  },
  {
    id: '10',
    title: 'Scale Inhibitor Solutions',
    description: 'Comprehensive scale management programmes for high-pressure, high-temperature production systems.',
    category: 'Oilfield',
    status: 'Draft',
    fileSize: '2.6 MB',
    downloads: 58,
    cover: COVER_OILFIELD,
  },
  {
    id: '11',
    title: 'Water Treatment Chemicals',
    description: 'Biocides, oxygen scavengers, and deoiling chemicals for produced water management.',
    category: 'Industrial',
    status: 'Archived',
    fileSize: '3.4 MB',
    downloads: 415,
    cover: COVER_INDUSTRIAL,
  },
  {
    id: '12',
    title: 'Executive Capability Statement',
    description: 'A concise summary of Eunisell Group capabilities, certifications, and key client partnerships.',
    category: 'Corporate',
    status: 'Draft',
    fileSize: '1.2 MB',
    downloads: 34,
    cover: COVER_CORPORATE,
  },
];

const MONTHLY_DOWNLOADS = [
  { month: 'Jan', downloads: 140 },
  { month: 'Feb', downloads: 165 },
  { month: 'Mar', downloads: 225 },
  { month: 'Apr', downloads: 265 },
  { month: 'May', downloads: 305 },
  { month: 'Jun', downloads: 285 },
];

const STATUS_BADGE: Record<BrochureStatus, { bg: string; text: string }> = {
  Published: { bg: '#22c55e', text: '#fff' },
  Draft: { bg: '#fb923c', text: '#fff' },
  Archived: { bg: '#9ca3af', text: '#fff' },
};

const TABS = [
  { key: 'all', label: 'All (24)' },
  { key: 'Corporate', label: 'Corporate (6)' },
  { key: 'Industrial', label: 'Industrial (10)' },
  { key: 'Oilfield', label: 'Oilfield (8)' },
  { key: 'Published', label: 'Published' },
];

const RECENT_ACTIVITY = [
  { iconEl: <UploadIcon size={10} className="text-blue-600" />, bg: '#dbeafe', title: 'Oilfield Chemicals uploaded', meta: 'by James Okon • 2h ago' },
  { iconEl: <CheckIcon size={10} className="text-green-600" />, bg: '#dcfce7', title: 'Published: Laboratory Services', meta: 'System automated • 5h ago' },
  { iconEl: <PencilIcon size={10} className="text-slate-500" />, bg: '#f1f5f9', title: 'Updated Industrial Profile', meta: 'by Sarah Chen • 1d ago' },
];

const QUICK_ACTIONS = [
  { Icon: PackageIcon, label: 'Bulk Export' },
  { Icon: TagIcon, label: 'Manage Tags' },
  { Icon: BarChart2Icon, label: 'Full Report' },
  { Icon: Trash2Icon, label: 'Cleanup' },
];

const PER_PAGE = 9;

// ─── page ─────────────────────────────────────────────────────────────────────

const BrochuresAdminPage: React.FC = () => {
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [statusFilter, setStatusFilter] = useState('');
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    let items = [...ALL_BROCHURES];
    if (search) items = items.filter((b) => b.title.toLowerCase().includes(search.toLowerCase()));
    if (activeTab === 'Published') items = items.filter((b) => b.status === 'Published');
    else if (activeTab !== 'all') items = items.filter((b) => b.category === activeTab);
    if (statusFilter) items = items.filter((b) => b.status === statusFilter);
    return items;
  }, [search, activeTab, statusFilter]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const pageItems = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const stats = useMemo(
    () => [
      { label: 'Total Brochures', value: '24', trend: '↑ 12%', trendColor: '#22c55e', valueColor: '#002037' },
      { label: 'Published', value: '18', trend: null, trendColor: '', valueColor: '#002037' },
      { label: 'Drafts', value: '4', trend: null, trendColor: '', valueColor: '#0083ce' },
      { label: 'Archived', value: '2', trend: null, trendColor: '', valueColor: '#afb1b3' },
      { label: 'Downloads', value: '1,286', trend: '+184', trendColor: '#22c55e', valueColor: '#002037' },
    ],
    []
  );

  return (
    <main className="h-screen overflow-y-auto bg-card flex flex-col text-left">
      {/* ─── Header ─────────────────────────────────────────────────────────── */}
      <div className="bg-white border-b border-[#e8e8e8] px-8 h-20 flex items-center justify-between shrink-0">
        <div>
          <h1 className="text-[24px] text-accent leading-8">Product Brochures</h1>
          <p className="text-[14px] text-[#777] leading-5">Manage, update, and track performance of technical assets.</p>
        </div>
        <div className="flex items-center gap-6">
          <div className="relative">
            <SearchIcon size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9ca3af]" />
            <input
              type="text"
              placeholder="Search brochures..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
              className="bg-card border border-[#e8e8e8] rounded-[4px] pl-10 pr-4 py-[9px] w-[288px] text-[14px] placeholder:text-[#9ca3af] outline-none"
            />
          </div>
          <div className="relative bg-card rounded-full size-10 flex items-center justify-center">
            <BellIcon size={16} className="text-accent" />
            <span className="absolute top-2 right-2 size-2 bg-[#ef4444] rounded-full border-2 border-white" />
          </div>
          <button className="bg-secondary text-white flex items-center gap-2 px-5 py-[10px] rounded-[6px] text-[14px]">
            <PlusIcon size={14} />
            Upload Brochure
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-8 p-8">
        {/* ─── Stat cards ─────────────────────────────────────────────────── */}
        <div className="grid grid-cols-5 gap-5">
          {stats.map((s) => (
            <div key={s.label} className="bg-white border border-[#e8e8e8] shadow-[0px_4px_2px_0px_rgba(0,0,0,0.02)] rounded-[8px] p-6 flex flex-col gap-2">
              <p className="text-[12px] text-[#777] uppercase tracking-[0.6px]">{s.label}</p>
              <div className="flex items-baseline gap-2">
                <span className="text-[24px] leading-8" style={{ color: s.valueColor }}>
                  {s.value}
                </span>
                {s.trend && (
                  <span className="text-[12px]" style={{ color: s.trendColor }}>
                    {s.trend}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* ─── Main 2-col layout ──────────────────────────────────────────── */}
        <div className="flex gap-8 items-start">
          {/* Left */}
          <div className="flex flex-col gap-6 flex-1 min-w-0">
            {/* Tabs + filter row */}
            <div className="flex items-center justify-between">
              <div className="bg-[rgba(232,232,232,0.5)] flex gap-2 p-1 rounded-[8px]">
                {TABS.map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => {
                      setActiveTab(tab.key);
                      setPage(1);
                    }}
                    className={`px-4 py-2 rounded-[6px] text-[14px] transition-colors ${
                      activeTab === tab.key ? 'bg-white shadow-[0px_1px_1px_0px_rgba(0,0,0,0.05)] text-secondary' : 'text-[#777]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <div className="flex gap-3">
                <select
                  value={statusFilter}
                  onChange={(e) => {
                    setStatusFilter(e.target.value);
                    setPage(1);
                  }}
                  className="bg-white border border-[#e8e8e8] rounded-[6px] pl-5 pr-8 py-2 text-[14px] text-[#333] outline-none appearance-none cursor-pointer"
                >
                  <option value="">Status: All</option>
                  <option value="Published">Published</option>
                  <option value="Draft">Draft</option>
                  <option value="Archived">Archived</option>
                </select>
                <select className="bg-white border border-[#e8e8e8] rounded-[6px] pl-5 pr-8 py-2 text-[14px] text-[#333] outline-none appearance-none cursor-pointer">
                  <option value="newest">Sort: Newest</option>
                  <option value="oldest">Sort: Oldest</option>
                  <option value="downloads">Most Downloads</option>
                </select>
              </div>
            </div>

            {/* Brochure card grid */}
            <div className="grid grid-cols-3 gap-6">
              {pageItems.map((b) => {
                const badge = STATUS_BADGE[b.status];
                return (
                  <div key={b.id} className="bg-white border border-[#e8e8e8] rounded-[12px] shadow-[0px_4px_32px_0px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col">
                    <div className="relative h-[200px] overflow-hidden">
                      <img src={b.cover} alt={b.title} className="w-full h-full object-cover" />
                      <div className="absolute top-4 left-4 flex gap-2">
                        <span className="backdrop-blur-sm bg-white/90 text-accent text-[10px] uppercase tracking-[0.5px] px-2 py-1 rounded-[4px]">{b.category}</span>
                        <span className="text-[10px] uppercase tracking-[0.5px] px-2 py-1 rounded-[4px]" style={{ backgroundColor: badge.bg, color: badge.text }}>
                          {b.status}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col gap-4 flex-1">
                      <div>
                        <h3 className="text-[18px] text-accent leading-7 mb-2">{b.title}</h3>
                        <p className="text-[14px] text-[#777] leading-5 line-clamp-2">{b.description}</p>
                      </div>
                      <div className="flex flex-col gap-4 mt-auto">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1 text-[12px] text-[#777]">
                            <FileTextIcon size={12} />
                            <span>PDF ({b.fileSize})</span>
                          </div>
                          <div className="flex items-center gap-1 text-[12px] text-[#777]">
                            <DownloadIcon size={12} />
                            <span>{b.downloads}</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button className="flex-1 bg-secondary text-white flex items-center justify-center gap-2 py-3 rounded-[4px] text-[12px]">
                            <DownloadIcon size={12} />
                            Download
                          </button>
                          <button className="size-10 border border-[#e8e8e8] flex items-center justify-center rounded-[4px] text-[#777] hover:text-accent transition-colors shrink-0">
                            <Link2Icon size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Pagination */}
            <div className="border-t border-[#e8e8e8] pt-4 flex items-center justify-between">
              <p className="text-[14px] text-[#777]">
                Showing {filtered.length === 0 ? 0 : (page - 1) * PER_PAGE + 1}–{Math.min(page * PER_PAGE, filtered.length)} of {filtered.length} brochures
              </p>
              <div className="flex gap-1">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="size-8 border border-[#e8e8e8] rounded-[4px] flex items-center justify-center text-[#777] text-[16px] disabled:opacity-40"
                >
                  ‹
                </button>
                {Array.from({ length: Math.min(totalPages, 3) }, (_, i) => i + 1).map((n) => (
                  <button
                    key={n}
                    onClick={() => setPage(n)}
                    className={`size-8 rounded-[4px] flex items-center justify-center text-[14px] ${
                      page === n ? 'bg-secondary text-white' : 'border border-[#e8e8e8] text-[#777]'
                    }`}
                  >
                    {n}
                  </button>
                ))}
                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className="size-8 border border-[#e8e8e8] rounded-[4px] flex items-center justify-center text-[#777] text-[16px] disabled:opacity-40"
                >
                  ›
                </button>
              </div>
            </div>
          </div>

          {/* Right sidebar */}
          <div className="w-[320px] shrink-0 flex flex-col gap-8">
            {/* Monthly Downloads chart */}
            <div className="bg-white border border-[#e8e8e8] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.02)] rounded-[12px] p-6 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <BarChart2Icon size={16} className="text-secondary" />
                <h3 className="text-[16px] text-accent">Monthly Downloads</h3>
              </div>
              <div className="h-[240px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={MONTHLY_DOWNLOADS} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="dlGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#0083ce" stopOpacity={0.15} />
                        <stop offset="95%" stopColor="#0083ce" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="month" tick={{ fontSize: 10, fill: '#444' }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fontSize: 10, fill: '#444' }} axisLine={false} tickLine={false} ticks={[0, 100, 200, 300]} />
                    <Tooltip contentStyle={{ fontSize: 12, borderRadius: 4, border: '1px solid #e8e8e8', boxShadow: 'none' }} formatter={(value) => [value, 'Downloads']} />
                    <Area type="monotone" dataKey="downloads" stroke="#0083ce" strokeWidth={2} fill="url(#dlGradient)" dot={false} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white border border-[#e8e8e8] rounded-[12px] p-6 flex flex-col gap-6">
              <h3 className="text-[16px] text-accent">Recent Activity</h3>
              <div className="flex flex-col gap-6">
                {RECENT_ACTIVITY.map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="size-6 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: item.bg }}>
                      {item.iconEl}
                    </div>
                    <div>
                      <p className="text-[14px] text-accent leading-5">{item.title}</p>
                      <p className="text-[12px] text-[#777] leading-4">{item.meta}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-accent rounded-[12px] p-6 flex flex-col gap-4">
              <h3 className="text-[16px] text-white">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-3">
                {QUICK_ACTIONS.map(({ Icon, label }) => (
                  <button key={label} className="bg-[#00558e] rounded-[8px] flex flex-col items-center gap-2 py-3 px-4 text-white hover:bg-[#006aad] transition-colors">
                    <Icon size={16} />
                    <span className="text-[10px] uppercase tracking-[0.5px]">{label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BrochuresAdminPage;
