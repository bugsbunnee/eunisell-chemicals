import { useQuery } from '@tanstack/react-query';
import type { PaginatedApiResponse } from '../lib/entities';

import http from '../services/http';
import useEnquiriesStore from '../store/enquiries';

export enum EnquiryPriority {
  Normal = 'NORMAL',
  Urgent = 'URGENT',
}

export enum EnquiryStatus {
  New = 'NEW',
  InProgress = 'IN_PROGRESS',
  Closed = 'CLOSED',
  Pending = 'PENDING',
}

export interface Enquiry {
  id: string;
  fullName: string;
  company: string;
  jobTitle?: string;
  email: string;
  phone: string;
  country: string;
  industry: string;
  enquiryType: string;
  solutionArea: string;
  message: string;
  status: EnquiryStatus;
  priority: EnquiryPriority;
  createdAt: string;
  updatedAt: string;
}

export interface EnquiryStats {
  total: number;
  urgent: number;
  consultation: number;
  product: number;
  technical: number;
  laboratory: number;
  emergency: number;
}

export const useEnquiries = () => {
  const query = useEnquiriesStore((store) => store.query);

  return useQuery({
    queryKey: ['enquiries', query],
    queryFn: () => http.get<PaginatedApiResponse<Enquiry>>('/api/v1/enquiries', { params: query }).then((response) => response.data),
  });
};

export const useEnquiryStats = () => {
  return useQuery({
    queryKey: ['enquiry-stats'],
    queryFn: () => http.get<EnquiryStats>('/api/v1/enquiries/stats').then((r) => r.data),
  });
};

export const useLatestEnquiries = (params?: { status?: EnquiryStatus; limit?: number }) => {
  return useQuery({
    queryKey: ['enquiries-latest', params],
    queryFn: () => http.get<PaginatedApiResponse<Enquiry>>('/api/v1/enquiries', { params: { ...params, limit: params?.limit ?? 5 } }).then((r) => r.data.data),
  });
};
