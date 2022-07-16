<template>
  <div class="AddVoice">
    <transition name="fade">
      <div class="content" v-if="show"></div>
    </transition>

    <!--//%%%%%··········发布皮肤按钮··········%%%%%//-->
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
  name: "AddVoice",
  data() {
    return {};
  },
  mixins: [addHide],
  components: {},
  created() {
    setTimeout(async () => {
      this.$lybLoad.show("正在加载皮肤类型表");
      this.$lybLoad.close().then(() => {
        this.show = true;
      });
    }, 1000);
  },
  methods: {},
};
</script>
<style scoped lang="less">
.AddVoice {
  .view_add();
  .content {
  }
}
</style>
