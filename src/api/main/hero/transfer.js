import { getReq, postReq, patchReq, deleteReq } from "../../network/request.js";

//#####··········GET请求··········#####//
// let { id, _page, _limit, token } = data;
//####········获取英雄列表········####//
export const getHeroList = (data) => {
  return getReq("/heroList", data);
};
//####········获取英雄基本资料········####//
export const getHeroBasics = (data) => {
  return getReq("/basics", data);
};
//####········获取英雄皮肤········####//
export const getHeroSkins = (data) => {
  return getReq("/skins", data);
};
//####········获取英雄关系表········####//
export const getHeroRelations = (data) => {
  return getReq("/relations", data);
};
//####········获取英雄关系树········####//
export const getHeroAppellation = (data) => {
  return getReq("/appellation", data);
};
//####········获取英雄技能资料········####//
export const getHeroSkills = (data) => {
  return getReq("/skills", data);
};
//####········获取英雄故事········####//
export const getHeroStorys = (data) => {
  return getReq("/storys", data);
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
export const delHero = (data) => {
  return deleteReq("/heroList", data);
};
