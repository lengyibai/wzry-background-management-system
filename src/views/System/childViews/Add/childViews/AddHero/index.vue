<template>
  <div class="AddHero">
    <LybMaskClose @close="hide" />
    <AddLink
      v-model="show_AddLink"
      :title="AddLink_title"
      :placeholder="AddLink_placeholder"
      @get-link="getLink"
    />
    <transition name="fade">
      <div class="content" v-show="show">
        <AddHeroHeadImg :link="hero_data.headImg" @select="headImg" />
      </div>
    </transition>
  </div>
</template>
<script>
//#####··········子组件··········#####//
import AddHeroHeadImg from "./childComps/AddHeroHeadImg"; //头像
export default {
  name: "AddHero",
  data() {
    return {
      show: false,
      //#####··········弹窗相关··········#####//
      show_AddLink: false, //显示添加链接弹窗
      AddLink_status: "", //当前谁在使用弹窗(字段名)
      AddLink_title: "", //弹窗左上角标题
      AddLink_placeholder: "", //弹窗输入框描述
      hero_data: {
        headImg: "",
      },
    };
  },
  components: { AddHeroHeadImg },
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

    //#####·········设置图片弹窗时间··········#####//
    //####········获取链接········####//
    getLink(link) {
      this.hero_data.headImg = link;
    },

    //#####··········添加链接事件··········#####//
    //####········头像········####//
    headImg() {
      this.show_AddLink = true;
      this.AddLink_title = "设置英雄头像";
      this.AddLink_placeholder = "请输入头像链接";
      this.AddLink_status = "headImg";
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
}
</style>
