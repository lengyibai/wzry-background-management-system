<template>
  <div class="demoFull flex">
    <h1>{{ text }}</h1>
    <LybCommit
      style="border: 1.25vw solid #fff"
      @upload="upload"
      :finish="finish"
      size="25vw"
    />
  </div>
</template>
<script>
export default {
  name: "demo",
  data() {
    return {
      finish: false,
      text: "待提交",
    };
  },
  methods: {
    upload() {
      this.text = "提交中";
      setTimeout(() => {
        this.finish = true;
        this.text = "提交成功";
      }, 2000);
    },
  },
};
</script>
<style scoped lang="less">
.demoFull {
  flex-direction: column;
  h1 {
    font-size: 5vw;
    color: #fff;
    margin-bottom: 1em;
  }
}
</style>
