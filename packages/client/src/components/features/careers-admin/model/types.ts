import type { Job, CareerStatus } from '../../../../lib/entities';

export type { CareerStatus };

/** Lightweight projection of a Job used by the careers admin roles table. */
export interface CareerRole extends Pick<Job, 'id' | 'title' | 'location' | 'jobType' | 'level' | 'department' | 'postedDate' | 'deadline' | 'featured' | 'status'> {
  applications: number;
  appTrend: 'up' | 'down' | null;
}
