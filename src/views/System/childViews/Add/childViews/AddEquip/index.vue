<template>
  <div class="AddEpigraph">
    <transition name="fade">
      <div
        class="content"
        ref="content"
        v-if="show"
        is="transition-group"
        name="fade"
      ></div>
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
  name: "AddEpigraph",
  data() {
    return {};
  },
  mixins: [addHide],
  created() {
    setTimeout(async () => {
      this.$lybLoad.show("正在加载");
      this.$lybLoad.close().then(() => {
        this.show = true;
      });
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
.AddEpigraph {
  .view_add();
  .content {
  }
}
</style>
