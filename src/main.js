import Vue from 'vue';
import App from './App';
import store from './store';
import router from './router';

//#####··········主要··········#####//
//####········element UI········####//
import './plugins/element';

//####········全局组件········####//
//###······个人······###//
import lybUI from '@/components/common/index.js';
Vue.use(lybUI);
//###······项目······###//
import businessUI from '@/components/business/index.js';
Vue.use(businessUI);

//####········公共CSS········####//
import '@/styles/indexs.css';

//#####··········其他··········#####//
//####········事件总线········####//
Vue.prototype.$bus = new Vue();

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
