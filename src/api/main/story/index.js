import { getStorys } from "./transfer.js";

//#####········获取故事········#####//
export const getStory = data => {
  return new Promise(resolve => {
    getStorys(data).then(res => {
      if (data) {
        resolve(res.data[0]);
      } else {
        resolve(res.data);
      }
    });
  });
};
