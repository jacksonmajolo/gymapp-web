import type { AuthContextType } from "@admin/contexts/AuthContext";
import { GymAppCoreApi } from "@common/api/GymAppCoreApi";

export class GymAppCoreAdminApi extends GymAppCoreApi {
  constructor(auth: AuthContextType | null) {
    const baseURL = import.meta.env.VITE_GYMAPP_CORE_ADMIN_API_URL ?? "";
    super(baseURL);

    this.axiosInstance.interceptors.request.use(
      (config) => {
        const token = auth?.getAccessToken();
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        
        return config;
      },
    );
  }
}