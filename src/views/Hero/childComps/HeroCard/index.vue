<template>
  <div class="HeroCard">
    <img
      :src="data.cover"
      :style="{
        top: data.offset.top,
        left: data.offset.left,
        transform: data.offset.transform,
      }"
      alt=""
    />
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  name: "HeroCard",
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped lang="less">
.HeroCard {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  overflow: hidden;
  img {
    position: absolute;
    min-width: 100%;
    max-height: 100%;
    transition: all 0.5s;
    &:hover {
      transform: scale(1.35) !important;
    }
  }
}
</style>
