import { getProfessionTypes } from "./transfer.js";

//#####········获取职业类型········#####//
export const getProfessionType = data => {
  return new Promise(resolve => {
    getProfessionTypes(data).then(res => {
      if (data) {
        resolve(res.data[0].name);
      } else {
        resolve(res.data);
      }
    });
  });
};
