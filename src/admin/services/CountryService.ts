import { type Country } from "@admin/types/Country";
import { type IRecordService, RecordService } from "@common/base/RecordService";

export interface ICountryService extends IRecordService<Country> {}

export class CountryService
  extends RecordService<Country>
  implements ICountryService {}
