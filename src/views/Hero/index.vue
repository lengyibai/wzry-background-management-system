<template>
  <div class="Hero">
    <div class="HeroMain">
      <transition name="fade">
        <lyb-grid
          gap="15px"
          v-if="hero_list.length"
          :count="6"
          :eqhMultiple="0.64"
        >
          <div class="box" v-for="(item, index) in hero_list" :key="index">
            <HeroCard :data="item" @view="viewClick(item.id)" />
          </div>
        </lyb-grid>
      </transition>
    </div>
    <!--//%%%%%··········右侧英雄职业分类侧边栏··········%%%%%//-->
    <transition name="sidebar">
      <HeroSidebar v-show="show_HeroSidebar" />
    </transition>

    <transition name="clip">
      <HeroDetail
        v-model="show_HeroDetail"
        v-if="show_HeroDetail"
        :data="hero_list[0]"
        :skins="hero_skins"
        :storys="hero_storys"
      />
    </transition>
  </div>
</template>

<script>
//#####··········网络请求··········#####//
//接口信息：{ 英雄列表，英雄皮肤，皮肤类型，英雄故事  }
import {
  heroList,
  heroSkins,
  heroSkinType,
  heroStorys,
} from "@/api/main/hero/hero.js";
//#####··········子组件··········#####//
import HeroCard from "./childComps/HeroCard";
import HeroSidebar from "./childComps/HeroSidebar";
//#####··········子页面··········#####//
import HeroDetail from "./childViews/HeroDetail";
export default {
  name: "Hero",
  data() {
    return {
      hero_list: [], //英雄列表
      hero_skins: [], //英雄皮肤
      hero_storys: {}, //英雄故事
      show_HeroDetail: false, //显示英雄详情
      show_HeroSidebar: false, //显示英雄分类侧边栏
    };
  },
  components: { HeroSidebar, HeroCard, HeroDetail },
  created() {
    //#####··········获取英雄列表··········#####//
    heroList().then((res) => {
      this.hero_list = res;
    });
  },
  mounted() {
    //#####··········延迟显示右侧边栏··········#####//
    setTimeout(() => {
      this.show_HeroSidebar = true;
    }, 250);
  },
  methods: {
    //#####··········显示英雄详情··········#####//
    viewClick(id) {
      const params = { id };
      //####··········获取英雄皮肤··········####//
      heroSkins(params).then((res) => {
        this.hero_skins = res.data;
        /* 获取皮肤类型中文名，用于图片路径拼接 */
        this.hero_skins.forEach((item) => {
          heroSkinType({ id: item.type }).then((res) => {
            item.type = res.name;
          });
        });
        setTimeout(() => {
          this.show_HeroDetail = true;
        }, 750);
      });
      //####··········获取英雄故事··········####//
      heroStorys(params).then((res) => {
        this.hero_storys = res.data;
      });
    },
  },
};
</script>
<style scoped lang="less">
.Hero {
  width: 100%;
  height: 100%;
  display: flex;
  .HeroMain {
    flex: 1;
    padding-right: calc(var(--gap-25) * 8);
  }
}

/* 蒙版裁剪 */
.clip-enter-active {
  animation: clip-in 0.75s;
}

.clip-leave-active {
  animation: clip-out 1.5s;
}

@keyframes clip-in {
  0% {
    clip-path: polygon(0 0, 0 100%, 0 50%, 0 100%);
  }
  50% {
    clip-path: polygon(0 0, 100% 0, 0 50%, 0% 100%);
  }
  100% {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  }
}

@keyframes clip-out {
  0% {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  }
  50% {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 50%);
  }
  100% {
    clip-path: polygon(100% 100%, 100% 0, 100% 100%, 100% 50%);
  }
}
</style>
