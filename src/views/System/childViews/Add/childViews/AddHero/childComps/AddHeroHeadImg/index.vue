<template>
  <div class="AddHeroHeadImg">
    <div class="set-headImg row">
      <span class="title">英雄头像：</span>
      <div class="headImg flex cursor-pointer" @click="select">
        <img class="cursor-pointer" :src="link" alt="" v-if="link" />
        <img class="add cursor-pointer" v-else src="./img/add.svg" alt="" />
      </div>
    </div>
    <div class="set-name row">
      <span class="title">英雄名：</span>
      <span class="name cursor-pointer">{{ name || "点击设置" }}</span>
    </div>
  </div>
</template>
<script>
//#####··········SVG··········#####//
export default {
  name: "AddHeroHeadImg",
  props: {
    link: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      hover: false,
    };
  },
  components: {},
  methods: {
    select() {
      this.$emit("select");
    },
  },
};
</script>
<style scoped lang="less">
.AddHeroHeadImg {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  .row {
    display: flex;
    align-items: center;
    .title {
      font-size: var(--font-s-50);
    }
  }
  .set-headImg {
    .headImg {
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
  }
  .set-name {
    .name {
      font-size: var(--font-s-50);
    }
  }
}
</style>
