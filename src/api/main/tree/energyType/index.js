import { getEnergyTypes } from "./transfer.js";

//#####········获取能量类型········#####//
export const getEnergyType = data => {
  return new Promise(resolve => {
    getEnergyTypes(data).then(res => {
      if (data) {
        resolve(res.data[0].name);
      } else {
        resolve(res.data);
      }
    });
  });
};
