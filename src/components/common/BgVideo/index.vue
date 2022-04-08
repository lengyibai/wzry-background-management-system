<template>
  <div class="BgVideo">
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
  },
  mounted() {
    document.body.addEventListener("mousedown", play.bind(this));
    function play() {
      this.$refs.videoPlayer.play();
      document.body.removeEventListener("mousedown", play);
    }
  },
};
</script>
<style scoped lang="less">
.BgVideo {
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  .video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
