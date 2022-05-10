import router from "@/router";
export default {
  //#####··········退出登录清除token··········#####//
  clearToken(state) {
    state.wzryToken = "";
    state.userStatus = false;
    state.userInfo = {};
    window.localStorage.removeItem("wzryToken");
    router.push("/login");
  },
};
