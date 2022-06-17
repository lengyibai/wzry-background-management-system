// import Vue from "vue";

//#####··········网络请求··········#####//
//接口信息：{ 获取英雄信息 }
import {
  getHeroList,
  getHeroSkills,
  getHeroStorys,
  getHeroRelations,
  getHeroAppellation,
} from "./transfer.js";

// function tip(code, msg) {
//   if (code === 200) {
//     Vue.prototype.$tip(msg);
//   } else {
//     Vue.prototype.$tip(msg, "danger");
//   }
// }

//#####··········基本··········#####//
//####········获取英雄列表········####//
export const heroList = () => {
  return getHeroList();
};
//####········获取英雄关系树········####//
export const heroAppellation = () => {
  return getHeroAppellation();
};
//####········获取英雄关系表········####//
export const heroRelations = () => {
  return getHeroRelations();
};
//####········获取英雄技能资料········####//
export const heroSkills = () => {
  return getHeroSkills();
};
//####········获取英雄故事········####//
export const heroStorys = () => {
  return getHeroStorys();
};
