<template>
  <div class="AddHeroCover">
    <div class="row">
      <span class="title text-gradient-one">英雄封面：</span>
      <div class="cover flex" @click="setKeyValue('cover')">
        <LybSvg
          :svg="icon.ADD"
          color="var(--theme-color-three)"
          enter-color="var(--theme-color-seven)"
          size="75px"
          v-show="!hero_data.cover"
        />
        <img
          class="cover-img"
          v-if="hero_data.cover"
          :src="hero_data.cover"
          :style="{
            top: p.top + '%',
            left: p.left + '%',
            transform: p.transform,
          }"
        />
      </div>
    </div>
    <AddHeroCoverOffset @direction="direction" />
    <AddHeroCoverScale @scale="scale" />
  </div>
</template>
<script>
//#####··········图标··········#####//
import icon from "./svg";
//#####··········子组件··········#####//
import AddHeroCoverOffset from "./childComps/AddHeroCoverOffset"; //调整偏移量
import AddHeroCoverScale from "./childComps/AddHeroCoverScale"; //调整缩放量
export default {
  name: "AddHeroCover",
  data() {
    this.icon = icon;
    return {
      size: 1,
      p: {
        top: 0,
        left: 0,
        transform: "scale(1)",
      },
    };
  },
  components: { AddHeroCoverOffset, AddHeroCoverScale },
  inject: ["hero_data", "setKeyValue", "setKeyV"],
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
  .row {
    display: flex;
    align-items: center;
    .title {
      font-size: var(--font-s-30);
    }
    .cover {
      position: relative;
      width: 200px;
      height: 300px;
      overflow: hidden;
      border: 5px solid var(--theme-color-eight);
      transition: all 0.25s;
      border-image: linear-gradient(315deg, #3774b4 0%, #73b1d5 100%) 1 1 !important;
      &:hover {
        border-image: linear-gradient(315deg, #5989a5 0%, #295686 100%) 1 1 !important;
      }
      &:active {
        transform: scale(0.95);
      }
      .cover-img {
        position: absolute;
        min-width: 100%;
        max-height: 100%;
        pointer-events: none;
      }
    }
  }
}
</style>
