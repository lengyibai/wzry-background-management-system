<template>
  <!-- 主体结构 -->
  <div class="Equip">
    <div class="EquipMain">
      <router-view></router-view>
    </div>
    <EquipSidebar />
  </div>
</template>

<script>
import EquipSidebar from './childComps/EquipSidebar';

export default {
  name: 'Equip',
  components: {
    EquipSidebar
  }
};
</script>
<style scoped lang="less">
.Equip {
  width: 100%;
  display: flex;
  .EquipMain {
    flex: 1;
  }
}
</style>
