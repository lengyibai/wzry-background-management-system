<template>
  <div class="UserMenu cursor-pointer">
    <LybFlipBox>
      <template #z>
        <div class="user cursor-pointer">
          <img v-if="userInfo.headImg" :src="userInfo.headImg" alt />
          <span>{{ $timeGreet }}，{{ userInfo.name }}</span>
        </div>
      </template>
      <template #f>
        <K-Button @click.native="logout" type="danger" :autoSize="true"
          >退出登录</K-Button
        >
      </template>
    </LybFlipBox>
  </div>
</template>
<script>
//#####··········公共方法··········#####//
//方法信息：{ 根据时间问候 }
import { $timeGreet } from "@/utils/lyb.js";
export default {
  name: "UserMenu",
  data() {
    return {};
  },
  computed: {
    userInfo() {
      return this.$store.state.userInfo;
    },
    $timeGreet() {
      return $timeGreet();
    },
  },
  methods: {
    logout() {
      this.$click();
      this.$store.dispatch("logout");
    },
  },
};
</script>
<style scoped lang="less">
.UserMenu {
  width: 240px;
  height: 100%;
  .user {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      height: 75%;
      border-radius: 50%;
      margin-left: var(--gap-15);
    }
    span {
      font-size: var(--font-s-20);
      color: var(--theme-font-dark);
      margin-right: var(--gap-15);
    }
  }
}
</style>
