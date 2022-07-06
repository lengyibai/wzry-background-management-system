<template>
  <!-- 铭文 -->
  <div class="Epigraph">
    <transition name="epigraph">
      <EpigraphCategory v-show="show_epigraph" />
    </transition>
    <div class="EpigraphMain">
      <EpigraphList :data="epigraph_list" />
    </div>
  </div>
</template>

<script>
//#####··········网络请求··········#####//
import { getEpigraph } from "@/api/main/other/epigraph";
//#####··········子组件··········#####//
import EpigraphCategory from "./childComps/EpigraphCategory"; //铭文类型分类
import EpigraphList from "./childComps/EpigraphList"; //铭文列表
export default {
  name: "Epigraph",
  components: { EpigraphCategory, EpigraphList },
  data() {
    return {
      show_epigraph: false, //显示铭文顶部分类
      epigraph_list: [],
    };
  },
  created() {
    this.$lybLoad.show("正在请求铭文列表");
    getEpigraph().then(res => {
      this.$lybLoad.close();

      this.epigraph_list = res;
    });
  },
  mounted() {
    setTimeout(() => {
      this.show_epigraph = true;
    }, 250);
  },
};
</script>
<style scoped lang="less">
.Epigraph {
  width: 100%;
  display: flex;
  flex-direction: column;
  .EpigraphMain {
    flex: 1;
  }
}

/* 路由 */
.epigraph-enter {
  opacity: 0;
  transform: translateY(-100%);
}

.epigraph-leave-to {
  opacity: 0;
}

.epigraph-leave-active,
.epigraph-enter-active {
  transition: all 0.25s;
}
</style>
