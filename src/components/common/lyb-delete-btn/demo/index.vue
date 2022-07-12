<template>
  <div class="demoFull flex">
    <h1>{{ text }}</h1>
    <LybDeleteBtn
      style="border: 1.25vw solid #fff"
      @del="del"
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
      text: "待删除",
    };
  },
  components: {},
  methods: {
    del() {
      this.text = "删除中";
      setTimeout(() => {
        this.finish = true;
        this.text = "删除成功";
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
