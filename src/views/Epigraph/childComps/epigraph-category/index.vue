<template>
  <div class="epigraph-category">
    <transition>
      <img
        class="cursor-pointer"
        :style="{ left: currentIndex * 11.11 + '%' }"
        src="./img/active.png"
        alt
      />
    </transition>
    <div
      class="title cursor-pointer"
      :class="{ active: currentIndex === index }"
      @click="toggle(item, index)"
      v-for="(item, index) in epigraph"
      :key="index"
    >
      <span class="cursor-pointer">{{ item.meta.title }}</span>
    </div>
    <router-view />
  </div>
</template>
<script>
//#####··········公共方法··········#####//
//方法信息：{ 全局替换指定字符串 }
import { $repStr } from "@/utils/lyb.js";
export default {
  name: "epigraph-category",
  data() {
    return {
      currentIndex: 0, //当前被点击标题的索引号
      epigraph: [], //铭文子路由列表
    };
  },
  created() {
    this.epigraph = this.$router.options.routes[4].children[0].children; //获取铭文子路由列表
    const path = $repStr(this.$route.path, "/epigraph/category/", ""); //获取当前处于活跃状态的铭文属性
    /* 获取铭文所有子路由的path */
    const path_list = this.epigraph.map((item) => {
      return item.path;
    });
    /* 获取处于活跃状态的铭文属性索引号 */
    const index = path_list.findIndex((item) => {
      return item === path;
    });
    this.currentIndex = index; //用于纠正tab栏显示
  },
  methods: {
    toggle(item, index) {
      this.$click("tab");
      this.$router.replace(`/epigraph/category/${item.path}`);
      this.currentIndex = index;
    },
  },
};
</script>
<style scoped lang="less">
.epigraph-category {
  width: 100%;
  position: relative;
  padding-bottom: 0.5em;
  display: flex;
  border-bottom: 1px solid #324a68;
  align-items: center;
  img {
    width: 11.25%;
    position: absolute;
    left: 0;
    height: 150%;
    bottom: -5px;
    transition: left 0.5s;
  }
  .title {
    text-align: center;
    position: relative;
    font-size: 25px;
    flex: 1;
    color: var(--theme-font-dark);
    transition: color 0.25s 0.25s;
  }
}
.active {
  color: #fff !important;
}
</style>
