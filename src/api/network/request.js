import Vue from "vue";
import axios from "axios";

//#####··········域名管理··········#####//
const server = axios.create({
  baseURL: "http://localhost:9527",
  time: 10000,
});

//#####·········配置默认请求··········#####//
//####········GET请求········####//
export function getReq(url, params) {
  return server({ method: "GET", url, params });
}

//####········POST请求········####//
export function postReq(url, data) {
  return server({ method: "POST", url, data });
}

//####········PUT请求········####//
export function putReq(url, data) {
  return server({ method: "PUT", url, data });
}

//####········PATCH请求········####//
export function patchReq(url, data) {
  return server({ method: "PATCH", url, data });
}

//####········DELETE请求········####//
export function deleteReq(url) {
  return server({ method: "DELETE", url });
}

//#####·········拦截器··········#####//
//####·······请求拦截器········####//
server.interceptors.request.use((config) => {
  Vue.prototype.$lybLoad.show();
  config.headers.authorization = localStorage.getItem("token");
  return config;
});
//####·······响应拦截器········####//
server.interceptors.response.use(
  (res) => {
    setTimeout(() => {
      Vue.prototype.$lybLoad.close();
    }, 500);
    return res;
  },
  () => {
    Vue.prototype.$lybLoad.close();
    Vue.prototype.$tip("请求失败！", "danger");
  },
);
