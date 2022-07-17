<template>
  <transition name="fade">
    <div
      class="LybMask flex"
      v-show="show"
      v-maskGradient="{ color: 'rgba(40, 100, 195, 0.25)' }"
    >
      <slot>这是一个蒙版</slot>
    </div>
  </transition>
</template>
<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  name: "LybMask",
};
</script>
<style scoped lang="less">
.LybMask {
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.fade-leave-active,
.fade-enter-active {
  transition: all 0.5s;
}
</style>
