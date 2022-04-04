<template>
  <div class="BgVideo">
    <video class="video" autoplay loop muted>
      <source :src="video" />
    </video>
  </div>
</template>
<script>
export default {
  name: 'BgVideo',
  props: {
    video: {
      type: String,
      default: ''
    }
  }
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
