import { getReq, postReq, patchReq, deleteReq } from "@/api/network";

//#####··········GET请求··········#####//
// let { id, _page, _limit, token } = data;
//####········获取英雄········####//
export const getHeros = (data) => getReq("/heroList", data);

//#####··········POST请求··········#####//
//####········添加英雄········####//
export const addHero = (data) => postReq("/heroList", data);

//#####··········PATCH请求··········#####//
//####········修改英雄········####//
export const updateHero = (id) => patchReq(`/heroList/${id}`);

//#####··········DELETE请求··········#####//
//####········删除英雄········####//
export const delHero = (id) => deleteReq(`/heroList/${id}`);
