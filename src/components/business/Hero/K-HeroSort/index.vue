<template>
  <div
    class="K-HeroSort"
    :style="{ backgroundPositionY: '-' + y[occ] + 'px' }"
  ></div>
</template>
<script>
export default {
  props: {
    occ: {
      type: String,
      default: "",
    },
  },
  name: "KHeroSort",
  data() {
    return {
      y: {
        坦克: 0,
        法师: 70,
        战士: 140,
        辅助: 210,
        刺客: 280,
        射手: 350,
      },
    };
  },
};
</script>
<style scoped lang="less">
.K-HeroSort {
  width: 290px;
  height: 70px;
  background-image: url("./img/hero-sort.png");
  background-repeat: no-repeat;
  background-position: 0 0;
}
</style>
