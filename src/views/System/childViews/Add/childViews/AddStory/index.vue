<template>
  <div class="AddStory view_add">
    <transition name="fade">
      <div class="content" v-show="show">
        <div class="title">英雄故事</div>
        <LybRichText class="LybRichText" v-model="hero_data.gamestory" />
        <div class="title">历史故事</div>
        <LybRichText class="LybRichText" v-model="hero_data.history" />
      </div>
    </transition>

    <!--//%%%%%··········发布故事按钮··········%%%%%//-->
    <LybCommitBtn
      class="LybCommitBtn"
      size="50px"
      @upload="addStory"
      :finish="addStory_finish"
      title="发布"
    />

    <!--//%%%%%··········取消发布··········%%%%%//-->
    <LybCancelBtn class="LybCancelBtn" size="50px" @close="hide" title="取消" />
  </div>
</template>
<script>
export default {
  name: "AddStory",
  data() {
    return {
      show: false,
      hero_data: {
        gamestory: "",
        history: "",
      },
      addStory_finish: false, //是否发布成功
    };
  },
  components: {},
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

    //#####··········发布故事 ··········#####//
    addStory() {
      setTimeout(() => {
        this.addStory_finish = true;
        console.log(JSON.parse(JSON.stringify(this.hero_data)));
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
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: var(--gap-25);
    color: #fff;
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
  .LybCommitBtn,
  .LybCancelBtn {
    position: fixed;
    right: 0;
    bottom: 0;
    transition: all 0.1s;
    &:hover {
      filter: saturate(2);
    }
    &:active {
      filter: brightness(0.75);
    }
  }
  .LybCommitBtn {
    transform: translateX(-25%) translateY(-25%);
    &:active {
      transform: translateX(-25%) translateY(-25%) scale(0.9);
    }
  }
  .LybCancelBtn {
    transform: translateX(-155%) translateY(-25%);
    &:active {
      transform: translateX(-155%) translateY(-25%) scale(0.9);
    }
  }
}
</style>
