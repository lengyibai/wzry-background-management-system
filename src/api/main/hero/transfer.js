import { getReq, postReq, patchReq, deleteReq } from "../../network/request.js";

//#####··········GET请求··········#####//
// let { id, _page, _limit, token } = data;
//####········获取英雄列表········####//
export const getHeroList = (data) => getReq("/heroList", data);
//####········获取英雄基本资料········####//
export const getHeroBasics = (data) => getReq("/basics", data);
//####········获取英雄皮肤········####//
export const getHeroSkins = (data) => getReq("/skins", data);
//####········获取英雄皮肤类型········####//
export const getHeroSkinType = (data) => getReq("/skinType", data);
//####········获取英雄关系表········####//
export const getHeroRelations = (data) => getReq("/relations", data);
//####········获取英雄关系树········####//
export const getHeroAppellation = (data) => getReq("/appellation", data);
//####········获取英雄技能资料········####//
export const getHeroSkills = (data) => getReq("/skills", data);
//####········获取英雄技能类型········####//
export const getHeroSkillType = (data) => getReq("/skillType", data);
//####········获取英雄技能效果········####//
export const getHeroSkillEffect = (data) => getReq("/skillEffect", data);
//####········获取英雄故事········####//
export const getHeroStorys = (data) => getReq("/storys", data);

//#####··········POST请求··········#####//
//####········注册英雄········####//
export const addHero = (data) => postReq("/heroList", data);

//#####··········PATCH请求··········#####//
//####········修改英雄信息········####//
export const updateHero = (id, data) => patchReq(`/heroList/${id}`, data);

//#####··········DELETE请求··········#####//
//####········删除英雄········####//
export const delHero = (data) => deleteReq("/heroList", data);
