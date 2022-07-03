<template>
  <div class="EquipSidebar">
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
  name: "EquipSidebar",
  data() {
    return {
      currentName: "攻击",
      hero_type: [
        { name: "攻击", icon: "ATTACK" },
        { name: "法术", icon: "MAGIC" },
        { name: "防御", icon: "DEFENSE" },
        { name: "移动", icon: "MOVE" },
        { name: "打野", icon: "JUNGLE" },
        { name: "游走", icon: "MIGRATION" },
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
.EquipSidebar {
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 0;
  right: 0;
  width: 200px;
  height: 100%;
  &:hover {
    border-left: 1px solid rgba(255, 255, 255, 0.05);
    box-shadow: -5px 0 5px -5px rgba(0, 0, 0, 0.5);
  }
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
