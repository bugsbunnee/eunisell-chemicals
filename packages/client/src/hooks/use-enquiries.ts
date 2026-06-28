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

export const useEnquiries = () => {
  const query = useEnquiriesStore((store) => store.query);

  return useQuery({
    queryKey: ['enquiries', query],
    queryFn: () => http.get<PaginatedApiResponse<Enquiry>>('/api/v1/enquiries', { params: query }).then((response) => response.data),
  });
};
