<template>
  <div class="FormSelect">
    <!-- 左侧描述 -->
    <div class="label">
      <span>{{ label }}：</span>
    </div>

    <div class="select">
      <!-- 选择器框 -->
      <div
        class="select-box cursor-pointer"
        ref="selectBox"
        @mouseenter="show_clear = true"
        @mouseleave="show_clear = false"
      >
        <input
          type="text"
          ref="input"
          @focus="is_unfold = true"
          v-model="select_value"
          placeholder="搜索"
        />
        <LybSvg
          class="clear"
          v-show="show_clear && value"
          :svg="icon.CLEAR"
          color="var(--theme-color-nine)"
          enter-color="var(--theme-color-four)"
          size="20px"
          @click.native.stop="clear"
        />
        <img
          class="arrow"
          :class="{ rotate: is_unfold }"
          src="@/assets/img/part/icon/k_arrow.png"
          alt=""
        />
      </div>

      <!-- 展开列表 -->
      <div class="select-list" :class="{ unfold: !is_unfold }">
        <transition-group name="fade">
          <div
            class="box"
            :class="{ active: currentIndex === index || value === item.id }"
            v-for="(item, index) in select_list"
            @click="select(item.id)"
            @mouseenter="currentIndex = index"
            @mouseleave="currentIndex = null"
            :key="item.name"
          >
            <div class="item cursor-pointer">{{ item.name }}</div>
          </div>
        </transition-group>
      </div>
    </div>
  </div>
</template>
<script>
//#####··········公共方法··········#####//
//{ 正则搜索，防抖 }
import { $search, $debounce } from "@/utils/lyb.js";
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
      select_value: "", //输入框的值
      active_value: "", //选中的值
      select_list: [],
      is_unfold: false, //是否展开
      currentIndex: null, //当前点击
      show_clear: false, //显示清空按钮
      debounce: null,
    };
  },
  computed: {
    //#####··········显示被选中的··········#####//
    selectValue() {
      const data = this.data.filter(item => {
        return item.id === this.value;
      });
      return data[0]?.name;
    },
  },
  watch: {
    //#####··········实时监听输入框值··········#####//
    select_value() {
      this.debounce();
    },
    //#####··········选择后替换输入框··········#####//
    value(v) {
      const data = this.data.filter(item => {
        return item.id === v;
      });
      this.select_value = data[0]?.name;
      this.active_value = data[0]?.name;
    },
  },
  created() {
    this.select_list = this.data;
    //#####··········防抖配合正则搜索··········#####//
    this.debounce = $debounce(
      function () {
        this.select_list = $search(this.data, this.select_value, ["name"]);
      }.bind(this),
      100,
    );
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
      this.$emit("input", null);
      this.is_unfold = true;
      this.$refs.input.focus();
    },

    //#####··········点击空白隐藏列表··········#####//
    hideList(e) {
      if (e.target === this.$refs.selectBox || e.target === this.$refs.input)
        return;
      this.is_unfold = false;
      /* 如果失去焦点但输入框的值与之前选中的值不一致，则还原之前 */
      if (this.select_value !== this.active_value) {
        this.select_value = this.active_value;
      }
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
    color: var(--theme-color-eight);
    text-align: right;
    span {
      position: relative;
      font-size: var(--font-s-30);
      color: transparent;
      background: linear-gradient(115deg, #4d6b8f 0%, #8097bb 89%);
      -webkit-background-clip: text;
      .star {
        position: absolute;
        left: 0;
        color: var(--theme-color-seven);
        font-size: var(--font-s-20);
        transform: translateX(-150%);
      }
    }
  }
  .select {
    position: relative;
    width: 250px;
    .select-box {
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid var(--theme-color-nine);
      padding: var(--gap-5);
      input {
        width: 100%;
        font-size: var(--font-s-25);
        color: var(--theme-color-five);
        background-color: transparent;
        outline: none;
        border: none;
      }
      .clear {
        position: absolute;
        right: 40px;
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
      border: 1px solid var(--theme-color-four);
      border-radius: 5px;
      background-color: var(--black);
      transform: translateY(100%);
      transition: all 0.25s;
      transform-origin: top center;
      overflow: auto;
      z-index: 1;
      overscroll-behavior: contain;
      .box {
        padding: var(--gap-20);
        background-color: rgba(0, 0, 0, 0.39);
        color: var(--theme-color-nine);
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
  background-color: rgba(35, 60, 91, 0.5) !important;
  color: var(--theme-color-four) !important;
  .item {
    transform: translateX(10px);
  }
}
/* 进入前状态 */
.fade-enter {
  opacity: 0;
  transform: translateX(100%);
}
.fade-leave-active {
  opacity: 0;
  transform: translateX(-100%);
}
/* 进入和离开动画属性 */
.fade-leave-active,
.fade-enter-active {
  transition: all 0.5s;
}
/* 解决添加元素占位时无动画，替代 width: 0 与 overflow: hidden */
.fade-move {
  transition: all 0.5s;
}
/* 解决删除元素时，其他元素补位无动画 */
.fade-leave-active {
  position: absolute; /* 必须为绝对定位 */
}
</style>
