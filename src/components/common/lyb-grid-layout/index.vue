<template>
  <div
    class="LybGridLayout"
    ref="lybGrid"
    :style="{ gridTemplateColumns: 'repeat(' + count + ', 1fr)', gridGap: gap }"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    count: {
      type: Number,
      default: 5,
    },
    gap: {
      type: String,
      default: "",
    },
    eqhMultiple: {
      type: Number,
      default: 0,
    },
  },
  name: "LybGridLayout",
  data() {
    return {
      lybGrid: null,
    };
  },
  mounted() {
    this.lybGrid = this.$refs.lybGrid;
    let a = null;
    const _this = this;
    (function fn() {
      if (_this.eqhMultiple > 0 && _this.$slots.default.length) {
        _this.updateHeight();
        return;
      }
      a = requestAnimationFrame(fn);
    })();
    // 3秒后还未获取到插槽元素，则取消获取
    setTimeout(() => {
      cancelAnimationFrame(a);
    }, 3000);
  },
  methods: {
    updateHeight() {
      const box = this.$slots.default;
      box.forEach(item => {
        item.elm.style.height = item.elm.scrollWidth * this.eqhMultiple + "px";
      });
      window.addEventListener("resize", this.fn);
    },
    fn() {
      console.log(666);
      requestAnimationFrame(
        function () {
          const box = this.$slots.default;
          box.forEach(item => {
            item.elm.style.height =
              item.elm.offsetWidth * this.eqhMultiple + "px";
          });
        }.bind(this),
      );
    },
  },
  destroyed() {
    window.removeEventListener("resize", this.fn);
  },
};
</script>
<style scoped lang="less">
.LybGridLayout {
  width: 100%;
  height: 100%;
  display: grid;
  grid-auto-flow: row dense;
  align-content: flex-start;
}
</style>
