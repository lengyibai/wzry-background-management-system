<template>
  <!-- 侧边栏 -->
  <div>
    <el-menu
      :default-active="activeMenu"
      background-color="var(--white)"
      text-color="#000"
      active-text-color="#00a8ff"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
    >
      <!-- 菜单 -->
      <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path" />
    </el-menu>
  </div>
</template>

<script>
import SidebarItem from './SidebarItem';

export default {
  components: { SidebarItem },
  data() {
    return { isCollapse: false };
  },
  computed: {
    routes() {
      return this.$router.options.routes;
    },
    activeMenu() {
      const route = this.$route;
      const { meta, path } = route;
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    }
  },
  created() {
    this.$bus.$on('lyb', () => {
      this.isCollapse = !this.isCollapse;
    });
  }
};
</script>
<style lang="less">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
.el-menu-vertical-demo .el-icon-arrow-right {
  right: 5px;
}
.el-menu-vertical-demo .el-submenu__title {
  display: flex;
}
</style>
