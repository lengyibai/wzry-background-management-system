<template>
  <!-- 导航栏 -->
  <div class="navbar border-1">
    <!-- 收起按钮 -->
    <Hamburger class="Hamburger" />
    <!-- 面包屑 -->
    <Breadcrumb class="Breadcrumb" />
    <!-- 搜索 -->
    <Search />
    <!-- 用户操作 -->
    <UserMenu />
  </div>
</template>

<script>
import Breadcrumb from "./Breadcrumb";
import Hamburger from "./Hamburger";
import UserMenu from "./UserMenu";
import Search from "./Search";

export default {
  components: {
    Breadcrumb,
    Hamburger,
    UserMenu,
    Search,
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
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  background-size: cover;
  box-shadow: 5px 0 5px 0 rgba(0, 0, 0, 0.5);
  .Hamburger {
    margin-left: var(--gap-15);
  }
  .Breadcrumb {
    flex: 1;
  }
}
</style>
