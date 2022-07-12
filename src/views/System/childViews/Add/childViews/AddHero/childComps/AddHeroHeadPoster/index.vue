<template>
  <div class="AddHeroHeadPoster">
    <span class="title text-gradient-one">英雄头像&海报：</span>
    <SelectImg
      :src="hero_data.headImg"
      keyword="headImg"
      @select="setKeyValue"
    />

    <SelectImg
      :src="hero_data.poster"
      keyword="poster"
      @select="setKeyValue"
      type="width"
    />
  </div>
</template>
<script>
export default {
  name: "AddHeroHeadPoster",
  inject: ["hero_data", "setKeyValue"],
};
</script>
<style scoped lang="less">
.AddHeroHeadPoster {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: var(--gap-35);
  .title {
    font-size: var(--font-s-30);
  }
}
</style>
