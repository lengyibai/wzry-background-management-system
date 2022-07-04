import { getLocationTypes } from "./transfer.js";

//#####········获取定位类型········#####//
export const getLocationType = data => {
  return new Promise(resolve => {
    getLocationTypes(data).then(res => {
      if (data) {
        resolve(res.data[0].name);
      } else {
        resolve(res.data);
      }
    });
  });
};
