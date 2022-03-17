<template>
  <div class="Login">
    <h1>登录</h1>
    <input type="text" v-model="form.name" />
    <input type="password" v-model="form.password" />
    <button @click="login">登录</button>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data() {
    return {
      form: {
        name: 1329670984,
        password: 'lengyibai.'
      }
    };
  },
  methods: {
    login() {
      this.$store.dispatch('login', this.form);
    }
  }
};
</script>
<style scoped lang="less">
.Login {
  width: 100%;
  height: 100%;
  background-color: @lyb;
}
</style>
