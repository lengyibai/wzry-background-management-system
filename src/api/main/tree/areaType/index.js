import { getAreaTypes } from "./transfer.js";

//#####········获取区域类型········#####//
export const getAreaType = data => {
  return new Promise(resolve => {
    getAreaTypes(data).then(res => {
      if (data) {
        resolve(res.data[0].name);
      } else {
        resolve(res.data);
      }
    });
  });
};
