import type { FilterParam } from "./FilterParam";
import type { OrderParam } from "./OrderParam";

export interface ListParam {
  _per_page?: number,
  _page?: number,
  _filters?: FilterParam[],
  _orders?: OrderParam[],
  _with?: string[],
}
