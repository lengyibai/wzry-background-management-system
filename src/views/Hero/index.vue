<template>
  <!-- 主体结构 -->
  <div class="Hero">
    <div class="HeroMain">
      <router-view></router-view>
    </div>
    <HeroSidebar />
  </div>
</template>

<script>
import HeroSidebar from './childComps/HeroSidebar';

export default {
  name: 'Hero',
  components: {
    HeroSidebar
  }
};
</script>
<style scoped lang="less">
.Hero {
  width: 100%;
  display: flex;
  .HeroMain {
    flex: 1;
  }
}
</style>
