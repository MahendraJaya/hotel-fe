import axios from "axios";

//api tanpa auth
export const publicApi = axios.create({
  baseURL: "http://localhost:3001/api",
});

//api dengan auth
export const privateApi = axios.create({
  baseURL: "http://localhost:3001/api",
});

privateApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

privateApi.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  },
);
