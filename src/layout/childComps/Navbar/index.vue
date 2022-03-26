<template>
  <!-- 导航栏 -->
  <div class="navbar">
    <!-- 收起按钮 -->
    <Hamburger class="hamburger-container" />
    <!-- 面包屑 -->
    <Breadcrumb class="breadcrumb-container" />
    <!-- 用户操作 -->
    <UserMenu />
  </div>
</template>

<script>
import Breadcrumb from './Breadcrumb';
import Hamburger from './Hamburger';
import UserMenu from './UserMenu';

export default {
  components: {
    Breadcrumb,
    Hamburger,
    UserMenu
  }
};
</script>

<style lang="less" scoped>
.navbar {
  width: 100%;
  height: 50px;
  position: relative;
  background-color: #000;
  border: 1px solid #fff;
  z-index: 2;
  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
