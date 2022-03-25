<template>
  <!-- 主体结构 -->
  <div class="main">
    <sidebar />
    <div class="main-container">
      <navbar />
      <app-main />
    </div>
    <BgVideo :video="require('../assets/video/bg.mp4')" />
  </div>
</template>

<script>
import Navbar from '@/layout/childComps/Navbar';
import Sidebar from '@/layout/childComps/Sidebar';
import AppMain from '@/layout/childComps/AppMain';
import BgVideo from '@/components/BgVideo/index';

export default {
  name: 'Layout',
  components: {
    Navbar,
    Sidebar,
    AppMain,
    BgVideo
  }
};
</script>
<style scoped lang="less">
.main {
  width: 100vw;
  display: flex;
}
.main-container {
  flex: 1;
  height: 100vh;
}
</style>
