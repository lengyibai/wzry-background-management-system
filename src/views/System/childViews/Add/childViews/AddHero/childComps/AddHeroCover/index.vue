<template>
  <div class="AddHeroCover">
    <div class="row">
      <span class="title">英雄封面：</span>
      <div class="cover flex" @click="setKeyValue('cover')">
        <img class="add" src="./img/add.svg" v-if="!hero_data.cover" alt="" />
        <img
          class="cover-img"
          v-else
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
//#####··········子组件··········#####//
import AddHeroCoverOffset from "./childComps/AddHeroCoverOffset"; //调整偏移量
import AddHeroCoverScale from "./childComps/AddHeroCoverScale"; //调整缩放量
export default {
  name: "AddHeroCover",
  data() {
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
  margin-bottom: var(--gap-50);
  .row {
    display: flex;
    align-items: center;
    .title {
      font-size: var(--font-s-50);
    }
    .cover {
      position: relative;
      width: 200px;
      height: 300px;
      overflow: hidden;
      border: 5px solid #fff;
      .add {
        width: 75px;
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
