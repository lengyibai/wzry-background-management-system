<template>
  <div class="demoFull">
    <div class="LybRichText">
      <LybRichText v-model="content" />
    </div>
  </div>
</template>
<script>
export default {
  name: "demo",
  data() {
    return {
      content:
        "<h1><strong style='color: rgb(230, 0, 0); background-color: rgb(255, 255, 102);'><em><s><u>这是一个双向绑定的富文本</u></s></em></strong></h1>",
    };
  },
  watch: {
    content(v) {
      console.log(v);
    },
  },
};
</script>
<style scoped lang="less">
.demoFull {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  .LybRichText {
    height: 100% !important;
  }
  .content {
    margin-top: 50px;
    width: 75%;
    min-height: 50%;
    color: #fff;
    border: 1px solid #fff;
  }
}
</style>
