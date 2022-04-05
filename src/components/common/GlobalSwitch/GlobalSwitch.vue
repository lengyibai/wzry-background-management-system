<template>
  <div class="GlobalSwitch">
    <!-- 点击音效 -->
    <audio src="@/assets/audio/click.mp3" ref="login" hidden="true"></audio>
    <!-- loading -->
    <LybLoading :isShow="loading_show" />
  </div>
</template>
<script>
import Vue from 'vue';
export default {
  name: 'GlobalSwitch',
  data() {
    return {
      loading_show: false //是否显示加载动画
    };
  },
  mounted() {
    //#####··········全局点击音效··········#####//
    Vue.prototype.$click = this.click;
    //#####··········全局loading··········#####//
    const that = this;
    Vue.prototype.$lybLoad = {
      show() {
        that.loading_show = true;
      },
      close() {
        that.loading_show = false;
      }
    };
  },
  methods: {
    //#####··········全局点击音效··········#####//
    click() {
      this.$refs.login.pause();
      this.$refs.login.currentTime = 0;
      this.$refs.login.play();
    }
  }
};
</script>
<style scoped lang="less">
.GlobalSwitch {
  width: 100%;
  height: 100%;
}
</style>
