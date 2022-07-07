<template>
  <div class="AddHeroHeadImg">
    <AddHeroCard title="头像">
      <div class="headImg"></div>
    </AddHeroCard>
  </div>
</template>
<script>
export default {
  name: "AddHeroHeadImg",
  data() {
    return {};
  },
  components: {},
  methods: {},
};
</script>
<style scoped lang="less">
.AddHeroHeadImg {
  width: 100%;
  .headImg {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: #fff;
  }
}
</style>
