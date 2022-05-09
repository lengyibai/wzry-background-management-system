<template>
  <transition name="clip">
    <div
      class="HeroDetail"
      @click="hide"
      :style="{
        backgroundImage: 'url(' + data.poster + ')',
      }"
      v-if="value"
    >
      <transition name="fade">
        <HeroDetailBasicInfo :data="data" v-if="show_info" />
      </transition>
      <transition name="fade">
        <HeroDetAilattribute :data="data" v-if="show_info" />
      </transition>
    </div>
  </transition>
</template>
<script>
//#####··········子组件··········#####//
import HeroDetailBasicInfo from "./childComps/HeroDetailBasicInfo";
import HeroDetAilattribute from "./childComps/HeroDetAilattribute";
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
  components: { HeroDetailBasicInfo, HeroDetAilattribute },
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
