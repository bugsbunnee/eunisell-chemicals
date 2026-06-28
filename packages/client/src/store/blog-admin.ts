import { create } from 'zustand';

interface BlogQuery {
  page?: number;
  limit?: number;
  search?: string;
  status?: string;
  category?: string;
}

interface BlogAdminStore {
  query: BlogQuery;
  onChangeQuery: (query: Partial<BlogQuery>) => void;
}

const useBlogAdminStore = create<BlogAdminStore>((set) => ({
  query: {},
  onChangeQuery: (query) => set((store) => ({ ...store, query: { ...store.query, ...query } })),
}));

export default useBlogAdminStore;
