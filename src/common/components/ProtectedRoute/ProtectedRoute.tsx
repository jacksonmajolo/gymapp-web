import { useAuth } from "@admin/contexts/AuthContext";
import { useUserCan } from "@common/hooks/UserCan";
import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  guardName?: string;
  role?: string;
  children: ReactNode;
}

export function ProtectedRoute({ guardName, role, children }: ProtectedRouteProps) {
  const { user } = useAuth();
  
  const prefixRoute = (guardName == "admin" ? "/admin" : (guardName == "client" ? "/client" : "/"));

  if (!user) {
    return (
      <Navigate to={prefixRoute + '/login'} replace />
    );
  }
  
  if (role) {
    const containRole = useUserCan(user, role);
    if (!containRole) {
      return (
        <Navigate to={prefixRoute + '/missing-permission'} replace />
      );
    }
  }

  return (
    <>{children}</>
  );
}