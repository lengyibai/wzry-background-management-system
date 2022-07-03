import { getSkills } from "./transfer.js";

//#####········获取技能········#####//
export const getSkill = data => {
  return new Promise(resolve => {
    getSkills(data).then(res => {
      if (data) {
        resolve(res.data[0]);
      } else {
        resolve(res.data);
      }
    });
  });
};
