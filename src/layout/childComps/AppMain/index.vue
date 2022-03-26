<template>
  <!-- 路由视图 -->
  <div class="AppMain">
    <transition name="fade-transform" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'AppMain'
};
</script>

<style scoped>
.AppMain {
  position: relative;
  box-sizing: border-box;
  max-width: 100%;
  height: calc(100% - 125px);
  margin: 25px;
  padding: 25px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 25px;
  background: rgba(0, 0, 0, 0.75);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}
</style>
