/**
 * noVerify 不需要登录验证
 * leftHidden 在右侧自侧边栏隐藏
 */
import Layout from "@/layout";
export default [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/login",
    meta: {
      title: "登录",
      noVerify: true,
    },
    component: () =>
      import(/* webpackChunkName: "login" */ "@/views/base/Login"),
    hidden: true,
    leftHidden: true,
  },
  {
    path: "/home",
    component: Layout,
    redirect: "",
    children: [
      {
        path: "",
        meta: {
          title: "主页",
          icon: "HOME",
        },
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/base/Home"),
      },
    ],
    leftHidden: true,
  },
  {
    path: "/hero",
    component: Layout,
    redirect: "",
    children: [
      {
        path: "",
        meta: {
          title: "英雄",
          icon: "HERO",
        },
        component: () =>
          import(/* webpackChunkName: "profession" */ "@/views/Hero"),
      },
    ],
  },
  {
    path: "/equip",
    component: Layout,
    redirect: "",
    children: [
      {
        path: "",
        meta: {
          title: "装备",
          icon: "EQUIP",
        },
        component: () =>
          import(/* webpackChunkName: "category" */ "@/views/Equip"),
      },
    ],
  },
  {
    path: "/epigraph",
    component: Layout,
    redirect: "",
    children: [
      {
        path: "",
        meta: {
          title: "铭文",
          icon: "EPIGRAPH",
        },
        component: () =>
          import(/* webpackChunkName: "epigraph" */ "@/views/Epigraph"),
      },
    ],
    leftHidden: true,
  },
  {
    path: "/system",
    component: Layout,
    redirect: "/system/hero",
    meta: {
      title: "系统管理",
      icon: "SYSTEM",
    },
    children: [
      {
        path: "hero",
        component: () =>
          import(
            /* webpackChunkName: "system/hero" */ "@/views/system/childViews/Hero"
          ),
        meta: {
          title: "添加英雄",
          icon: "ADDHERO",
        },
      },
      {
        path: "skin",
        component: () =>
          import(
            /* webpackChunkName: "system/skin" */ "@/views/system/childViews/Skin"
          ),
        meta: {
          title: "添加皮肤",
          icon: "ADDSKIN",
        },
      },
      {
        path: "equip",
        component: () =>
          import(
            /* webpackChunkName: "system/equip" */ "@/views/system/childViews/Equip"
          ),
        meta: {
          title: "添加装备",
          icon: "ADDEQUIP",
        },
      },
      {
        path: "epigraph",
        component: () =>
          import(
            /* webpackChunkName: "system/epigraph" */ "@/views/system/childViews/Epigraph"
          ),
        meta: {
          title: "添加铭文",
          icon: "ADDEPIGRAPH",
        },
      },
      {
        path: "components",
        component: () =>
          import(
            /* webpackChunkName: "system/components" */ "@/views/system/childViews/Components"
          ),
        meta: {
          title: "项目组件",
          icon: "COMPONENTS",
        },
      },
    ],
    leftHidden: true,
  },
  {
    path: "*",
    meta: {
      title: "404 NotFound",
    },
    component: () =>
      import(/* webpackChunkName: "NotFound" */ "@/views/base/NotFound"),
    hidden: true,
    leftHidden: true,
  },
];
