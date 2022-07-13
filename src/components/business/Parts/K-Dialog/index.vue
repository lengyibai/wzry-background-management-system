<template>
  <LybMask :show="value">
    <transition :name="type">
      <div class="K-Dialog" :style="{ width: width }" v-show="value">
        <div class="title">{{ title }}</div>
        <img
          class="close cursor-pointer"
          v-if="showClose"
          src="@/assets/img/part/icon/close.png"
          @dragstart.prevent
          @click="$emit('input', false)"
        />
        <img class="bg" src="@/assets/img/other/dialog.png" />
        <div class="content">
          <div class="box"></div>
          <!-- v-if解决按钮隐式显示，高度却未知，导致粒子无法正常显示 -->
          <transition name="fade">
            <K-Button type="warning" v-if="value" @click.native="close"
              >确定</K-Button
            >
          </transition>
        </div>
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
    width: {
      type: String,
      default: "50%",
    },
    /* 是否显示右上角关闭按钮 */
    showClose: {
      type: Boolean,
      default: true,
    },
    /* 左上角描述文字(有才会显示) */
    title: {
      type: String,
      default: "更改名字",
    },
    /* 输入框描述 */
    placeholder: {
      type: String,
      default: "请输入",
    },
    /* 动画类型 */
    type: {
      type: String,
      default: "default",
      validator: value => {
        return ["default", "confirm"].indexOf(value) !== -1;
      },
    },
  },
  name: "K-Dialog",
  data() {
    return {
      link: "",
    };
  },
  methods: {
    close() {
      this.$click("关闭");
      this.$emit("input", false);
      this.$emit("get-link", this.link);
      this.link = "";
    },
  },
  components: {},
};
</script>
<style scoped lang="less">
.K-Dialog {
  position: absolute;
  z-index: 3;
  .title {
    position: absolute;
    left: 70px;
    top: 35px;
    font-size: 30px;
    color: var(--theme-color-nine);
  }
  .close {
    position: absolute;
    top: 32px;
    right: 28px;
    width: 40px;
    filter: drop-shadow(0px 0px 3px #cce5ff);
    z-index: 2;
  }
  .bg {
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
  .content {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    top: 50%;
    left: 50%;
    transform: translate(-48%, -44%);
    width: 80%;
    height: 75%;
  }
}

/* 缩放 */
.default-enter,
.default-leave-active {
  transform: scale(0.75);
  opacity: 0;
}

.default-enter-active {
  transition: all 0.25s cubic-bezier(0.08, 0.82, 0.17, 1);
}
.default-leave-active {
  transition: all 0.25s 0.25s;
}

/* 由下而上 */
.confirm-enter,
.confirm-leave-active {
  transform: translateY(25%);
}

.confirm-enter-active {
  transition: all 0.25s cubic-bezier(0.26, 0.89, 0.29, 1.4);
}
.confirm-leave-active {
  transition: all 0.25s 0.25s;
}
</style>
