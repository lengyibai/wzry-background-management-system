<template>
  <div class="UserMenu cursor-pointer">
    <div class="UserMenu-hover">
      <div class="user cursor-pointer">
        <img v-if="userInfo.headImg" :src="userInfo.headImg" alt />
        <span>{{ $timeGreet }}，{{ userInfo.name }}</span>
      </div>
      <div class="logout cursor-pointer flex" @click="logout">退出登录</div>
    </div>
  </div>
</template>
<script>
//#####··········公共方法··········#####//
//方法信息：{ 根据时间问候 }
import { $timeGreet } from '@/utils/lyb.js';
export default {
  name: 'UserMenu',
  data() {
    return {};
  },
  computed: {
    userInfo() {
      return this.$store.state.userInfo;
    },
    $timeGreet() {
      return $timeGreet();
    }
  },
  methods: {
    logout() {
      this.$click();
      this.$store.dispatch('logout');
    }
  }
};
</script>
<style scoped lang="less">
* {
  transition: all 0.5s;
  font-size: var(--font-s-20);
}
.UserMenu {
  width: 240px;
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
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      transform: translateZ(1px);
      img {
        height: 75%;
        border-radius: 50%;
        margin-left: var(--gap-15);
      }
      span {
        color: var(--theme-font-dark);
        margin-right: var(--gap-15);
      }
    }
    .logout {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: var(--red);
      color: var(--white);
      transform: rotateX(180deg) translateZ(1px);
      border-radius: 0 0 0 10px;
      opacity: 0;
    }
  }
}
</style>
