import Vue from 'vue';
import App from './App';
import store from './store';
import router from './router';

import './styles/index.css';

import './plugins/element';

Vue.prototype.$bus = new Vue();

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
