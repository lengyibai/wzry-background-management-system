<template>
  <div class="HerSkinType" is="transition-group" name="updown">
    <img v-if="skinTypeImg && toggle" :src="skinTypeImg" alt="" key="a" />
    <img v-if="skinTypeImg && !toggle" :src="skinTypeImg" alt="" key="b" />
  </div>
</template>
<script>
export default {
  name: "HerSkinType",
  props: {
    /* 皮肤类型图 */
    skinTypeImg: {
      type: String | Boolean,
      default: "",
    },
    /* 用于皮肤类型切换动画 */
    toggle: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style scoped lang="less">
.HerSkinType {
  display: flex;
  justify-content: center;
  transform: translateY(25%);
  span {
    margin-top: 0.5em;
    font-size: var(--font-s-50);
  }
  img {
    width: 200px;
    filter: drop-shadow(0px 3px 3px #000);
  }
}
.updown-enter {
  opacity: 0;
  transform: translateY(-100%);
}
.updown-leave-active {
  opacity: 0;
  transform: translateY(100%);
}
.updown-leave-active,
.updown-enter-active {
  transition: all 0.5s;
}

.updown-move {
  transition: all 0.5s;
}
.updown-leave-active {
  position: absolute;
}
</style>
