<template>
  <!-- 主体结构 -->
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
            <HeroCard :data="item" />
          </div>
        </lyb-grid>
      </transition>
    </div>
    <!-- 英雄职业分类侧边栏 -->
    <transition name="sidebar">
      <HeroSidebar v-show="show" />
    </transition>
    <transition name="sidebar">
      <HeroDetail :data="hero_list[0]" />
    </transition>
  </div>
</template>

<script>
//#####··········网络请求··········#####//
//接口信息：{ 获取用户信息，修改用户 }
import { heroList } from "@/api/main/hero/hero.js";
//#####··········子组件··········#####//
import HeroCard from "./childComps/HeroCard";
import HeroDetail from "./childComps/HeroDetail";
import HeroSidebar from "./childComps/HeroSidebar";
export default {
  name: "Hero",
  data() {
    return {
      show: false,
      hero_list: [],
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
      this.show = true;
    }, 250);
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
