//#####··········资料聚合处理··········#####//
//接口信息：{ 皮肤类型 }
import { getSkinType } from "@/api/main/tree/skinType";

//#####········获取皮肤········#####//
import { getSkins } from "./transfer.js";

export const getSkin = data => {
  return new Promise(resolve => {
    getSkins(data).then(async res => {
      if (data) {
        // 设置皮肤类型
        for (let i = 0; i < res.data[0].data.length; i++) {
          res.data[0].data[i].type = await getSkinType({
            id: res.data[0].data[i].type,
          });
        }
        resolve(res.data[0].data);
      } else {
        resolve(res.data);
      }
    });
  });
};
