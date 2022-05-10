<template>
  <div class="HeroDetAilattribute">
    <div class="title">英雄属性</div>
    <K-HeroSort class="HeroSort" :occ="data.profession" />
    <K-Attribute attr="survival" :length="data.survival" />
    <K-Attribute attr="attack" :length="data.attack" />
    <K-Attribute attr="skill" :length="data.skill" />
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
  name: "HeroDetAilattribute",
  data() {
    return {};
  },
  components: {},
  methods: {},
};
</script>
<style scoped lang="less">
.HeroDetAilattribute {
  position: relative;
  right: 0;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  padding: var(--gap-25);
  display: flex;
  flex-direction: column;
  transform-origin: right center;
  animation: updownright 2.5s 1s infinite, into 1s;
  transform: translateZ(275px);
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
      transform: translateX(-185px) translateZ(275px) rotateY(-45deg)
        rotateX(10deg) scale(0.8);
    }
  }
  .title {
    color: var(--white);
    font-size: var(--font-s-75);
    margin-bottom: var(--gap-15);
  }
  .HeroSort {
    margin-bottom: var(--gap-25);
  }
}
</style>
