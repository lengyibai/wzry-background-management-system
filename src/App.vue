<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <!-- 全局开关 -->
    <GlobalSwitch />
  </div>
</template>

<script>
import GlobalSwitch from './components/common/GlobalSwitch/GlobalSwitch.vue';
export default {
  name: 'App',
  data() {
    return {};
  },
  components: { GlobalSwitch }
};
</script>
<style scoped lang="less">
#app {
  width: 100vw;
  height: 100vh;
}
</style>
