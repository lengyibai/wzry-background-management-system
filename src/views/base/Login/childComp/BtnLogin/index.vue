<template>
  <div class="BtnLogin" @click="login">
    <audio src="./audio/login.mp3" ref="login" hidden="true"></audio>
    <span>登录</span>
    <span>LOGIN</span>
  </div>
</template>
<script>
export default {
  name: 'BtnLogin',
  data() {
    return {};
  },
  methods: {
    login() {
      this.$refs.login.play();
    }
  }
};
</script>
<style scoped lang="less">
.BtnLogin {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 400px;
  height: 80px;
  background: url('./img/login.png') no-repeat center center;
  background-size: 100%;
  span {
    &:nth-of-type(1) {
      color: #fff;
      font-size: 36px;
      text-shadow: 0px 0px 25px #bf681d;
    }
    &:nth-of-type(2) {
      color: #895c36;
      font-size: 16px;
      letter-spacing: 2px;
      line-height: 14px;
      text-shadow: 0px 0px 5px #8b5e37;
    }
  }
}
</style>
