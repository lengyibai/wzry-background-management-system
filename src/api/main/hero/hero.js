// import Vue from "vue";

//#####··········网络请求··········#####//
//接口信息：{ 获取英雄信息 }
import {
  getHeroList,
  getHeroSkins,
  getHeroSkinType,
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
export const heroList = (data) => {
  return new Promise((resolve) => {
    getHeroList(data).then((res) => {
      if (data) {
        resolve(res.data[0]);
      } else {
        resolve(res.data);
      }
    });
  });
};
//####········获取英雄皮肤········####//
export const heroSkins = (data) => {
  return new Promise((resolve) => {
    getHeroSkins(data).then((res) => {
      if (data) {
        resolve(res.data[0]);
      } else {
        resolve(res.data);
      }
    });
  });
};
//####········获取英雄皮肤类型········####//
export const heroSkinType = (data) => {
  return new Promise((resolve) => {
    getHeroSkinType(data).then((res) => {
      if (data) {
        resolve(res.data[0]);
      } else {
        resolve(res.data);
      }
    });
  });
};
//####········获取英雄关系树········####//
export const heroAppellation = (data) => getHeroAppellation(data);

//####········获取英雄关系表········####//
export const heroRelations = (data) => getHeroRelations(data);

//####········获取英雄技能资料········####//
export const heroSkills = (data) => getHeroSkills(data);

//####········获取英雄故事········####//
export const heroStorys = (data) => getHeroStorys(data);
