<template>
  <transition name="fade">
    <div class="EpigraphList" v-if="flag">
      <LybGridLayout gap="var(--gap-15)" :count="4" :eqhMultiple="0.5">
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
    return { flag: false };
  },
  components: { EpigraphCard },
  mounted() {
    setTimeout(() => {
      this.flag = true;
    }, 250);
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
