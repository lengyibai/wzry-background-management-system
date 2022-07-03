import Vue from "vue";
import App from "./App";
import store from "./store";
import router from "./router";
Vue.config.productionTip = false;

//#####··········主要··········#####//
//####········element UI········####//
import "./plugins/element";

//####········全局组件········####//
//###······个人······###//
import lybUI from "@/components/common/index.js";
Vue.use(lybUI);
//###······项目······###//
import businessUI from "@/components/business/index.js";
Vue.use(businessUI);

//####········公共CSS、JS········####//
import "@/styles/indexs.css";

//#####··········其他··········#####//
//####········事件总线········####//
Vue.prototype.$bus = new Vue();

//####        自定义指令········####//
import directives from "@/utils/directives.js";
Vue.use(directives);

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App),
});
