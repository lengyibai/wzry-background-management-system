<template>
  <!-- 侧边栏(英雄和装备的额外侧边栏) -->
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
      <sidebar-item v-bind="$attrs" v-for="route in routes" :key="route.path" :item="route" :base-path="route.path" />
    </el-menu>
  </div>
</template>

<script>
import SidebarItem from './SidebarItem';

export default {
  name: 'Sidebar',
  components: { SidebarItem },
  data() {
    return { isCollapse: false, hidden_text: false };
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
    this.$bus.$on('collapse', () => {
      this.isCollapse = !this.isCollapse;
      setTimeout(
        () => {
          this.hidden_text = !this.hidden_text;
        },
        this.hidden_text ? 250 : 0
      );
    });
  },
  beforeDestroy() {
    this.$bus.$off('collapse');
  }
};
</script>
<style scoped lang="less">
.Sidebar {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  background: url('./img/bg.png') no-repeat center;
  overflow: auto !important;
}
</style>
