import { getHeros } from "./transfer.js";

// function tip(code, msg) {
//   if (code === 200) {
//     Vue.prototype.$tip(msg);
//   } else {
//     Vue.prototype.$tip(msg, "danger");
//   }
// }

//#####··········基本··········#####//
//####········获取英雄列表········####//
export const heroList = (data) => {
  return new Promise((resolve) => {
    getHeros(data).then((res) => {
      if (data) {
        resolve(res.data[0]);
      } else {
        resolve(res.data);
      }
    });
  });
};
