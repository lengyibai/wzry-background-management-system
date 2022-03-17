<template>
  <div style="padding: 30px">
    <h1>法师</h1>
    <transition name="fade-transform" mode="out-in">
      <router-view :key="new Date().getTime()" />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {};
  },
  components: {},
  methods: {}
};
</script>
<style scoped lang="less">
.index {
  width: 100%;
  height: 100%;
}
</style>
