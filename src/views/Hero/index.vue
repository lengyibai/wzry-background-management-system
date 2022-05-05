<template>
  <!-- 主体结构 -->
  <div class="Hero">
    <div class="HeroMain">
      <transition name="sidebar_router" mode="out-in">
        <router-view />
      </transition>
    </div>
    <Sidebar />
  </div>
</template>

<script>
import Sidebar from "./childComps/Sidebar";
export default {
  name: "Hero",
  components: { Sidebar },
};
</script>
<style scoped lang="less">
.Hero {
  width: 100%;
  height: 100%;
  display: flex;
  .HeroMain {
    flex: 1;
    padding-right: calc(var(--gap-25) * 10);
  }
}
</style>
