import { getReq, postReq, patchReq, deleteReq } from "../../network/request.js";

//#####··········GET请求··········#####//
//####········获取装备列表········####//
export const getEquipList = (data) => getReq("/equip", data);

//#####··········POST请求··········#####//
//####········注册装备········####//
export const addEquip = (data) => postReq("/equip", data);

//#####··········PATCH请求··········#####//
//####········修改装备信息········####//
export const updateEquip = (id, data) => patchReq(`/equip/${id}`, data);

//#####··········DELETE请求··········#####//
//####········删除装备········####//
export const delEquip = (data) => deleteReq("/equip", data);
