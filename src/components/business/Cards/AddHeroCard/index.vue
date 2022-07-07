<template>
  <div class="AddHeroCard">
    <div class="title">{{ title }}</div>
    <div class="box">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "AddHeroCard",
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
  components: {},
  methods: {},
};
</script>
<style scoped lang="less">
.AddHeroCard {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: var(--gap-35);
  .title {
    margin-bottom: var(--gap-20);
    font-size: var(--font-s-30);
  }
}
</style>
