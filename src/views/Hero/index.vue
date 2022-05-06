<template>
  <!-- 主体结构 -->
  <div class="Hero">
    <div class="HeroMain"></div>
    <transition name="sidebar">
      <Sidebar v-show="show" />
    </transition>
  </div>
</template>

<script>
import Sidebar from "./childComps/Sidebar";
export default {
  name: "Hero",
  data() {
    return {
      show: false,
    };
  },
  components: { Sidebar },
  mounted() {
    setTimeout(() => {
      this.show = true;
    }, 250);
  },
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
