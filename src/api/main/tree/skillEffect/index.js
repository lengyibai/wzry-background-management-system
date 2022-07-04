import { getSkillEffects } from "./transfer.js";

//#####········获取技能效果········#####//
export const getSkillEffect = data => {
  return new Promise(resolve => {
    getSkillEffects(data).then(res => {
      if (data) {
        resolve(res.data[0]);
      } else {
        resolve(res.data);
      }
    });
  });
};
