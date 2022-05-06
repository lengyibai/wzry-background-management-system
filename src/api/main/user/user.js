import Vue from "vue";

//#####··········网络请求··········#####//
//接口信息：{ 获取用户信息，修改用户 }
import { getUserInfo, updateUser } from "./transfer.js";

function tip(code, msg) {
  if (code === 200) {
    Vue.prototype.$tip(msg);
  } else {
    Vue.prototype.$tip(msg, "danger");
  }
}
//#####··········基本··········#####//
//####········登录········####//
export function login(form) {
  return getUserInfo({ id: form.id }).then((res) => {
    /* 获取用户表 */
    return new Promise((resolve) => {
      // 判断是否存在用户
      if (!res.data.length) {
        tip(401, "帐号不存在");
        resolve({ code: 401, msg: "帐号不存在" });
      } else if (form.password === res.data[0].password) {
        // 数据库写入token
        updateUser(form.id, {
          token: new Date().getTime().toString().slice(0, 7),
        }).then((res) => {
          // 返回请求状态及数据
          resolve({ data: res.data, code: 200, msg: "登录成功" });
        });
        tip(200, "登录成功");
      } else {
        tip(401, "密码错误");
        resolve({ code: 401, msg: "密码错误" });
      }
    });
  });
}
//####········自动登录········####//
export function userInfo(form) {
  return getUserInfo(form);
}

//####········登出········####//
export function logout(id) {
  return new Promise((resolve) => {
    // 清除数据库token
    updateUser(id, { token: "" });
    tip(200, "退出成功");
    resolve({ code: 200, msg: "退出成功" });
  });
}
