<template>
  <!-- 导航栏 -->
  <div class="Footbar border-1">
    <Time class="Time" />
    <Copyright class="Copyright" />
  </div>
</template>

<script>
import Time from './childComps/Time.vue';
import Copyright from './childComps/Copyright.vue';
export default {
  components: { Time, Copyright }
};
</script>

<style lang="less" scoped>
.Footbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  height: 56px;
  background: url('./img/bg.png') no-repeat center;
  background-size: cover;
  .Time {
    margin-left: var(--gap-15);
  }
  .Copyright {
    margin-right: var(--gap-15);
  }
}
</style>
