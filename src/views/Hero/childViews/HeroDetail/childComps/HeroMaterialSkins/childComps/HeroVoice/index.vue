<template>
  <div class="HeroVoice">
    <h1>英雄语音</h1>
  </div>
</template>
<script>
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
    return {};
  },
  created() {
    console.log(this.voices);
  },
  components: {},
  methods: {},
};
</script>
<style scoped lang="less">
.HeroVoice {
  position: absolute;
  left: 50%;
  top: 10%;
  transform: translateX(-50%);
  width: 50%;
  height: 35%;
  background-color: rgba(0, 0, 0, 0.39);
}
</style>
