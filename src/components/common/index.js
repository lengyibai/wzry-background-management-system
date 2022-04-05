//#####··········公共组件··········#####//
import BgVideo from './BgVideo'; //视频背景
import LybLoading from './lyb-loading'; //加载动画

//使用组件
const components = [BgVideo, LybLoading];
export default {
  //只会执行install
  install(Vue) {
    //注册组件
    components.forEach(component => {
      Vue.component(component.name, component);
    });
  }
};
