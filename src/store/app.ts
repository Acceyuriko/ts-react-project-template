import { create } from 'zustand';

export interface AppState {
  someState: string;
  setSomeState: (state: string) => void;
}

export const useAppStore = create<AppState>()((set) => ({
  someState: '',
  setSomeState: (state) => set({ someState: state }),
}));
