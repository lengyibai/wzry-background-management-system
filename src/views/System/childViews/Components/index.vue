<template>
  <div class="Components">
    <div>
      <!-- 标签 -->
      <ChildComps class="flex">
        <K-TagSmall color="blue" text="生存" />
        <K-TagSmall color="yellow" text="攻击" />
        <K-TagSmall color="green" text="技能" />
        <K-TagSmall color="red" text="上手" />
      </ChildComps>
      <!-- 按钮 -->
      <ChildComps class="flex">
        <!-- <K-Button type="default" /> -->
        <K-Button @click.native="$click('查看')" @mouseup.native="showTip(0)"
          >查看</K-Button
        >
        <K-Button
          type="warn"
          @click.native="$click('确定')"
          @mouseup.native="showTip(1)"
          >领取</K-Button
        >
        <K-Button
          type="danger"
          @click.native="$click('取消')"
          @mouseup.native="showTip(2)"
          >取消</K-Button
        >
      </ChildComps>
      <!-- 复选框 -->
      <ChildComps class="flex">
        <K-Checkbox v-model="show_dialog" @click.native="$click('确定')" />
        <K-Checkbox
          v-model="show_confirm_dialog"
          @click.native="$click('确认弹窗')"
        />
      </ChildComps>
    </div>

    <div>
      <!-- 英雄职业 -->
      <ChildComps class="flex">
        <K-HeroSort occ="坦克" />
        <K-HeroSort occ="法师" />
        <K-HeroSort occ="战士" />
        <K-HeroSort occ="辅助" />
        <K-HeroSort occ="刺客" />
        <K-HeroSort occ="射手" />
      </ChildComps>
      <!-- 英雄属性 -->
      <ChildComps class="flex">
        <K-Attribute attr="survival" length="25%" />
        <K-Attribute attr="attack" length="50%" />
        <K-Attribute attr="effect" length="75%" />
        <K-Attribute attr="difficulty" length="100%" />
      </ChildComps>
    </div>

    <!---------- 调用出现 ---------->
    <!-- 普通弹窗 -->
    <K-Dialog v-model="show_dialog" />
    <!-- 确认弹窗 -->
    <K-Dialog type="confirm" v-model="show_confirm_dialog" />
  </div>
</template>
<script>
import ChildComps from "./childComps";
export default {
  name: "Components",
  data() {
    return {
      show_dialog: false, //显示普通动画弹窗
      show_confirm_dialog: false, //显示确认动画弹窗
    };
  },
  components: { ChildComps },
  methods: {
    showTip(flag) {
      if (flag === 0) {
        this.$tip("显示普通弹窗并播放正常音效", "info");
      } else if (flag === 1) {
        this.$tip("显示警告弹窗并播放警告音效", "warning");
      } else {
        this.$tip("显示错误弹窗并播放错误音效", "error");
      }
    },
  },
};
</script>
<style scoped lang="less">
.Components {
  width: 100%;
  height: 100%;
  overflow: hidden auto;
  > div {
    margin-bottom: var(--gap-25);
  }
}
.flex {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>
