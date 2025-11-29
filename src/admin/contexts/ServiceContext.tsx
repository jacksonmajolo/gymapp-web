import { createContext, useContext } from "react";
import { type ICountryService } from "@admin/services/CountryService";
import type { IStateService } from "@admin/services/StateService";

type ServiceContextType = {
  countryService: ICountryService;
  stateService: IStateService;
};

export const ServiceContext = createContext<ServiceContextType | null>(null);

export const useServices = () => {
  const context = useContext(ServiceContext);
  if (!context) {
    throw new Error("useServices must be used within ServiceProvider");
  }
  
  return context;
};