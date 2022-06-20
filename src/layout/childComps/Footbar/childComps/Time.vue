<template>
  <div class="Time">2022.3.16 - {{ time }}</div>
</template>
<script>
//#####··········公共方法··········#####//
//方法信息：{ 时间格式化 }
import { $fmtTime } from "@/utils/lyb.js";
export default {
  name: "Time",
  data() {
    return {};
  },
  computed: {
    time() {
      return $fmtTime(new Date(), "YYYY.MM.DD");
    },
  },
};
</script>
<style scoped lang="less">
.Time {
  color: var(--theme-font-dark);
  font-size: var(--font-s-20);
}
</style>
