import { type State } from "@admin/types/State";
import { type IRecordService, RecordService } from "@common/base/RecordService";
import { type IRecordRepository } from "@common/base/RecordRepository";

export interface IStateService extends IRecordService<State> {}

export class StateService
  extends RecordService<State>
  implements IStateService {
  constructor(repository: IRecordRepository<State>) {
    super(repository);
  }
}
