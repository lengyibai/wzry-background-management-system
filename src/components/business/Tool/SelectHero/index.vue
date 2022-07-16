<template>
  <div class="SelectHero">
    <FormSelect
      v-if="hero_list.length"
      label="指派英雄"
      :data="hero_list"
      v-model="id"
      @change="selectHero"
    />
  </div>
</template>
<script>
//#####··········网络请求··········#####//
//接口信息：{ 英雄基础列表 }
import { heroList } from "@/api/main/hero/basis";
export default {
  name: "SelectHero",
  props: {
    value: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      id: 0, //选择的英雄id
      hero_list: [], //英雄基础列表
    };
  },
  watch: {
    value(v) {
      this.id = v;
    },
  },
  async created() {
    this.hero_list = await heroList();
  },
  methods: {
    //#####··········选择英雄后触发··········#####//
    selectHero(id) {
      this.$emit("input", id);
    },
  },
};
</script>
<style scoped lang="less">
.SelectHero {
}
</style>
