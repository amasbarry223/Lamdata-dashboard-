import { create } from "zustand";

interface AuthState {
  isAuthenticated: boolean;
  user: {
    name: string;
    email: string;
    role: string;
    avatar: string;
  } | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

export const useAuth = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  login: (email: string, password: string) => {
    // Simple auth — accept any non-empty credentials for demo
    if (email && password) {
      set({
        isAuthenticated: true,
        user: {
          name: "Amadou Diallo",
          email: email,
          role: "Admin Principal",
          avatar: "AD",
        },
      });
      return true;
    }
    return false;
  },
  logout: () => {
    set({ isAuthenticated: false, user: null });
  },
}));
