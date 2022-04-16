<template>
  <div
    class="K-Button cursor-pointer"
    :class="{ auto: autoSize }"
    v-particle="{
      color: particle_color[type],
      size: 5,
      brightness: 1.25,
      contrast: 1.1,
    }"
  >
    <span class="cursor-pointer flex">
      <slot>按钮</slot>
    </span>
    <img class="cursor-pointer" :src="bg_img[type]" />
  </div>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: "default",
    },
    autoSize: {
      type: Boolean,
      default: false,
    },
  },
  name: "K-Button",
  data() {
    return {
      bg_img: {
        default: require("./img/btn-defaule.png"),
        danger: require("./img/btn-danger.png"),
        warn: require("./img/btn-warn.png"),
      },
      particle_color: {
        default: "#3f9ed3",
        danger: "#d83e41",
        warn: "#e1c673",
      },
    };
  },
};
</script>
<style scoped lang="less">
.K-Button {
  position: relative;
  width: 224px;
  height: 56px;
  font-size: 26px;
  color: var(--white);
  &:active {
    img {
      filter: contrast(1.1) brightness(0.9);
    }
  }
  span {
    position: absolute;
    inset: 0;
    z-index: 2;
    user-select: none;
    margin-top: 4px;
  }
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    transition: filter 0.05s;
  }
}
.auto {
  width: 100%;
  height: 100%;
}
</style>
