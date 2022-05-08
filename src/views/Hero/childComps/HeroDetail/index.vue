<template>
  <div
    class="HeroDetail"
    :style="{
      backgroundImage: 'url(' + data.poster + ')',
    }"
  >
    <div class="left">
      <div class="name">
        <span>{{ data.name }}</span>
        <div class="box">
          <span>{{ data.mark }}</span>
          <span>BACKGROUND SETTING</span>
        </div>
      </div>
      <div class="info">上架时间：{{ data.time }}</div>
      <div class="info">特长：{{ data.specialty }}</div>
      <div class="info">定位：{{ data.location }}</div>
      <div class="info">时期：{{ data.period }}</div>
      <div class="info">身高：{{ data.height }}CM</div>
      <div class="info">阵营：{{ data.camp }}</div>
      <div class="info">区域：{{ data.area }}</div>
    </div>
    <div class="right">
      <div class="title">英雄属性</div>

      <K-HeroSort :occ="data.profession" />
      <K-Attribute attr="survival" :length="data.survival" />
      <K-Attribute attr="attack" :length="data.attack" />
      <K-Attribute attr="skill" :length="data.skill" />
      <K-Attribute attr="difficulty" :length="data.difficulty" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  name: "HeroDetail",
  data() {
    return {};
  },
  components: {},
  methods: {},
};
</script>
<style scoped lang="less">
.HeroDetail {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  background: no-repeat center center fixed;
  background-color: #333;
  background-size: cover;
  display: flex;
  justify-content: space-between;
  transform-style: preserve-3d;
  perspective: 2000px;
  .left {
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    padding: var(--gap-25);
    transform-origin: right center;
    transform: translateX(35px) translateY(-10px) translateZ(75px)
      rotateY(45deg) rotateX(10deg) scale(0.8);
    .name {
      display: flex;
      flex-direction: row;
      > span {
        color: var(--white);
        font-size: var(--font-s-75);
        margin-right: 10px;
      }
      .box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        span {
          &:nth-child(1) {
            color: var(--gray);
            font-size: var(--font-s-25);
            margin-bottom: 10px;
          }
          &:nth-child(2) {
            color: var(--gray);
            font-size: var(--font-s-16);
          }
        }
      }
    }
    .info {
      color: var(--white);
      font-size: var(--font-s-20);
    }
  }
  .right {
    position: relative;
    right: 0;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    padding: var(--gap-25);
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    .title {
      color: var(--white);
      font-size: var(--font-s-75);
    }
  }
}
</style>
