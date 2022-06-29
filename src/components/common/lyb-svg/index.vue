<template>
  <!-- @mousedown="down($event.target)" -->
  <span
    class="LybSvg"
    v-html="svg"
    :style="{
      width: size,
      height: size,
      margin: `${top} ${right} ${bottom} ${left}`,
      color: color,
    }"
    :title="title"
    @mouseleave="leave($event.target)"
    @mouseenter="enter($event.target)"
    @mouseup="up($event.target)"
  ></span>
</template>
<script>
/*
注意：SVG代码必须删除以下内容
class="icon"
width:宽度px
height:高度px
并将图标颜色fill更改为currentColor
 */
export default {
  name: "LybSvg",
  props: {
    // SVG代码
    svg: {
      type: String,
      default: "",
    },
    // 图标颜色
    color: {
      type: String,
      default: "",
    },
    /* 悬浮颜色 */
    enterColor: {
      type: String,
      default: "",
    },
    /* 按下颜色，已被按下缩小动画替换 */
    // downColor: {
    //   type: String,
    //   default: "",
    // },
    //悬浮描述
    title: {
      type: String,
      default: "",
    },
    //图片等比宽高
    size: {
      type: String,
      default: "25px",
    },
    // 以下为外边距
    top: {
      type: String,
      default: "0px",
    },
    right: {
      type: String,
      default: "0px",
    },
    bottom: {
      type: String,
      default: "0px",
    },
    left: {
      type: String,
      default: "0px",
    },
  },
  methods: {
    enter(el) {
      el.style.color = this.enterColor;
    },
    leave(el) {
      el.style.color = this.color;
    },
    up(el) {
      if (el.tagName === "svg") {
        el.parentNode.style.color = this.enterColor;
      } else {
        el.parentNode.parentNode.style.color = this.enterColor;
      }
    },
  },
};
</script>
<style scoped lang="less">
.LybSvg {
  position: relative;
  background: no-repeat center center;
  background-size: contain;
  cursor: pointer;
  transition: all 0.25s;
  &:hover {
    transition: all 0.1s;
  }
  &:active {
    transform: scale(0.9);
  }
}
</style>
