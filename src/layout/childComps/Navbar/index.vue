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
import Search from "./Search/index.vue";

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
  background: url("./img/bg.png") no-repeat center;
  background-size: cover;
  .Hamburger {
    margin-left: var(--gap-15);
  }
  .Breadcrumb {
    flex: 1;
  }
}
</style>
