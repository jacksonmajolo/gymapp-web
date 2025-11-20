import { Api } from "@common/api/Api";

export class AdminApi extends Api {
  constructor(pathUrl: string) {
    const baseUrl = import.meta.env.VITE_APP_ADMIN_API_URL ?? "";
    super(baseUrl + pathUrl);
  }
}
