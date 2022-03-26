<template>
  <!-- 侧边栏(禁止删除) -->
  <div class="Sidebar border-1">
    <el-menu
      :default-active="activeMenu"
      background-color="transparent"
      text-color="var(--theme-font-dark)"
      active-text-color="var(--theme-font-light)"
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
  name: 'Sidebar',
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
<style scoped lang="less">
.Sidebar {
  background: url('./img/bg.png') no-repeat center;
}
</style>
