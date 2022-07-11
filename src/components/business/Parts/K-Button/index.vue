<template>
  <div
    class="K-Button cursor-pointer"
    :style="{ width, height }"
    v-particle="{
      color: particle_color[type],
      size: 5,
      brightness: 1.25,
      contrast: 1.1,
    }"
  >
    <span
      class="cursor-pointer flex"
      :style="{
        fontSize,
      }"
    >
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
      default: "info",
    },
    width: {
      type: String,
      default: "224px",
    },
    height: {
      type: String,
      default: "56px",
    },
    fontSize: {
      type: String,
      default: "var(--font-s-24)",
    },
  },
  name: "K-Button",
  data() {
    return {
      bg_img: {
        info: require("@/assets/img/part/button/info.png"),
        error: require("@/assets/img/part/button/error.png"),
        warning: require("@/assets/img/part/button/warning.png"),
      },
      particle_color: {
        info: "#3f9ed3",
        error: "#d83e41",
        warning: "#e1c673",
      },
    };
  },
};
</script>
<style scoped lang="less">
.K-Button {
  position: relative;
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
