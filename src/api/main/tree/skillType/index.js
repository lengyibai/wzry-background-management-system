import { getSkillTypes } from "./transfer.js";

//#####········获取技能类型········#####//
export const getSkillType = data => {
  return new Promise(resolve => {
    getSkillTypes(data).then(res => {
      if (data) {
        resolve(res.data[0].name);
      } else {
        resolve(res.data);
      }
    });
  });
};
