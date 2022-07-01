<template>
  <div class="EquipListSenior">
    <EquipCard v-for="(item, index) in equipList" :equip="item" :key="index" />
  </div>
</template>
<script>
//#####··········子组件··········#####//
import EquipCard from "../common/EquipCard"; //装备卡片
export default {
  name: "EquipListSenior",
  props: {
    /* 高级装备列表 */
    equipList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  components: { EquipCard },
  methods: {},
};
</script>
<style scoped lang="less">
.EquipListSenior {
  width: 33.33%;
  height: 100%;
}
</style>
