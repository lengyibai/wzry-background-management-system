<template>
  <div class="AddHero">
    <transition name="fade">
      <div class="content" v-show="show">
        <!--//%%%%%··········头像及名字··········%%%%%//-->
        <AddHeroHeadImg />

        <!--//%%%%%··········封面及海报··········%%%%%//-->
        <AddHeroCover />

        <!--//%%%%%··········身高及代号··········%%%%%//-->
        <AddHeroMarkHeight />
      </div>
    </transition>

    <!--//%%%%%··········发布英雄按钮··········%%%%%//-->
    <LybCommit
      class="LybCommit"
      size="100px"
      @upload="addHero"
      :finish="addHero_finish"
    />

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
//#####··········子组件··········#####//
import AddHeroHeadImg from "./childComps/AddHeroHeadImg"; //头像及名字
import AddHeroMarkHeight from "./childComps/AddHeroMarkHeight"; //身高及代号
import AddHeroCover from "./childComps/AddHeroCover"; //封面及海报
export default {
  name: "AddHero",
  data() {
    this.AddLink_set_desc = {
      headImg: "头像链接",
      name: "英雄名",
      mark: "代号",
      height: "身高",
      cover: "封面",
      poster: "海报",
    };
    return {
      show: false,
      //#####··········弹窗相关··········#####//
      show_AddLink: false, //显示添加链接弹窗
      AddLink_key: "", //当前谁在使用弹窗(字段名)
      AddLink_title: "", //弹窗左上角标题
      AddLink_placeholder: "", //弹窗输入框描述
      hero_data: {},
      addHero_finish: false, //是否发布成功
    };
  },
  components: { AddHeroHeadImg, AddHeroMarkHeight, AddHeroCover },
  provide() {
    return {
      hero_data: this.hero_data,
      setKeyValue: this.setKeyValues,
      setKeyV: this.setKeyVs,
    };
  },
  mounted() {
    setTimeout(() => {
      this.show = true;
    }, 1000);
  },
  methods: {
    //#####··········隐藏自身··········#####//
    hide() {
      this.show = false;
      setTimeout(() => {
        this.$emit("input", false);
      }, 500);
    },

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
      console.log(JSON.parse(JSON.stringify(this.hero_data)));
    },

    //#####··········发布英雄··········#####//
    addHero() {
      console.warn("发布英雄");
      setTimeout(() => {
        this.addHero_finish = true;
        console.warn("发布成功");
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
  position: fixed;
  padding: var(--gap-25);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  overflow: hidden auto;
  background-color: rgba(0, 0, 0, 0.582);
  .content {
    width: 100%;
    height: 100%;
    color: #fff;
  }
  .LybCommit {
    position: fixed;
    right: 0;
    bottom: 0;
    border: 5px solid #fff;
  }
}
</style>
