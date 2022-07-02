import { getReq, postReq, patchReq, deleteReq } from "@/api/network";

//#####··········GET请求··········#####//
//####········获取铭文效果········####//
export const getEpigraphEffects = (data) => getReq("/epigraphEffect", data);

//#####··········POST请求··········#####//
//####········添加铭文效果········####//
export const addEpigraphEffect = (data) => postReq("/epigraphEffect", data);

//#####··········PATCH请求··········#####//
//####········修改铭文效果········####//
export const updateEpigraphEffect = (id) => patchReq(`/epigraphEffect/${id}`);

//#####··········DELETE请求··········#####//
//####········删除铭文效果········####//
export const delEpigraphEffect = (id) => deleteReq(`/epigraphEffect/${id}`);
