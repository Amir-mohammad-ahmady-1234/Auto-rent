import { useState } from 'react';
import { AuthContext } from './AuthContext';

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [phone, setPhone] = useState<string | null>(
    localStorage.getItem('phoneNumber')
  );

  const login = (phone: string) => {
    setPhone(phone);
  };

  const logout = () => {
    setPhone(null);
    localStorage.removeItem('phoneNumber');
  };

  return (
    <AuthContext.Provider value={{ phone, setPhone, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
