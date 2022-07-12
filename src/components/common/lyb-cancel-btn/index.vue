<template>
  <div
    class="LybCancelBtn"
    @click="close"
    :style="{
      width: size,
      height: size,
    }"
  >
    <img
      class="close"
      v-show="show_up"
      :class="{ move: status === 1 }"
      src="./img/close.svg"
    />
  </div>
</template>
<script>
export default {
  name: "LybCancelBtn",
  props: {
    size: {
      type: String,
      default: "500px",
    },
  },
  data() {
    return {
      show_up: true,
      status: 0,
    };
  },
  methods: {
    close() {
      this.status = 1;
      setTimeout(() => {
        this.$emit("close");
      }, 350);
    },
  },
};
</script>
<style scoped lang="less">
.LybCancelBtn {
  position: relative;
  display: flex;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  img {
    width: 75%;
    height: 75%;
    transition: all 0.5s;
  }
}

.move {
  transform: scale(0);
}
</style>
