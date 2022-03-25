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
  max-width: 100%;
  position: relative;
  height: calc(100% - 125px);
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.5);
  margin: 25px;
}
</style>
