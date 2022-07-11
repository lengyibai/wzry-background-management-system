<template>
  <div class="AddHeroCoverOffset flex">
    <LybSvg
      :class="item.toLowerCase()"
      :key="item"
      :svg="icon[item]"
      @mousedown.native="down(item.toLowerCase())"
      @mouseup.native="up(item.toLowerCase())"
      style="position: absolute"
      color="var(--theme-color-seven)"
      enterColor="var(--theme-color-four)"
      size="75px"
      v-for="item in ['TOP', 'RIGHT', 'BOTTOM', 'LEFT']"
    />
  </div>
</template>
<script>
//#####··········图标文件··········#####//
import icon from "./svg";
export default {
  name: "AddHeroCoverOffset",
  data() {
    this.icon = icon;
    return {
      timer: null,
    };
  },
  methods: {
    //#####··········长按自增··········#####//
    down(d) {
      this.timer = setInterval(() => {
        this.$emit("direction", d);
      }, 100);
    },
    //#####··········抬起中断自增并增一··········#####//
    up(d) {
      clearInterval(this.timer);
      this.$emit("direction", d);
    },
  },
};
</script>
<style scoped lang="less">
.AddHeroCoverOffset {
  position: relative;
  width: 250px;
  height: 250px;
  .top {
    top: 0;
  }
  .bottom {
    bottom: 0;
  }
  .left {
    left: 0;
  }
  .right {
    right: 0;
  }
}
</style>
