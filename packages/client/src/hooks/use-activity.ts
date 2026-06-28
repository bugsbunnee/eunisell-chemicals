import { useQuery } from '@tanstack/react-query';
import http from '../services/http';

export interface ActivityLogItem {
  id: string;
  action: string;
  category: string;
  description: string;
  adminId: string | null;
  createdAt: string;
  updatedAt: string;
}

export const useActivity = (params?: { category?: string; limit?: number }) => {
  return useQuery({
    queryKey: ['activity', params],
    queryFn: () => http.get<ActivityLogItem[]>('/api/v1/activity', { params }).then((r) => r.data),
  });
};
