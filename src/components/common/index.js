//#####··········公共组件··········#####//
import LybBgVideo from "./lyb-bg-video"; //视频背景
import LybFlipBox from "./lyb-flip-box"; //卡片翻转
import LybGridLayout from "./lyb-grid-layout"; //Grid经典布局
import LybIcon from "./lyb-icon"; //图标
import LybLoading from "./lyb-loading"; //加载动画
import LybMask from "./lyb-mask"; //蒙版
import LybMaskClose from "./lyb-mask-close"; //顶部关闭蒙版

//使用组件
const components = [
  LybBgVideo,
  LybFlipBox,
  LybGridLayout,
  LybIcon,
  LybLoading,
  LybMask,
  LybMaskClose,
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
