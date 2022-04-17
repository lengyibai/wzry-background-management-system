<template>
  <div class="LybBgVideo" v-parallax-video="parallaxSize">
    <video class="video" ref="videoPlayer" autoplay :src="video" loop></video>
  </div>
</template>
<script>
export default {
  name: "LybBgVideo",
  props: {
    video: {
      type: String,
      default: "",
    },
    parallaxSize: {
      type: String,
      default: "big",
    },
  },
  mounted() {
    this.$refs.videoPlayer.volume = 0.1;
    document.body.addEventListener("mousedown", this.play);
  },
  methods: {
    play() {
      this.$refs.videoPlayer.play();
      document.body.removeEventListener("mousedown", this.play);
    },
  },
  destroyed() {
    document.body.removeEventListener("mousedown", this.play);
  },
};
</script>
<style scoped lang="less">
.LybBgVideo {
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  inset: 0;
  transition: transform 0.25s ease-out;
  .video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
