<template>
  <div
    class="EpigraphCard flex"
    v-maskGradient="{ color: 'rgb(45, 90, 142)', num1: '-35%', num2: '35%' }"
  >
    <img src="./img/50.png" alt="" />
    <div class="box">
      <div class="name">5级铭文:冥想</div>
      <div class="attr">
        <div class="type">最大生命+60</div>
        <div class="type">每5秒回血+4.5</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "EpigraphCard",
  data() {
    return {};
  },
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
    height: 100px;
    margin-right: var(--gap-25);
  }
  .box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: var(--white);
    .name {
      font-size: var(--font-s-25);
      margin-bottom: var(--gap-10);
    }
    .attr {
      font-size: 18px;
      color: var(--theme-font-white);
      .type {
        margin-bottom: var(--gap-5);
      }
    }
  }
}
</style>
