import { type Country } from "@admin/types/Country";
import { type IRecordService, RecordService } from "@common/base/RecordService";
import { type IRecordRepository } from "@common/base/RecordRepository";

export interface ICountryService extends IRecordService<Country> {}

export class CountryService
  extends RecordService<Country>
  implements ICountryService {
  constructor(repository: IRecordRepository<Country>) {
    super(repository);
  }
}
