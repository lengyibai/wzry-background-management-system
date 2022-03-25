<template>
  <!-- 路由视图 -->
  <div class="index">
    <transition name="fade-transform" mode="out-in">
      <!-- 带有二级侧边栏，需要组件复用，一级侧边栏的路由视图不需要加 key -->
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
.index {
  max-width: 100%;
  position: relative;
  height: calc(100% - 125px);
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.5);
  margin: 25px;
}
</style>
