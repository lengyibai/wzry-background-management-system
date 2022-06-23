<template>
  <div class="HeroSkill">
    <div class="title">技能</div>
    <!--//%%%%%··········技能图标··········%%%%%//-->
    <div class="skill-icon">
      <div
        class="border"
        :style="{
          left: skill_border_offset + 'px',
        }"
      ></div>
      <img
        ref="skillImg"
        :src="item.img"
        @click="selectSkill($event, index)"
        v-for="(item, index) in skills"
        :key="index"
      />
    </div>

    <!--//%%%%%··········主体内容··········%%%%%//-->
    <div class="content">
      <div class="left">
        <!--//%%%%%··········名称及类型··········%%%%%//-->
        <div class="name-type">
          <div class="name">{{ active_skill.name }}</div>
          <HeroSkillTypeTag
            v-for="(item, index) in active_skill.type"
            :type="item"
            :key="index"
          />
        </div>

        <!--//%%%%%··········数字相关··········%%%%%//-->
        <div class="cd-consume">
          <div class="cd" v-if="active_skill.cd">
            CD：{{ active_skill.cd }}秒
          </div>
          <div class="consume" v-if="active_skill.cd">
            法力消耗：{{ active_skill.consume }}
          </div>
          <div class="passive" v-else>被动</div>
        </div>

        <!--//%%%%%··········描述··········%%%%%//-->
        <div class="desc" v-html="active_skill.desc"></div>
      </div>
      <div class="right" v-if="active_skill.effect">
        <table class="table">
          <tr>
            <td></td>
            <td
              class="lv"
              v-for="(item, index) in active_skill.effect[0].phase.length"
              :key="index"
            >
              LV{{ item }}
            </td>
          </tr>
          <tr v-for="(item, index) in active_skill.effect" :key="index">
            <td class="effect">
              {{ item.type }}
            </td>
            <td class="num" v-for="(item, index) in item.phase" :key="index">
              {{ item }}
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
//#####··········零部件··········#####//
import HeroSkillTypeTag from "./childParts/HeroSkillTypeTag"; //技能类别标签
export default {
  props: {
    skills: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  name: "index",
  data() {
    return {
      skill_border_offset: 0, //技能框坐标
      active_skill: {}, //处于展示的技能信息
      currentIndex: 0, //处于展示的技能索引
    };
  },
  components: { HeroSkillTypeTag },
  created() {
    this.active_skill = this.skills[0];
  },
  mounted() {
    this.skill_border_offset = this.$refs.skillImg[0].offsetLeft;
  },
  methods: {
    //#####··········点击需要展示的技能··········#####//
    selectSkill(e, index) {
      this.skill_border_offset = e.target.offsetLeft;
      this.currentIndex = index;
      this.active_skill = this.skills[index];
      console.log(this.active_skill);
    },
  },
};
</script>
<style scoped lang="less">
.HeroSkill {
  width: 100%;
  height: 100%;
  overflow: auto;
  color: var(--white);
  background-color: rgba(0, 0, 0, 0.5);
  .title {
    font-size: var(--font-s-50);
    text-align: center;
    margin-top: 1em;
    text-shadow: var(--t-shadow);
  }
  .skill-icon {
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: var(--gap-25);
    margin-bottom: var(--gap-15);
    .border {
      width: 90px;
      height: 90px;
      position: absolute;
      border: 5px solid #f9ca24;
      border-radius: 50%;
      left: 0;
      transition: all 0.25s cubic-bezier(0.18, 0.89, 0, 1.08);
      z-index: 1;
      box-shadow: 0 0 10px 5px #000 inset;
      &::before,
      &::after {
        content: "";
        position: absolute;
        width: 20px;
        width: 20px;
        left: 50%;
        transform: translatex(-50%);
        border-style: solid;
        border-width: 10px;
        box-sizing: border-box;
      }
      &::before {
        top: -1px;
        border-color: #f9ca24 transparent transparent transparent;
      }
      &::after {
        bottom: -1px;
        border-color: transparent transparent #f9ca24 transparent;
      }
    }
    img {
      width: 90px;
      height: 90px;
      filter: drop-shadow(0 2px 5px #000);
    }
  }
  .content {
    position: relative;
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 2em;
    .left {
      width: 45%;
      .name-type {
        position: relative;
        display: flex;
        align-items: center;
        margin-bottom: var(--gap-15);
        .name {
          font-size: var(--font-s-50);
          margin-right: var(--gap-15);
          text-shadow: var(--t-shadow);
        }
      }
      .cd-consume {
        display: flex;
        margin-bottom: var(--gap-15);
        .cd,
        .consume,
        .passive {
          font-size: var(--font-s-35);
          margin-right: var(--gap-35);
          text-shadow: var(--t-shadow);
        }
        .passive {
          color: #ccc;
        }
      }
      .desc {
        font-size: var(--font-s-25);
        text-shadow: var(--t-shadow);
      }
    }
    .right {
      width: 45%;
      display: flex;
      justify-content: flex-end;
      .table {
        width: 100%;
        border-collapse: collapse;
        height: fit-content;
        .lv {
          position: relative;
          font-size: var(--font-s-25);
          text-shadow: var(--t-shadow);
          font-weight: bold;
        }
        .effect {
          font-size: var(--font-s-25);
          text-shadow: var(--t-shadow);
          font-weight: bold;
        }
        .num {
          font-size: var(--font-s-25);
          text-shadow: var(--t-shadow);
        }
        td {
          word-break: break-all;
          text-align: center;
          padding: 20px 5px;
        }
      }
    }
  }
}
</style>
