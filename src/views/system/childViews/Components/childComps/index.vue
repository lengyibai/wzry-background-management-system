<template>
  <div class="bg-comp">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'bg-comp',
  data() {
    return {};
  },
  components: {},
  methods: {}
};
</script>
<style scoped lang="less">
.bg-comp {
  width: 100%;
  padding: var(--gap-25);
  background: rgba(50, 92, 142, 0.5);
  border: 1px solid #3e659f;
}
</style>
