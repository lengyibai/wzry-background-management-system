<template>
  <div class="HeroStory">
    <div class="title">TA的故事</div>
    <p class="content" v-html="storys.gamestory"></p>
    <div class="title">历史上的他</div>
    <p class="content" v-html="storys.history"></p>
  </div>
</template>
<script>
export default {
  props: {
    storys: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  name: "index",
  data() {
    return {};
  },
  components: {},
  methods: {},
};
</script>
<style scoped lang="less">
.HeroStory {
  width: 100%;
  height: 100%;
  overflow: auto;
  color: var(--white);
  background-color: rgba(0, 0, 0, 0.5);
  .title {
    font-size: var(--font-s-50);
    text-align: center;
    margin-top: 1em;
    text-shadow: var(--t-shadow);
  }
  .content {
    font-size: var(--font-s-20);
    text-indent: 2em;
    padding: 2em;
    text-shadow: var(--t-shadow);
  }
}
</style>
