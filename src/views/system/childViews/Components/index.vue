<template>
  <div class="Components">
    <div style="margin-bottom: var(--gap-25)">
      <ChildComps class="flex">
        <K-TagSmall color="blue" text="生存" />
        <K-TagSmall color="yellow" text="攻击" />
        <K-TagSmall color="green" text="技能" />
        <K-TagSmall color="red" text="上手" />
      </ChildComps>
    </div>

    <div>
      <ChildComps class="flex">
        <KHeroSort occ="tank" />
        <KHeroSort occ="mage" />
        <KHeroSort occ="warrior" />
        <KHeroSort occ="assist" />
        <KHeroSort occ="assassin" />
        <KHeroSort occ="striker" />
      </ChildComps>
      <ChildComps class="flex">
        <KAttribute attr="survival" length="25%" />
        <KAttribute attr="attack" length="50%" />
        <KAttribute attr="skill" length="75%" />
        <KAttribute attr="difficulty" length="100%" />
      </ChildComps>
    </div>
  </div>
</template>
<script>
import ChildComps from "./childComps/index.vue";
export default {
  name: "Components",
  components: { ChildComps },
};
</script>
<style scoped lang="less">
.Components {
  width: 100%;
  height: 100%;
  overflow: hidden auto;
}
.flex {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>
