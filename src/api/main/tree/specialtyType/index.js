import { getSpecialtyTypes } from "./transfer.js";

//#####········获取特长类型········#####//
export const getSpecialtyType = data => {
  return new Promise(resolve => {
    getSpecialtyTypes(data).then(res => {
      if (data) {
        resolve(res.data[0].name);
      } else {
        resolve(res.data);
      }
    });
  });
};
