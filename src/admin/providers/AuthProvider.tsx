import { AuthContext } from "@admin/contexts/AuthContext";
import type { Authenticatable } from "@common/types/Authenticatable";
import type { UserAdmin } from "@admin/types/UserAdmin";
import { useEffect, useState } from "react";

type AuthProviderProps = {
  children: React.ReactNode;
  adapter: Authenticatable;
};

export function AuthProvider({ children, adapter }: AuthProviderProps) {
  const [isReady, setIsReady] = useState(false);

  const [user, setUser] = useState<UserAdmin | null>(adapter.getUser());

  useEffect(() => {
    (async () => {
      await adapter.initialize();
      setUser(adapter.getUser());
      setIsReady(true);
    })();
  }, [adapter]);

  if (!isReady) return null;

  return (
    <AuthContext.Provider
      value={{
        user,
        login: () => adapter.login(),
        logout: () => adapter.logout(),
        getAccessToken: () => adapter.getAccessToken(),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}