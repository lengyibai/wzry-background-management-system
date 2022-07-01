<template>
  <div class="EquipList">
    <EquipListPrimary :equipList="equipList[0]" />
    <EquipListMedium :equipList="equipList[1]" />
    <EquipListSenior :equipList="equipList[2]" />
  </div>
</template>
<script>
//#####··········子组件··········#####//
import EquipListPrimary from "./childComps/EquipListPrimary"; //初级装备
import EquipListMedium from "./childComps/EquipListMedium"; //中级装备
import EquipListSenior from "./childComps/EquipListSenior"; //高级装备
export default {
  name: "EquipList",
  props: {
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
  components: { EquipListPrimary, EquipListMedium, EquipListSenior },
  methods: {},
};
</script>
<style scoped lang="less">
.EquipList {
  position: relative;
  width: 75%;
  height: 100%;
  display: flex;
  margin-right: 1px;
}
</style>
