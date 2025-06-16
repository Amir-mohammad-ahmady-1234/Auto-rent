import { useState } from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [phone, setPhone] = useState<string | null>(null);
  const login = (p: string) => setPhone(p);
  const logout = () => setPhone(null);

  return (
    <AuthContext.Provider value={{ phone, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
