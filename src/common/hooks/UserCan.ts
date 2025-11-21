import type { User } from "@common/types/User";

export function useUserCan(user: User, role: string) {
  return user?.roles.includes(role) ?? false;
}