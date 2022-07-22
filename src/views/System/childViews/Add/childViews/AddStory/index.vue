<template>
  <div class="AddStory">
    <transition name="fade">
      <div class="content" v-show="show">
        <div class="title">英雄故事</div>
        <LybRichText class="LybRichText" v-model="story_data.gamestory" />
        <div class="title">历史故事</div>
        <LybRichText class="LybRichText" v-model="story_data.history" />
      </div>
    </transition>

    <!--//%%%%%··········发布按钮··········%%%%%//-->
    <LybCommitBtn
      class="LybCommitBtn"
      size="50px"
      @upload="add"
      :finish="add_finish"
      title="发布"
    />

    <!--//%%%%%··········取消发布··········%%%%%//-->
    <LybCancelBtn class="LybCancelBtn" size="50px" @close="hide" title="取消" />
  </div>
</template>
<script>
//#####··········混入··········#####//
// { 发布及隐藏自身 }
import { addHide } from "@/utils/mixins.js";
export default {
  name: "AddStory",
  data() {
    return {
      story_data: {
        gamestory: "",
        history: "",
      },
    };
  },

  mixins: [addHide],
  mounted() {
    setTimeout(() => {
      this.show = true;
    }, 1000);
  },
  methods: {
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
.AddStory {
  .view_add();
  .content {
    .title {
      font-size: var(--font-s-35);
      color: var(--theme-color-eight);
      margin-bottom: 0.5em;
    }
    .LybRichText {
      width: 75%;
      margin-bottom: var(--gap-50);
    }
  }
}
</style>
