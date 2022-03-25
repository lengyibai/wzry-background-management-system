import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};
const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err);
};

import routes from './routes';

const router = new VueRouter({
  routes
});

import store from '@/store/index.js';
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  // 如果本地存在token，但状态为false，则自动登录
  if (!store.state.userStatus && store.state.token) {
    store
      .dispatch('userInfo')
      .then(() => {
        next();
      })
      .catch(() => {
        next();
      });
    // 如果是想进入登录页面，则直接跳转到首页
    if (to.meta.noVerify) {
      next('/');
    }
  }
  // 如果状态为 true、或路由不需要验证，则正常跳转
  else if (store.state.userStatus === true) {
    // 如果是想进入登录页面，则直接跳转到首页
    if (to.meta.noVerify) {
      next('/');
    } else {
      next();
    }
    // 如果不存在token
  } else if (!store.state.token) {
    // 如果是想进入登录页面，则直接跳转到首页
    if (to.meta.noVerify) {
      next();
    } else {
      next('/login');
    }
  }
});
export default router;
