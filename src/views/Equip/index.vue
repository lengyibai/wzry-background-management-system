<template>
  <!-- 主体结构 -->
  <div class="Equip">
    <div class="EquipMain">
      <transition name="fade-transform" mode="out-in">
        <router-view />
      </transition>
    </div>
    <!-- 英雄和装备的右边都会额外展示一个侧边栏，传递对方的路由进行排斥 -->
    <Sidebar path="/hero" />
  </div>
</template>

<script>
export default {
  name: 'Equip'
};
</script>
<style scoped lang="less">
.Equip {
  width: 100%;
  display: flex;
  .EquipMain {
    flex: 1;
    padding-right: calc(var(--gap-25) * 10);
  }
}
</style>
