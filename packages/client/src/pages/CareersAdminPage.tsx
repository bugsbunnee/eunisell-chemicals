import { useState, useMemo } from 'react';
import { ALL_ROLES } from '../components/features/careers-admin/data';
import type { CareerFilters } from '../components/features/careers-admin/filter-bar';
import CareerHeader from '../components/features/careers-admin/header';
import CareerStatSection from '../components/features/careers-admin/stat-section';
import CareerFilterBar from '../components/features/careers-admin/filter-bar';
import CareerTable from '../components/features/careers-admin/career-table';
import CareerActivity from '../components/features/careers-admin/activity';
import ApplicationOverview from '../components/features/careers-admin/overview';

const PER_PAGE = 5;
const EMPTY_FILTERS: CareerFilters = { dept: '', jobType: '', level: '', status: '', featured: '' };

export default function CareersAdminPage() {
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState<CareerFilters>(EMPTY_FILTERS);
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    let rows = ALL_ROLES;
    if (search) rows = rows.filter((r) => r.title.toLowerCase().includes(search.toLowerCase()));
    if (filters.dept) rows = rows.filter((r) => r.department === filters.dept);
    if (filters.jobType) rows = rows.filter((r) => r.jobType === filters.jobType);
    if (filters.level) rows = rows.filter((r) => r.level === filters.level);
    if (filters.status) rows = rows.filter((r) => r.status === filters.status);
    if (filters.featured === 'yes') rows = rows.filter((r) => r.featured);
    if (filters.featured === 'no') rows = rows.filter((r) => !r.featured);
    return rows;
  }, [search, filters]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const pageData = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const handleFilterChange = (key: keyof CareerFilters, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setPage(1);
  };

  return (
    <main className="h-screen overflow-y-auto bg-card flex flex-col text-left">
      <CareerHeader
        search={search}
        onSearch={(v) => {
          setSearch(v);
          setPage(1);
        }}
      />
      <div className="flex flex-col gap-8 p-10">
        <CareerStatSection />
        <div className="flex gap-8 items-start">
          <div className="flex flex-col gap-6 flex-1 min-w-0">
            <CareerFilterBar
              filters={filters}
              onChange={handleFilterChange}
              onReset={() => {
                setFilters(EMPTY_FILTERS);
                setPage(1);
              }}
            />
            <CareerTable data={pageData} total={filtered.length} page={page} totalPages={totalPages} onPage={setPage} />
          </div>
          <div className="w-[320px] shrink-0 flex flex-col gap-6">
            <CareerActivity />
            <ApplicationOverview />
          </div>
        </div>
      </div>
    </main>
  );
}
