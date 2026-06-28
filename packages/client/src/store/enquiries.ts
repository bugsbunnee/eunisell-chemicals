import { create } from 'zustand';

interface EnquiryQuery {
  page?: number;
  limit?: number;
  search?: string;
  status?: string;
  priority?: string;
  enquiryType?: string;
}

interface EnquiryStore {
  query: EnquiryQuery;
  onChangeQuery: (query: Partial<EnquiryQuery>) => void;
}

const useEnquiriesStore = create<EnquiryStore>((set) => ({
  query: {},
  onChangeQuery: (query) => set((store) => ({ ...store, query: { ...store.query, ...query } })),
}));

export default useEnquiriesStore;
