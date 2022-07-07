<template>
  <div class="AddHero">
    <LybMaskClose @close="hide" />
    <transition name="fade">
      <div class="content" v-show="show">
        <AddHeroHeadImg />
      </div>
    </transition>
  </div>
</template>
<script>
//#####··········子组件··········#####//
import AddHeroHeadImg from "./childComps/AddHeroHeadImg"; //头像
export default {
  name: "AddHero",
  data() {
    return {
      show: false,
    };
  },
  components: { AddHeroHeadImg },
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
  },
};
</script>
<style scoped lang="less">
.AddHero {
  position: fixed;
  padding: var(--gap-25);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  overflow: hidden auto;
  background-color: rgba(0, 0, 0, 0.582);
  .content {
    width: 100%;
    height: 100%;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
