import { getEpigraphEffects } from "./transfer.js";

//#####········获取铭文效果········#####//
export const getEpigraphEffect = data => {
  return new Promise(resolve => {
    getEpigraphEffects(data).then(res => {
      if (data) {
        resolve(res.data[0]);
      } else {
        resolve(res.data);
      }
    });
  });
};
