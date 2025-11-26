import axios from "axios";
import type { AxiosInstance } from "axios";

export class Api {  
  protected axiosInstance: AxiosInstance;

  constructor(baseURL: string) {
    this.axiosInstance = axios.create({
      baseURL,
      timeout: 10000,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  public async get<T>(
    url: string,
    params?: Record<string, any>,
  ): Promise<T | undefined> {
    console.log("get");
    console.log(url);
    console.log(params);

    return this.axiosInstance
      .get<T>(url, { params })
      .then((response) => response.data);
  }

  public async post<T>(url: string, data?: any): Promise<T> {
    console.log("post");
    console.log(url);
    console.log(data);

    return this.axiosInstance
      .post<T>(url, data)
      .then((response) => response.data);
  }

  public async put<T>(url: string, data?: any): Promise<T> {
    console.log("put");
    console.log(url);
    console.log(data);

    return this.axiosInstance
      .put<T>(url, data)
      .then((response) => response.data);
  }

  public async delete<T>(url: string): Promise<T | void> {
    console.log("delete");
    console.log(url);

    return this.axiosInstance.delete<T>(url).then((response) => response.data);
  }
}
