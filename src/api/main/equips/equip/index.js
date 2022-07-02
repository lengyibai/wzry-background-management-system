import { getEquips } from "./transfer.js";

//#####········获取装备········#####//
export const getEquip = (data) => {
  return new Promise((resolve) => {
    getEquips(data).then((res) => {
      if (data) {
        resolve(res.data[0]);
      } else {
        resolve(res.data);
      }
    });
  });
};
