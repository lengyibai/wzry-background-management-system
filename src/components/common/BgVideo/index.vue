<template>
  <div class="BgVideo" v-parallax-video="parallaxSize">
    <video class="video" ref="videoPlayer" autoplay :src="video" loop></video>
  </div>
</template>
<script>
export default {
  name: "BgVideo",
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
.BgVideo {
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
