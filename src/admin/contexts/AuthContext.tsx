import { createContext, useContext } from "react";
import type { UserAdmin } from "@admin/types/UserAdmin";

export type AuthContextType = {
  user: UserAdmin | null;
  login: () => Promise<void>;
  logout: () => Promise<void>;
  getAccessToken: () => string | null;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  
  return context;
};