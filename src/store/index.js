import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import mutations from './mutations';
import actions from './actions';
import getters from './getters';
import network from './modules/network';
export default new Vuex.Store({
  state: {
    token: localStorage.getItem('token'), //token
    userStatus: false, // 用户状态
    userInfo: {} // 用户相关信息
  },
  mutations,
  actions,
  getters,
  modules: {
    network
  }
});
