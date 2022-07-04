import { getEpigraphs } from "./transfer.js";

//#####··········基本··········#####//
//####········获取铭文········####//
export const getEpigraph = data => {
  return new Promise(resolve => {
    getEpigraphs(data).then(res => {
      if (data) {
        resolve(res.data[0]);
      } else {
        resolve(res.data);
      }
    });
  });
};
