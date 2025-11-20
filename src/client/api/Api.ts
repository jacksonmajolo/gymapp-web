import { Api } from "@common/api/Api";

export class ClientApi extends Api {
  constructor(pathUrl: string) {
    const baseUrl = import.meta.env.VITE_APP_CLIENT_API_URL ?? "";
    super(baseUrl + pathUrl);
  }
}
