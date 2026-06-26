import { create } from 'zustand';
import { getUser, logout, persistUser } from '../services/auth';

import type { User } from '../lib/entities';

export interface Auth {
  token: string;
  user: User;
}

export interface AuthStore {
  auth: Auth | null;
  login: (auth: Auth) => void;
  logout: () => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  auth: getUser(),
  login: (auth) => {
    set((store) => ({ ...store, auth }));
    persistUser(auth);
  },
  logout: () => {
    set((store) => ({ ...store, auth: null }));
    logout();

    window.location.href = '/';
  },
}));

export default useAuthStore;
