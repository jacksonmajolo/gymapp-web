import type { User } from "@common/types/User";

export type Authenticatable = {
  initialize(): Promise<void>;
  login(options?: any): Promise<void>;
  logout(): Promise<void>;
  getAccessToken(): string | null;
  isAuthenticated(): boolean;
  getUser(): User | null;
};