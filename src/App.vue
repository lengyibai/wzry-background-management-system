<template>
  <div id="app">
    <transition name="clip" mode="out-in">
      <keep-alive>
        <router-view />
      </keep-alive>
    </transition>
    <!-- 全局开关 -->
    <GlobalSwitch />
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
  animation: clip-out 1.5s 0.75s;
}

@keyframes clip-in {
  0% {
    clip-path: circle(0% at 50% 50%);
  }

  100% {
    clip-path: circle(100% at 50% 50%);
  }
}

@keyframes clip-out {
  0% {
    clip-path: circle(100% at 50% 50%);
  }
  100% {
    clip-path: circle(0% at 50% 50%);
  }
}
</style>
