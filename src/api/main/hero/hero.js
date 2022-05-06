import Vue from "vue";

//#####··········网络请求··········#####//
//接口信息：{ 获取用户信息，修改用户 }
import { getHeroInfo } from "./transfer.js";

function tip(code, msg) {
  if (code === 200) {
    Vue.prototype.$tip(msg);
  } else {
    Vue.prototype.$tip(msg, "danger");
  }
}

//#####··········基本··········#####//
//####········登录········####//
export function heroList() {
  return getHeroInfo().then((res) => {
    return new Promise((resolve) => {
      resolve(res);
    });
  });
}
