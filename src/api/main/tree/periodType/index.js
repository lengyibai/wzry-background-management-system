import { getPeriodTypes } from "./transfer.js";

//#####········获取时期类型········#####//
export const getPeriodType = data => {
  return new Promise(resolve => {
    getPeriodTypes(data).then(res => {
      if (data) {
        resolve(res.data[0].name);
      } else {
        resolve(res.data);
      }
    });
  });
};
