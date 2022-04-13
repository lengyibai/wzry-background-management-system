<template>
  <!-- 主体结构 -->
  <div class="Epigraph">
    <div class="EpigraphMain">
      <transition name="fade-transform" mode="out-in">
        <router-view />
      </transition>
    </div>
    <!-- 英雄和装备和铭文的右边都会额外展示一个侧边栏，传递对方的路由进行排斥 -->
    <Sidebar path="/epigraph" />
  </div>
</template>

<script>
export default {
  name: "Epigraph",
};
</script>
<style scoped lang="less">
.Epigraph {
  width: 100%;
  display: flex;
  .EpigraphMain {
    flex: 1;
    padding-right: calc(var(--gap-25) * 10);
  }
}
</style>
