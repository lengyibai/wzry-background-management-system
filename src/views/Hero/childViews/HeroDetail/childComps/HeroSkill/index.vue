<template>
  <div class="HeroSkill">
    <div class="title">技能</div>
    <div class="content">
      <div class="left">
        <!--//%%%%%··········名称及类型··········%%%%%//-->
        <div class="name-type">
          <div class="name">{{ active_skill.name }}</div>
          <div
            class="type"
            v-for="(item, index) in active_skill.type"
            :key="index"
          >
            {{ item }}
          </div>
        </div>

        <!--//%%%%%··········数字相关··········%%%%%//-->
        <div class="cd-consume">
          <div class="cd">CD：{{ active_skill.cd }}秒</div>
          <div class="consume">法力消耗：{{ active_skill.consume }}</div>
        </div>

        <!--//%%%%%··········描述··········%%%%%//-->
        <div class="desc" v-html="active_skill.desc"></div>
      </div>
      <div class="right">
        <table class="table">
          <tr>
            <td></td>
            <td
              class="lv"
              v-for="(item, index) in this.skills[2].effect[0].phase.length"
              :key="index"
            >
              LV{{ item }}
            </td>
          </tr>
          <tr v-for="(item, index) in this.skills[2].effect" :key="index">
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
      active_skill: {},
    };
  },
  created() {
    this.active_skill = this.skills[2];
    console.log(this.active_skill);
  },
  components: {},
  methods: {},
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
        display: flex;
        align-items: center;
        margin-bottom: var(--gap-15);
        .name {
          font-size: var(--font-s-50);
          margin-right: var(--gap-15);
        }
      }
      .cd-consume {
        display: flex;
        margin-bottom: var(--gap-15);
        .cd,
        .consume {
          font-size: var(--font-s-35);
          margin-right: var(--gap-35);
        }
      }
      .desc {
        font-size: var(--font-s-25);
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
          font-weight: bold;
        }
        .effect {
          font-size: var(--font-s-25);
          font-weight: bold;
        }
        .num {
          font-size: var(--font-s-25);
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
