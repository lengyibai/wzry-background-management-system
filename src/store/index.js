import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import mutations from './mutations';
import actions from './actions';
import getters from './getters';
import network from './modules/network';
export default new Vuex.Store({
  state: {
    // 用户状态
    userStatus: localStorage.getItem('token'),
    // 用户相关信息
    userInfo: {}
  },
  mutations,
  actions,
  getters,
  modules: {
    network
  }
});
