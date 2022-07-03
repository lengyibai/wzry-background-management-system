//#####··········项目组件··········#####//
import Sidebar from "./Sidebar"; //侧边栏
import KButton from "./Parts/K-Button"; //按钮
import KCheckbox from "./Parts/K-Checkbox"; //复选框
import KDialog from "./Parts/K-Dialog"; //弹窗
import KMessage from "./Parts/K-Message"; //消息提醒
import KTagsmall from "./Parts/K-TagSmall"; //标签
import KManageCard from "./Parts/K-ManageCard"; //标签
//####········英雄相关········####//
import KAttribute from "./Hero/K-Attribute"; //英雄属性
import KHeroSort from "./Hero/K-HeroSort"; //英雄职业标签

//使用组件
const components = [
  // 项目相关
  Sidebar,
  KCheckbox,
  KButton,
  KDialog,
  KMessage,
  KTagsmall,
  KManageCard,
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
