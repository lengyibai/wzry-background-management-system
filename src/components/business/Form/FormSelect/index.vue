<template>
  <div class="FormSelect">
    <!-- 右侧描述 -->
    <div class="label">
      <span>{{ label }}：</span>
    </div>

    <div class="select">
      <!-- 选择器框 -->
      <div
        class="select-box"
        ref="selectBox"
        @click="is_unfold = !is_unfold"
        @mouseenter="show_clear = true"
        @mouseleave="show_clear = false"
      >
        <div class="value">{{ selectValue || placeholder }}</div>
        <LybSvg
          class="clear"
          v-show="show_clear && value"
          :svg="icon.CLEAR"
          color="var(--theme-font-white)"
          enter-color="var(--theme-font-active)"
          size="20px"
          @click.native.stop="clear"
        />
        <img
          class="arrow"
          :class="{ rotate: is_unfold }"
          src="./img/arrow.png"
          alt=""
        />
      </div>

      <!-- 展开列表 -->
      <div class="select-list" :class="{ unfold: !is_unfold }">
        <div
          class="box"
          :class="{ active: currentIndex === index || value === item.id }"
          v-for="(item, index) in data"
          @click="select(item.id)"
          @mouseenter="currentIndex = index"
          @mouseleave="currentIndex = null"
          :key="index"
        >
          <div class="item">{{ item.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//#####··········图标··········#####//
import icon from "./svg";
export default {
  name: "FormSelect",
  props: {
    /* 数据 */
    data: {
      type: Array,
      default() {
        return [];
      },
    },
    /* 选择的值 */
    value: {
      type: Number,
      default: 0,
    },
    /* 左侧文字 */
    label: {
      type: String,
      default: "标题",
    },
    /* 选择器描述 */
    placeholder: {
      type: String,
      default: "请选择",
    },
  },
  data() {
    this.icon = icon; //图标
    return {
      is_unfold: false, //是否展开
      currentIndex: null, //当前点击
      show_clear: false, //显示清空按钮
    };
  },
  computed: {
    //#####··········显示被选中的··········#####//
    selectValue() {
      const data = this.data.filter(item => {
        return item.id === this.value;
      });
      return data.length && data[0].name;
    },
  },
  created() {
    //#####········监听全局click事件········#####//
    this.$bus.$on("click", v => {
      this.hideList(v);
    });
  },
  beforeDestroy() {
    this.$bus.$off("click"); //关闭监听
  },
  methods: {
    //#####··········选择的数据··········#####//
    select(id) {
      this.$emit("input", id);
      this.is_unfold = false;
    },

    //#####··········清空··········#####//
    clear() {
      this.$emit("input", undefined);
    },

    //#####··········点击空白隐藏列表··········#####//
    hideList(e) {
      if (e.target === this.$refs.selectBox) return;
      this.is_unfold = false;
    },
  },
};
</script>
<style scoped lang="less">
.FormSelect {
  display: flex;
  align-items: center;
  margin-bottom: var(--gap-35);
  .label {
    position: relative;
    width: 150px;
    margin-right: 0.25em;
    color: var(--theme-font-light);
    text-align: right;
    span {
      pointer-events: none;
      position: relative;
      font-size: var(--font-s-30);
      color: transparent;
      background: linear-gradient(115deg, #4d6b8f 0%, #8097bb 89%);
      -webkit-background-clip: text;
      .star {
        position: absolute;
        left: 0;
        color: var(--theme-font-color);
        font-size: var(--font-s-20);
        transform: translateX(-150%);
      }
    }
  }
  .select {
    position: relative;
    width: 300px;
    .select-box {
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid var(--theme-font-white);
      padding: 5px;
      .value {
        font-size: 24px;
        color: var(--theme-font-dark);
      }
      .clear {
        position: absolute;
        right: 0;
        transform: translateX(-200%);
      }
      .arrow {
        width: 25px;
        transition: all 0.25s;
        transform: rotate(0deg);
        pointer-events: none;
      }
    }
    .select-list {
      position: absolute;
      bottom: -15px;
      width: 100%;
      height: 300px;
      border: 1px solid var(--theme-font-active);
      border-radius: 5px;
      background-color: var(--theme-color-dark);
      transform: translateY(100%);
      transition: all 0.25s;
      transform-origin: top center;
      overflow: auto;
      z-index: 1;
      .box {
        padding: 20px;
        background-color: rgba(0, 0, 0, 0.39);
        color: var(--theme-font-white);
        .item {
          font-size: var(--font-s-25);
          transition: all 0.25s;
        }
      }
    }
  }
}
.rotate {
  transform: rotate(180deg) !important;
}

.unfold {
  opacity: 0;
  transform: translateY(100%) scaleY(0) !important;
}

.active {
  background-color: rgba(35, 60, 91, 0.25) !important;
  color: var(--theme-font-active) !important;
  .item {
    transform: translateX(10px);
  }
}

/* 进入前状态 */
.border-enter,
.border-leave-active {
  width: 0% !important;
}
/* 进入和离开动画属性 */
.border-leave-active,
.border-enter-active {
  transition: all 0.5s;
}
</style>
