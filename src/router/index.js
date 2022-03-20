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

import Layout from '@/layout';

export const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Layout,
    redirect: '',
    children: [
      {
        path: '',
        meta: {
          title: '主页',
          icon: 'HOME'
        },
        component: () => import('@/views/base/Home')
      }
    ]
  },
  {
    path: '/login',
    meta: {
      title: '登录',
      noVerify: true
    },
    component: () => import('@/views/base/Login'),
    hidden: true
  },

  {
    path: '/hero',
    component: Layout,
    redirect: '/hero/mage/male',
    meta: {
      title: '英雄',
      icon: 'HERO'
    },
    children: [
      {
        path: 'mage',
        component: () => import('@/views/hero/mage'),
        meta: { title: '法师', icon: 'MAGE' },
        redirect: 'male',
        children: [
          {
            path: 'male',
            component: () => import('@/views/hero/mage/male'),
            meta: { title: '男法师', icon: 'MALE' }
          },
          {
            path: 'female',
            component: () => import('@/views/hero/mage/female'),
            meta: { title: '女法师', icon: 'FEMALE' }
          }
        ]
      },
      {
        path: 'striker',
        component: () => import('@/views/hero/striker'),
        meta: { title: '射手', icon: 'STRIKER' }
      }
    ]
  },
  {
    path: '*',
    meta: {
      title: '404 NotFound'
    },
    component: () => import('@/views/base/NotFound'),
    hidden: true
  }
];

const router = new VueRouter({
  routes
});

import store from '@/store/index.js';
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  // 如果本地存在token，但未登录，则自动登录
  if (!store.state.userStatus && store.state.token) {
    store.dispatch('userInfo');
  }
  // 如果状态为 true、或路由不需要验证，则跳转
  else if (store.state.userStatus === true || to.path === '/login') {
    next();
  } else {
    next('/login');
  }
});
export default router;
