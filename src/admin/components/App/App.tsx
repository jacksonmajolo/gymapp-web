import Router from "@admin/routes";
import "./index.scss";
import { ServiceProvider } from "@/admin/providers/ServiceProvider";
import { RepositoryProvider } from "@/admin/providers/RepositoryProvider";

export const AdminApp = () => {
  return (
    <>
      <RepositoryProvider>
        <ServiceProvider>
          <Router />
        </ServiceProvider>
      </RepositoryProvider>
    </>
  );
};
