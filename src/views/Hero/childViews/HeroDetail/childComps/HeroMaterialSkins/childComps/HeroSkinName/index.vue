<template>
  <div class="HeroSkinName">
    <div class="skin-name" v-if="toggle && name" v-typewriterSingle key="a">
      {{ name }}
    </div>
    <!--//%%%%··········用于触发打字机··········%%%%//-->
    <div class="skin-name" v-if="!toggle && name" v-typewriterSingle key="b">
      {{ name }}
    </div>
  </div>
</template>
<script>
export default {
  name: "HeroSkinName",
  props: {
    toggle: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: "",
    },
  },
};
</script>
<style scoped lang="less">
.HeroSkinName {
  .skin-name {
    position: absolute;
    width: 100%;
    bottom: 0;
    text-align: center;
    transform: translateY(-50%);
    font-size: var(--font-s-50);
    text-shadow: 0 5px 3px #000;
  }
}
</style>
