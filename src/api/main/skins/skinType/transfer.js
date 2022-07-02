import { getReq, postReq, patchReq, deleteReq } from "@/api/network";

//#####··········GET请求··········#####//
//####········获取皮肤类型········####//
export const getSkinTypes = (data) => getReq("/skinType", data);

//#####··········POST请求··········#####//
//####········添加皮肤类型········####//
export const addSkinType = (data) => postReq("/skinType", data);

//#####··········PATCH请求··········#####//
//####········修改皮肤类型········####//
export const updateSkinType = (id) => patchReq(`/skinType/${id}`);

//#####··········DELETE请求··········#####//
//####········删除皮肤类型········####//
export const delSkinType = (id) => deleteReq(`/skinType/${id}`);
