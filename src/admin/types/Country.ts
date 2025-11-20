import type { Record } from "@common/types/Record";

export interface Country extends Record {
  code?: string;
  name: string;
  active: boolean;
}
