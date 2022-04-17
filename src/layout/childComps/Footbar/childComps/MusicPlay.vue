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
    this.$nextTick(() => {
      this.musicPlay(); //如果从登录页过来，可直接播放背景音乐
    });
    const that = this;
    document.body.addEventListener("mousedown", fn); //如果在管理页刷新，则需要点击才能播放
    function fn() {
      that.musicPlay(false);
      document.body.removeEventListener("mousedown", fn);
    }
  },
  methods: {
    //#####··········解决音频加载失败··········#####//
    musicPlay(isReset = true) {
      const that = this;
      const bgm = this.$refs.bgm;
      if (!bgm) return;
      // 判断是否为播放下一首，否则不执行随机播放，是则继续播放当前
      if (isReset) this.bgmIndex = $random(0, this.musics.length - 1);
      // 解决音频播放失败，失败后重新调用，或直到用户与页面交互
      bgm.volume = 0.25;
      setTimeout(() => {
        bgm
          .play()
          .then(() => {
            bgm.play();
          })
          .catch(() => {
            // setTimeout(() => {
            //   this.musicPlay();
            // }, 500);
          });
      });

      /* 实时设置播放进度 */
      this.timer = setInterval(() => {
        // that.$refs.bgm 为了避免保存后报错undefined
        that.progress =
          that.$refs.bgm &&
          $potEoPct(that.$refs.bgm.currentTime / that.$refs.bgm.duration);
      }, 300);

      /* 播放结束后执行下一次播放 */
      bgm.onended = function () {
        that.bgmIndex = $random(0, 3);
        setTimeout(() => {
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
