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
import Sidebar from '@/layout/childComps/Sidebar'; //侧边栏
import Navbar from '@/layout/childComps/Navbar'; //顶部栏
import AppMain from '@/layout/childComps/AppMain'; //路由视图
import Footbar from '@/layout/childComps/Footbar'; //底部栏

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
