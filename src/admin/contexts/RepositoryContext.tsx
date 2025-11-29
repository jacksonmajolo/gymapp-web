import { createContext, useContext } from "react";
import type { ICountryRepository } from "@admin/repositories/CountryRepository";
import type { IStateRepository } from "@admin/repositories/StateRepository";

type RepositoryContextType = {
  countryRepository: ICountryRepository;
  stateRepository: IStateRepository;
};

export const RepositoryContext = createContext<RepositoryContextType | null>(null);

export const useRepositories = () => {
  const context = useContext(RepositoryContext);
  if (!context) {
    throw new Error("useRepositories must be used within RepositoryProvider");
  }
  
  return context;
};