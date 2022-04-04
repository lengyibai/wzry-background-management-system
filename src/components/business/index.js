//#####··········公共组件··········#####//
import Sidebar from './Sidebar'; //视频背景

//使用组件
const components = [Sidebar];
export default {
  //只会执行install
  install(Vue) {
    //注册组件
    components.forEach(component => {
      Vue.component(component.name, component);
    });
  }
};
