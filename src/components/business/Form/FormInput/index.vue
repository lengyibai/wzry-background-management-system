<template>
  <div class="FormInput">
    <!-- 右侧描述 -->
    <div class="label">
      <span><i class="star" v-if="required">*</i>{{ label }}：</span>
    </div>

    <!-- 输入框 -->
    <div class="input">
      <slot>
        <input
          type="text"
          @input="$emit('input', $event.target.value)"
          :value="value"
          :placeholder="placeholder"
          @focus="is_focus = true"
          @blur="blur($event.target.value)"
        />

        <!-- 获取焦点拉长线条 -->
        <transition name="border">
          <div class="focus" v-show="is_focus"></div>
        </transition>

        <!-- 输入不合法拉长线条 -->
        <transition name="border">
          <div class="border" v-show="no_legal"></div>
        </transition>

        <!-- 输入不合法提示 -->
        <transition name="tip">
          <div class="tip" v-if="no_legal" v-typewriter="tip"></div>
        </transition>
      </slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "FormInput",
  props: {
    /* 值 */
    value: {
      type: String,
      default: "",
    },
    /* 左侧文字 */
    label: {
      type: String,
      default: "标题",
    },
    /* 输入框描述 */
    placeholder: {
      type: String,
      default: "请输入",
    },
    /* 自定义表单验证 */
    validate: {
      type: Function,
      default: () => false,
    },
    /* 是否必填 */
    required: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      tip: "", //不合法提示
      no_legal: false, //是否合法
      is_focus: false, //是否获取焦点
    };
  },
  methods: {
    //#####··········失去焦点··········#####//
    blur(v) {
      this.is_focus = false;
      if (this.validate(v)) {
        this.tip = this.validate(v);
        this.no_legal = true;
      } else if (this.required && v === "") {
        this.tip = "必填项";
        this.no_legal = true;
      } else {
        this.no_legal = false;
      }
    },
  },
};
</script>
<style scoped lang="less">
.FormInput {
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
  .input {
    position: relative;
    input {
      width: 300px;
      border: none;
      border-bottom: 1px solid var(--theme-font-white);
      outline: none;
      font-size: var(--font-s-25);
      color: var(--theme-font-dark);
      padding: 0 0.25em;
      background-color: transparent;
      &::-webkit-input-placeholder {
        color: var(--theme-color-light);
      }
    }
    .border,
    .focus {
      position: absolute;
      height: 1px;
      width: 100%;
      transition: all 0.5s;
      transform: translateY(-1px);
      background-color: var(--red);
    }
    .focus {
      background-color: var(--theme-font-active);
    }
    .tip {
      position: absolute;
      bottom: 0;
      transform-origin: center top;
      transform: translateY(125%);
      font-size: var(--font-s-16);
      height: var(--font-s-16);
      color: var(--red);
      overflow: hidden;
    }
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

/* 进入前状态 */
.tip-leave-active {
  height: 0 !important;
}
/* 进入和离开动画属性 */
.tip-leave-active {
  transition: all 0.5s;
}
</style>
