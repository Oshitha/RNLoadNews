import axios from "axios";
import { ENV } from "../config/env";

const axiosInstance = axios.create({
  baseURL: ENV.API_BASE_URL, //"https://finnhub.io/api/v1",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
