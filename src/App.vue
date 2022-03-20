<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>
<style scoped lang="less">
#app {
  position: relative;
  width: 100vw;
  height: 100vh;
}
</style>
