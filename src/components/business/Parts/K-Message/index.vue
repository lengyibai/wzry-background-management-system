<template>
  <transition name="K-Message">
    <div class="K-Message" v-show="show">
      <transition name="message">
        <div class="message" v-show="show">
          <span>{{ text }}</span>
          <div class="bg">
            <img src="./img/left.png" />
            <img src="./img/center.png" />
            <img src="./img/right.png" />
          </div>
        </div>
      </transition>
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
    text: {
      type: String,
      default: "",
    },
  },
  name: "KMessage",
};
</script>
<style scoped lang="less">
.K-Message {
  position: fixed;
  width: 100vw;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 3;
  // background-image: linear-gradient(180deg, #000000 -25%, transparent 25%);

  .message {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%) translateY(-3px);
    display: flex;
    width: fit-content;
    padding: var(--gap-25) var(--gap-35);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0 0 10px 10px;
    overflow: hidden;
    span {
      font-size: var(--font-s-20);
      color: var(--theme-font-dark);
      z-index: 2;
    }
    .bg {
      position: absolute;
      display: flex;
      width: 100%;
      height: 100%;
      pointer-events: none;
      filter: brightness(1.35);
      opacity: 0.75;
      img {
        height: 100%;
        &:nth-of-type(2) {
          flex: 1;
        }
      }
    }
  }
}

.K-Message-enter,
.K-Message-leave-to {
  opacity: 0;
}

.K-Message-leave-active,
.K-Message-enter-active {
  transition: all 0.5s;
}

.message-leave-to,
.message-enter {
  transform: translateX(-50%) translateY(-100px) !important;
}

.message-leave-active,
.message-enter-active {
  transition: all 0.5s;
}
</style>
