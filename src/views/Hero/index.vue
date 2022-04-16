<template>
  <!-- 主体结构 -->
  <div class="Hero">
    <div class="HeroMain">
      <transition name="sidebar_router" mode="out-in">
        <router-view />
      </transition>
    </div>
    <!-- 英雄和装备的右边都会额外展示一个侧边栏，传递对方的路由进行排斥 -->
    <Sidebar path="/equip" />
  </div>
</template>

<script>
export default {
  name: "Hero",
};
</script>
<style scoped lang="less">
.Hero {
  width: 100%;
  display: flex;
  .HeroMain {
    flex: 1;
    padding-right: calc(var(--gap-25) * 10);
  }
}
</style>
