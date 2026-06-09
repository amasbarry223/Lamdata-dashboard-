import { create } from "zustand";

export type PageKey =
  | "dashboard"
  | "campagnes"
  | "phrases"
  | "images"
  | "moderation"
  | "consensus"
  | "recompenses"
  | "paiements"
  | "export"
  | "parametres";

interface NavigationState {
  activePage: PageKey;
  setActivePage: (page: PageKey) => void;
}

export const useNavigation = create<NavigationState>((set) => ({
  activePage: "dashboard",
  setActivePage: (page) => set({ activePage: page }),
}));
