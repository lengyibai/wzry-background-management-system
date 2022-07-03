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
    component: () => import(/* webpackChunkName: "login" */ "@/views/Base/Login"),
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
        component: () => import(/* webpackChunkName: "home" */ "@/views/Base/Home"),
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
        component: () => import(/* webpackChunkName: "profession" */ "@/views/Hero"),
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
        component: () => import(/* webpackChunkName: "category" */ "@/views/Equip"),
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
        component: () => import(/* webpackChunkName: "epigraph" */ "@/views/Epigraph"),
      },
    ],
    leftHidden: true,
  },
  {
    path: "/system",
    component: Layout,
    redirect: "/System/add",
    meta: {
      title: "系统管理",
      icon: "SYSTEM",
    },
    children: [
      {
        path: "add",
        component: () => import(/* webpackChunkName: "system/add" */ "@/views/System/childViews/Add"),
        meta: {
          title: "添加",
          icon: "ADD",
        },
      },
      {
        path: "edit",
        component: () => import(/* webpackChunkName: "system/skin" */ "@/views/System/childViews/Edit"),
        meta: {
          title: "编辑",
          icon: "EDIT",
        },
      },
      {
        path: "delete",
        component: () => import(/* webpackChunkName: "system/equip" */ "@/views/System/childViews/Delete"),
        meta: {
          title: "删除",
          icon: "DELETE",
        },
      },
      {
        path: "components",
        component: () => import(/* webpackChunkName: "system/components" */ "@/views/System/childViews/Components"),
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
    component: () => import(/* webpackChunkName: "NotFound" */ "@/views/Base/NotFound"),
    hidden: true,
    leftHidden: true,
  },
];
