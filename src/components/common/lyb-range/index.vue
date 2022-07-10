<template>
  <div class="LybRange">
    <div class="sliderValue" v-if="showNum">
      <span :class="{ showNum: show_num }" :style="{ left: barWidth }">
        {{ text || value }}
      </span>
    </div>
    <div class="field">
      <div class="bar" :style="{ width: barWidth, backgroundColor: color }">
        <img
          :src="icon"
          v-show="showIcon && showDot"
          :style="{ width: size + 'px', height: size + 'px' }"
        />
        <span
          v-show="showDot && !showIcon"
          :style="{
            width: size + 'px',
            height: size + 'px',
            backgroundColor: color,
          }"
        ></span>
      </div>
      <input
        :value="value"
        @input="changeValue($event.target.value)"
        @mouseup="hide"
        type="range"
        :min="min"
        :max="max"
        :step="step"
      />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    /* 最小值 */
    min: {
      type: Number,
      default: 0,
    },
    /* 最大值 */
    max: {
      type: Number,
      default: 100,
    },
    /* 进度条值，通过v-model */
    value: {
      type: Number,
      default: 0,
    },
    /* 进度条自定义悬浮文本 */
    text: {
      type: String,
      default: "",
    },
    /* 进度条颜色 */
    color: {
      type: String,
      default: "#3498db",
    },
    /* 圆点和图标大小，实际上可点击的范围依然是20px * 20px */
    size: {
      type: Number,
      default: 35,
    },
    /* 是否显示圆点，也决定是否显示图标 */
    showDot: {
      type: Boolean,
      default: true,
    },
    /* 是否显示图标 */
    showIcon: {
      type: Boolean,
      default: true,
    },
    /* 自定义图标1:1 */
    icon: {
      type: String,
      default: require("./img/icon.png"),
    },
    /* 是否在滑动的时候显示数字 */
    showNum: {
      type: Boolean,
      default: true,
    },
    /* 步长 */
    step: {
      type: Number,
      default: 1,
    },
  },
  name: "LybRange",
  data() {
    return {
      rotate: 0,
      show_num: false,
    };
  },
  computed: {
    barWidth() {
      let value = this.value - this.min;
      let max = this.max - this.min;
      return `calc(${value / (max / 100)}% + ${
        ((this.size - (this.showDot ? 0 : 25)) * (max / 2 - value)) / max
      }px)`;
    },
  },
  mounted() {
    const root = document.querySelector(":root");
    root.style.setProperty("--size", `${this.size}px`);
  },
  methods: {
    changeValue(v) {
      this.show_num = true;
      this.$emit("input", parseFloat(v));
      this.rotate = v / this.max;
    },
    hide() {
      this.show_num = false;
    },
  },
};
</script>
<style scoped lang="less">
:root {
  --size: 20px;
}
.LybRange {
  position: relative;
  width: 100%;
  .sliderValue {
    position: absolute;
    width: 100%;
    top: -75px;
    span {
      position: absolute;
      padding: 0 15px;
      border-radius: 30px;
      height: 50px;
      font-size: 25px;
      font-weight: 500;
      color: var(--theme-font-light);
      background-color: var(--theme-color-light);
      text-align: center;
      transform: translateX(-50%) scale(0);
      transform-origin: bottom;
      transition: transform 0.3s ease-in-out;
      line-height: 50px;
      z-index: 2;
    }
  }
  .field {
    @height: 3px;
    display: flex;
    justify-content: center;
    .bar {
      position: absolute;
      left: 0;
      width: 0%;
      height: @height;
      border-radius: @height;
      pointer-events: none;
      background-image: linear-gradient(90deg, #2d59a0 0%, #6bb8ff 100%);

      img,
      span {
        position: absolute;
        transform: translateX(50%) translateY(-50%);
        top: 1.5px;
        right: 0;
        border-radius: 50%;
        transition: transform 0.5s;
      }
      img {
        z-index: 2;
      }
    }
    input {
      appearance: none;
      width: 100%;
      height: @height;
      border-radius: @height;
      margin: 0;
      background-color: var(--theme-font-white);
      outline: none;
      &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: var(--size);
        height: var(--size);
        background-size: cover;
        border-radius: 50px;
        cursor: pointer;
      }
    }
    .value {
      position: relative;
      font-size: 18px;
      font-weight: 600;
      color: #000;
      &.left {
        left: -22px;
      }
      &.right {
        right: -43px;
      }
    }
  }
}

/* 拖动显示数字 */
.showNum {
  transform: translateX(-50%) scale(1) !important;
}

/* 淡入淡出 */
.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
</style>
