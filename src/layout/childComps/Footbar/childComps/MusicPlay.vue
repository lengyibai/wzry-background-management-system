<template>
  <div class="MusicPlay" :style="{ width: progress + '%' }" @click="playToggle">
    <!-- BGM -->
    <audio
      :src="musics[bgmIndex]"
      ref="bgm"
      hidden="true"
      v-if="bgm_show"
    ></audio>
  </div>
</template>
<script>
//#####··········公共方法··········#####//
//方法信息：{ 随机数，小数百分比互转 }
import { $random, $potEoPct } from "@/utils/lyb.js";
export default {
  props: {
    playProgress: {
      type: Number,
      default: 0,
    },
  },
  name: "MusicPlay",
  data() {
    return {
      bgm_show: true, //用于随机切换音乐
      bgmIndex: 0, //音乐索引
      progress: 0, //播放进度
      status: "play", //当前音乐状态
      timer: null, //进度条计时器
      musics: [
        require("@/assets/music/王者战歌.mp3"),
        require("@/assets/music/英雄归来.mp3"),
        require("@/assets/music/荣耀主题.mp3"),
        require("@/assets/music/荣耀之路.mp3"),
        require("@/assets/music/王者冰刃.mp3"),
        require("@/assets/music/五五狂欢.mp3"),
      ],
    };
  },
  watch: {
    //#####··········监听底部点击··········#####//
    playProgress(v) {
      this.$refs.bgm.currentTime = this.$refs.bgm.duration * v;
    },
  },
  mounted() {
    this.musicPlay();
  },
  methods: {
    //#####··········解决音频加载失败··········#####//
    musicPlay(isReset = true) {
      const that = this;
      if (isReset) this.bgmIndex = $random(0, this.musics.length - 1);

      /* 解决音频加载失败 */
      this.$refs.bgm
        .play()
        .then(() => {
          this.$refs.bgm.volume = 0.45;
          this.$refs.bgm.play();
        })
        .catch(() => {
          this.musicPlay();
        });

      /* 实时设置播放进度 */
      this.timer = setInterval(() => {
        // that.$refs.bgm 为了避免保存后报错undefined
        that.progress =
          that.$refs.bgm &&
          $potEoPct(that.$refs.bgm.currentTime / that.$refs.bgm.duration);
      }, 100);

      /* 播放结束后执行下一次播放 */
      this.$refs.bgm.onended = function () {
        console.warn("播放结束");
        that.bgm_show = false;
        that.bgmIndex = $random(0, 3);
        that.bgm_show = true;
        setTimeout(() => {
          console.warn("播放下一首");
          that.musicPlay();
        }, 1000);
      };
    },

    //#####··········控制播放和暂停··········#####//
    playToggle(e) {
      e.stopPropagation(); //禁止冒泡：当前进度条和底部都设置了点击事件
      if (this.status === "play") {
        this.$refs.bgm.pause();
        this.status = "pause";
        clearInterval(this.timer); //暂停清除定时器
      } else if (this.status === "pause") {
        this.musicPlay(false); //继续播放
        this.status = "play";
      }
    },
  },
};
</script>
<style scoped lang="less">
.MusicPlay {
  width: 0%;
  height: 5px;
  background-color: var(--theme-font-dark);
  transition: all 0.5s ease-out;
  &:hover {
    background-color: var(--red);
  }
}
</style>
