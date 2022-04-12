<template>
  <LybMask :show="value">
    <transition name="dialog">
      <div class="K-Dialog" v-show="value">
        <img
          class="close cursor-pointer"
          v-if="showClose"
          src="./img/close.png"
          @click="close"
        />
        <img class="bg" src="./img/dialog.png" />
      </div>
    </transition>
  </LybMask>
</template>
<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: true,
    },
    showClose: {
      type: Boolean,
      default: true,
    },
  },

  name: "K-Dialog",
  methods: {
    close() {
      console.log("关闭");
      this.$emit("input", false);
    },
  },
  components: {},
};
</script>
<style scoped lang="less">
.K-Dialog {
  position: absolute;
  width: 1280px;
  height: 760px;
  .close {
    position: absolute;
    top: 32px;
    right: 27px;
    width: 40px;
    filter: drop-shadow(0px 0px 3px #cce5ff);
  }
  .bg {
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
}

/* 淡入淡出 */
.dialog-enter,
.dialog-leave-active {
  transform: scale(0.9);
  opacity: 0;
}

.dialog-enter-active,
.dialog-leave-active {
  transition: all 0.25s;
}
</style>
