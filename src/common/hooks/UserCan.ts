import type { User } from "@common/types/User";

export function useUserCan(user: User, permission: string) {
  return user?.permissions.includes(permission) ?? false;
}