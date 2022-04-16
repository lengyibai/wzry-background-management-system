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
    component: () => import("@/views/base/Login"),
    hidden: true,
    Hidden: true,
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
        component: () => import("@/views/base/Home"),
      },
    ],
    Hidden: true,
  },
  {
    path: "/hero",
    component: Layout,
    redirect: "/Hero/profession",
    meta: {
      title: "英雄",
      icon: "HERO",
    },
    children: [
      {
        path: "profession",
        meta: {
          title: "职业",
          icon: "PROFESSION",
        },
        component: () => import("@/views/Hero"),
        redirect: "/hero/profession/tank",
        children: [
          {
            path: "tank",
            component: () => import("@/views/Hero/childViews/Tank"),
            meta: { title: "坦克", icon: "TANK" },
          },
          {
            path: "warrior",
            component: () => import("@/views/Hero/childViews/Warrior"),
            meta: { title: "战士", icon: "WARRIOR" },
          },
          {
            path: "assassin",
            component: () => import("@/views/Hero/childViews/Assassin"),
            meta: { title: "刺客", icon: "ASSASSIN" },
          },
          {
            path: "mage",
            component: () => import("@/views/Hero/childViews/Mage"),
            meta: { title: "法师", icon: "MAGE" },
          },
          {
            path: "striker",
            component: () => import("@/views/Hero/childViews/Striker"),
            meta: { title: "射手", icon: "STRIKER" },
          },
          {
            path: "assist",
            component: () => import("@/views/Hero/childViews/Assist"),
            meta: { title: "辅助", icon: "ASSIST" },
          },
        ],
        hidden: true,
      },
    ],
  },
  {
    path: "/epigraph",
    component: Layout,
    redirect: "/epigraph/category",
    meta: {
      title: "铭文",
      icon: "EPIGRAPH",
    },
    children: [
      {
        path: "category",
        meta: {
          title: "类型",
          icon: "CATEGORY",
        },
        component: () => import("@/views/Epigraph"),
        redirect: "/epigraph/category/attack",
        children: [
          {
            path: "all-epigraph",
            meta: {
              title: "全部",
            },
          },
          {
            path: "attack",
            meta: {
              title: "攻击",
            },
          },
          {
            path: "life",
            meta: {
              title: "生命",
            },
          },
          {
            path: "defense",
            meta: {
              title: "防御",
            },
          },
          {
            path: "function",
            meta: {
              title: "功能",
            },
          },
          {
            path: "vampire",
            meta: {
              title: "吸血",
            },
          },
          {
            path: "attack-speed",
            meta: {
              title: "攻速",
            },
          },
          {
            path: "crit",
            meta: {
              title: "暴击",
            },
          },
          {
            path: "penetrate",
            meta: {
              title: "穿透",
            },
          },
        ],
        hidden: true,
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
        component: () => import("@/views/Equip"),
        redirect: "/equip/category/attack",
        children: [
          {
            path: "attack",
            component: () => import("@/views/Equip/childViews/Attack"),
            meta: { title: "攻击", icon: "ATTACK" },
          },
          {
            path: "magic",
            component: () => import("@/views/Equip/childViews/Magic"),
            meta: { title: "法术", icon: "MAGIC" },
          },
          {
            path: "defense",
            component: () => import("@/views/Equip/childViews/Defense"),
            meta: { title: "防御", icon: "DEFENSE" },
          },
          {
            path: "move",
            component: () => import("@/views/Equip/childViews/Move"),
            meta: { title: "移动", icon: "MOVE" },
          },
          {
            path: "jungle",
            component: () => import("@/views/Equip/childViews/Jungle"),
            meta: { title: "打野", icon: "JUNGLE" },
          },
          {
            path: "migration",
            component: () => import("@/views/Equip/childViews/Migration"),
            meta: { title: "游走", icon: "MIGRATION" },
          },
        ],
        hidden: true,
      },
    ],
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
        component: () => import("@/views/Equip/childViews/Move"),
        meta: {
          title: "添加英雄",
          icon: "ADDHERO",
        },
      },
      {
        path: "skin",
        component: () => import("@/views/Equip/childViews/Move"),
        meta: {
          title: "添加皮肤",
          icon: "ADDSKIN",
        },
      },
      {
        path: "equip",
        component: () => import("@/views/Equip/childViews/Magic"),
        meta: {
          title: "添加装备",
          icon: "ADDEQUIP",
        },
      },
      {
        path: "components",
        component: () => import("@/views/System/childViews/Components"),
        meta: {
          title: "项目组件",
          icon: "COMPONENTS",
        },
      },
    ],
    Hidden: true,
  },
  {
    path: "*",
    meta: {
      title: "404 NotFound",
    },
    component: () => import("@/views/base/NotFound"),
    hidden: true,
    Hidden: true,
  },
];
