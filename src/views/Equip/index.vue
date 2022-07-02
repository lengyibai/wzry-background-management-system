<template>
  <!-- 装备 -->
  <div class="Equip">
    <div class="EquipMain">
      <EquipList :equipList="equipList" />
      <EquipDetail />
    </div>
    <transition name="sidebar">
      <EquipSidebar v-show="show_EquipSidebar" />
    </transition>
  </div>
</template>

<script>
//#####··········网络请求··········#####//
import { getEquip } from "@/api/main/equips/equip";
//#####··········子组件··········#####//
import EquipList from "./childComps/EquipList"; //装备列表
import EquipDetail from "./childComps/EquipDetail"; //装备详情
import EquipSidebar from "./childComps/EquipSidebar"; //右侧边栏
export default {
  name: "Equip",
  data() {
    return {
      show_EquipSidebar: false, //显示装备分类侧边栏
      equip_list: [], //装备列表
      currentIndex: 2, //类别索引
    };
  },
  components: { EquipList, EquipDetail, EquipSidebar },
  created() {
    //#####··········获取装备列表··········#####//
    getEquip().then((res) => {
      this.equip_list = res;
    });
  },
  computed: {
    equipList() {
      return this.equip_list[this.currentIndex]?.list;
    },
  },
  mounted() {
    //#####··········延迟显示右侧边栏··········#####//
    setTimeout(() => {
      this.show_EquipSidebar = true;
    }, 250);
  },
};
</script>
<style scoped lang="less">
.Equip {
  width: 100%;
  height: 100%;
  display: flex;
  .EquipMain {
    position: relative;
    flex: 1;
    display: flex;
    height: 100%;
    padding-right: calc(var(--gap-25) * 8);
  }
}
</style>
