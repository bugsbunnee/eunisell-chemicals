import { useQuery } from '@tanstack/react-query';

import dayjs from '../lib/dayjs';
import http from '../services/http';

import type { PaginatedApiResponse } from '../lib/entities';
import type { CareerRole } from '../components/features/careers-admin/model/types';
import type { CareerOpeningInput } from '../components/features/careers-admin/model/schema';

export interface CareerQuery {
  page?: number;
  limit?: number;
  search?: string;
  dept?: string;
  jobType?: string;
  level?: string;
  status?: string;
  featured?: string;
}

export interface CareerStats {
  open: number;
  draft: number;
  closed: number;
  featured: number;
}

export interface RawCareerOpening extends CareerOpeningInput {
  id: string;
}

export const mapRole = (raw: RawCareerOpening): CareerRole => {
  return {
    id: raw.id,
    title: raw.title,
    location: raw.location,
    jobType: raw.jobType,
    level: raw.level,
    department: raw.department,
    postedDate: dayjs(raw.postedDate).format('DD MMM YYYY'),
    deadline: dayjs(raw.deadline).format('DD MMM YYYY'),
    featured: raw.featured,
    status: raw.status,
    applications: 0,
    appTrend: null,
  };
};

export interface CareerActivity {
  newApplicationsThisWeek: number;
  applicationsTrendPct: number;
  mostAppliedRole: { title: string; count: number } | null;
  rolesClosingSoon: number;
  draftsAwaitingPublish: number;
}

export const useCareerStats = () => {
  return useQuery({
    queryKey: ['career-stats'],
    queryFn: () => http.get<CareerStats>('/api/v1/careers/stats').then((r) => r.data),
  });
};

export const useCareerActivity = () => {
  return useQuery({
    queryKey: ['career-activity'],
    queryFn: () => http.get<CareerActivity>('/api/v1/careers/activity').then((response) => response.data),
  });
};

export const useCareerOpenings = (query: CareerQuery) => {
  return useQuery({
    queryKey: ['career-openings', query],
    queryFn: () => http.get<PaginatedApiResponse<RawCareerOpening>>('/api/v1/careers', { params: query }).then((r) => ({ data: r.data.data.map(mapRole), meta: r.data.meta })),
  });
};
