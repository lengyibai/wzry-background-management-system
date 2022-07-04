<template>
  <!-- 导航栏 -->
  <div class="navbar border-1">
    <!-- 收起按钮 -->
    <Hamburger class="Hamburger" />
    <!-- 面包屑 -->
    <Breadcrumb class="Breadcrumb" />
    <!-- 搜索 -->
    <LybSvg
      :svg="icon.search"
      size="35px"
      enterColor="var(--white)"
      color="var(--theme-font-dark)"
      right="20px"
      @click.native="$tip('开发中...', 'warning')"
    />
    <!-- 设置 -->
    <LybSvg
      :svg="icon.setting"
      size="35px"
      enterColor="var(--white)"
      color="var(--theme-font-dark)"
      right="20px"
      @click.native="$tip('开发中...', 'warning')"
    />

    <!-- 用户操作 -->
    <UserMenu />
  </div>
</template>

<script>
//#####··········图标··········#####//
import icon from "./img/icon.js";
//#####··········子组件··········#####//
import Breadcrumb from "./childComps/Breadcrumb";
import Hamburger from "./childComps/Hamburger";
import UserMenu from "./childComps/UserMenu";

export default {
  data() {
    return {
      icon,
    };
  },
  components: {
    Breadcrumb,
    Hamburger,
    UserMenu,
  },
};
</script>

<style lang="less" scoped>
.navbar {
  display: flex;
  align-items: center;
  width: 100%;
  height: 75px;
  position: relative;
  // background: url("@/assets/img/nav_bg.png") no-repeat center;
  background-size: cover;
  &:hover {
    box-shadow: 0px 0 5px 0 rgba(0, 0, 0, 0.5);
  }
  .Hamburger {
    margin-left: var(--gap-15);
  }
  .Breadcrumb {
    flex: 1;
  }
}
</style>
