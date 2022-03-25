<template>
  <div class="UserMenu">
    <div class="UserMenu-hover">
      <div class="user">
        <img v-if="userInfo.headImg" :src="userInfo.headImg" alt="" /><span>晚上好，{{ userInfo.name }}</span>
      </div>
      <div class="logout" @click="logout">退出登录</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'UserMenu',
  data() {
    return {};
  },
  computed: {
    userInfo() {
      return this.$store.state.userInfo;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
    }
  }
};
</script>
<style scoped lang="less">
* {
  transition: all 0.5s;
}
.UserMenu {
  .cursor-pointer();
  position: absolute;
  right: 0;
  width: 175px;
  height: 100%;
  &:hover .UserMenu-hover {
    transform: rotateX(-180deg);
  }
  &:hover .logout {
    opacity: 1 !important;
  }
  .UserMenu-hover {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    .user {
      .cursor-pointer();
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      transform: translateZ(1px);
      img {
        height: 75%;
        border-radius: 50%;
        margin-right: 15px;
      }
      span {
        color: var(--theme-font-dark);
      }
    }
    .logout {
      .cursor-pointer();
      .flex();
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: var(--red);
      color: var(--white);
      transform: rotateX(180deg) translateZ(1px);
      border-radius: 0 0 0 10px;
      font-size: 20px;
      opacity: 0;
    }
  }
}
</style>
