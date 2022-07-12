<template>
  <div class="demoFull flex">
    <h1>{{ text }}</h1>
    <LybUpdateBtn
      style="border: 1.25vw solid #fff"
      @update="update"
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
      text: "待更新",
    };
  },
  methods: {
    update() {
      this.text = "更新中";
      setTimeout(() => {
        this.finish = true;
        this.text = "更新成功";
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
