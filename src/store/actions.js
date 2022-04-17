import Vue from "vue";
import router from "@/router";
import { login, logout, userInfo } from "@/api/main/user/user.js";
export default {
  //#####··········登录··········#####//
  login(context, account) {
    // 请求登录接口
    login(account).then((res) => {
      if (res.code === 200) {
        // 存储 token 到本地
        context.state.userStatus = true;
        context.state.token = res.data.token;
        window.localStorage.setItem("token", res.data.token);
        // 获取用户信息
        context.state.userInfo = res.data;
        router.push("/");
      }
    });
  },
  //#####··········获取用户信息··········#####//
  userInfo(context) {
    return new Promise((resolve) => {
      userInfo({
        token: context.state.token,
      })
        .then((res) => {
          // token 1000 秒后过期
          if (
            res.data.length === 0 ||
            context.state.token !== new Date().getTime().toString().slice(0, 7)
          )
            throw "请求失败";
          // 获取成功后存储用户信息
          context.state.userStatus = true;
          context.state.userInfo = res.data[0];
          resolve();
        })
        .catch(() => {
          Vue.prototype.$tip("token已过期", "danger");
          context.commit("clearToken");
        });
    });
  },
  //#####··········退出登录··········#####//
  logout(context) {
    logout(context.state.userInfo.id).then(() => {
      context.commit("clearToken");
    });
  },
};
