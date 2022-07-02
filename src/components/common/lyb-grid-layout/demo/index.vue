<template>
  <div class="demoFull">
    <div class="grid">
      <LybGridLayout gap="5px" :count="5" :eqhMultiple="0.5">
        <!-- 想让盒子的高度与宽度等比，需要在类名加入box，v-bind:eqhMultiple为等比倍数，默认宽高相等（1倍） -->
        <div class="box" v-for="demo in 28" :key="demo" />
      </LybGridLayout>
    </div>
  </div>
</template>
<script>
export default {
  name: "demo",
  data() {
    return {};
  },
};
</script>
<style scoped lang="less">
.grid {
  width: 100%;
  height: 100%;
  overflow: auto;
  .box {
    // height: 100px;
    border: 1px solid #fff;
    transition: all 0.5s;
  }
}
</style>
