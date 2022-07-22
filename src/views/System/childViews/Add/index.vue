<template>
  <div class="Add flex" :style="box">
    <K-ManageCard
      @click.native="open(k)"
      v-for="(v, k) in list"
      :title="v"
      :key="k"
      :style="card"
      type="add"
    />

    <!--//%%%%%··········发布列表··········%%%%%//-->
    <transition name="clip" v-for="(v, k) in components" :key="k">
      <component v-if="v.show" v-model="v.show" :is="k" />
    </transition>
  </div>
</template>
<script>
//#####··········混入··········#####//
// { 系统管理卡片数据 }
import { ManageCard } from "@/utils/mixins.js";

//#####··········子页面··········#####//
import AddHero from "./childViews/AddHero"; //英雄
import AddSkin from "./childViews/AddSkin"; //皮肤
import AddSkill from "./childViews/AddSkill"; //技能
import AddVoice from "./childViews/AddVoice"; //语音
import AddStory from "./childViews/AddStory"; //故事
import AddEquip from "./childViews/AddEquip"; //装备
import AddEpigraph from "./childViews/AddEpigraph"; //铭文
export default {
  name: "Add",
  data() {
    return {
      components: {
        AddHero: {
          show: false,
        },
        AddSkin: {
          show: false,
        },
        AddVoice: {
          show: false,
        },
        AddSkill: {
          show: false,
        },
        AddStory: {
          show: false,
        },
        AddEquip: {
          show: false,
        },
        AddEpigraph: {
          show: false,
        },
      },
    };
  },
  mixins: [ManageCard],
  components: {
    AddHero,
    AddSkin,
    AddSkill,
    AddVoice,
    AddStory,
    AddEquip,
    AddEpigraph,
  },
  methods: {
    open(key) {
      console.log(this.components[key]);
      this.components[key].show = true;
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
