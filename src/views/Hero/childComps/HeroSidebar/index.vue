<template>
  <div class="HeroSidebar">
    <div
      class="hero-type cursor-pointer"
      :class="{ active: item.name === currentName }"
      v-for="(item, index) in hero_type"
      @click="select(item.name, index)"
      :key="index"
    >
      <span v-html="icon[item.icon]"></span>
      <span class="name cursor-pointer">{{ item.name }}</span>
    </div>
  </div>
</template>
<script>
import icon from "@/assets/icon/svg/sidebar.js";
export default {
  name: "HeroSidebar",
  data() {
    return {
      currentName: "全部",
      hero_type: [
        { name: "全部", icon: "ALL" },
        { name: "坦克", icon: "TANK" },
        { name: "战士", icon: "WARRIOR" },
        { name: "刺客", icon: "ASSASSIN" },
        { name: "法师", icon: "MAGE" },
        { name: "射手", icon: "STRIKER" },
        { name: "辅助", icon: "ASSIST" },
      ],
    };
  },
  computed: {
    //#####··········图标··········#####//
    icon() {
      return icon;
    },
  },
  methods: {
    select(name, index) {
      this.$click("默认" + index);
      this.currentName = name;
    },
  },
};
</script>
<style scoped lang="less">
.HeroSidebar {
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 0;
  right: 0;
  width: 200px;
  height: 100%;
  &:hover {
    box-shadow: -5px 5px 5px -5px rgba(0, 0, 0, 0.5);
  }
  .hero-type {
    display: flex;
    align-items: center;
    padding: 10px 20px;
    color: var(--theme-color-five);
    background-image: linear-gradient(
      -25deg,
      transparent,
      25%,
      transparent 100%
    );
    transition: all 0.25s;
    &:hover {
      color: var(--white);
      background-image: linear-gradient(
        -25deg,
        rgba(34, 58, 94, 0) 25%,
        rgba(34, 130, 199, 0.25) 100%
      );
    }
    .name {
      font-size: var(--font-s-20);
    }
    /deep/ .icon {
      width: 35px;
      height: 35px;
      margin-right: 20px;
    }
  }
}
.active {
  color: var(--white) !important;
  background-image: linear-gradient(
    -25deg,
    rgba(34, 58, 94, 0) 25%,
    rgba(34, 130, 199, 0.25) 100%
  ) !important;
}
</style>
