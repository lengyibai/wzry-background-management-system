import { getEpigraphTypes } from "./transfer.js";

//#####········获取铭文类型········#####//
export const getEpigraphType = (data) => {
  return new Promise((resolve) => {
    getEpigraphTypes(data).then((res) => {
      if (data) {
        resolve(res.data[0]);
      } else {
        resolve(res.data);
      }
    });
  });
};
