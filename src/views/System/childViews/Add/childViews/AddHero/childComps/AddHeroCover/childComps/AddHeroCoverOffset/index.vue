<template>
  <div class="AddHeroCoverOffset">
    <LybSvg
      :class="item.toLowerCase()"
      class="a"
      downColor="#aaa"
      @mousedown.native="down(item.toLowerCase())"
      @mouseup.native="up(item.toLowerCase())"
      v-for="item in ['TOP', 'RIGHT', 'BOTTOM', 'LEFT']"
      :key="item"
      :svg="icon[item]"
      color="#fff"
      size="75px"
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
  .a {
    position: absolute;
  }
  .top,
  .bottom {
    left: 50%;
    transform: translateX(-50%);
  }
  .bottom {
    bottom: 0;
  }
  .left,
  .right {
    top: 50%;
    transform: translateY(-50%);
  }
  .right {
    right: 0;
  }
}
</style>
