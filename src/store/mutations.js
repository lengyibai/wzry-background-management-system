import Vue from 'vue';
export default {
  // 设置token
  setToken(state, token) {
    state.token = token;
    window.localStorage.setItem('token', token);
  },
  // 设置用户信息
  setUserInfo(state, userInfo) {
    state.userInfo = userInfo;
    state.userStatus = true;
  },
  // 退出登录清除token
  clearToken(state) {
    state.token = '';
    window.localStorage.removeItem('token');
    state.userStatus = false;
    state.userInfo = {};
  },
  developing() {
    Vue.prototype.$message.warning('开发中...');
  }
};
