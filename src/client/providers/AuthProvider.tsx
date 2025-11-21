import { AuthContext } from "@client/contexts/AuthContext";
import type { AuthAdapter } from "@common/types/Authenticatable";
import type { UserClient } from "@client/types/UserClient";
import { useEffect, useState } from "react";

type AuthProviderProps = {
  children: React.ReactNode;
  adapter: AuthAdapter;
};

export function AuthProvider({ children, adapter }: AuthProviderProps) {
  const [isReady, setIsReady] = useState(false);

  const [isAuthenticated, setIsAuthenticated] = useState(
    adapter.isAuthenticated()
  );

  const [user, setUser] = useState<UserClient | null>(adapter.getUser());

  useEffect(() => {
    (async () => {
      await adapter.initialize();
      setIsAuthenticated(adapter.isAuthenticated());
      setUser(adapter.getUser());
      setIsReady(true);
    })();
  }, []);

  if (!isReady) return null;

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login: () => adapter.login(),
        logout: () => adapter.logout(),
        getAccessToken: () => adapter.getAccessToken(),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}