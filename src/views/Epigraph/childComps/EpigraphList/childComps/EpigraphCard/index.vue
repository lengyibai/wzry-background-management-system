<template>
  <div
    class="EpigraphCard flex"
    v-maskGradient="{ color: 'rgb(45, 90, 142)', num1: '-35%', num2: '35%' }"
  >
    <img :src="data.img" alt="" />
    <div class="box">
      <div class="name">5级铭文:{{ data.name }}</div>
      <div class="attr">
        <div class="type" v-for="(item, index) in data.effect" :key="index">
          {{ item.type }}+{{ item.num }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "EpigraphCard",
  props: {
    data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  created() {},
  components: {},
  methods: {},
};
</script>
<style scoped lang="less">
.EpigraphCard {
  background-color: var(--black-25);
  padding: var(--gap-20) 0;
  background-color: rgba(27, 43, 66, 0.5);
  box-shadow: var(--b-shadow);
  img {
    width: 100px;
    filter: drop-shadow(0px 3px 3px #000);
    margin-right: var(--gap-25);
  }
  .box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: var(--white);
    text-shadow: var(--t-shadow);
    .name {
      font-size: var(--font-s-25);
      margin-bottom: var(--gap-10);
    }
    .attr {
      color: var(--theme-font-white);
      .type {
        font-size: var(--font-s-18);
        margin-bottom: var(--gap-5);
      }
    }
  }
}
</style>
