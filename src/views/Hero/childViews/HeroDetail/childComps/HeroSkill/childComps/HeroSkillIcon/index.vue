<template>
  <div class="HeroSkillIcon">
    <div
      class="icon"
      ref="skillImg"
      v-for="(item, index) in hero_data.skills"
      :key="index"
    >
      <transition name="borderFade">
        <div class="border" v-show="currentIndex === index"></div>
      </transition>
      <img :src="item.img" @click="selectSkill($event, index)" />
      <img :src="item.img" :class="{ active: currentIndex === index }" />
    </div>
  </div>
</template>
<script>
export default {
  name: "HeroSkillIcon",
  data() {
    return {
      currentIndex: 0, //处于展示的技能索引
    };
  },
  inject: ["hero_data"],
  methods: {
    //#####··········点击需要展示的技能··········#####//
    selectSkill(e, index) {
      this.currentIndex = index;
      this.$emit("select-skill", index);
    },
  },
};
</script>
<style scoped lang="less">
.HeroSkillIcon {
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  .icon {
    position: relative;
    width: 90px;
    height: 90px;
    filter: drop-shadow(0 2px 5px #000);
    border-radius: 50%;
    overflow: hidden;
    .border {
      width: 90px;
      height: 90px;
      position: absolute;
      border: 5px solid #f9ca24;
      border-radius: 50%;
      left: 0;
      pointer-events: none;
      z-index: 1;
      box-shadow: 0 0 10px 5px #000 inset;
      &::before,
      &::after {
        content: "";
        position: absolute;
        width: 20px;
        width: 20px;
        left: 50%;
        transform: translatex(-50%);
        border-style: solid;
        border-width: 10px;
        box-sizing: border-box;
      }
      &::before {
        top: -1px;
        border-color: #f9ca24 transparent transparent transparent;
      }
      &::after {
        bottom: -1px;
        border-color: transparent transparent #f9ca24 transparent;
      }
    }
    img {
      width: 100%;
      height: 100%;
      &:nth-of-type(1) {
        position: absolute;
        filter: grayscale(100%) brightness(25%);
      }
      &:nth-of-type(2) {
        transition: all 0.5s;
        transform: translateY(-100%);
      }
    }
  }
}

.active {
  transform: translateY(0) !important;
}

/* 进入前状态 */
.borderFade-enter,
.borderFade-leave-active {
  opacity: 0;
  transform: scaleY(2);
}

/* 进入和离开动画属性 */
.borderFade-enter-active {
  transition: all 0.5s 0.35s;
}

.borderFade-leave-active {
  transition: all 0.5s;
}
</style>
