<template>
  <div class="Edit flex" :style="box">
    <K-ManageCard
      v-for="(item, index) in list"
      :title="item"
      :key="index"
      :style="card"
      type="edit"
    />
  </div>
</template>
<script>
//#####··········混入··········#####//
// { 系统管理卡片数据 }
import { ManageCard } from "@/utils/mixins.js";
export default {
  name: "Edit",
  data() {
    return {};
  },
  mixins: [ManageCard],
  components: {},
  methods: {},
};
</script>
<style scoped lang="less">
.Edit {
}
</style>
