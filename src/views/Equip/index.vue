<template>
  <!-- 主体结构 -->
  <div class="Equip">
    <div class="EquipMain"></div>
    <transition name="sidebar">
      <Sidebar v-show="show" />
    </transition>
  </div>
</template>

<script>
import Sidebar from "./childComps/Sidebar";
export default {
  name: "Equip",
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
.Equip {
  width: 100%;
  display: flex;
  .EquipMain {
    flex: 1;
    padding-right: calc(var(--gap-25) * 10);
  }
}
</style>
