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
        <K-Button /><!-- <K-Button type="default" /> -->
        <K-Button type="warn" />
        <K-Button type="danger" />
      </ChildComps>
      <!-- 复选框 -->
      <ChildComps class="flex">
        <K-Checkbox v-model="checked" />
        <K-Checkbox v-model="show_dialog" />
      </ChildComps>
    </div>

    <div>
      <!-- 英雄职业 -->
      <ChildComps class="flex">
        <K-HeroSort occ="tank" />
        <K-HeroSort occ="mage" />
        <K-HeroSort occ="warrior" />
        <K-HeroSort occ="assist" />
        <K-HeroSort occ="assassin" />
        <K-HeroSort occ="striker" />
      </ChildComps>
      <!-- 英雄属性 -->
      <ChildComps class="flex">
        <K-Attribute attr="survival" length="25%" />
        <K-Attribute attr="attack" length="50%" />
        <K-Attribute attr="skill" length="75%" />
        <K-Attribute attr="difficulty" length="100%" />
      </ChildComps>
    </div>

    <K-Dialog v-model="show_dialog" />
  </div>
</template>
<script>
import ChildComps from "./childComps";
export default {
  name: "Components",
  data() {
    return {
      checked: false, //复选框
      show_dialog: false, //显示弹窗
    };
  },
  watch: {
    checked(v) {
      console.log(v);
    },
  },
  components: { ChildComps },
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
