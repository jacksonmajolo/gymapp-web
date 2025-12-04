import type { FilterParam } from "./FilterParam";
import type { OrderParam } from "./OrderParam";

export interface IndexParam {
  _limit?: number,
  _offset?: number,
  _filters?: FilterParam[],
  _orders?: OrderParam[],
  _with?: string[],
}
