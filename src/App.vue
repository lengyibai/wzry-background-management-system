<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <audio src="./assets/audio/click.mp3" ref="login" hidden="true"></audio>
    <LybLoading :isShow="loading_show" />
  </div>
</template>

<script>
import Vue from 'vue';
export default {
  name: 'App',
  data() {
    return {
      loading_show: false
    };
  },
  mounted() {
    const that = this;
    Vue.prototype.$click = this.click; //全局点击音效
    Vue.prototype.$lybLoad = {
      show() {
        that.loading_show = true;
      },
      close() {
        that.loading_show = false;
      }
    };
  },
  methods: {
    click() {
      this.$refs.login.pause();
      this.$refs.login.currentTime = 0;
      this.$refs.login.play();
    }
  }
};
</script>
<style scoped lang="less">
#app {
  width: 100vw;
  height: 100vh;
}
</style>
