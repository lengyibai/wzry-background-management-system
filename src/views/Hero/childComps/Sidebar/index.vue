<template>
  <div class="Sidebar">
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
import icon from "@/assets/icon/svg/index.js";
export default {
  name: "Sidebar",
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
  components: {},
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
.Sidebar {
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 0;
  right: 0;
  width: 200px;
  height: 100%;
  border-left: 1px solid rgba(255, 255, 255, 0.05);
  .hero-type {
    display: flex;
    align-items: center;
    padding: 10px 20px;
    color: var(--theme-font-dark);
    background-image: linear-gradient(
      -25deg,
      transparent,
      25%,
      transparent 100%
    );
    transition: all 0.25s;
    &:hover {
      color: var(--theme-font-light);
      background-image: linear-gradient(
        -25deg,
        rgba(34, 58, 94, 0) 25%,
        rgba(34, 130, 199, 0.25) 100%
      );
    }
    .name {
      font-size: var(--font-s-20);
    }
  }
}
.active {
  color: var(--theme-font-light) !important;
  background-image: linear-gradient(
    -25deg,
    rgba(34, 58, 94, 0) 25%,
    rgba(34, 130, 199, 0.25) 100%
  ) !important;
}
</style>
