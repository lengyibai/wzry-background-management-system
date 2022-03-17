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
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        meta: {
          title: '主页',
          icon: 'HOME'
        },
        component: () => import('@/views/base/Home.vue')
      }
    ]
  },
  {
    path: '/login',
    meta: {
      title: '登录',
      noVerify: true
    },
    component: () => import('@/views/base/Login.vue'),
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
        component: () => import('@/views/hero/mage/index'),
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
        component: () => import('@/views/hero/striker/index'),
        meta: { title: '射手', icon: 'STRIKER' }
      }
    ]
  },
  {
    path: '*',
    meta: {
      title: '404 NotFound'
    },
    component: () => import('@/views/base/NotFound.vue'),
    hidden: true
  }
];

const router = new VueRouter({
  routes
});

import store from '@/store/index.js';
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  if (store.state.userStatus || to.meta.noVerify) {
    if (store.state.userStatus && ['/login'].includes(to.path)) {
      next('/');
      return;
    }
    next();
  } else {
    next('/login');
  }
});
export default router;
