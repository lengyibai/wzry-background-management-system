<template>
  <!-- 路由视图 -->
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <router-view :key="new Date().getTime()" />
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain'
};
</script>

<style scoped>
.app-main {
  width: 100%;
  position: relative;
  min-height: calc(100vh - 50px);

  padding: 20px;
  box-sizing: border-box;
}
</style>
