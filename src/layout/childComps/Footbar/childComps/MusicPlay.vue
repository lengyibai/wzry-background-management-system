<template>
  <div class="MusicPlay" :style="{ width: progress + '%' }">
    <!-- BGM -->
    <audio :src="musics[bgmIndex]" ref="bgm" hidden="true" v-if="bgm_show"></audio>
  </div>
</template>
<script>
//#####··········公共方法··········#####//
//方法信息：{ 随机数，小数百分比互转 }
import { $random, $potEoPct } from '@/utils/lyb.js';
export default {
  name: 'MusicPlay',
  data() {
    return {
      bgm_show: true, //用于随机切换音乐
      bgmIndex: 0, //音乐索引
      progress: 0, //播放进度
      musics: [
        require('@/assets/music/王者战歌.mp3'),
        require('@/assets/music/英雄归来.mp3'),
        require('@/assets/music/荣耀主题.mp3'),
        require('@/assets/music/荣耀之路.mp3')
      ]
    };
  },
  mounted() {
    this.musicPlay();
  },
  methods: {
    musicPlay() {
      const that = this;
      this.$refs.bgm.play();
      setInterval(() => {
        that.progress = $potEoPct(that.$refs.bgm.currentTime / that.$refs.bgm.duration);
      }, 300);
      /* 播放结束触发 */
      this.$refs.bgm.onended = function () {
        that.bgm_show = false;
        that.bgmIndex = $random(0, that.musics.length - 1);
        that.bgm_show = true;
        setTimeout(() => {
          that.musicPlay();
        }, 1000);
      };
    }
  }
};
</script>
<style scoped lang="less">
.MusicPlay {
  width: 0%;
  height: 2px;
  background-color: var(--theme-font-dark);
  transition: all 0.25s;
}
</style>
