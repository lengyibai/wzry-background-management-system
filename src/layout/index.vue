<template>
  <!-- 主体结构 -->
  <div class="main">
    <sidebar class="sidebar-container" />
    <!-- 右侧内容 -->
    <div class="main-container">
      <navbar />
      <app-main />
    </div>
  </div>
</template>

<script>
import Navbar from '@/layout/childComps/Navbar.vue';
import Sidebar from '@/layout/childComps/Sidebar.vue';
import AppMain from '@/layout/childComps/AppMain.vue';

export default {
  name: 'Layout',
  components: {
    Navbar,
    Sidebar,
    AppMain
  }
};
</script>
<style scoped lang="less">
.main {
  width: 100vw;
  display: flex;
}
.main-container {
  width: 100%;
}
</style>
