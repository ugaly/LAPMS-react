import axios from "axios";

 const base_url = 'http://192.168.15.38:8000/api/'


export default class API {
  static ax = axios; 
}

axios.defaults.baseURL = base_url;
axios.defaults.headers.common.Authorization = `Bearer ${sessionStorage.getItem("token")}`;

axios.interceptors.request.use((config) => {
  const source = axios.CancelToken.source();
  config.cancelToken = source.token;
  setTimeout(() => source.cancel('Timed out after 30s'), 86400000);
  return config;
});
