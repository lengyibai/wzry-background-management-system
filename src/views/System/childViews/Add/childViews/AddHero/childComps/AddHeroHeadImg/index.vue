<template>
  <div class="AddHeroHeadImg">
    <div class="row">
      <span class="title">英雄头像：</span>
      <SelectImg
        :src="hero_data.headImg"
        keyword="headImg"
        @select="setKeyValue"
      />
    </div>
    <div class="row">
      <span class="title">英雄海报：</span
      ><SelectImg
        :src="hero_data.poster"
        keyword="poster"
        @select="setKeyValue"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "AddHeroHeadImg",
  inject: ["hero_data", "setKeyValue"],
};
</script>
<style scoped lang="less">
.AddHeroHeadImg {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: var(--gap-50);
  .row {
    display: flex;
    align-items: center;
    .title {
      font-size: var(--font-s-50);
    }
  }
  .set-value {
    .value {
      font-size: var(--font-s-50);
    }
  }
}
</style>
