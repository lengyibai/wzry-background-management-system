<template>
  <div class="AddHeroCover">
    <span>英雄封面：</span>

    <!--//%%%%%··········选择封面··········%%%%%//-->
    <AddHeroCoverImg :p="p" />

    <!--//%%%%%··········偏移量··········%%%%%//-->
    <AddHeroCoverOffset @direction="direction" />

    <!--//%%%%%··········缩放量··········%%%%%//-->
    <AddHeroCoverScale @scale="scale" />
  </div>
</template>
<script>
//#####··········子组件··········#####//
import AddHeroCoverImg from "./childComps/AddHeroCoverImg";
import AddHeroCoverOffset from "./childComps/AddHeroCoverOffset"; //调整偏移量
import AddHeroCoverScale from "./childComps/AddHeroCoverScale"; //调整缩放量
export default {
  name: "AddHeroCover",
  data() {
    return {
      size: 1, //缩放量
      p: {
        top: 0,
        left: 0,
        transform: "scale(1)",
      },
    };
  },
  components: { AddHeroCoverImg, AddHeroCoverOffset, AddHeroCoverScale },
  inject: ["hero_data", "setKeyV"],
  methods: {
    //#####··········发射事件··········#####//
    emit() {
      this.setKeyV("offset", this.p);
    },

    //#####··········设置偏移量··········#####//
    direction(d) {
      if (!this.hero_data.cover) {
        this.$tip("请选择图片后再试", "error");
        return;
      }
      if (d === "left") {
        this.p.left -= 1;
      } else if (d === "right") {
        this.p.left += 1;
      } else if (d === "top") {
        this.p.top -= 1;
      } else if (d === "bottom") {
        this.p.top += 1;
      }
      this.emit();
    },

    //#####··········设置缩放··········#####//
    scale(s) {
      if (!this.hero_data.cover) {
        this.$tip("请选择图片后再试", "error");
        return;
      }
      if (s === "left") {
        this.p.transform = `scale(${(this.size += 0.1).toFixed(1)})`;
      } else if (s === "right") {
        this.p.transform = `scale(${(this.size -= 0.1).toFixed(1)})`;
      }
      this.emit();
    },
  },
};
</script>
<style scoped lang="less">
.AddHeroCover {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: var(--gap-35);
  span {
    .text-gradient-one();
    font-size: var(--font-s-30);
  }
}
</style>
