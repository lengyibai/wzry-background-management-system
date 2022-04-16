<template>
  <!-- 主体结构 -->
  <div class="Epigraph">
    <epigraph-category />
    <div class="EpigraphMain"></div>
  </div>
</template>

<script>
import EpigraphCategory from "./childComps/epigraph-category/index.vue";
export default {
  name: "Epigraph",
  components: { EpigraphCategory },
};
</script>
<style scoped lang="less">
.Epigraph {
  width: 100%;
  display: flex;
  flex-direction: column;
  .EpigraphMain {
    flex: 1;
    padding-right: calc(var(--gap-25) * 10);
  }
}
</style>
