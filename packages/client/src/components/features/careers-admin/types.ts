export type CareerStatus = 'OPEN' | 'DRAFT' | 'CLOSED';

export interface CareerRole {
  id: string;
  title: string;
  location: string;
  jobType: string;
  level: string;
  department: string;
  postedDate: string;
  endDate: string;
  featured: boolean;
  status: CareerStatus;
  applications: number;
  appTrend: 'up' | 'down' | null;
}
