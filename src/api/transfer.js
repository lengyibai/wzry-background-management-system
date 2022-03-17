import Vue from 'vue';
import { getUserInfo, updateUser } from '@/api/test.js';

function tip(code, msg) {
  if (code === 200) {
    Vue.prototype.$message.success(msg);
  }
}

export function login(form) {
  return getUserInfo(form.name).then(res => {
    const userInfo = res.data[0];
    return new Promise(resolve => {
      if (!res.data.length) {
        resolve({ msg: '帐号不存在' });
      } else if (form.password === userInfo.password) {
        updateUser(form.name, { token: new Date().getTime() });
        resolve({ data: res.data[0], code: 200, msg: '登录成功' });
        form.token = new Date().getTime();
        tip(200, '登录成功');
      } else {
        resolve({ code: 401, msg: '密码错误' });
      }
    });
  });
}
