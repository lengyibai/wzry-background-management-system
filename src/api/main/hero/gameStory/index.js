import { getGameStorys } from "./transfer.js";

//#####········获取英雄故事········#####//
export const getGameStory = data => {
  return new Promise(resolve => {
    getGameStorys(data).then(res => {
      if (data) {
        resolve(res.data[0]);
      } else {
        resolve(res.data);
      }
    });
  });
};
