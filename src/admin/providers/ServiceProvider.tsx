import { useMemo } from "react";
import { CountryService } from "@admin/services/CountryService";
import { useRepositories } from "@admin/contexts/RepositoryContext";
import { ServiceContext } from "@admin/contexts/ServiceContext";
import { StateService } from "@admin/services/StateService";

export function ServiceProvider({ children }: { children: React.ReactNode }) {
  const { countryRepository } = useRepositories();
  const { stateRepository } = useRepositories();
  
  const services = useMemo(
    () => ({
      countryService: new CountryService(countryRepository),
      stateService: new StateService(stateRepository),
    }),
    [countryRepository, stateRepository]
  );
  
  return (
    <ServiceContext.Provider value={services}>
      {children}
    </ServiceContext.Provider>
  );
}