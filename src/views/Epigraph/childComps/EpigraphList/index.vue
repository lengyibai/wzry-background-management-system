<template>
  <transition name="fade">
    <div class="EpigraphList" v-if="flag">
      <LybGridLayout
        gap="var(--gap-15)"
        :count="count"
        :eqhMultiple="eqhMultiple"
      >
        <EpigraphCard />
        <EpigraphCard />
        <EpigraphCard />
        <EpigraphCard />
        <EpigraphCard />
        <EpigraphCard />
      </LybGridLayout>
    </div>
  </transition>
</template>
<script>
import EpigraphCard from "./childComps/EpigraphCard";
export default {
  name: "EpigraphList",
  data() {
    return { flag: false, count: 5, eqhMultiple: 0.5 };
  },
  components: { EpigraphCard },
  created() {
    function fn(v) {
      if (v > 1900) {
        this.count = 5;
        this.eqhMultiple = 0.5;
      }
      if (v <= 1900) this.count = 4;
      if (v <= 1500) this.count = 3;
      if (v <= 1250) {
        this.count = 2;
        this.eqhMultiple = 0.4;
      }
      if (v <= 900) {
        this.count = 1;
        this.eqhMultiple = 0.3;
      }
    }
    fn.call(this, document.documentElement.clientWidth);
    this.$bus.$on("resize", v => {
      fn.call(this, v);
    });
  },
  mounted() {
    setTimeout(() => {
      this.flag = true;
    }, 250);
  },
  beforeDestroy() {
    //组件一销毁就需要关闭监听，防止重复监听
    this.$bus.$off("resize");
  },
  methods: {},
};
</script>
<style scoped lang="less">
.EpigraphList {
  width: 100%;
  height: 100%;
}
</style>
