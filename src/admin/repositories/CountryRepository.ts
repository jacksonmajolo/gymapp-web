import {type IRecordRepository, RecordRepository} from "@common/base/RecordRepository";
import { AdminApi } from "@admin/api/Api";
import type { Country } from "@admin/types/Country";

export interface ICountryRepository extends IRecordRepository<Country> {}

export class CountryRepository
  extends RecordRepository<Country>
  implements ICountryRepository
{
  constructor() {
    super(new AdminApi("countries"));
  }
}
