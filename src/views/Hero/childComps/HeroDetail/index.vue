<template>
  <div
    class="HeroDetail"
    :style="{
      backgroundImage: 'url(' + data.poster + ')',
    }"
  >
    <transition name="fade">
      <div class="left" ref="left" v-show="show_info">
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
    </transition>
    <transition name="fade">
      <div class="right" v-show="show_info">
        <div class="title">英雄属性</div>

        <K-HeroSort class="HeroSort" :occ="data.profession" />
        <K-Attribute attr="survival" :length="data.survival" />
        <K-Attribute attr="attack" :length="data.attack" />
        <K-Attribute attr="skill" :length="data.skill" />
        <K-Attribute attr="difficulty" :length="data.difficulty" />
      </div>
    </transition>
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
    return { show_info: false };
  },
  mounted() {
    setTimeout(() => {
      const list = this.$refs.left.querySelectorAll(".info");
      list.forEach((item, index) => {
        item.style.transitionDelay = `${index / 10}s`;
        setTimeout(() => {
          item.style.transform = "translateX(0)";
        }, 250);
      });
      this.show_info = true;
    }, 1000);
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
    transform-origin: left center;
    transform: translateX(216px) translateY(0px) translateZ(335px)
      rotateY(45deg) rotateX(10deg) scale(0.8);
    animation: updownleft 2.5s infinite;
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
      transition: all 0.5s;
    }
  }
  .right {
    position: relative;
    right: 0;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    padding: var(--gap-25);
    display: flex;
    flex-direction: column;
    transform-origin: right center;
    transform: translateX(-185px) translateZ(275px) rotateY(-45deg)
      rotateX(10deg) scale(0.8);
    animation: updownright 2.5s 1s infinite;
    @keyframes updownright {
      50% {
        transform: translateX(-185px) translateY(-20px) translateZ(275px)
          rotateY(-45deg) rotateX(10deg) scale(0.8);
      }
    }
    .title {
      color: var(--white);
      font-size: var(--font-s-75);
      margin-bottom: var(--gap-15);
    }
    .HeroSort {
      margin-bottom: var(--gap-25);
    }
  }
}
</style>
