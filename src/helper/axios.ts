import axios, {
  AxiosHeaders,
  AxiosRequestConfig,
  AxiosResponse,
  Method,
} from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8181/api",
  timeout: 30000,
});

// 添加请求拦截器
instance.interceptors.request.use(
  (config) => {
    const token = JSON.parse(localStorage.getItem("token")) || "";
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export function axiosRequest<D = any>(
  url: string,
  method?: Method,
  data?: D,
  config?: AxiosRequestConfig<D>
) {
  const _method = method || "get";

  return instance(url, { method: _method, ...config });
}
