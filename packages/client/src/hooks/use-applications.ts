import { useQuery } from '@tanstack/react-query';

import http from '../services/http';

export interface ApplicationStats {
  total: number;
  shortlisted: number;
  reviewed: number;
  new: number;
  pending: number;
}

export const useApplicationStats = () => {
  return useQuery({
    queryKey: ['application-stats'],
    queryFn: () => http.get<ApplicationStats>('/api/v1/applications/stats').then((r) => r.data),
  });
};
