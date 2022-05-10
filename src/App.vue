<template>
  <div id="app">
    <transition name="clip" mode="out-in">
      <router-view />
    </transition>
    <!-- 全局开关 -->
    <GlobalSwitch />
    <div class="watermark">
      <span>当前版本：2022/5/10 21:40</span>
      <span>最新版本：</span>
    </div>
  </div>
</template>

<script>
import GlobalSwitch from "@/components/business/GlobalSwitch";
export default {
  name: "App",
  data() {
    return {};
  },
  components: { GlobalSwitch },
  mounted() {
    setInterval(() => {
      console.log(window.TIME_WATERMARK);
    }, 1000);
  },
};
</script>
<style scoped lang="less">
#app {
  width: 100vw;
  height: 100vh;
}

.clip-enter-active {
  animation: clip-in 0.5s;
}

.clip-leave-active {
  animation: clip-out 1.5s;
}
</style>
