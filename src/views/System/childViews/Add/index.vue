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

    <!--//%%%%%··········发布英雄··········%%%%%//-->
    <transition name="clip">
      <AddHero v-if="show_AddHero" v-model="show_AddHero" />
    </transition>

    <!--//%%%%%··········发布皮肤··········%%%%%//-->
    <transition name="clip">
      <AddSkin v-if="show_AddSkin" v-model="show_AddSkin" />
    </transition>

    <!--//%%%%%··········发布语音··········%%%%%//-->
    <transition name="clip">
      <AddVoice v-if="show_AddVoice" v-model="show_AddVoice" />
    </transition>

    <!--//%%%%%··········发布技能··········%%%%%//-->
    <transition name="clip">
      <AddSkill v-if="show_AddSkill" v-model="show_AddSkill" />
    </transition>

    <!--//%%%%%··········发布故事··········%%%%%//-->
    <transition name="clip">
      <AddStory v-if="show_AddStory" v-model="show_AddStory" />
    </transition>

    <!--//%%%%%··········发布装备··········%%%%%//-->
    <transition name="clip">
      <AddEquip v-if="show_AddEquip" v-model="show_AddEquip" />
    </transition>

    <!--//%%%%%··········发布铭文··········%%%%%//-->
    <transition name="clip">
      <AddEpigraph v-if="show_AddEpigraph" v-model="show_AddEpigraph" />
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
      show_AddHero: false, //显示发布英雄页面
      show_AddSkin: false, //显示发布皮肤页面
      show_AddVoice: false, //显示发布语音页面
      show_AddSkill: false, //显示发布技能页面
      show_AddStory: false, //显示发布故事页面
      show_AddEquip: false, //显示发布装备页面
      show_AddEpigraph: false, //显示发布铭文页面
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
    open(a) {
      const obj = {
        英雄: () => (this.show_AddHero = true),
        皮肤: () => (this.show_AddSkin = true),
        语音: () => (this.show_AddVoice = true),
        技能: () => (this.show_AddSkill = true),
        故事: () => (this.show_AddStory = true),
        装备: () => (this.show_AddEquip = true),
        铭文: () => (this.show_AddEpigraph = true),
      };
      try {
        obj[a].call(this);
      } catch (error) {
        this.$tip("开发中", "warning");
      }
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
