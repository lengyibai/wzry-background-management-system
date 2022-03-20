<template>
  <div class="index">
    <div class="index-hover">
      <div class="user">
        <img v-if="userInfo.headImg" :src="userInfo.headImg" alt="" /> <span>晚上好，{{ userInfo.name }}</span>
      </div>
      <div class="logout" @click="logout">退出登录</div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  name: 'index',
  data() {
    return {};
  },
  computed: {
    ...mapState(['userInfo']) //100
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
    }
  }
};
</script>
<style scoped lang="less">
.index {
  position: absolute;
  right: 0;
  width: 175px;
  height: 100%;
  &:hover .index-hover {
    transform: rotateX(-180deg);
  }
  .index-hover {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    .user {
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      transform: translateZ(1px);
      background-color: var(--white);
      img {
        height: 75%;
        border-radius: 50%;
        margin-right: 15px;
      }
      span {
        color: var(--black);
      }
    }
    .logout {
      .flex();
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: var(--red);
      color: var(--white);
      transform: rotateX(180deg) translateZ(1px);
      cursor: pointer;
      border-radius: 0 0 0 10px;
      font-size: 20px;
    }
  }
}
</style>
