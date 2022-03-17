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
.sidebar-container {
  .submenu-title-noDropdown,
  .el-submenu__title {
    &:hover {
      background-color: #000 !important;
      color: var(--white) !important;
    }
  }

  & .nest-menu .el-submenu > .el-submenu__title,
  & .el-submenu .el-menu-item {
    background-color: var(--white) !important;

    &:hover {
      background-color: #000 !important;
      color: var(--white) !important;
    }
  }
}
.main-container {
  width: 100%;
}
</style>
