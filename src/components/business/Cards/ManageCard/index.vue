<template>
  <div class="K-ManageCard">
    <div class="box flex">
      <LybSvg class="icon" :svg="icon[type.toUpperCase()]" size="75px" />
      <div class="title">{{ title }}</div>
    </div>
    <img :src="bg[type]" alt="" />
  </div>
</template>
<script>
import icon from "./svg";
export default {
  name: "K-ManageCard",
  props: {
    type: {
      type: String,
      default: "add",
    },
    title: {
      type: String,
      default: "英雄",
    },
  },
  data() {
    this.bg = {
      add: require("@/assets/img/part/manage/add.png"),
      edit: require("@/assets/img/part/manage/edit.png"),
      delete: require("@/assets/img/part/manage/delete.png"),
    };
    this.icon = icon;
    return {};
  },
  components: {},
  methods: {},
};
</script>
<style scoped lang="less">
.K-ManageCard {
  position: relative;
  box-shadow: var(--b-shadow);
  .box {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .icon {
      opacity: 0.25;
    }
    .title {
      color: rgba(255, 255, 255, 0.5);
      margin-top: 0.75em;
      font-size: var(--font-s-35);
    }
  }
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.9;
  }
}
</style>
