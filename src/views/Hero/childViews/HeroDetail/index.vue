<template>
  <transition name="clip">
    <div class="HeroDetail" v-if="value" @click="hide">
      <!--//%%%%%··········主要资料··········%%%%%//-->
      <HeroDetailParallaxBg class="hero" :bg="data.poster">
        <!-- 左侧详情 -->
        <transition name="fade">
          <HeroDetailBasicInfo :data="data" v-if="show_info" />
        </transition>
        <!-- 右侧详情 -->
        <transition name="fade">
          <HeroDetAilattribute :data="data" v-if="show_info" />
        </transition>
      </HeroDetailParallaxBg>
      <!--//%%%%%··········故事··········%%%%%//-->
      <HeroDetailParallaxBg class="hero" :bg="data.skins[1].img">
        <div class="story">
          <div class="title">TA的故事</div>
          <p class="content" v-html="data.story"></p>

          <div class="title">历史上的他</div>
          <p class="content" v-html="data.history"></p>
        </div>
      </HeroDetailParallaxBg>
    </div>
  </transition>
</template>
<script>
//#####··········子组件··········#####//
import HeroDetailParallaxBg from "./childComps/HeroDetailParallaxBg"; //滚动视差背景
import HeroDetailBasicInfo from "./childComps/HeroDetailBasicInfo"; //左侧资料详情
import HeroDetAilattribute from "./childComps/HeroDetAilattribute"; //右侧属性详情
export default {
  props: {
    data: {
      type: Object,
      default() {
        return {};
      },
    },
    value: {
      type: Boolean,
      default: false,
    },
  },
  name: "HeroDetail",
  data() {
    return { show_info: false };
  },
  components: {
    HeroDetailParallaxBg,
    HeroDetailBasicInfo,
    HeroDetAilattribute,
  },
  watch: {
    value(v) {
      if (v) {
        /* 延迟显示卡片 */
        setTimeout(() => {
          this.show_info = true;
        }, 1000);
      } else {
        this.show_info = false;
      }
    },
  },
  methods: {
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
}

/* 滚动条里面可以拖动的那部分 */
*::-webkit-scrollbar-thumb {
  background: #fff;
}

/* 滚动条里面可以拖动的那部分 */
*::-webkit-scrollbar-thumb:hover {
  background-color: #fff;
}

/* 滚动条里面可以拖动的那部分 */
*::-webkit-scrollbar-thumb:active {
  background-color: #fff;
}
.HeroDetail {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  overflow: auto;

  .hero {
    display: flex;
    justify-content: space-between;
    transform-style: preserve-3d;
    perspective: 2000px;
    overflow: hidden;
    .story {
      width: 100%;
      height: 100%;
      overflow: auto;
      color: #fff;
      background-color: rgba(0, 0, 0, 0.5);
      .title {
        font-size: var(--font-s-35);
        text-align: center;
        margin-top: 1em;
      }
      .content {
        font-size: var(--font-s-20);
        text-indent: 2em;
        padding: 2em;
      }
    }
  }
}

/* 缩小放大 */
.clip-enter-active {
  animation: clip-in 0.75s;
}

.clip-leave-active {
  animation: clip-out 0.75s;
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
