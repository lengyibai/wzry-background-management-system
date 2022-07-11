<template>
  <div class="AddHeroCoverOffset flex">
    <LybSvg
      :class="item.toLowerCase()"
      :key="index"
      :svg="icon[item]"
      @click.native="scale(item.toLowerCase())"
      style="position: absolute"
      color="var(--theme-color-eight)"
      enterColor="var(--theme-color-four)"
      size="75px"
      v-for="(item, index) in ['LEFT', 'RIGHT']"
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
  .left {
    left: 0;
  }
  .right {
    right: 0;
  }
}
</style>
