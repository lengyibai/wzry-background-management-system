import Vue from 'vue';
import router from '@/router';
import { login, logout, userInfo } from '@/api/transfer.js';
export default {
  // 登录
  login(context, account) {
    // 请求登录接口
    login(account).then(res => {
      if (res.code === 200) {
        // 存储 token 到本地
        context.commit('setToken', res.data.token);
        // 获取用户信息
        context.dispatch('userInfo', res.data);
        router.push('/');
      }
    });
  },
  // 退出登录
  logout(context) {
    logout(context.state.userInfo.id).then(() => {
      context.commit('clearToken');
    });
  }
};
