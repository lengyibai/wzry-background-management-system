import { getReq, postReq, patchReq, deleteReq } from "../../network/request.js";

//#####··········GET请求··········#####//
//####········获取铭文列表········####//
export const getEpigraphList = (data) => getReq("/epigraph", data);

//#####··········POST请求··········#####//
//####········添加铭文········####//
export const addEpigraph = (data) => postReq("/epigraph", data);

//#####··········PATCH请求··········#####//
//####········修改铭文信息········####//
export const updateEpigraph = (id, data) => patchReq(`/epigraph/${id}`, data);

//#####··········DELETE请求··········#####//
//####········删除铭文········####//
export const delEpigraph = (data) => deleteReq("/epigraph", data);
