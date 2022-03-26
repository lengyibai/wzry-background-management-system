<template>
  <div class="Time">2022年3月16日 - {{ time }}</div>
</template>
<script>
import { $fmtTime } from '@/utils/lyb.js';
export default {
  name: 'Time',
  data() {
    return {};
  },
  computed: {
    time() {
      return $fmtTime(new Date(), 'YYYY年MM月DD日');
    }
  }
};
</script>
<style scoped lang="less">
.Time {
  color: var(--theme-font-dark);
}
</style>
