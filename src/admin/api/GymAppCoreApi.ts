import { Api } from "@common/api/Api";

export class GymAppCoreApi extends Api {
  constructor(pathUrl: string) {
    const baseUrl = import.meta.env.VITE_GYMAPP_CORE_ADMIN_API_URL ?? "";
    super(baseUrl + pathUrl);
  }
}
