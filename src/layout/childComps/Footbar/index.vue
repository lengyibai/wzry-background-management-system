<template>
  <!-- 导航栏 -->
  <div
    class="Footbar cursor-pointer"
    @click="getPoint"
    ref="Footbar"
    v-particle="{ color: '#84ade2', filter: false }"
  >
    <Time class="Time" />
    <PassTime />
    <Copyright class="Copyright" />
    <MusicPlay class="MusicPlay" :play-progress="playProgress" />
  </div>
</template>

<script>
//#####··········子组件··········#####//
import Time from "./childComps/Time.vue"; //左侧时间
import PassTime from "./childComps/PassTime.vue"; //中间过去时
import Copyright from "./childComps/Copyright.vue"; //右侧版权
import MusicPlay from "./childComps/MusicPlay.vue"; //音乐进度条
export default {
  components: { Time, PassTime, Copyright, MusicPlay },
  data() {
    return {
      playProgress: 0, //播放进度，用于调整播放时间
    };
  },
  methods: {
    //#####··········获取底部栏点击的位置··········#####//
    getPoint(e) {
      const el = this.$refs.Footbar;
      this.playProgress = parseFloat(
        ((e.pageX - el.offsetLeft) / el.offsetWidth).toFixed(2),
      );
    },
  },
};
</script>

<style lang="less" scoped>
.Footbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  height: 56px;
  // background: url("./img/bg.png") no-repeat center;
  // background-size: cover;

  border-top: 1px solid rgba(255, 255, 255, 0.05);
  .Time {
    margin-left: var(--gap-15);
  }
  .Copyright {
    margin-right: var(--gap-15);
  }
  .MusicPlay {
    position: absolute;
    bottom: 0;
  }
}
</style>
