//#####··········项目组件··········#####//
import Sidebar from "./Sidebar"; //侧边栏
import KTagsmall from "./Parts/Tag/K-TagSmall.vue"; //标签
//####········英雄相关········####//
import KAttribute from "./Hero/K-Attribute"; //英雄属性
import KHeroSort from "./Hero/K-HeroSort"; //英雄职业标签

//使用组件
const components = [
  Sidebar,
  KTagsmall,
  // 英雄相关
  KAttribute,
  KHeroSort,
];
export default {
  //只会执行install
  install(Vue) {
    //注册组件
    components.forEach((component) => {
      Vue.component(component.name, component);
    });
  },
};
