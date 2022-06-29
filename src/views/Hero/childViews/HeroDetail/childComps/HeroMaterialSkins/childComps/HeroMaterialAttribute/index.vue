<template>
  <div class="HeroMaterialAttribute">
    <div class="title">英雄属性</div>
    <K-HeroSort class="HeroSort" :occ="data.profession" />
    <K-Attribute attr="survival" :length="data.survival" />
    <K-Attribute attr="attack" :length="data.attack" />
    <K-Attribute attr="effect" :length="data.effect" />
    <K-Attribute attr="difficulty" :length="data.difficulty" />
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  name: "HeroMaterialAttribute",
};
</script>
<style scoped lang="less">
.HeroMaterialAttribute {
  display: flex;
  opacity: 0;
  position: absolute;
  right: 0;
  flex-direction: column;
  height: 100%;
  padding: var(--gap-25);
  background-color: rgba(0, 0, 0, 0.5);
  animation: into 1s forwards;
  transform: translateZ(275px);
  transform-origin: right center;
  // animation: updownright 2.5s 1s infinite, into 1s;
  @keyframes updownright {
    0%,
    100% {
      transform: translateX(-185px) translateZ(275px) rotateY(-45deg)
        rotateX(10deg) scale(0.8);
    }
    50% {
      transform: translateX(-185px) translateY(-20px) translateZ(275px)
        rotateY(-45deg) rotateX(10deg) scale(0.8);
    }
  }
  @keyframes into {
    100% {
      opacity: 1;
      transform: translateX(-185px) translateZ(275px) rotateY(-45deg)
        rotateX(10deg) scale(0.8);
    }
  }
  .title {
    color: var(--white);
    font-size: var(--font-s-75);
    margin-bottom: var(--gap-15);
    text-shadow: var(--t-shadow);
  }
  .HeroSort {
    margin-bottom: var(--gap-25);
  }
}
</style>
