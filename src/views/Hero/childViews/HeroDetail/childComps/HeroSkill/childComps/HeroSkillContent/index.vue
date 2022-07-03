<template>
  <div class="HeroSkillContent">
    <HeroSkillContentLeft :activeSkill="activeSkill" :style="{ width: activeSkill.effect ? '45%' : '100%' }" />
    <HeroSkillContentRight :activeSkill="activeSkill" v-if="activeSkill.effect" />
  </div>
</template>
<script>
//#####··········子组件··········#####//
import HeroSkillContentLeft from "./childComps/HeroSkillContentLeft";
import HeroSkillContentRight from "./childComps/HeroSkillContentRight";
export default {
  name: "HeroSkillContent",
  props: {
    /* 技能列表 */
    skills: {
      type: Array,
      default() {
        return [];
      },
    },
    /* 当前展示技能的索引 */
    index: {
      type: Number,
      default: 0,
    },
  },
  components: { HeroSkillContentLeft, HeroSkillContentRight },
  computed: {
    activeSkill() {
      return this.skills[this.index];
    },
  },
};
</script>
<style scoped lang="less">
.HeroSkillContent {
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 2em;
}
</style>
