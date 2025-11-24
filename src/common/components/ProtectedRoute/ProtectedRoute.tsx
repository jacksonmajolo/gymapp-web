import { useAuth } from "@admin/contexts/AuthContext";
import { useUserCan } from "@common/hooks/UserCan";
import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  guardName?: string;
  permission?: string;
  children: ReactNode;
}

export function ProtectedRoute({ guardName, permission, children }: ProtectedRouteProps) {
  const { user } = useAuth();
  
  const prefixRoute = (guardName == "admin" ? "/admin" : (guardName == "client" ? "/client" : "/"));

  if (!user) {
    return (
      <Navigate to={prefixRoute + '/login'} replace />
    );
  }
  
  if (permission) {
    const containPermission = useUserCan(user, permission);
    if (!containPermission) {
      return (
        <Navigate to={prefixRoute + '/missing-permission'} replace />
      );
    }
  }

  return (
    <>{children}</>
  );
}