import { createContext } from 'react';
import type { User } from '@supabase/supabase-js';

export type AuthContextType = {
  user: User | null;
};

export const AuthContext = createContext<AuthContextType>({ user: null });
