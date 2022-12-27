import axios from "axios";

export const baseURL = process.env.REACT_APP_SERVER;

export const instanceAxios = axios.create({
  baseURL: baseURL,
  // headers: { "Access-Control-Allow-Origin": "*" },
});


// instanceAxios.interceptors.request.use((config) => {
//   if (config.headers === undefined) return;
//   const token = getCookies("id");
//   config.headers["Authorization"] = `${token}`;
//   return config;
// });
