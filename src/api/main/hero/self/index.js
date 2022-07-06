//#####··········资料聚合处理··········#####//
/* 类型效果 */
//接口信息：{ 区域类型 }
import { getAreaType } from "@/api/main/tree/areaType";
//接口信息：{ 阵营类型 }
import { getCampType } from "@/api/main/tree/campType";
//接口信息：{ 能量类型 }
import { getEnergyType } from "@/api/main/tree/energyType";
//接口信息：{ 身份类型 }
import { getIdentityType } from "@/api/main/tree/identityType";
//接口信息：{ 定位类型 }
import { getLocationType } from "@/api/main/tree/locationType";
//接口信息：{ 时期类型 }
import { getPeriodType } from "@/api/main/tree/periodType";
//接口信息：{ 职业类型 }
import { getProfessionType } from "@/api/main/tree/professionType";
//接口信息：{ 特长类型 }
import { getSpecialtyType } from "@/api/main/tree/specialtyType";

/* 详细信息 */
//接口信息：{ 英雄故事 }
import { getGameStory } from "@/api/main/hero/gameStory";
//接口信息：{ 历史故事 }
import { getHistory } from "@/api/main/hero/history";
//接口信息：{ 语音列表 }
import { getVoice } from "@/api/main/hero/voice";
//接口信息：{ 皮肤列表 }
import { getSkin } from "@/api/main/hero/skin";
//接口信息：{ 技能列表 }
import { getSkill } from "@/api/main/hero/skill";

//#####········获取英雄列表········#####//
import { getHeros } from "./transfer.js";

export const hero = data => {
  return new Promise(resolve => {
    getHeros(data).then(async res => {
      if (data) {
        const params = { id: data.id };
        /* 类型效果 */
        const k1 = [
          "area",
          "camp",
          "energy",
          "identity",
          "location",
          "period",
          "profession",
          "specialty",
        ];
        const r1 = [
          getAreaType,
          getCampType,
          getEnergyType,
          getIdentityType,
          getLocationType,
          getPeriodType,
          getProfessionType,
          getSpecialtyType,
        ];
        for (let i = 0; i < r1.length; i++) {
          res.data[0][k1[i]] = await r1[i]({ id: res.data[0][k1[i]] });
        }

        /* 详细信息 */
        const k2 = ["voices", "skins", "skills", "gameStory", "history"];
        const r2 = [getVoice, getSkin, getSkill, getGameStory, getHistory];
        for (let i = 0; i < r2.length; i++) {
          res.data[0][k2[i]] = await r2[i](params);
        }

        resolve(res.data[0]);
      } else {
        resolve(res.data);
      }
    });
  });
};
