<template>
  <!-- 导航栏 -->
  <div class="Footbar">
    <Time class="Time" />
    <PassTime />
    <Copyright class="Copyright" />
  </div>
</template>

<script>
//#####··········子组件··········#####//
import Time from './childComps/Time.vue'; //左侧时间
import PassTime from './childComps/PassTime.vue'; //中间过去时
import Copyright from './childComps/Copyright.vue'; //右侧版权
export default {
  components: { Time, PassTime, Copyright }
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
