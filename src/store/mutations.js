import Vue from 'vue';
import router from '@/router';
export default {
  // 设置token
  setToken(state, token) {
    state.token = token;
    window.localStorage.setItem('token', token);
  },
  // 退出登录清除token
  clearToken(state) {
    state.token = '';
    state.userStatus = false;
    state.userInfo = {};
    window.localStorage.removeItem('token');
    router.push('/login');
  },
  developing() {
    Vue.prototype.$message.warning('开发中...');
  }
};
