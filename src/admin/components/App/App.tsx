import Router from "@admin/routes";
import "./index.scss";
import { ServiceProvider } from "@admin/providers/ServiceProvider";
import { RepositoryProvider } from "@admin/providers/RepositoryProvider";
import { AuthProvider } from "@admin/providers/AuthProvider";
import { KeycloakAdminAuth } from "@admin/auth/KeycloakAdminAuth";

export const AdminApp = () => {  
  return (
    <>
    <AuthProvider adapter={ new KeycloakAdminAuth() }>
      <RepositoryProvider>
        <ServiceProvider>
          <Router />
        </ServiceProvider>
      </RepositoryProvider>
    </AuthProvider>
    </>
  );
};
