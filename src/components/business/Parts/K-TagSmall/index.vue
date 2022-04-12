<template>
  <div
    class="K-TagSmall"
    :style="{
      color: colors[color].color,
      backgroundColor: colors[color].bgc,
      borderColor: colors[color].brc,
    }"
  >
    {{ text }}
  </div>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      default: "冷弋白",
    },
    color: {
      type: String,
      default: "blue",
    },
  },
  name: "KTagSmall",
  data() {
    return {
      colors: {
        red: {
          color: "#fc8e8e",
          brc: "#b24040",
          bgc: "#802727",
        },
        yellow: {
          color: "#fceb8e",
          brc: "#ebc51f",
          bgc: "#b1982a",
        },
        green: {
          color: "#8efc8e",
          brc: "#53b240",
          bgc: "#27802b",
        },
        blue: {
          color: "#8ebbfc",
          brc: "#4071b2",
          bgc: "#274d80",
        },
      },
    };
  },
};
</script>
<style scoped lang="less">
.K-TagSmall {
  width: 150px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  background-color: #274d80;
  color: #8ebbfc;
  border-radius: 5px;
  font-size: var(--font-s-25);
  border: 2px solid #4071b2;
}
</style>
