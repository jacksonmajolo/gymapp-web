import {type IRecordRepository, RecordRepository} from "@common/base/RecordRepository";
import { GymAppCoreAdminApi } from "@admin/api/GymAppCoreAdminApi";
import type { Country } from "@admin/types/Country";

export interface ICountryRepository extends IRecordRepository<Country> {}

export class CountryRepository
  extends RecordRepository<Country>
  implements ICountryRepository
{
  constructor(api: GymAppCoreAdminApi) {
    super(api, "countries");
  }
}
