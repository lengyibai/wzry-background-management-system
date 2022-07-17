<template>
  <div>
    <audio @ended="ended" :src="link" ref="voice" hidden="true"></audio>
  </div>
</template>
<script>
export default {
  name: "PlayVoice",
  props: {
    link: {
      type: String,
      default: "",
    },
  },
  mounted() {
    const audio = this.$refs.voice;
    audio.addEventListener("canplay", () => {
      audio.play();
    });
  },
  methods: {
    ended() {
      this.$emit("ended");
    },
  },
};
</script>
