import { createContext, useContext } from "react";
import { type ICountryService } from "@/admin/services/CountryService";

type ServiceContextType = {
  countryService: ICountryService;
};

export const ServiceContext = createContext<ServiceContextType | null>(null);

export const useServices = () => {
  const context = useContext(ServiceContext);
  if (!context) {
    throw new Error("useServices must be used within ServiceProvider");
  }
  
  return context;
};