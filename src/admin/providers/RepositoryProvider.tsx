import { GymAppCoreAdminApi } from "@admin/api/GymAppCoreAdminApi";
import { useAuth } from "@admin/contexts/AuthContext";
import { RepositoryContext } from "@admin/contexts/RepositoryContext";
import { CountryRepositoryMock } from "@admin/mocks/CountryRepositoryMock";
import { CountryRepository } from "@admin/repositories/CountryRepository";
import { StateRepositoryMock } from "@admin/mocks/StateRepositoryMock";
import { StateRepository } from "@admin/repositories/StateRepository";

export const RepositoryProvider = ({ children }: { children: React.ReactNode }) => {
  const auth = useAuth();

  const api = new GymAppCoreAdminApi(auth);

  const repositories = {
    // countryRepository: new CountryRepositoryMock(),
    countryRepository: new CountryRepository(api),

    // stateRepository: new StateRepositoryMock(),
    stateRepository: new StateRepository(api),
  };

  return (
    <RepositoryContext.Provider value={repositories}>
      {children}
    </RepositoryContext.Provider>
  )
};