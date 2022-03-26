<template>
  <!-- 主体结构 -->
  <div class="layout">
    <Sidebar />
    <div class="layout-container">
      <Navbar />
      <AppMain />
      <Footbar />
    </div>
  </div>
</template>

<script>
import Sidebar from '@/layout/childComps/Sidebar';
import Navbar from '@/layout/childComps/Navbar';
import AppMain from '@/layout/childComps/AppMain';
import Footbar from '@/layout/childComps/Footbar';

export default {
  name: 'Layout',
  components: {
    Navbar,
    Sidebar,
    AppMain,
    Footbar
  }
};
</script>
<style scoped lang="less">
.layout {
  width: 100vw;
  display: flex;
}
.layout-container {
  flex: 1;
  height: 100vh;
}
</style>
