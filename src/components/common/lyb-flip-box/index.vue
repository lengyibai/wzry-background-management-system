<template>
  <div class="LybFlipBox" @mouseenter="show = true" @mouseleave="show = false">
    <div class="card-side card-side-front">
      <slot name="z"></slot>
    </div>
    <div class="card-side card-side-back">
      <transition name="fade">
        <slot name="f" v-if="show"></slot>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  name: "LybFlipBox",
  data() {
    return {
      show: false, //针对带有粒子效果的按钮，节省性能
    };
  },
  components: {},
  methods: {},
};
</script>
<style scoped lang="less">
.LybFlipBox {
  position: relative;
  width: 100%;
  height: 100%;
  perspective: 1000px;
  &:hover .card-side-front {
    transform: rotateX(-180deg);
  }
  &:hover .card-side-back {
    transform: rotateX(0deg);
  }

  .card-side {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 75px;
    overflow: hidden;
    transition: all 0.5s ease;
    backface-visibility: hidden;
  }

  .card-side-back {
    transform: rotateY(180deg);
  }
}
</style>
