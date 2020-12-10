import { AxiosRequestConfig } from "axios";

export const serverConfig: AxiosRequestConfig = {
    baseURL: process.env.REACT_APP_API_URI,
};
