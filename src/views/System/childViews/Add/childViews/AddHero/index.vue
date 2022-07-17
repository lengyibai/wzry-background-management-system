<template>
  <div class="AddHero">
    <transition name="fade">
      <div class="content" v-if="show">
        <!--//%%%%%··········英雄名、代号、身高··········%%%%%//-->
        <div class="flex-box">
          <FormInput label="英雄名" required v-model="hero_data.name" />
          <FormInput label="代号" required v-model="hero_data.mark" />
          <FormInput
            label="身高"
            :validate="validate"
            v-model="hero_data.height"
          />
        </div>

        <!--//%%%%%··········选择器相关··········%%%%%//-->
        <div class="flex-box">
          <FormSelect
            v-for="(v, k) in info"
            :key="k"
            :label="v[0]"
            :data="type_tree[v[1]]"
            v-model="hero_data[v[2]]"
          />
        </div>

        <!--//%%%%%··········属性相关··········%%%%%//-->
        <div class="flex-box">
          <FormInput
            :label="v"
            label-width="200px"
            v-for="(v, k) in attr"
            :key="k"
          >
            <LybRange
              style="width: 200px"
              :text="hero_data[k] + '%'"
              v-model="hero_data[k]"
            />
          </FormInput>
        </div>

        <!--//%%%%%··········设置封面··········%%%%%//-->
        <AddHeroCover />

        <!--//%%%%%··········设置头像&海报··········%%%%%//-->
        <AddHeroHeadPoster />
      </div>
    </transition>

    <!--//%%%%%··········发布英雄按钮··········%%%%%//-->
    <LybCommitBtn
      class="LybCommitBtn"
      size="50px"
      @upload="add"
      :finish="add_finish"
      title="发布"
    />

    <!--//%%%%%··········取消发布··········%%%%%//-->
    <LybCancelBtn class="LybCancelBtn" size="50px" @close="hide" title="取消" />

    <!--//%%%%%··········添加图片链接弹窗组件··········%%%%%//-->
    <AddLink
      v-model="show_AddLink"
      :title="AddLink_title"
      :placeholder="AddLink_placeholder"
      @get-link="getLink"
    />
  </div>
</template>
<script>
//#####··········网络请求··········#####//
//接口信息：{ 区域 }
import { getAreaType } from "@/api/main/tree/areaType";
//接口信息：{ 阵营 }
import { getCampType } from "@/api/main/tree/campType";
//接口信息：{ 能量 }
import { getEnergyType } from "@/api/main/tree/energyType";
//接口信息：{ 身份 }
import { getIdentityType } from "@/api/main/tree/identityType";
//接口信息：{ 定位 }
import { getLocationType } from "@/api/main/tree/locationType";
//接口信息：{ 时期 }
import { getPeriodType } from "@/api/main/tree/periodType";
//接口信息：{ 职业 }
import { getProfessionType } from "@/api/main/tree/professionType";
//接口信息：{ 特长 }
import { getSpecialtyType } from "@/api/main/tree/specialtyType";

//#####··········混入··········#####//
// { 发布及隐藏自身 }
import { addHide } from "@/utils/mixins.js";

//#####··········子组件··········#####//
import AddHeroCover from "./childComps/AddHeroCover"; //设置封面
import AddHeroHeadPoster from "./childComps/AddHeroHeadPoster"; //设置头像
export default {
  name: "AddHero",
  data() {
    this.validate = function (v) {
      if (isNaN(v)) return "限制为数字";
    };
    this.AddLink_set_desc = {
      headImg: "头像链接",
      name: "英雄名",
      mark: "代号",
      height: "身高",
      cover: "封面",
      poster: "海报",
    };
    /* 用于循环 */
    this.attr = {
      survival: "生存能力",
      attack: "攻击伤害",
      effect: "技能效果",
      difficulty: "上手难度",
    };
    /* 用于循环 */
    this.info = [
      ["区域", "areaType", "area"],
      ["阵营", "campType", "camp"],
      ["能量", "energyType", "energy"],
      ["身份", "identityType", "identity"],
      ["定位", "locationType", "location"],
      ["时期", "periodType", "period"],
      ["职业", "professionType", "profession"],
      ["特长", "specialtyType", "specialty"],
    ];
    return {
      /* 弹窗相关 */
      show_AddLink: false, //显示添加链接弹窗
      AddLink_key: "", //当前谁在使用弹窗(字段名)
      AddLink_title: "", //弹窗左上角标题
      AddLink_placeholder: "", //弹窗输入框描述
      /* 英雄数据 */
      hero_data: {
        name: "",
        mark: "",
        survival: 0,
      },
      type_tree: {
        areaType: [],
        campType: [],
        energyType: [],
        identityType: [],
        locationType: [],
        periodType: [],
        professionType: [],
        specialtyType: [],
      },
      /* 区域列表 */
      areaType_list: [],
    };
  },
  mixins: [addHide],
  components: {
    AddHeroCover,
    AddHeroHeadPoster,
  },
  provide() {
    return {
      hero_data: this.hero_data,
      setKeyValue: this.setKeyValues,
      setKeyV: this.setKeyVs,
    };
  },
  created() {
    setTimeout(async () => {
      this.$lybLoad.show("正在加载区域类型表0/7");
      this.type_tree.areaType = await getAreaType();
      this.$lybLoad.show("正在加载阵营类型表1/7");
      this.type_tree.campType = await getCampType();
      this.$lybLoad.show("正在加载能量类型表2/7");
      this.type_tree.energyType = await getEnergyType();
      this.$lybLoad.show("正在加载身份类型表3/7");
      this.type_tree.identityType = await getIdentityType();
      this.$lybLoad.show("正在加载定位类型表4/7");
      this.type_tree.locationType = await getLocationType();
      this.$lybLoad.show("正在加载时期类型表5/7");
      this.type_tree.periodType = await getPeriodType();
      this.$lybLoad.show("正在加载职业类型表6/7");
      this.type_tree.professionType = await getProfessionType();
      this.$lybLoad.show("正在加载特长类型表7/7");
      this.type_tree.specialtyType = await getSpecialtyType();
      this.$lybLoad.close().then(() => {
        this.show = true;
      });
    }, 1000);
  },
  methods: {
    //#####·········设置图片弹窗组件··········#####//
    //####········获取链接········####//
    getLink(link) {
      this.$set(this.hero_data, this.AddLink_key, link);
    },

    //#####··········添加链接事件··········#####//
    //####········设置头像及名字········####//
    setKeyValues(key) {
      this.show_AddLink = true;
      this.AddLink_title = "设置" + this.AddLink_set_desc[key];
      this.AddLink_placeholder = "请输入" + this.AddLink_set_desc[key];
      this.AddLink_key = key;
    },

    //#####··········设置属性值··········#####//
    setKeyVs(k, v) {
      this.$set(this.hero_data, k, v);
    },

    //#####··········发布··········#####//
    add() {
      setTimeout(() => {
        this.add_finish = true;
        setTimeout(() => {
          this.hide();
        }, 250);
      }, 250);
    },
  },
};
</script>
<style scoped lang="less">
.AddHero {
  .view_add();
  .content {
    .flex-box {
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
      margin-bottom: var(--gap-50);
    }
  }
}
</style>
