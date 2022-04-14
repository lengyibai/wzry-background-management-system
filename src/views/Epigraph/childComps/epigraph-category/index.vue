<template>
  <div class="epigraph-category">
    <div class="title">全部</div>
    <div class="title">全部</div>
    <div class="title">全部</div>
    <div class="title">全部</div>
    <div class="title">全部</div>
    <div class="title">全部</div>
  </div>
</template>
<script>
export default {
  name: "epigraph-category",
  data() {
    return {
      epigraph: [],
    };
  },
};
</script>
<style scoped lang="less">
.epigraph-category {
  width: 100%;
  display: flex;
  align-items: center;
  .title {
    flex: 1;
    text-align: center;
    color: var(--theme-font-dark);
  }
}
</style>
