import { getReq, postReq, patchReq, deleteReq } from "@/api/network";

//#####··········GET请求··········#####//
//####········获取关系类型········####//
export const getAppellationTypes = data => getReq("/appellationType", data);

//#####··········POST请求··········#####//
//####········添加关系类型········####//
export const addAppellationType = data => postReq("/appellationType", data);

//#####··········PATCH请求··········#####//
//####········修改关系类型········####//
export const updateAppellationType = (id, data) =>
  patchReq(`/appellationType/${id}`, data);

//#####··········DELETE请求··········#####//
//####········删除关系类型········####//
export const delAppellationType = id => deleteReq(`/appellationType/${id}`);
