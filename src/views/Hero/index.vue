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
        :voices="hero_voices"
        :skins="hero_skins"
        :skills="hero_skills"
        :storys="hero_storys"
      />
    </transition>
  </div>
</template>

<script>
//#####··········网络请求··········#####//
//英雄相关：{ 英雄列表 }
import { hero } from "@/api/main/hero/self";
//接口信息：{ 英雄故事 }
import { getGameStory } from "@/api/main/hero/gameStory";
//接口信息：{ 历史故事 }
import { getHistory } from "@/api/main/hero/history";
//接口信息：{ 语音列表 }
import { getVoice } from "@/api/main/hero/voice";
//接口信息：{ 皮肤列表 }
import { getSkin } from "@/api/main/hero/skin";
//接口信息：{ 技能列表 }
import { getSkill } from "@/api/main/hero/skill";

/* 信息树 */
//接口信息：{ 区域类型 }
import { getAreaType } from "@/api/main/tree/areaType";
//接口信息：{ 阵营类型 }
import { getCampType } from "@/api/main/tree/campType";
//接口信息：{ 能量类型 }
import { getEnergyType } from "@/api/main/tree/energyType";
//接口信息：{ 身份类型 }
import { getIdentityType } from "@/api/main/tree/identityType";
//接口信息：{ 定位类型 }
import { getLocationType } from "@/api/main/tree/locationType";
//接口信息：{ 时期类型 }
import { getPeriodType } from "@/api/main/tree/periodType";
//接口信息：{ 职业类型 }
import { getProfessionType } from "@/api/main/tree/professionType";
//接口信息：{ 技能效果 }
import { getSkillEffect } from "@/api/main/tree/skillEffect";
//接口信息：{ 技能类型 }
import { getSkillType } from "@/api/main/tree/skillType";
//接口信息：{ 皮肤类型 }
import { getSkinType } from "@/api/main/tree/skinType";
//接口信息：{ 特长类型 }
import { getSpecialtyType } from "@/api/main/tree/specialtyType";
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
      hero_voices: [], //英雄语音
      hero_skins: [], //英雄皮肤
      hero_skills: {}, //英雄技能
      hero_storys: {
        gameStory: {}, //英雄故事
        history: {}, //历史故事
      },
      show_HeroDetail: false, //显示英雄详情
      show_HeroSidebar: false, //显示英雄分类侧边栏
    };
  },
  components: { HeroSidebar, HeroCard, HeroDetail },
  created() {
    //#####··········获取英雄列表··········#####//
    hero().then(res => {
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
      //####········英雄基础········####//
      hero(params).then(async res => {
        this.hero_info = res;
        const k = [
          "area",
          "camp",
          "energy",
          "identity",
          "location",
          "period",
          "profession",
          "specialty",
        ];
        const r = [
          getAreaType,
          getCampType,
          getEnergyType,
          getIdentityType,
          getLocationType,
          getPeriodType,
          getProfessionType,
          getSpecialtyType,
        ];

        (async function () {
          for (let i = 0; i < r.length; i++) {
            this.$set(this.hero_info, k[i], await r[i](res[k[i]]));
          }
        }.call(this));
      });
      //####········获取英雄语音········####//
      getVoice(params).then(res => {
        this.hero_voices = res.data;
      });
      //####··········获取英雄皮肤··········####//
      getSkin(params).then(res => {
        this.hero_skins = res.data;
        /* 获取皮肤类型中文名，用于图片路径拼接 */
        this.hero_skins.forEach(item => {
          getSkinType({ id: item.type }).then(res => {
            item.type = res;
          });
        });
        setTimeout(() => {
          this.show_HeroDetail = true;
        }, 750);
      });
      //####········获取英雄技能类型及效果········####//
      getSkill(params).then(res => {
        this.hero_skills = res.data;
        this.hero_skills.forEach(item => {
          item.effect?.forEach(item => {
            getSkillEffect({ id: item.type }).then(res => {
              item.type = res;
            });
          });
          item.type?.forEach((item, index, arr) => {
            getSkillType({ id: item }).then(res => {
              arr[index] = res;
            });
          });
        });
      });
      //####··········获取英雄故事··········####//
      getGameStory(params).then(res => {
        this.hero_storys.gameStory = res;
      });
      //####··········获取历史故事··········####//
      getHistory(params).then(res => {
        this.hero_storys.history = res;
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
