<template>
  <LybMask :show="value">
    <transition :name="type">
      <div class="LoginUpdateDialog" v-show="value">
        <div class="title">王者荣耀后台管理系统 6月29日 更新公告</div>
        <img class="bg" src="./img/dialog.png" />
        <div class="btns">
          <K-Button
            class="btn"
            type="default"
            @click.native="$click('关闭'), close()"
            >退出</K-Button
          >
          <K-Button type="warn" @click.native="$click('确定'), close()"
            >更新</K-Button
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
  </LybMask>
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
  top: 25px;
  width: 1280px;
  height: 760px;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    position: absolute;
    font-size: 30px;
    color: var(--white);
    top: calc(15px + 1em);
    text-shadow: var(--t-shadow);
  }
  .close {
    position: absolute;
    top: 32px;
    right: 27px;
    width: 40px;
    filter: drop-shadow(0px 0px 3px #cce5ff);
    z-index: 2;
  }
  .bg {
    width: 100%;
    height: 100%;
    pointer-events: none;
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
    color: var(--gray);
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
.default-enter,
.default-leave-active {
  transform: scale(0.75);
  opacity: 0;
}

.default-enter-active {
  transition: all 0.25s cubic-bezier(0.08, 0.82, 0.17, 1);
}
.default-leave-active {
  transition: all 0.25s 0.25s;
}

/* 由下而上 */
.confirm-enter,
.confirm-leave-active {
  transform: translateY(25%);
}

.confirm-enter-active {
  transition: all 0.25s cubic-bezier(0.26, 0.89, 0.29, 1.4);
}
.confirm-leave-active {
  transition: all 0.25s 0.25s;
}
</style>
