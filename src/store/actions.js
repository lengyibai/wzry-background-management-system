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
      }
    });
  },
  // 获取用户信息
  userInfo(context) {
    userInfo({
      token: context.state.token
    }).then(res => {
      // 获取成功后存储用户信息
      context.state.userInfo = res.data[0];
      context.state.userStatus = true;
      router.push('/home');
    });
  },
  // 退出登录
  logout(context) {
    logout(context.state.userInfo.id).then(() => {
      context.commit('clearToken');
      router.push('/login');
    });
  }
};
