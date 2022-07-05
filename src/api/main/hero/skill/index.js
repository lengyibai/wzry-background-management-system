//#####··········资料聚合处理··········#####//
/* 类型效果 */
//接口信息：{ 技能效果 }
import { getSkillEffect } from "@/api/main/tree/skillEffect";
//接口信息：{ 技能类型 }
import { getSkillType } from "@/api/main/tree/skillType";

import { getSkills } from "./transfer.js";

//#####········获取技能········#####//
export const getSkill = data => {
  return new Promise(resolve => {
    getSkills(data).then(async res => {
      let item = res.data[0].data;
      if (data) {
        for (let i = 0; i < item.length; i++) {
          let _item = item[i];
          if (_item.effect) {
            for (let j = 0; j < _item.effect.length; j++) {
              _item.effect[j].type = await getSkillEffect({
                id: _item.effect[j].type,
              });
            }
          }
        }
        for (let i = 0; i < item.length; i++) {
          let _item = item[i];
          if (_item.type) {
            for (let j = 0; j < _item.type.length; j++) {
              _item.type[j] = await getSkillType({
                id: _item.type[j],
              });
            }
          }
        }
        resolve(res.data[0].data);
      } else {
        resolve(res.data);
      }
    });
  });
};
