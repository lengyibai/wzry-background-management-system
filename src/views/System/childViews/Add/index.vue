<template>
  <div class="Add flex" :style="box">
    <K-ManageCard
      @click.native="open(item)"
      v-for="(item, index) in list"
      :title="item"
      :key="index"
      :style="card"
      type="add"
    />

    //#####··········添加英雄··········#####//
    <transition name="clip" appear>
      <AddHero v-if="show_AddHero" v-model="show_AddHero" />
    </transition>
  </div>
</template>
<script>
//#####··········混入··········#####//
// { 系统管理卡片数据 }
import { ManageCard } from "@/utils/mixins.js";

//#####··········子页面··········#####//
import AddHero from "./childViews/AddHero";
export default {
  name: "Add",
  data() {
    return {
      show_AddHero: false, //显示添加英雄页面
    };
  },
  mixins: [ManageCard],
  components: { AddHero },
  methods: {
    open(a) {
      const obj = {
        英雄() {
          this.show_AddHero = true;
        },
      };
      obj[a].call(this);
    },
  },
};
</script>
<style scoped lang="less">
.Add {
}

/* 蒙版裁剪 */
.clip-enter-active {
  animation: clip-in 1s;
}

.clip-leave-active {
  animation: clip-out 0.35s;
}

@keyframes clip-in {
  0% {
    clip-path: inset(50% 49.75% 50% 49.75%);
  }
  50% {
    clip-path: inset(0 49.75% 0 49.75%);
  }
  100% {
    clip-path: inset(0 0 0 0);
  }
}

@keyframes clip-out {
  0% {
    clip-path: inset(0 0 0 0);
  }
  80% {
    clip-path: inset(49.75% 0 49.75% 0%);
  }
  95% {
    clip-path: inset(49.75% 49.75% 49.75% 49.75%);
  }
  100% {
    clip-path: inset(50% 50% 50% 50%);
  }
}
</style>
