<template>
  <!-- 圆形头像选择组件 -->
  <div class="SelectImg flex cursor-pointer" @click="set(keyword)">
    <img class="cursor-pointer" :src="src" alt="" v-if="src" />
    <img
      class="add cursor-pointer"
      v-else
      src="@/assets/img/svg/add.svg"
      alt=""
    />
  </div>
</template>
<script>
export default {
  name: "SelectImg",
  props: {
    /* 图片路径 */
    src: {
      type: String,
      default: "",
    },
    /* 键值 */
    keyword: {
      type: String,
      default: "",
    },
  },
  methods: {
    //#####··········发送要修改的图片键··········#####//
    set(key) {
      this.$emit("select", key);
    },
  },
};
</script>
<style scoped lang="less">
.SelectImg {
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  transition: 0.25s;
  background-color: transparent;
  border: 5px solid #fff;
  &:hover {
    border-style: dashed;
  }
  &:active {
    background-color: #555;
  }
  img {
    object-fit: cover;
    border-radius: 50%;
    &:first-child {
      width: 100%;
      height: 100%;
    }
    &:last-child.add {
      width: 75%;
      height: 75%;
    }
  }
}
</style>
