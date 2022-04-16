//#####··········公共组件··········#####//
import BgVideo from "./BgVideo"; //视频背景
import LybFlipBox from "./lyb-flip-box"; //卡片翻转
import LybLoading from "./lyb-loading"; //加载动画
import LybMask from "./lyb-mask"; //蒙版

//使用组件
const components = [BgVideo, LybFlipBox, LybLoading, LybMask];
export default {
  //只会执行install
  install(Vue) {
    //注册组件
    components.forEach((component) => {
      Vue.component(component.name, component);
    });
  },
};