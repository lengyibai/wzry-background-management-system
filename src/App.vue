<template>
  <div id="app">
    <transition name="clip" mode="out-in">
      <router-view />
    </transition>
    <!-- 全局开关 -->
    <GlobalSwitch />
    <div class="watermark">
      <p>当前版本：{{ TIME_WATERMARK_NOW }}</p>
      <p>最新版本：{{ TIME_WATERMARK }}</p>
    </div>
  </div>
</template>

<script>
import GlobalSwitch from "@/components/business/GlobalSwitch";
export default {
  name: "App",
  data() {
    return {
      TIME_WATERMARK_NOW: "5.11.1",
    };
  },
  components: { GlobalSwitch },
  computed: {
    TIME_WATERMARK() {
      return window.TIME_WATERMARK;
    },
  },
  mounted() {
    if (this.TIME_WATERMARK !== this.TIME_WATERMARK_NOW) {
      alert(
        "作者已推送最新代码至gitee，git pull或重新克隆进行更新\n如果自己是最新版，请尝试Ctrl + F5强制刷新\n如果依旧有问题，请提Issuse",
      );
    }
  },
};
</script>
<style scoped lang="less">
#app {
  width: 100vw;
  height: 100vh;
  .watermark {
    position: fixed;
    bottom: 0;
    left: 0;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.5);
    z-index: 999;
  }
}

.clip-enter-active {
  animation: clip-in 0.5s;
}

.clip-leave-active {
  animation: clip-out 1.5s;
}
</style>
