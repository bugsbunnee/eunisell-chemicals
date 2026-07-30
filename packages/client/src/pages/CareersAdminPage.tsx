import React, { useState } from 'react';

import type { CareerFilters } from '../components/features/careers-admin/components/filter-bar';
import { useCareerOpenings, useCareerStats } from '../hooks/use-career-openings';

import ApplicationOverview from '../components/features/careers-admin/components/overview';
import CareerHeader from '../components/features/careers-admin/components/header';
import CareerStatSection from '../components/features/careers-admin/components/stat-section';
import CareerFilterBar from '../components/features/careers-admin/components/filter-bar';
import CareerTable from '../components/features/careers-admin/components/career-table';
import CareerActivity from '../components/features/careers-admin/components/activity';
import CreateCareerModal from '../components/features/careers-admin/components/create-career-modal';

const PER_PAGE = 5;
const EMPTY_FILTERS: CareerFilters = { dept: '', jobType: '', level: '', status: '', featured: '' };

const CareersAdminPage: React.FC = () => {
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState<CareerFilters>(EMPTY_FILTERS);
  const [page, setPage] = useState(1);
  const [modal, setModal] = useState<{ open: boolean; careerId?: string }>({ open: false });

  const { data: stats } = useCareerStats();
  const { data: openings, isLoading } = useCareerOpenings({
    page,
    limit: PER_PAGE,
    search: search || undefined,
    dept: filters.dept || undefined,
    jobType: filters.jobType || undefined,
    level: filters.level || undefined,
    status: filters.status || undefined,
    featured: filters.featured || undefined,
  });

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
        onCreate={() => setModal({ open: true, careerId: undefined })}
      />

      <div className="flex flex-col gap-8 p-10">
        <CareerStatSection stats={stats} />

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

            <CareerTable
              data={openings?.data ?? []}
              total={openings?.meta.total ?? 0}
              page={page}
              totalPages={openings?.meta.totalPages ?? 1}
              onPage={setPage}
              onEdit={(id) => setModal({ open: true, careerId: id })}
              loading={isLoading}
            />
          </div>

          <div className="w-[320px] shrink-0 flex flex-col gap-6">
            <CareerActivity />

            <ApplicationOverview />
          </div>
        </div>
      </div>

      <CreateCareerModal open={modal.open} careerId={modal.careerId} onOpenChange={(open) => setModal((m) => ({ ...m, open }))} />
    </main>
  );
};

export default CareersAdminPage;
