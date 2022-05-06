<template>
  <!-- 主体结构 -->
  <div class="Equip">
    <div class="EquipMain"></div>
    <transition name="sidebar">
      <EquipSidebar v-show="show" />
    </transition>
  </div>
</template>

<script>
import EquipSidebar from "./childComps/EquipSidebar";
export default {
  name: "Equip",
  data() {
    return {
      show: false,
    };
  },
  components: { EquipSidebar },
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
    padding-right: calc(var(--gap-25) * 8);
  }
}
</style>
