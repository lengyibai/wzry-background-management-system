<template>
  <div
    class="HeroDetailParallaxBg"
    :style="{
      backgroundImage: 'url(' + bg + ')',
    }"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    bg: {
      type: String,
      default: "",
    },
  },
  name: "HeroDetailParallaxBg",
};
</script>
<style scoped lang="less">
.HeroDetailParallaxBg {
  position: relative;
  width: 100vw;
  height: 100vh;
  background: no-repeat center center fixed;
  background-size: cover;
}
</style>
