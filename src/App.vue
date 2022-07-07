<template>
  <div id="app">
    <transition name="clip" mode="out-in">
      <router-view />
    </transition>
    <!-- 全局开关 -->
    <GlobalSwitch />
    <div class="watermark">
      <p>当前版本：{{ LOCAL_VERSION }}</p>
      <p>最新版本：{{ REMOTE_VERSION }}</p>
    </div>
  </div>
</template>

<script>
import GlobalSwitch from "@/components/business/GlobalSwitch";
export default {
  name: "App",
  data() {
    return {
      LOCAL_VERSION: "22.7.8.1",
    };
  },
  components: { GlobalSwitch },
  computed: {
    REMOTE_VERSION() {
      return window.REMOTE_VERSION;
    },
  },
  mounted() {
    const local_version = this.LOCAL_VERSION.replaceAll(".", "");
    const remote_version = this.REMOTE_VERSION.replaceAll(".", "");
    const test = remote_version - local_version;
    if (test > 0) {
      this.$tip(
        "作者已推送最新代码至gitee，请git pull或重新克隆进行更新\n如果自己已是最新版，请尝试Ctrl + F5强制刷新更新本地缓存",
        "warning",
      );
    } else if (test < 0) {
      this.$tip("只有作者才可以改版本号哦！", "danger");
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

/* 蒙版裁剪 */
.clip-enter-active {
  animation: clip-in 0.75s;
}
.clip-leave-active {
  animation: clip-out 1.25s;
}
@keyframes clip-in {
  0% {
    -webkit-clip-path: circle(0% at 50% 50%);
    clip-path: circle(0% at 50% 50%);
  }

  100% {
    -webkit-clip-path: circle(100% at 50% 50%);
    clip-path: circle(100% at 50% 50%);
  }
}
@keyframes clip-out {
  0% {
    -webkit-clip-path: circle(100% at 50% 50%);
    clip-path: circle(100% at 50% 50%);
  }
  100% {
    -webkit-clip-path: circle(0% at 50% 50%);
    clip-path: circle(0% at 50% 50%);
  }
}
</style>
