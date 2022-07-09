<template>
  <div class="AddHeroCoverOffset">
    <LybSvg
      :class="item.toLowerCase()"
      class="a"
      downColor="#aaa"
      v-for="(item, index) in ['LEFT', 'RIGHT']"
      @click.native="scale(item.toLowerCase())"
      :key="index"
      :svg="icon[item]"
      color="#fff"
      size="75px"
    />
  </div>
</template>
<script>
import icon from "./svg";
export default {
  name: "AddHeroCoverOffset",
  data() {
    this.icon = icon;
    return {};
  },
  components: {},
  methods: {
    scale(scale) {
      this.$emit("scale", scale);
    },
  },
};
</script>
<style scoped lang="less">
.AddHeroCoverOffset {
  position: relative;
  width: 200px;
  height: 300px;
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
