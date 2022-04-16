<template>
  <!-- 路由视图 -->
  <div class="AppMain">
    <transition name="sidebar_router" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: "AppMain",
};
</script>

<style scoped>
.AppMain {
  position: relative;
  box-sizing: border-box;
  max-width: 100%;
  height: calc(100% - 131px);
  padding: 25px;
}
</style>
