import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import equip from "./modules/equip";
export default new Vuex.Store({
  state: {
    wzryToken: localStorage.getItem("wzryToken"), //token
    userStatus: false, // 用户状态
    userInfo: {}, // 用户相关信息
    smooth: false,
  },
  mutations,
  actions,
  getters,
  modules: {
    equip,
  },
});
