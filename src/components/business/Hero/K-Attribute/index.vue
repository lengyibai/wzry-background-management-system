<template>
  <div class="K-Attribute">
    <span>{{ text[attr] }}</span>
    <div class="ico" :style="{ backgroundPosition: y[attr] }"></div>
    <div class="bar">
      <i
        :style="{
          backgroundColor: bgc[attr],
          width: length,
        }"
      ></i>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    attr: {
      type: String,
      default: "",
    },
    length: {
      type: String,
      default: "50%",
    },
  },
  name: "KAttribute",
  data() {
    return {
      y: {
        survival: "0 -170px",
        attack: "-30px -170px",
        skill: "-60px -170px",
        difficulty: "-90px -170px",
      },
      bgc: {
        survival: "#1c8fea",
        attack: "#e7ca63",
        skill: "#5dd473",
        difficulty: "#e84a33",
      },
      text: {
        survival: "生存能力",
        attack: "攻击伤害",
        skill: "技能效果",
        difficulty: "上手难度",
      },
    };
  },
};
</script>
<style scoped lang="less">
.K-Attribute {
  display: flex;
  align-items: center;
  height: 26px;
  margin-bottom: var(--gap-5);
  span {
    color: #fff;
    font-size: var(--font-s-16);
    margin-right: 1em;
  }
  .ico {
    width: 26px;
    height: 26px;
    background-image: url("./img/item.png");
    background-repeat: no-repeat;
    background-position: 0 0;
  }
  .bar {
    position: relative;
    width: 200px;
    height: 10px;
    background-color: #000;
    border-radius: 0 4px 4px 0;
    i {
      position: absolute;
      width: 0%;
      height: 100%;
      background-color: #fff;
      border-radius: 0 5px 5px 0;
    }
  }
}
</style>
