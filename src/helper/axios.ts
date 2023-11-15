import axios, {
  AxiosHeaders,
  AxiosRequestConfig,
  AxiosResponse,
  Method,
} from "axios";

const instance = axios.create({
  baseURL: "",
  timeout: 30000,
});

// 添加请求拦截器
instance.interceptors.request.use(
  (config) => {
    if (!config.headers.Authorization) {
      const token = JSON.parse(localStorage.getItem("token")) || "";
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

  const _config = data
    ? { method: _method, data, ...config }
    : { method: _method, ...config };

  return instance(url, _config);
}
