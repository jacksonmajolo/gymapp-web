import { Api } from "@common/api/Api";
import type { ApiError } from "@common/exceptions/ApiError";

export class GymAppCoreApi extends Api {
  constructor(baseURL: string) {
    super(baseURL);

    this.axiosInstance.interceptors.request.use(
      (config) => {
        config.headers['Accept-Language'] = 'pt_BR'; // FIX-ME: dynamic language
        config.headers['Accept-Timezone'] = 'America/Sao_Paulo'; // FIX-ME: dynamic timezone

        return config;
      }
    );

    this.axiosInstance.interceptors.response.use(
      response => response,
      async (error) => {
        console.error("API Error:", error);
        if (error?.response?.status === 401) {
          // refresh token logic here
        }

        const apiError: ApiError = {
          status: error.response?.status,
          message:
            error.response?.data?.message ??
            error.message ??
            '',
          exception: error,
        };

        return Promise.reject(apiError);
      }
    );
  }
}