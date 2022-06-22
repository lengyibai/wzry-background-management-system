<template>
  <div class="HeroDetail">
    <LybMaskClose @close="hide" />
    <!--//%%%%%··········资料皮肤··········%%%%%//-->
    <HeroDetailParallaxBg class="stick" :bg="data.poster">
      <HeroMaterialSkins v-bind="$attrs" :data="data" />
    </HeroDetailParallaxBg>

    <!--//%%%%%··········技能··········%%%%%//-->
    <HeroDetailParallaxBg class="stick" :bg="data.poster">
      <HeroSkill v-bind="$attrs" />
    </HeroDetailParallaxBg>

    <!--//%%%%%··········故事··········%%%%%//-->
    <HeroDetailParallaxBg class="stick" :bg="data.poster">
      <HeroStory v-bind="$attrs" />
    </HeroDetailParallaxBg>
  </div>
</template>
<script>
//#####··········子组件··········#####//
import HeroDetailParallaxBg from "./childComps/HeroDetailParallaxBg"; //滚动视差背景
import HeroMaterialSkins from "./childComps/HeroMaterialSkins"; //资料、皮肤页
import HeroSkill from "./childComps/HeroSkill"; //技能页
import HeroStory from "./childComps/HeroStory"; //历史页
export default {
  props: {
    /* 英雄基本数据 */
    data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  name: "HeroDetail",
  data() {
    return {
      show_info: false,
    };
  },
  components: {
    HeroDetailParallaxBg,
    HeroMaterialSkins,
    HeroSkill,
    HeroStory,
  },
  created() {
    setTimeout(() => {
      /* 延迟显示卡片 */
      this.show_info = true;
    }, 1000);
  },
  methods: {
    //#####··········隐藏自身··········#####//
    hide() {
      this.$emit("input", false);
    },
  },
};
</script>
<style scoped lang="less">
/* 滚动条整体背景 */
*::-webkit-scrollbar {
  width: 1px;
  height: 1px;
  background: #999;
}

/* 滚动条里面可以拖动的那部分 */
*::-webkit-scrollbar-thumb {
  background: var(--white);
}

/* 滚动条里面可以拖动的那部分 */
*::-webkit-scrollbar-thumb:hover {
  background-color: var(--white);
}

/* 滚动条里面可以拖动的那部分 */
*::-webkit-scrollbar-thumb:active {
  background-color: var(--white);
}

.stick {
  scroll-snap-align: start;
}
.HeroDetail {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  overflow: hidden auto;
  scroll-snap-type: y mandatory;
  .basis {
    display: flex;
    justify-content: space-between;
    transform-style: preserve-3d;
    perspective: 2000px;
    overflow: hidden;
  }
}
/* 从左到右 */
.leftToRight-enter,
.leftToRight-leave-to {
  transform: translateX(-100%) !important;
}

.leftToRight-leave-active,
.leftToRight-enter-active {
  transition: all 0.5s;
}
</style>
