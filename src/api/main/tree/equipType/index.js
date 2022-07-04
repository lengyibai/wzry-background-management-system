import { getEquipTypes } from "./transfer.js";

//#####········获取装备类型········#####//
export const getEquipType = data => {
  return new Promise(resolve => {
    getEquipTypes(data).then(res => {
      if (data) {
        resolve(res.data[0]);
      } else {
        resolve(res.data);
      }
    });
  });
};
