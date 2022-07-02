import { getSkins } from "./transfer.js";

//#####········获取皮肤········#####//
export const getSkin = (data) => {
  return new Promise((resolve) => {
    getSkins(data).then((res) => {
      if (data) {
        resolve(res.data[0]);
      } else {
        resolve(res.data);
      }
    });
  });
};
