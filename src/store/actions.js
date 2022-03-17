import router from '@/router';
import { login } from '@/api/transfer.js';
export default {
  // 登录用户信息
  login(context, account) {
    // 请求登录接口
    login(account).then(res => {
      if (res.code === 200) {
        // 登录成功后存储用户信息
        context.commit('setUserInfo', res.data);
        // 并存储 token
        context.commit('setToken', res.data.token);
        // 跳转路由
        router.push('/');
      }
    });
  }

  //退出登录
  // logout(context) {
  //   logout().then(() => {
  //     context.commit('clearToken');
  //   });
  //   router.push({ name: 'Login' });
  // }
};
