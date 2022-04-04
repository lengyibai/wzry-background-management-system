<template>
  <div class="K-HeroSort" :style="{ backgroundPositionY: '-' + y[occ] + 'px' }"></div>
</template>
<script>
export default {
  props: {
    occ: {
      type: String,
      default: ''
    }
  },
  name: 'KHeroSort',
  data() {
    return {
      y: {
        tank: 0,
        mage: 70,
        warrior: 140,
        assist: 210,
        assassin: 280,
        striker: 350
      }
    };
  }
};
</script>
<style scoped lang="less">
.K-HeroSort {
  width: 290px;
  height: 70px;
  background-image: url('./img/hero-sort.png');
  background-repeat: no-repeat;
  background-position: 0 0;
}
</style>
