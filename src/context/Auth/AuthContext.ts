import { createContext } from 'react';

export type AuthContextType = {
  phone: string | null;
  login: (phone: string) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  phone: null,
  login: () => {},
  logout: () => {},
});
