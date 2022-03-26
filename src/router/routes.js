import Layout from '@/layout';
export default [
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
        path: 'tank',
        component: () => import('@/views/hero/Tank'),
        meta: { title: '坦克', icon: 'TANK' }
      },
      {
        path: 'warrior',
        component: () => import('@/views/hero/Warrior'),
        meta: { title: '战士', icon: 'WARRIOR' }
      },
      {
        path: 'assassin',
        component: () => import('@/views/hero/Assassin'),
        meta: { title: '刺客', icon: 'ASSASSIN' }
      },
      {
        path: 'Mage',
        component: () => import('@/views/hero/Mage'),
        meta: { title: '法师', icon: 'MAGE' }
      },
      {
        path: 'striker',
        component: () => import('@/views/hero/Striker'),
        meta: { title: '射手', icon: 'STRIKER' }
      },
      {
        path: 'assist',
        component: () => import('@/views/hero/Assist'),
        meta: { title: '辅助', icon: 'ASSIST' }
      }
    ]
  },
  {
    path: '/equip',
    component: Layout,
    redirect: '/equip/attack',
    meta: {
      title: '装备',
      icon: 'EQUIP'
    },
    children: [
      {
        path: 'attack',
        component: () => import('@/views/equip/Attack'),
        meta: { title: '攻击', icon: 'ATTACK' }
      },
      {
        path: 'magic',
        component: () => import('@/views/equip/Magic'),
        meta: { title: '法术', icon: 'MAGIC' }
      },
      {
        path: 'defense',
        component: () => import('@/views/equip/Defense'),
        meta: { title: '防御', icon: 'DEFENSE' }
      },
      {
        path: 'move',
        component: () => import('@/views/equip/Move'),
        meta: { title: '移动', icon: 'MOVE' }
      },
      {
        path: 'jungle',
        component: () => import('@/views/equip/Jungle'),
        meta: { title: '打野', icon: 'JUNGLE' }
      },
      {
        path: 'migration',
        component: () => import('@/views/equip/Migration'),
        meta: { title: '游走', icon: 'MIGRATION' }
      }
    ]
  },
  {
    path: '/system',
    component: Layout,
    redirect: '',
    meta: {
      title: '系统管理',
      icon: 'SYSTEM'
    },
    children: [
      {
        path: '/system/hero',
        component: () => import('@/views/equip/Move'),
        meta: {
          title: '添加英雄',
          icon: 'ADDHERO'
        }
      },
      {
        path: '/system/skin',
        component: () => import('@/views/equip/Move'),
        meta: {
          title: '添加皮肤',
          icon: 'ADDSKIN'
        }
      },
      {
        path: '/system/equip',
        component: () => import('@/views/equip/Magic'),
        meta: {
          title: '添加装备',
          icon: 'ADDEQUIP'
        }
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
