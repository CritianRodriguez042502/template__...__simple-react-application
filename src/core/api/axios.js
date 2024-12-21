import axios from "axios";

const createAxiosInstance = (base_url) => {
  const instance = axios.create({
    baseURL: base_url,
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
    timeout: 10000,
  });

  instance.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      alert("you are not logged in"); // or redirect to login page
    }

    console.log("request", config);
    return config;
  });

  instance.interceptors.response.use((config) => {
    console.log("response", config);
    return config;
  });

  return instance;
};

export const api = {
  instance_1: createAxiosInstance("https://rickandmortyapi.com/api"),
};
