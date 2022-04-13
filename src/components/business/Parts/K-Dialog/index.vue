<template>
  <LybMask :show="value">
    <transition :name="type">
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
    type: {
      type: String,
      default: "default",
    },
  },
  name: "K-Dialog",
  data() {
    return {};
  },
  methods: {
    close() {
      this.$click("关闭");
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

/* 缩放 */
.default-enter,
.default-leave-active {
  transform: scale(0.9);
  opacity: 0;
}

.default-enter-active {
  transition: all 0.25s;
}
.default-leave-active {
  transition: all 0.2s 0.25s;
}

/* 由下而上 */
.confirm-enter,
.confirm-leave-active {
  transform: translateY(15%);
}

.confirm-enter-active {
  transition: all 0.35s ease-out;
}
.confirm-leave-active {
  transition: all 0.1s 0.25s;
}
</style>
