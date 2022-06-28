<template>
  <div class="HeroDetailBasicInfo" ref="HeroDetailBasicInfo">
    <div class="name">
      <span>{{ data.name || "未知" }}</span>
      <div class="box">
        <span>{{ data.mark || "未知" }}</span>
        <span>BACKGROUND</span>
      </div>
    </div>
    <div class="info" v-for="(item, index) in hero_info" :key="index">
      <LybIcon :imgUrl="require('./img/' + item[1] + '.svg')" right="5px" />{{
        item[1]
      }}：{{ item[0] || "未知" }}
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
    return {
      hero_info: {},
    };
  },
  created() {
    let a = this.data;
    this.hero_info = [
      [a.location, "定位"],
      [a.specialty, "特长"],
      [a.period, "时期"],
      [a.camp, "阵营"],
      [a.area, "区域"],
      [a.height, "身高"],
    ];
  },
  mounted() {
    const list = this.$refs.HeroDetailBasicInfo.querySelectorAll(".info");
    list.forEach((item, index) => {
      item.style.transitionDelay = `${index / 10}s`;
      setTimeout(() => {
        item.style.transform = "translateX(0)";
        item.style.opacity = 1;
      }, 250);
    });
  },
};
</script>
<style scoped lang="less">
.HeroDetailBasicInfo {
  position: absolute;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  padding: var(--gap-25);
  transform-origin: left center;
  transition: all 0.5s;
  transform: translateZ(335px);
  animation: into 1s forwards;
  // animation: updownleft 2.5s 1s infinite, into 1s;
  @keyframes updownleft {
    0%,
    100% {
      transform: translateX(216px) translateY(0px) translateZ(335px)
        rotateY(45deg) rotateX(10deg) scale(0.8);
    }
    50% {
      transform: translateX(216px) translateY(-20px) translateZ(335px)
        rotateY(45deg) rotateX(10deg) scale(0.8);
    }
  }
  @keyframes into {
    100% {
      transform: translateX(216px) translateY(0px) translateZ(335px)
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
      text-shadow: var(--t-shadow);
    }
    .box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      span {
        text-shadow: var(--t-shadow);
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
    text-shadow: var(--t-shadow);
  }
}
</style>
