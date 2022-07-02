import { getReq, postReq, patchReq, deleteReq } from "@/api/network";

//#####··········GET请求··········#####//
//####········获取皮肤········####//
export const getSkins = (data) => getReq("/skin", data);

//#####··········POST请求··········#####//
//####········添加皮肤········####//
export const addSkin = (data) => postReq("/skin", data);

//#####··········PATCH请求··········#####//
//####········修改皮肤········####//
export const updateSkin = (id) => patchReq(`/skin/${id}`);

//#####··········DELETE请求··········#####//
//####········删除皮肤········####//
export const delSkin = (id) => deleteReq(`/skin/${id}`);
