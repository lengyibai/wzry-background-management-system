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
        router.push('/');
      }
    });
  },
  userInfo(context) {
    return new Promise(resolve => {
      userInfo({
        token: context.state.token
      })
        .then(res => {
          // token 100 秒后过期
          if (res.data.length === 0 || context.state.token !== new Date().getTime().toString().slice(0, 8))
            throw '请求失败';
          // 获取成功后存储用户信息
          context.state.userInfo = res.data[0];
          context.state.userStatus = true;
          resolve();
        })
        .catch(() => {
          Vue.prototype.$message.error('token已过期');
          context.commit('clearToken');
        });
    });
  },
  // 退出登录
  logout(context) {
    logout(context.state.userInfo.id).then(() => {
      context.commit('clearToken');
    });
  }
};
