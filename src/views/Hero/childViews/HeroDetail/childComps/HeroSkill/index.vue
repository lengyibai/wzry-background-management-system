<template>
  <div class="HeroSkill">
    <div class="title">技能</div>
    <!--//%%%%%··········技能图标··········%%%%%//-->
    <HeroSkillIcon v-bind="$attrs" @select-skill="selectSkill" />

    <!--//%%%%%··········主体内容··········%%%%%//-->
    <transition name="fade">
      <HeroSkillContent v-bind="$attrs" :index="index" v-show="toggle" />
    </transition>
  </div>
</template>
<script>
//#####··········子组件··········#####//
import HeroSkillIcon from "./childComps/HeroSkillIcon"; //技能图标
import HeroSkillContent from "./childComps/HeroSkillContent"; //主体内容
export default {
  name: "index",
  data() {
    return {
      toggle: true, //用于切换动画
      index: 0, //当前展示技能的索引
    };
  },
  components: { HeroSkillIcon, HeroSkillContent },

  methods: {
    //#####··········点击需要展示的技能··········#####//
    selectSkill(index) {
      this.toggle = false;
      setTimeout(() => {
        this.toggle = true;
        this.index = index;
      }, 375);
    },
  },
};
</script>
<style scoped lang="less">
.HeroSkill {
  width: 100%;
  height: 100%;
  overflow: auto;
  color: var(--white);
  background-color: rgba(0, 0, 0, 0.5);
  .title {
    font-size: var(--font-s-50);
    text-align: center;
    margin-top: 1em;
    text-shadow: var(--t-shadow);
    margin-bottom: var(--gap-25);
  }
}
</style>
