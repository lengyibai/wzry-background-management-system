<template>
  <transition name="K-Message">
    <div class="K-Message" v-show="messages.length">
      <transition-group name="message">
        <div
          class="message"
          v-for="(item, index) in messages"
          :key="item.id"
          :style="{
            transform: 'translateX(-50%) translateY(' + (index * 100 + index * 25) + '%)',
          }"
        >
          <span :style="{ color: color[item.type] }">{{ item.text }}</span>
          <div class="bg">
            <img :src="imgs[item.type].left" />
            <img :src="imgs[item.type].center" />
            <img :src="imgs[item.type].right" />
          </div>
        </div>
      </transition-group>
    </div>
  </transition>
</template>
<script>
export default {
  props: {
    // 消息队列
    messages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  name: "KMessage",
  data() {
    return {
      color: {
        default: "#84ade2",
        warning: "#e2c484",
        danger: "#e28484",
      },
      imgs: {
        default: {
          left: require("./img/left_default.png"),
          center: require("./img/center_default.png"),
          right: require("./img/right_default.png"),
        },
        warning: {
          left: require("./img/left_warning.png"),
          center: require("./img/center_warning.png"),
          right: require("./img/right_warning.png"),
        },
        danger: {
          left: require("./img/left_danger.png"),
          center: require("./img/center_danger.png"),
          right: require("./img/right_danger.png"),
        },
      },
    };
  },
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
  background-image: linear-gradient(180deg, #000000 -25%, transparent 25%);

  .message {
    display: flex;
    position: absolute;
    top: 0;
    left: 50%;
    justify-content: center;
    align-items: center;
    width: fit-content;
    padding: var(--gap-15) var(--gap-50);
    border-radius: 0 0 10px 10px;
    overflow: hidden;
    transition: all 0.5s;
    transform: translateX(-50%) translateY(-3px);
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
      // pointer-events: none;
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

/* 消息蒙版 */
.K-Message-enter,
.K-Message-leave-to {
  opacity: 0;
}

.K-Message-leave-active,
.K-Message-enter-active {
  transition: all 0.5s;
}

/* 消息框 */
.message-enter,
.message-leave-to {
  transform: translateX(-50%) translateY(-100%) !important;
}
</style>
