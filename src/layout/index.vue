<template>
  <!-- 主体结构 -->
  <div class="layout">
    <transition name="sidebar">
      <Sidebar v-if="show_sidebar" />
    </transition>
    <div class="layout-container">
      <transition name="navbar">
        <Navbar v-if="show_navbar" />
      </transition>
      <transition name="appMain">
        <AppMain v-show="show_appMain" />
      </transition>
      <transition name="footbar">
        <Footbar v-if="show_footbar" />
      </transition>
    </div>
    <BgVideo :video="require('./video/bg.mp4')" parallaxSize="small" />
  </div>
</template>

<script>
import Sidebar from "@/layout/childComps/Sidebar"; //侧边栏
import Navbar from "@/layout/childComps/Navbar"; //顶部栏
import AppMain from "@/layout/childComps/AppMain"; //路由视图
import Footbar from "@/layout/childComps/Footbar"; //底部栏

export default {
  name: "Layout",
  components: {
    Navbar,
    Sidebar,
    AppMain,
    Footbar,
  },
  data() {
    return {
      show_sidebar: false,
      show_navbar: false,
      show_footbar: false,
      show_appMain: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.show_sidebar = true;
      this.show_navbar = true;
      this.show_footbar = true;
      this.show_appMain = true;
    }, 500);
  },
};
</script>
<style scoped lang="less">
.sidebar-leave-active,
.sidebar-enter-active,
.navbar-leave-active,
.navbar-enter-active,
.footbar-leave-active,
.footbar-enter-active,
.appMain-leave-active,
.appMain-enter-active {
  transition: all 1s;
}

.layout {
  width: 100vw;
  display: flex;
}
.layout-container {
  flex: 1;
  height: 100vh;
}

/* 侧边栏动画 */
.sidebar-enter {
  opacity: 0;
  transform: translateX(-50px);
}
.sidebar-leave-to {
  opacity: 0;
}

/* 顶部栏动画 */
.navbar-enter {
  opacity: 0;
  transform: translateY(-50px);
}
.navbar-leave-to {
  opacity: 0;
}
/* 底部栏动画 */
.footbar-enter {
  opacity: 0;
  transform: translateY(50px);
}
.footbar-leave-to {
  opacity: 0;
}
/* 路由视图动画 */
.appMain-enter {
  opacity: 0;
  transform: scale(0.5);
}
.appMain-leave-to {
  opacity: 0;
}
</style>
