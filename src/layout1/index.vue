<template>
  <!-- 主体结构 -->
  <div class="main">
    <!-- 左侧边栏 -->
    <sidebar class="sidebar-container" />
    <!-- 右侧内容 -->
    <div class="main-container">
      <app-main />
    </div>
  </div>
</template>

<script>
import Sidebar from '@/layout1/childComps/Sidebar.vue';
import AppMain from '@/layout1/childComps/AppMain.vue';

export default {
  name: 'Layout',
  components: {
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
