import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
//捕获双击路由错误
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};
//捕获双击路由错误
const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err);
};

import routes from "./routes";

const router = new VueRouter({
  routes,
});

import store from "@/store/index.js";
router.beforeEach((to, from, next) => {
  document.title = to.meta.title + "-王者荣耀后台管理系统";
  /* 如果未找到路由，跳转404 */
  if (!to.path) {
    next("/404");
    return;
  }
  /* 如果本地存在token，但状态为false，则自动登录 */
  if (!store.state.userStatus && store.state.wzryToken) {
    store.dispatch("userInfo").then(() => {
      // 如果是想进入登录页面，则直接跳转到首页
      if (to.meta.noVerify) {
        next("/");
        return;
      }
      next();
      Vue.prototype.$tip("自动登录成功");
    });
    return;
  }
  /* 如果状态为 true、则正常跳转 */
  if (store.state.userStatus === true) {
    //如果路由不需要验证，则跳转到首页
    if (to.meta.noVerify) {
      next("/");
      return;
    }
    next();
    return;
  }
  /* 如果不存在token，则跳转登录 */
  if (!store.state.wzryToken) {
    // 如果是想进入登录页面，则直接进入
    if (to.meta.noVerify) {
      next();
      return;
    }
    next("/login");
  }
});
export default router;
