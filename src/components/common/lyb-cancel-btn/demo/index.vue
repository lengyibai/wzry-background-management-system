<template>
  <div class="demoFull flex">
    <h1>取消</h1>
    <LybCancelBtn
      style="border: 1.25vw solid #fff"
      @close="close"
      size="25vw"
    />
  </div>
</template>
<script>
export default {
  name: "demo",
  methods: {
    close() {
      console.warn("触发关闭");
    },
  },
};
</script>
<style scoped lang="less">
.demoFull {
  flex-direction: column;
  h1 {
    font-size: 5vw;
    color: #fff;
    margin-bottom: 1em;
  }
}
</style>
