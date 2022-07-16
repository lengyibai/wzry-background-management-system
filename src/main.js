import Vue from "vue";
import App from "./App";
import store from "./store";
import router from "./router";
Vue.config.productionTip = false;

//#####··········主要··········#####//
//####········element UI········####//
import "./plugins/element";

//####········全局组件········####//
import "@/components/index.js";

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
