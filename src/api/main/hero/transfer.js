import { getReq, postReq, patchReq, deleteReq } from "../../network/request.js";

//#####··········GET请求··········#####//
//####········获取英雄信息········####//
export const getHeroInfo = (data = {}) => {
  // let { id, _page, _limit, token } = data;
  return getReq("/heroList", data);
};

//#####··········POST请求··········#####//
//####········注册英雄········####//
export const addHero = (data) => {
  return postReq("/heroList", data);
};

//#####··········PATCH请求··········#####//
//####········修改英雄信息········####//
export const updateHero = (id, data) => {
  return patchReq(`/heroList/${id}`, data);
};

//#####··········DELETE请求··········#####//
//####········删除英雄········####//
export const delHero = (data = {}) => {
  return deleteReq("/heroList", data);
};
