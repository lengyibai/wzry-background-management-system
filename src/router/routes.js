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
    redirect: "/equip/category",
    meta: {
      title: "装备",
      icon: "EQUIP",
    },
    children: [
      {
        path: "category",
        meta: {
          title: "类型",
          icon: "CATEGORY",
        },
        component: () =>
          import(/* webpackChunkName: "category" */ "@/views/Equip"),
        redirect: "/equip/category/attack",
        children: [
          {
            path: "attack",
            component: () =>
              import(
                /* webpackChunkName: "category/attack" */ "@/views/Equip/childViews/Attack"
              ),
            meta: { title: "攻击", icon: "ATTACK" },
          },
          {
            path: "magic",
            component: () =>
              import(
                /* webpackChunkName: "category/magic" */ "@/views/Equip/childViews/Magic"
              ),
            meta: { title: "法术", icon: "MAGIC" },
          },
          {
            path: "defense",
            component: () =>
              import(
                /* webpackChunkName: "category/defense" */ "@/views/Equip/childViews/Defense"
              ),
            meta: { title: "防御", icon: "DEFENSE" },
          },
          {
            path: "move",
            component: () =>
              import(
                /* webpackChunkName: "category/move" */ "@/views/Equip/childViews/Move"
              ),
            meta: { title: "移动", icon: "MOVE" },
          },
          {
            path: "jungle",
            component: () =>
              import(
                /* webpackChunkName: "category/jungle" */ "@/views/Equip/childViews/Jungle"
              ),
            meta: { title: "打野", icon: "JUNGLE" },
          },
          {
            path: "migration",
            component: () =>
              import(
                /* webpackChunkName: "category/migration" */ "@/views/Equip/childViews/Migration"
              ),
            meta: { title: "游走", icon: "MIGRATION" },
          },
        ],
        hidden: true,
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
            /* webpackChunkName: "system/hero" */ "@/views/System/childViews/Hero"
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
            /* webpackChunkName: "system/skin" */ "@/views/System/childViews/Skin"
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
            /* webpackChunkName: "system/equip" */ "@/views/System/childViews/Equip"
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
            /* webpackChunkName: "system/epigraph" */ "@/views/System/childViews/Epigraph"
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
            /* webpackChunkName: "system/components" */ "@/views/System/childViews/Components"
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
