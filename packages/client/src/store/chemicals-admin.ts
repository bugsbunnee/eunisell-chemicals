import { create } from 'zustand';

interface ChemicalsQuery {
  page?: number;
  search?: string;
  category?: string;
  status?: string;
  featured?: boolean;
}

interface ChemicalsAdminStore {
  query: ChemicalsQuery;
  onChangeQuery: (query: Partial<ChemicalsQuery>) => void;
}

const useChemicalsAdminStore = create<ChemicalsAdminStore>((set) => ({
  query: {},
  onChangeQuery: (query) => set((store) => ({ ...store, query: { ...store.query, ...query } })),
}));

export default useChemicalsAdminStore;
