<template>
  <div class="epigraph-category">
    <transition>
      <img
        class="cursor-pointer"
        :style="{ left: currentIndex * 11.11 + '%' }"
        src="./img/active.png"
        alt
      />
    </transition>
    <div
      class="title cursor-pointer"
      :class="{ active: currentIndex === index }"
      @click="toggle(index)"
      v-for="(item, index) in epigraph"
      :key="index"
    >
      <span class="cursor-pointer">{{ item.title }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "epigraph-category",
  data() {
    return {
      currentIndex: 0,
      epigraph: [
        { title: "全部" },
        { title: "攻击" },
        { title: "生命" },
        { title: "防御" },
        { title: "功能" },
        { title: "吸血" },
        { title: "攻速" },
        { title: "暴击" },
        { title: "穿透" },
      ],
    };
  },
  created() {
    console.log(this.$route);
  },
  methods: {
    toggle(index) {
      this.$click("tab");
      this.currentIndex = index;
    },
  },
};
</script>
<style scoped lang="less">
.epigraph-category {
  width: 100%;
  position: relative;
  padding-bottom: 0.5em;
  display: flex;
  border-bottom: 1px solid #324a68;
  align-items: center;
  img {
    width: 11.25%;
    position: absolute;
    left: 0;
    height: 150%;
    bottom: -5px;
    transition: left 0.5s;
  }
  .title {
    text-align: center;
    position: relative;
    font-size: 25px;
    flex: 1;
    color: var(--theme-font-dark);
    transition: color 0.25s 0.25s;
  }
}
.active {
  color: #fff !important;
}
</style>
