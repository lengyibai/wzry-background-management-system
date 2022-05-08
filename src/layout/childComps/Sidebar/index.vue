<template>
  <!-- 侧边栏 -->
  <div class="Sidebar">
    <div class="game">
      <svg class="icon" viewBox="0 0 1024 1024">
        <path
          d="M524.8 588.288c-32.256-4.096-57.344-31.744-57.344-65.536 0-33.792 25.088-61.44 57.344-65.536v-112.64c-96.256 6.656-172.544 87.04-172.544 185.344S404.48 696.32 524.8 741.376v-153.088zM543.744 302.08v155.648c31.232 5.12 55.296 32.256 55.296 65.024 0 32.768-24.064 59.904-55.296 65.024v127.488c99.84-3.584 179.2-84.992 179.2-185.344 0.512-100.352-63.488-167.424-179.2-227.84z"
          p-id="4387"
          fill="x"
        />
        <path
          d="M316.416 695.808c-38.912-50.176-61.44-113.664-58.88-182.272 5.632-144.896 123.392-263.168 268.8-268.8 69.12-2.56 132.608 19.968 182.272 58.88l94.72-94.72c-75.776-65.536-176.128-103.424-284.672-99.84-218.624 8.704-394.24 187.904-398.336 406.016-0.512 36.864 3.584 73.216 12.288 107.52 15.36 60.928 19.456 182.784-43.008 297.984-1.024 2.048 1.536 4.096 3.072 2.56l223.744-227.328zM754.176 348.672c42.496 52.224 66.56 120.32 61.952 194.048-8.704 139.264-121.344 252.416-261.12 261.12-73.728 4.608-141.824-19.456-194.048-61.952l-95.232 95.232c76.288 65.024 175.616 102.912 284.672 98.304 218.112-8.704 393.728-188.928 396.8-407.04 0.512-47.616-6.656-93.184-20.992-135.68-15.872-47.104-11.776-166.4 56.832-268.8 1.536-2.56-1.536-5.12-3.584-3.072l-225.28 227.84z"
          p-id="4388"
          fill
        />
      </svg>
      <transition name="fade">
        <span v-show="!hidden_text">王者荣耀</span>
      </transition>
    </div>
    <el-menu
      :default-active="activeMenu"
      background-color="transparent"
      text-color="var(--theme-font-dark)"
      active-text-color="var(--white)"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      @select="$click"
    >
      <!-- 菜单 -->
      <sidebar-item
        v-for="route in routes"
        :key="route.path"
        :item="route"
        :base-path="route.path"
      />
    </el-menu>
  </div>
</template>

<script>
import SidebarItem from "./SidebarItem";

export default {
  name: "Sidebar",
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
    },
  },
  created() {
    this.$bus.$on("collapse", () => {
      this.isCollapse = !this.isCollapse;
      setTimeout(
        () => {
          this.hidden_text = !this.hidden_text;
        },
        this.hidden_text ? 250 : 0,
      );
    });
  },
  beforeDestroy() {
    this.$bus.$off("collapse");
  },
};
</script>
<style scoped lang="less">
.Sidebar {
  height: 100vh;
  // background: url("@/assets/img/sidebar_bg.png") no-repeat center;
  border-right: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
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
      overflow: hidden;
    }
  }
}

/* 淡入淡出 */
.fade-enter,
.fade-leave-active {
  opacity: 0;
  transform: scale(0);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}

.fade-move {
  transition: all 0.5s;
}

.fade-leave-active {
  position: absolute;
}
</style>
