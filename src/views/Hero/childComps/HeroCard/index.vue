<template>
  <div class="HeroCard cursor-pointer" v-maskGradient>
    <div class="id">No.{{ data.id }}</div>
    <img
      class="cursor-pointer"
      :src="data.cover"
      :style="{
        top: data.offset.top,
        left: data.offset.left,
        transform: data.offset.transform,
      }"
      alt=""
    />
    <div class="bottom">
      <div class="name">{{ data.name }}</div>
      <div class="mark">{{ data.mark }}</div>
    </div>
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
  name: "HeroCard",
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped lang="less">
.HeroCard {
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.25);
  transition: all 0.25s cubic-bezier(0, 0.88, 0.52, 1.67);
  box-shadow: 0 5px 10px 5px rgba(0, 0, 0, 0.75);
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px 5px rgba(0, 0, 0, 0.75);
    .bottom {
      @keyframes springbackL {
        33% {
          transform: translateY(-10px);
        }
        75% {
          transform: translateY(5px);
        }
        0%,
        100% {
          transform: translateY(0px);
        }
      }
      .name {
        animation: springbackL 0.5s 0.1s;
      }
      .mark {
        animation: springbackL 0.5s 0.025s;
      }
    }
    .id {
      animation: springbackS 0.5s 0.025s;
      @keyframes springbackS {
        33% {
          transform: translateY(-5px);
        }
        75% {
          transform: translateY(5px);
        }
        0%,
        100% {
          transform: translateY(0px);
        }
      }
    }
  }
  .id {
    z-index: 1;
    font-size: var(--font-s-16);
    color: var(--white);
    margin: var(--gap-15);
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  }
  img {
    position: absolute;
    min-width: 100%;
    max-height: 100%;
  }
  .bottom {
    display: flex;
    z-index: 1;
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: var(--gap-15);
    flex-direction: column;
    align-items: center;
    .name {
      width: fit-content;
      color: var(--white);
      font-size: var(--font-s-35);
      line-height: 1;
      margin-bottom: var(--gap-5);
    }
    .mark {
      color: var(--gray);
      font-size: var(--font-s-16);
    }
  }
}
</style>
