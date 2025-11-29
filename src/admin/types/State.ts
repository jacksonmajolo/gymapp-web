import type { Record } from "@common/types/Record";
import type { Country } from "./Country";

export interface State extends Record {
  code?: string;
  name: string;
  countryId: number;
  active: boolean;

  country?: Country;
}
