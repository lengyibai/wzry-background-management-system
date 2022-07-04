import { getRelationTypes } from "./transfer.js";

//#####········获取关系类型········#####//
export const getRelationType = data => {
  return new Promise(resolve => {
    getRelationTypes(data).then(res => {
      if (data) {
        resolve(res.data[0]);
      } else {
        resolve(res.data);
      }
    });
  });
};
