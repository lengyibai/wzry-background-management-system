<template>
  <div class="demo demoFull flex">
    <LybRange
      v-model="value"
      :showIcon="true"
      :size="50"
      :icon="require('./img/icon.svg')"
      :step="10"
    />
    <h1>{{ value }}</h1>
  </div>
</template>
<script>
export default {
  name: "demo",
  data() {
    return { value: 0 };
  },
};
</script>
<style scoped lang="less">
.demo {
  flex-direction: column;
  color: #fff;
  font-size: 10vw;
}
</style>
