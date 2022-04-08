import Vue from "vue";
import router from "@/router";
export default {
  //#####··········退出登录清除token··········#####//
  clearToken(state) {
    state.token = "";
    state.userStatus = false;
    state.userInfo = {};
    window.localStorage.removeItem("token");
    router.push("/login");
  },
  developing() {
    Vue.prototype.$message.warning("开发中...");
  },
};
