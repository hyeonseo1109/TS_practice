import axios, { AxiosError, type AxiosResponse } from "axios";

declare global {
  interface ImportMetaEnv {
    readonly VITE_BASE_URL: string;
  }
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

api.interceptors.response.use(
  <T = unknown>(response: AxiosResponse<T>): T => {
    return response.data;
  },
  (error: AxiosError) => Promise.reject(error)
);

// 제네릭 API 메소드
export const apiClient = {
  get: <T>(url: string) => api.get(url) as Promise<T>,
  post: <T, D = unknown>(url: string, data?: D) =>
    api.post(url, data) as Promise<T>,
  patch: <T, D = unknown>(url: string, data?: D) =>
    api.patch(url, data) as Promise<T>,
  put: <T, D = unknown>(url: string, data: D) =>
    api.put(url, data) as Promise<T>,
  delete: <T = void>(url: string) => api.delete(url) as Promise<T>,
};
