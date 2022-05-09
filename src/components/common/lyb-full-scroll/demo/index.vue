<template>
  <div class="demo">
    <LybFullScroll direction="y">
      <div class="scroll-item" v-for="(item, index) in 10" :key="index">
        {{ item }}
      </div>
    </LybFullScroll>
  </div>
</template>
<script>
import LybFullScroll from "@/components/common/static/lyb-full-scroll/index.vue";
export default {
  name: "index",
  components: { LybFullScroll },
};
</script>
<style scoped lang="less">
.demo {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: #000;
  .scroll-item {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50vh;
    color: #fff;
  }
}
</style>
