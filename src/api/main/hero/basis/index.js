import { getHeroLists } from "./transfer.js";

//#####········获取英雄基础········#####//
export const heroList = data => {
  return new Promise(resolve => {
    getHeroLists(data).then(res => {
      if (data) {
        resolve(res.data[0].data);
      } else {
        resolve(res.data);
      }
    });
  });
};
