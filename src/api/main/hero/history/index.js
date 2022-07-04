import { getHistorys } from "./transfer.js";

//#####········获取历史故事········#####//
export const getHistory = data => {
  return new Promise(resolve => {
    getHistorys(data).then(res => {
      if (data) {
        resolve(res.data[0]);
      } else {
        resolve(res.data);
      }
    });
  });
};
