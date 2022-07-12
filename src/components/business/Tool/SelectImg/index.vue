<template>
  <!-- 圆形头像选择组件 -->
  <div
    class="SelectImg flex cursor-pointer"
    :class="type"
    @click="set(keyword)"
  >
    <img class="cursor-pointer" :src="src" alt="" v-show="src" />
    <LybSvg
      class="add cursor-pointer"
      :svg="icon.ADD"
      v-show="!src"
      color="var(--theme-color-eight)"
      enter-color="var(--theme-color-four)"
      size="75px"
    />
  </div>
</template>
<script>
//#####··········图标··········#####//
import icon from "@/assets/icon/svg/icon.js";
export default {
  name: "SelectImg",
  props: {
    /* 图片路径 */
    src: {
      type: String,
      default: "",
    },
    /* 键值 */
    keyword: {
      type: String,
      default: "",
    },
    /* 图片比例 */
    type: {
      type: String,
      default: "square",
      validator: value => {
        return ["width", "height", "square"].indexOf(value) !== -1;
      },
    },
  },
  data() {
    this.icon = icon;
    return {};
  },
  methods: {
    //#####··········发送要修改的图片键··········#####//
    set(key) {
      this.$emit("select", key);
    },
  },
};
</script>
<style scoped lang="less">
.SelectImg {
  position: relative;
  width: 150px;
  height: 150px;
  transition: 0.25s;
  background-color: transparent;
  border: 5px solid #fff;
  border-image: linear-gradient(315deg, #3774b4 0%, #73b1d5 100%) 1 1 !important;
  &:hover {
    border-image: linear-gradient(315deg, #5989a5 0%, #295686 100%) 1 1 !important;
  }
  &:hover {
    border-style: dashed;
  }
  &:active {
    background-color: #555;
  }
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
}

.width {
  width: 300px !important;
  height: 200px !important;
}
.height {
  width: 200px !important;
  height: 300px !important;
}
.square {
  width: 200px !important;
  height: 200px !important;
}
</style>
