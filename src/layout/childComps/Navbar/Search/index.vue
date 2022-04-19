<template>
  <svg class="icon search cursor-pointer" viewBox="0 0 1024 1024">
    <path
      d="M448 800c-194.133333 0-352-157.866667-352-352S253.866667 96 448 96 800 253.866667 800 448 642.133333 800 448 800z m0-640C290.133333 160 160 290.133333 160 448S290.133333 736 448 736 736 605.866667 736 448 605.866667 160 448 160z"
      p-id="2292"
    ></path>
    <path
      d="M686.933333 663.466667l196.266667 196.266666c12.8 12.8 12.8 32 0 44.8-12.8 12.8-32 12.8-44.8 0l-196.266667-196.266666c-12.8-12.8-12.8-32 0-44.8 10.666667-12.8 32-12.8 44.8 0z"
      p-id="2293"
    ></path>
  </svg>
</template>
<script>
export default {
  name: "Search",
  data() {
    return {};
  },
  components: {},
  methods: {},
};
</script>
<style scoped lang="less">
.search {
  display: inline-block;
  vertical-align: middle;
  fill: var(--theme-font-dark);
  transition: all 0.25s;
  &:hover {
    fill: var(--theme-font-light);
  }
}
</style>
