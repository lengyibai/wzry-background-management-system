<template>
  <transition name="default">
    <div class="LoginUpdateDialog" v-show="value">
      <div class="box">
        <div class="title">王者荣耀后台管理系统 6月29日 更新公告</div>
        <div class="content">
          <p>亲爱的用户：</p>
          <p style="text-indent: 2em">
            更新日志功能正在开发中，目前在开发装备页
          </p>
        </div>
      </div>
      <div class="btns">
        <K-Button
          class="btn"
          type="default"
          @click.native="$click('关闭'), close()"
          >暂时跳过</K-Button
        >
        <K-Button type="warn" @click.native="$click('确定'), close()"
          >此次不再弹出</K-Button
        >
      </div>
      <div class="desc">
        <span
          >新版本已发布，请前往项目内拉取进行更新，或前往当前项目的
          <a
            href="https://github.com/lengyibai/wzry-background-management-system"
            target="_blank"
            class="link cursor-pointer"
            >Github仓库</a
          >
          了解更多！</span
        >

        <span>
          若当前版本确定为最新版，误报更新，请尝试
          <span class="key">Ctrl + F5</span>
          强制刷新更新缓存
        </span>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: true,
    },
    showClose: {
      type: Boolean,
      default: true,
    },
    type: {
      type: String,
      default: "default",
    },
  },
  name: "LoginUpdateDialog",
  data() {
    return {};
  },
  methods: {
    close() {
      this.$emit("input", false);
    },
  },
};
</script>
<style scoped lang="less">
.LoginUpdateDialog {
  position: absolute;
  width: 100%;
  height: 100%;
  padding-top: var(--gap-15);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.25);
  .box {
    display: flex;
    flex-direction: column;
    width: 1280px;
    height: 780px;
    padding: var(--gap-40);
    padding-right: 0;
    padding-bottom: 0;
    background: url("./img/dialog.png") no-repeat center center;
    background-size: 100% 100%;
    .title {
      width: 100%;
      text-align: center;
      font-size: var(--font-s-35);
      color: var(--white);
      text-shadow: var(--t-shadow);
      z-index: 1;
    }
    .content {
      width: 100%;
      height: 100%;
      padding: var(--gap-50);
      color: var(--theme-font-dark);
      p {
        font-family: var(--font-f);
        font-size: var(--font-s-25);
      }
    }
  }
  .btns {
    display: flex;
    z-index: 1;
    margin-top: var(--gap-10);
    .btn {
      margin-right: var(--gap-25);
    }
  }
  .desc {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: var(--gap-20);
    color: var(--white);
    line-height: 1.75;
    font-size: var(--font-s-16);
    .link {
      color: var(--blue);
      &:hover {
        color: var(--red);
        text-decoration: underline;
      }
    }
    .key {
      color: var(--yellow);
    }
  }
}

/* 缩放 */
.default-leave-active {
  transition: all 0.25s;
  transform: scale(0.75);
  opacity: 0;
}
</style>
