import { getIdentityTypes } from "./transfer.js";

//#####········获取身份类型········#####//
export const getIdentityType = data => {
  return new Promise(resolve => {
    getIdentityTypes(data).then(res => {
      if (data) {
        resolve(res.data[0].name);
      } else {
        resolve(res.data);
      }
    });
  });
};
