// import Vue from "vue";

//#####··········网络请求··········#####//
//接口信息：{ 获取英雄信息 }
import { getHeroInfo } from "./transfer.js";

// function tip(code, msg) {
//   if (code === 200) {
//     Vue.prototype.$tip(msg);
//   } else {
//     Vue.prototype.$tip(msg, "danger");
//   }
// }

//#####··········基本··········#####//
//####········获取英雄列表········####//
export function heroList() {
  return getHeroInfo();
}
