import { getSkinTypes } from "./transfer.js";

//#####········获取皮肤类型········#####//
export const getSkinType = data => {
  return new Promise(resolve => {
    getSkinTypes(data).then(res => {
      if (data) {
        resolve(res.data[0].name);
      } else {
        resolve(res.data);
      }
    });
  });
};
