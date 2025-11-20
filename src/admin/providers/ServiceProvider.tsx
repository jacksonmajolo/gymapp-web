import { useMemo } from "react";
import { CountryService } from "@admin/services/CountryService";
import { useRepositories } from "@admin/contexts/RepositoryContext";
import { ServiceContext } from "@admin/contexts/ServiceContext";

export function ServiceProvider({ children }: { children: React.ReactNode }) {
  const { countryRepository } = useRepositories();
  
  const services = useMemo(
    () => ({
      countryService: new CountryService(countryRepository),
    }),
    [countryRepository]
  );
  
  return (
    <ServiceContext.Provider value={services}>
      {children}
    </ServiceContext.Provider>
  );
}