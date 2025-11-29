import {type IRecordRepository, RecordRepository} from "@common/base/RecordRepository";
import { GymAppCoreAdminApi } from "@admin/api/GymAppCoreAdminApi";
import type { State } from "@admin/types/State";

export interface IStateRepository extends IRecordRepository<State> {}

export class StateRepository
  extends RecordRepository<State>
  implements IStateRepository
{
  constructor(api: GymAppCoreAdminApi) {
    super(api, "states");
  }
}
