<template>
  <div class="Login">
    <div class="mask"></div>
    <div class="logo">
      <img src="@/assets/img/logo.png" alt="" />
    </div>
    <h1>王者荣耀后台管理系统</h1>
    <input type="text" v-model="form.id" />
    <input type="password" v-model="form.password" />

    <LoginBtn @click.native="login" />
    <LybBgVideo :video="require('@/assets/video/loginBg.mp4')" v-if="!this.$store.state.smooth" />
    <LoginUpdateDialog v-model="show_KDialog" />
  </div>
</template>
<script>
import LoginBtn from "./childComp/LoginBtn";
import LoginUpdateDialog from "./childComp/LoginUpdateDialog";
export default {
  name: "Login",
  data() {
    return {
      /* 表单 */
      form: {
        id: 1329670984,
        password: "lengyibai.",
      },
      show_KDialog: true,
    };
  },
  methods: {
    login() {
      this.$click("login");
      this.$store.dispatch("login", this.form);
    },
  },
  components: { LoginBtn, LoginUpdateDialog },
};
</script>
<style scoped lang="less">
.Login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  transition: all 0.5s;
  .logo {
    position: absolute;
    top: 1vw;
    left: 1vw;
    width: 300px;
    img {
      width: 100%;
      opacity: 0.5;
    }
  }
  h1 {
    color: var(--white);
    margin-bottom: 1em;
    font-size: var(--font-s-75);
  }
  input {
    background-color: transparent;
    border: none;
    outline: none;
    font-size: var(--font-s-35);
    color: var(--white);
    margin-bottom: 1em;
    text-align: center;
    border-bottom: 2px solid var(--white);
    &:nth-of-type(2) {
      margin-bottom: 2em;
    }
  }
}
</style>
