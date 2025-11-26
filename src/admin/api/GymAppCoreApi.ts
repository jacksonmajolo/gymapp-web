import { Api } from "@common/api/Api";

export class GymAppCoreApi extends Api {
  constructor(pathUrl: string) {
    const baseUrl = import.meta.env.VITE_GYMAPP_CORE_ADMIN_API_URL ?? "";
    super(baseUrl + pathUrl);

    this.requestInterceptors();
  }

  public requestInterceptors(): void {
    this.axiosInstance.interceptors.request.use(
      (config) => {
        const token = null;
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
    );
  }
}