import React, { createContext } from 'react';

type AuthContextType = {
  phone: string | null;
  setPhone: React.Dispatch<React.SetStateAction<string | null>>;
  login: (phone: string) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  phone: null,
  setPhone: () => {
    throw new Error('setPhone is not implemented');
  },
  login: () => {
    throw new Error('login is not implemented');
  },
  logout: () => {
    throw new Error('logout is not implemented');
  },
});
