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
    <transition name="sidebar">
      <HeroSidebar v-show="show" />
    </transition>
  </div>
</template>

<script>
//#####··········网络请求··········#####//
//接口信息：{ 获取用户信息，修改用户 }
import { heroList } from "@/api/main/hero/hero.js";
//#####··········子组件··········#####//
import HeroSidebar from "./childComps/HeroSidebar";
import HeroCard from "./childComps/HeroCard";
export default {
  name: "Hero",
  data() {
    return {
      show: false,
      hero_list: [],
    };
  },
  components: { HeroSidebar, HeroCard },
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
