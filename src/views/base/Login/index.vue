<template>
  <div class="Login">
    <div class="logo">
      <img src="./img/logo.png" alt="" />
    </div>
    <h1>王者荣耀后台管理系统</h1>
    <input type="text" v-model="form.id" />
    <input type="password" v-model="form.password" />

    <BtnLogin @click.native="login" />
    <BgVideo
      :video="require('@/assets/video/video.mp4')"
      v-if="!this.$store.state.smooth"
    />
  </div>
</template>
<script>
import BtnLogin from "./childComp/BtnLogin";
export default {
  name: "Login",
  data() {
    return {
      /* 表单 */
      form: {
        id: 1329670984,
        password: "lengyibai.",
      },
    };
  },
  methods: {
    login() {
      this.$click("login");
      this.$store.dispatch("login", this.form);
    },
  },
  components: { BtnLogin },
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
