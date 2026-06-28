import { create } from 'zustand';

interface SolutionsQuery {
  page?: number;
  search?: string;
  category?: string;
  status?: string;
}

interface SolutionsAdminStore {
  query: SolutionsQuery;
  onChangeQuery: (query: Partial<SolutionsQuery>) => void;
}

const useSolutionsAdminStore = create<SolutionsAdminStore>((set) => ({
  query: {},
  onChangeQuery: (query) => set((store) => ({ ...store, query: { ...store.query, ...query } })),
}));

export default useSolutionsAdminStore;
