import axios from 'axios';

//#####··········域名管理··········#####//
const server = axios.create({
  baseURL: 'http://localhost:3000',
  time: 10000
});

//#####·········配置默认请求··········#####//
//####········GET请求········####//
export function getReq(url, params) {
  return server({ method: 'GET', url, params });
}

//####········POST请求········####//
export function postReq(url, data) {
  return server({ method: 'POST', url, data });
}

//####········PUT请求········####//
export function putReq(url, data) {
  return server({ method: 'PUT', url, data });
}

//####········PATCH请求········####//
export function patchReq(url, data) {
  return server({ method: 'PATCH', url, data });
}

//####········DELETE请求········####//
export function deleteReq(url) {
  return server({ method: 'DELETE', url });
}
