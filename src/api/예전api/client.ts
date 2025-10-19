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
