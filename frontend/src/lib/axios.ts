import axios from "axios";
import useAuthStore from "../features/auth/auth.store";

const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "production"
      ? "/api/v1"
      : "http://localhost:3000/api/v1",
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        await useAuthStore.getState().refresh();
      } catch (error) {
        useAuthStore.getState().logout();
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
