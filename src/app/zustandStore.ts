import { create } from 'zustand';

interface NameState {
  name: string;
  changeName: (newName: string) => void;
}

export const useUserNameStore = create<NameState>()((set) => ({
  name: 'بدون نام',
  changeName: (newName) => set((state) => ({ name: (state.name = newName) })),
}));
