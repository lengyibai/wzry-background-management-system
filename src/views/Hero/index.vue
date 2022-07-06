<template>
  <div class="Hero">
    <div class="HeroMain">
      <transition name="fade">
        <LybGridLayout
          gap="15px"
          v-if="hero_list.length"
          :count="6"
          :eqhMultiple="1.5"
        >
          <div class="box" v-for="(item, index) in hero_list" :key="index">
            <HeroCard :data="item" @view="viewClick(item.id)" />
          </div>
        </LybGridLayout>
      </transition>
    </div>

    <!--//%%%%%··········右侧英雄职业分类侧边栏··········%%%%%//-->
    <transition name="sidebar">
      <HeroSidebar v-show="show_HeroSidebar" />
    </transition>

    <!--//%%%%%··········英雄详情页··········%%%%%//-->
    <transition name="clip">
      <HeroDetail
        v-if="show_HeroDetail"
        v-model="show_HeroDetail"
        :data="hero_info"
        :voices="hero_info.voices"
        :skins="hero_info.skins"
        :skills="hero_info.skills"
      />
    </transition>
  </div>
</template>

<script>
//#####··········网络请求··········#####//
//英雄相关：{ 英雄列表 }
import { hero } from "@/api/main/hero/self";

//#####··········子组件··········#####//
import HeroCard from "./childComps/HeroCard";
import HeroSidebar from "./childComps/HeroSidebar";
//#####··········子页面··········#####//
import HeroDetail from "./childViews/HeroDetail";
export default {
  name: "Hero",
  data() {
    return {
      hero_info: {},
      hero_list: [], //英雄列表
      show_HeroDetail: false, //显示英雄详情
      show_HeroSidebar: false, //显示英雄分类侧边栏
    };
  },
  components: { HeroSidebar, HeroCard, HeroDetail },
  created() {
    const id = this.$route.query.id;
    if (id) {
      this.viewClick(id);
    } else {
      this.$lybLoad.show("正在请求英雄列表");
    }
    //#####··········获取英雄列表··········#####//
    hero().then(res => {
      if (id) {
        this.hero_list = res;
      } /* 如果存在id，就不播放列表加载动画 */ else {
        this.$lybLoad.close().then(() => {
          this.hero_list = res;
        });
      }
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
      this.$lybLoad.show("正在请求英雄数据");
      hero(params).then(res => {
        this.hero_info = res;
        this.$lybLoad.close().then(() => {
          this.show_HeroDetail = true;

          /* 只用于记录，并不会跳转 */
          this.$router.push({
            path: "/hero",
            query: {
              id: res.id,
            },
          });
        });
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
  animation: clip-in 1s;
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
