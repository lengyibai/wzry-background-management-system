<template>
  <div class="AddHeroMarkHeight">
    <div class="set row">
      <span class="title">英雄名：</span>
      <span class="value cursor-pointer" @click="setKeyValue('name')">{{
        hero_data.name || "点击设置"
      }}</span>
    </div>
    <div class="set">
      <span class="title">英雄代号：</span>
      <span class="value cursor-pointer" @click="setKeyValue('mark')">{{
        hero_data.mark || "点击设置"
      }}</span>
    </div>
    <div class="set">
      <span class="title">英雄身高：</span>
      <span class="value cursor-pointer" @click="setKeyValue('height')">{{
        hero_data.height || "点击设置"
      }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "AddHeroMarkHeight",
  inject: ["hero_data", "setKeyValue"],
};
</script>
<style scoped lang="less">
.AddHeroMarkHeight {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  .set {
    display: flex;
    align-items: center;
    .value {
      font-size: var(--font-s-50);
    }
    .title {
      font-size: var(--font-s-50);
    }
  }
}
</style>
