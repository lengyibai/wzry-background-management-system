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
  height: calc(100% - 130px);
  padding: var(--gap-25);
}

/* 侧边栏切换路由 */
.sidebar_router-enter {
  opacity: 0;
  transform: translateY(50px);
}

.sidebar_router-leave-to {
  opacity: 0;
}

.sidebar_router-leave-active,
.sidebar_router-enter-active {
  transition: all 0.25s;
}
</style>
