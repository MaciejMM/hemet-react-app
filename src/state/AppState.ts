import { create } from "zustand";

interface AppState {
  showMenu: boolean;
  setShowMenu: (showMenu: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  showMenu: false,
  setShowMenu: (showMenu) =>
    set((state) => ({
      ...state,
      showMenu,
    })),
}));
