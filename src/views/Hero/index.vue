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
        :id="hero_id"
      />
    </transition>
  </div>
</template>

<script>
//#####··········网络请求··········#####//
//接口信息：{ 英雄列表 }
import { heroList } from "@/api/main/hero/hero.js";
//#####··········子组件··········#####//
import HeroCard from "./childComps/HeroCard";
import HeroSidebar from "./childComps/HeroSidebar";
//#####··········子页面··········#####//
import HeroDetail from "./childViews/HeroDetail";
export default {
  name: "Hero",
  data() {
    return {
      hero_id: 0, //点击查看详情时的英雄id
      show_HeroSidebar: false, //显示英雄分类侧边栏
      show_HeroDetail: false, //显示英雄详情
      hero_list: [], //英雄列表
    };
  },
  components: { HeroSidebar, HeroCard, HeroDetail },
  created() {
    heroList().then((res) => {
      this.hero_list = res.data;
    });
  },
  mounted() {
    setTimeout(() => {
      this.show_HeroSidebar = true;
    }, 250);
  },
  methods: {
    //#####··········显示英雄详情··········#####//
    viewClick(id) {
      this.show_HeroDetail = true;
      this.hero_id = id;
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
</style>
