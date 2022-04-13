<template>
  <div class="K-Checkbox" @click="fn">
    <img :src="require('./img/' + value + '.png')" />
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  name: "K-Checkbox",
  methods: {
    fn() {
      this.$emit("input", !this.value);
    },
  },
};
</script>
<style scoped lang="less">
.K-Checkbox {
  width: 40px;
  height: 40px;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
