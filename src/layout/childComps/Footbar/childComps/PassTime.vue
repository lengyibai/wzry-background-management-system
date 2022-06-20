<template>
  <!-- 中间过去时 -->
  <div class="PassTime">{{ time }}</div>
</template>
<script>
//#####··········公共方法··········#####//
//方法信息：{ 记录已过去时间或倒计时，requestAnimationFrame计时器 }
import { $getCountTime, $frameInterval } from "@/utils/lyb.js";

export default {
  name: "PassTime",
  data() {
    return {
      time: "", //过去时
      timer: null, //定时器
    };
  },
  created() {
    this.timer = $frameInterval(() => {
      const { y, mon, d, h, min, s } = $getCountTime("2022-3-17");
      let year = y != "00" ? y + "y" : "";
      let month = mon != "00" ? mon + "mon" : "";
      this.time = `${year} ${month} ${d}d ${h}h ${min}min ${s}s`;
    }, 1000);
  },
  destroyed() {
    clearInterval(this.timer);
  },
};
</script>
<style scoped lang="less">
.PassTime {
  color: var(--theme-font-dark);
  font-size: var(--font-s-20);
}
</style>
