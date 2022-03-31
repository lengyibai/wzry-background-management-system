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
  }
};
</script>
<style scoped lang="less">
.Sidebar {
  height: 100vh;
  background: url('./img/bg.png') no-repeat center;
  overflow: auto !important;
  .game {
    margin: 0 auto;
    width: 72.5%;
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .icon {
      width: 50px;
      height: 50px;
      margin-right: 0;
      fill: var(--theme-font-dark);
    }
    span {
      color: var(--theme-font-dark);
      font-size: var(--font-s-30);
    }
  }
}
.el-menu-vertical-demo {
  overflow: auto !important;
}
</style>
