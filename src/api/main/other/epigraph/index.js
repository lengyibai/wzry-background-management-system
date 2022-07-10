//#####··········资料聚合处理··········#####//
//接口信息：{ 铭文效果 }
import { getEpigraphEffect } from "@/api/main/tree/epigraphEffect";
//接口信息：{ 铭文类型 }
import { getEpigraphType } from "@/api/main/tree/epigraphType";

//#####········获取铭文········#####//
import { getEpigraphs } from "./transfer.js";

export const getEpigraph = data => {
  return new Promise(resolve => {
    getEpigraphs(data).then(async res => {
      for (let i = 0; i < res.data.length; i++) {
        let _item = res.data[i];
        _item.type = await getEpigraphType({ id: _item.type });
        for (let j = 0; j < _item.effect.length; j++) {
          _item.effect[j].type = await getEpigraphEffect({
            id: _item.effect[j].type,
          });
        }
      }
      if (data) {
        resolve(res.data[0]);
      } else {
        resolve(res.data);
      }
    });
  });
};
