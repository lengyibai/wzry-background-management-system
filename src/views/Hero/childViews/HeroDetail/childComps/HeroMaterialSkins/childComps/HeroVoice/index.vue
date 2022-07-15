<template>
  <div class="HeroVoice">
    <audio
      @ended="ended"
      :src="voice_url"
      ref="voice"
      hidden="true"
      v-if="voice_toggle"
    ></audio>
    <div
      class="voice flex cursor-pointer"
      :class="{ active: currentIndex === index }"
      :style="{ 'animation-duration': time + 's' }"
      @click="play(item.voice, index)"
      v-for="(item, index) in voices"
      ref="voice"
      :key="index"
    >
      <span v-if="currentIndex !== index"> {{ item.desc }}</span>
      <transition name="fade">
        <LybSvg
          v-if="currentIndex === index"
          :svg="icon"
          color="#fff"
          enter-color="var(--blue)"
          down-color="var(--red)"
          size="35px"
        />
      </transition>
    </div>
  </div>
</template>
<script>
import icon from "./svg";
export default {
  name: "HeroVoice",
  props: {
    voices: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    this.icon = icon; //旋转图标
    return {
      voice_url: "", //语音链接
      voice_toggle: false, //用于切换语音
      currentIndex: null, //当前播放索引
      time: 0, //当前播放时长
    };
  },
  mounted() {
    /* 出场动画 */
    const list = this.$refs.voice;
    list.forEach((item, index) => {
      item.style.transitionDelay = `${index / 15}s`; //入场间隔
      /* 决定是从左还是从右入场 */
      if (index % 2) {
        item.style.transform = `translateX(-100%) translateY(500%) scale(0)`;
      } else {
        item.style.transform = `translateX(100%) translateY(500%) scale(0)`;
      }
      setTimeout(() => {
        item.style.transform = "translateX(0%) translateY(0%) scale(1)";
        /* 动画结束后初始化 */
        setTimeout(() => {
          item.style.transitionDelay = "0s";
        }, 1000);
      });
    });
  },
  methods: {
    //#####··········语音播放结束后触发··········#####//
    ended() {
      /* 如果播放完最后一个，则停止播放 */
      if (this.currentIndex + 1 === this.voices.length) {
        this.currentIndex += 1;
        return;
      }
      /* 继续播放下一个 */
      this.play(
        this.voices[this.currentIndex + 1].voice,
        this.currentIndex + 1,
      );
    },

    //#####··········点击播放··········#####//
    play(voice, index) {
      // 如果再次点击，则停止播放
      if (this.currentIndex === index) {
        this.voice_toggle = false;
        this.currentIndex = null;
        return;
      }
      this.currentIndex = index;
      this.voice_toggle = false;
      setTimeout(() => {
        this.voice_toggle = true;
        this.voice_url = voice;
        this.$nextTick(() => {
          const audio = this.$refs.voice;
          audio.addEventListener("canplay", () => {
            audio.play();
            this.time = audio.duration;
          });
        });
      }, 250);
    },
  },
};
</script>
<style scoped lang="less">
.HeroVoice {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  left: 50%;
  top: 15%;
  transform: translateX(-50%);
  .voice {
    width: 100%;
    height: 50px;
    transition: all 1s;
    white-space: nowrap;
    padding: 0 100px;
    background-color: rgba(0, 0, 0, 0.5);
    overflow: hidden;
    color: var(--white);
    &:hover {
      height: 60px;
      transition: all 0.25s cubic-bezier(0.18, 0.89, 0, 1.41) !important;
      color: var(--blue);
    }
    span {
      font-size: var(--font-s-16);
    }
  }
}
.active {
  padding: 0 !important;
  width: 50px !important;
  height: 50px !important;
  border-radius: 50%;
  animation: rotate 0s 0.5s linear;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
