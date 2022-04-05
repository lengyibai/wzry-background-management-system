<template>
  <div class="MusicPlay" :style="{ width: progress + '%' }" @click="pause">
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
      status: 'play', //当前音乐状态
      timer: null, //进度条计时器
      musics: [
        'http://lengyibai.gitee.io/wzry/music/王者战歌.mp3',
        'http://lengyibai.gitee.io/wzry/music/英雄归来.mp3',
        'http://lengyibai.gitee.io/wzry/music/荣耀主题.mp3',
        'http://lengyibai.gitee.io/wzry/music/荣耀之路.mp3'
      ]
    };
  },
  mounted() {
    this.musicPlay();
  },
  methods: {
    musicPlay() {
      const that = this;
      that.bgmIndex = $random(0, that.musics.length - 1);
      this.$refs.bgm.play();
      this.timer = setInterval(() => {
        /* 实时设置播放进度 */
        // that.$refs.bgm 为了避免保存后报错undefined
        that.progress = that.$refs.bgm && $potEoPct(that.$refs.bgm.currentTime / that.$refs.bgm.duration);
      }, 100);
      /* 播放结束后执行下一次播放 */
      this.$refs.bgm.onended = function () {
        that.bgm_show = false;
        that.bgmIndex = $random(0, that.musics.length - 1);
        that.bgm_show = true;
        setTimeout(() => {
          that.musicPlay();
        }, 1000);
      };
    },
    pause() {
      if (this.status === 'play') {
        this.$refs.bgm.pause();
        this.status = 'pause';
        clearInterval(this.timer); //暂停清除定时器
      } else if (this.status === 'pause') {
        this.musicPlay(); //继续播放
        this.status = 'play';
      }
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
  &:hover {
    background-color: var(--red);
  }
}
</style>
