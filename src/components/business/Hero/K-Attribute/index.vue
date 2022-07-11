<template>
  <div class="K-Attribute">
    <span>{{ text[attr] }}</span>
    <div class="ico" :style="{ backgroundPosition: y[attr] }"></div>
    <div class="bar">
      <i
        :style="{
          backgroundColor: bgc[attr],
          width: progress,
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
      type: Number,
      default: 0,
    },
  },
  name: "K-Attribute",
  data() {
    return {
      progress: "0%",
      y: {
        survival: "0 -170px",
        attack: "-30px -170px",
        effect: "-60px -170px",
        difficulty: "-90px -170px",
      },
      bgc: {
        survival: "#1c8fea",
        attack: "#e7ca63",
        effect: "#5dd473",
        difficulty: "#e84a33",
      },
      text: {
        survival: "生存能力",
        attack: "攻击伤害",
        effect: "技能效果",
        difficulty: "上手难度",
      },
    };
  },
  mounted() {
    /* 为了显示时播放进度条动画 */
    setTimeout(() => {
      this.progress = this.length + "%";
    }, 500);
  },
};
</script>
<style scoped lang="less">
.K-Attribute {
  display: flex;
  align-items: center;
  height: 26px;
  margin-bottom: var(--gap-15);
  span {
    color: #fff;
    font-size: var(--font-s-25);
    margin-right: 1em;
    text-shadow: var(--t-shadow);
  }
  .ico {
    width: 26px;
    height: 26px;
    background-image: url("@/assets/img/sprite/k-attribute.png");
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
      transition: all 0.5s;
    }
  }
}
</style>
