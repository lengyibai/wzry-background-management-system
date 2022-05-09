<template>
  <div class="HeroDetailBasicInfo" ref="HeroDetailBasicInfo">
    <div class="name">
      <span>{{ data.name || "未知" }}</span>
      <div class="box">
        <span>{{ data.mark || "未知" }}</span>
        <span>BACKGROUND</span>
      </div>
    </div>
    <div class="info">
      <LybIcon :imgUrl="require('./img/定位.svg')" right="5px" />定位：{{
        data.location || "未知"
      }}
    </div>
    <div class="info">
      <LybIcon :imgUrl="require('./img/特长.svg')" right="5px" />特长：{{
        data.specialty || "未知"
      }}
    </div>
    <div class="info">
      <LybIcon :imgUrl="require('./img/时期.svg')" right="5px" />时期：{{
        data.period || "未知"
      }}
    </div>
    <div class="info">
      <LybIcon :imgUrl="require('./img/阵营.svg')" right="5px" />阵营：{{
        data.camp || "未知"
      }}
    </div>
    <div class="info">
      <LybIcon :imgUrl="require('./img/区域.svg')" right="5px" />区域：{{
        data.area || "未知"
      }}
    </div>
    <div class="info">
      <LybIcon :imgUrl="require('./img/身高.svg')" right="5px" />身高：{{
        data.height || "未知"
      }}CM
    </div>
    <div class="info">
      <LybIcon
        :imgUrl="require('./img/上架时间.svg')"
        right="5px"
      />上架时间：{{ data.time || "未知" }}
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
  name: "HeroDetailBasicInfo",
  data() {
    return {};
  },
  components: {},
  mounted() {
    const list = this.$refs.HeroDetailBasicInfo.querySelectorAll(".info");
    list.forEach((item, index) => {
      item.style.transitionDelay = `${index / 10}s`;
      setTimeout(() => {
        item.style.transform = "translateX(0)";
        item.style.opacity = 1;
      }, 250);
    });
    this.show_info = true;
  },
};
</script>
<style scoped lang="less">
.HeroDetailBasicInfo {
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  padding: var(--gap-25);
  transform-origin: left center;
  transition: all 0.5s;
  transform: translateX(216px) translateY(0px) translateZ(335px) rotateY(45deg)
    rotateX(10deg) scale(0.8);
  animation: updownleft 2.5s infinite;
  &:hover {
    animation: none;
    transform: none;
  }
  @keyframes updownleft {
    50% {
      transform: translateX(216px) translateY(-20px) translateZ(335px)
        rotateY(45deg) rotateX(10deg) scale(0.8);
    }
  }
  .name {
    display: flex;
    margin-bottom: var(--gap-25);
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
    display: flex;
    color: var(--white);
    font-size: var(--font-s-25);
    margin-bottom: var(--gap-15);
    transform: translateX(-100%);
    opacity: 0;
    transition: all 0.5s;
  }
}
</style>
