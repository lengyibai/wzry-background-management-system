<template>
  <div class="HeroSkillContentLeft">
    <!--//%%%%%··········名称及类型··········%%%%%//-->
    <div class="name-type">
      <div class="name">{{ activeSkill.name }}</div>
      <K-SkillTypeTag
        v-for="(item, index) in activeSkill.type"
        :type="item"
        :key="index"
      />
    </div>

    <!--//%%%%%··········数字相关··········%%%%%//-->
    <div class="cd-consume">
      <div class="cd" v-if="activeSkill.cd">CD：{{ activeSkill.cd }}秒</div>
      <div class="consume" v-if="activeSkill.cd">
        法力消耗：{{ activeSkill.consume }}
      </div>
      <div class="passive" v-else>被动</div>
    </div>

    <!--//%%%%%··········描述··········%%%%%//-->
    <div class="desc" v-html="activeSkill.desc"></div>
  </div>
</template>
<script>
export default {
  name: "HeroSkillContentLeft",
  props: {
    activeSkill: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
<style scoped lang="less">
.HeroSkillContentLeft {
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  .name-type {
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: var(--gap-15);
    .name {
      font-size: var(--font-s-50);
      margin-right: var(--gap-15);
      text-shadow: var(--t-shadow);
    }
  }
  .cd-consume {
    display: flex;
    margin-bottom: var(--gap-15);
    .cd,
    .consume,
    .passive {
      font-size: var(--font-s-35);
      margin-right: var(--gap-35);
      text-shadow: var(--t-shadow);
    }
    .passive {
      color: #ccc;
    }
  }
  .desc {
    font-size: var(--font-s-25);
    text-shadow: var(--t-shadow);
  }
}
</style>
