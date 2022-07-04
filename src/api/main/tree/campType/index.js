import { getCampTypes } from "./transfer.js";

//#####········获取阵营类型········#####//
export const getCampType = data => {
  return new Promise(resolve => {
    getCampTypes(data).then(res => {
      if (data) {
        resolve(res.data[0].name);
      } else {
        resolve(res.data);
      }
    });
  });
};
