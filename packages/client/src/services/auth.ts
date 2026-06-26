import Cookies from 'js-cookie';
import type { Auth } from '../store/auth';

const key = 'eunisell-admin-user';

export const persistUser = (auth: Auth) => {
  Cookies.set(key, JSON.stringify(auth), { expires: 30 });
};

export const logout = () => {
  Cookies.remove(key);
};

export const getUser = () => {
  const result = Cookies.get(key);
  return result ? JSON.parse(result) : null;
};
