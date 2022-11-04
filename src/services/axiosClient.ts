import axios, { AxiosError } from "axios";
import { TOKEN } from "ultis/setting";
import store from "../store/configStore";

const axiosClient = axios.create({
  baseURL: "https://movienew.cybersoft.edu.vn/api",
  headers: {
    TokenCybersoft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNzEiLCJIZXRIYW5TdHJpbmciOiIxMS8xMi8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NzA3MTY4MDAwMDAiLCJuYmYiOjE2NDU5ODEyMDAsImV4cCI6MTY3MDg2NDQwMH0.hImF3FD5ezlSpmo_fyOBeTlwLGcUfxyEeZIRIddaRFE",
  },
});

// request
axiosClient.interceptors.request.use((config) => {
  if (config.headers) {
    const accessToken = localStorage.getItem(TOKEN);
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
  }
  return config;
});

// response
axiosClient.interceptors.response.use(
  (response: any) => {
    return response.data.content;
  },
  (error: AxiosError<{ content: string }>) => {
    return error.response?.data?.content;
  }
);

export default axiosClient;
