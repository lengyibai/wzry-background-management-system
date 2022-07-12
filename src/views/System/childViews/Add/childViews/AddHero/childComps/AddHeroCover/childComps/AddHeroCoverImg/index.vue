<template>
  <div
    class="AddHeroCoverImg flex cursor-pointer"
    @click="setKeyValue('cover')"
  >
    <LybSvg
      :svg="icon.ADD"
      color="var(--theme-color-eight)"
      enter-color="var(--theme-color-four)"
      size="75px"
      v-show="!hero_data.cover"
    />
    <img
      class="cover-img"
      v-if="hero_data.cover"
      :src="hero_data.cover"
      :style="{
        top: p.top + '%',
        left: p.left + '%',
        transform: p.transform,
      }"
    />
  </div>
</template>
<script>
//#####··········图标··········#####//
import icon from "@/assets/icon/svg/icon.js";
export default {
  name: "AddHeroCoverImg",
  props: {
    /* 偏移量及缩放量 */
    p: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    this.icon = icon;
    return {};
  },
  inject: ["hero_data", "setKeyValue"],
  methods: {},
};
</script>
<style scoped lang="less">
.AddHeroCoverImg {
  position: relative;
  width: 200px;
  height: 300px;
  overflow: hidden;
  border: 5px solid var(--theme-color-eight);
  transition: all 0.25s;
  border-image: linear-gradient(315deg, #3774b4 0%, #73b1d5 100%) 1 1 !important;
  &:hover {
    border-image: linear-gradient(315deg, #5989a5 0%, #295686 100%) 1 1 !important;
  }
  &:active {
    transform: scale(0.95);
  }
  .cover-img {
    position: absolute;
    min-width: 100%;
    max-height: 100%;
    pointer-events: none;
  }
}
</style>
