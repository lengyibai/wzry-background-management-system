<template>
  <div class="index">
    <video class="video" autoplay loop>
      <source :src="video" />
    </video>
  </div>
</template>
<script>
export default {
  props: {
    video: {
      type: String,
      default: ''
    }
  }
};
</script>
<style scoped lang="less">
.index {
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
