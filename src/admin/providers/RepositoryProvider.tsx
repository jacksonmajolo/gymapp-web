import { RepositoryContext } from "@admin/contexts/RepositoryContext";
import { CountryRepositoryMock } from "@admin/mocks/CountryRepositoryMock";
import { CountryRepository } from "@admin/repositories/CountryRepository";

const repositories = {
  countryRepository: new CountryRepositoryMock(),
};

export const RepositoryProvider = ({ children }: { children: React.ReactNode }) => (
  <RepositoryContext.Provider value={repositories}>
    {children}
  </RepositoryContext.Provider>
);