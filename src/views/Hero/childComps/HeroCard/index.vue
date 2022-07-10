<template>
  <div
    class="HeroCard cursor-pointer"
    v-maskGradient
    v-sweepLight="false"
    @mouseenter="show = true"
    @mouseleave="show = false"
  >
    <div class="id">No.{{ data.id }}</div>
    <transition name="fade">
      <div class="select-mask" v-if="show">
        <img :src="data.head_img" class="head" />
        <h1
          class="view cursor-pointer"
          @click="viewClick"
          @mouseenter="lineActive = true"
          @mouseleave="lineActive = false"
          v-textHoverColor
        >
          查看详情
        </h1>
        <div
          class="line"
          :class="{ lineActive: lineActive }"
          ref="line"
        ></div></div
    ></transition>

    <img
      class="bg"
      :src="data.cover"
      :style="{
        top: data.offset.top,
        left: data.offset.left,
        transform: data.offset.transform,
      }"
    />
    <div class="bottom">
      <div class="name" v-typewriter="data.name"></div>
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
    return {
      show: false,
      lineActive: false,
    };
  },
  methods: {
    //#####··········查看详情··········#####//
    viewClick() {
      this.$emit("view");
    },
  },
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
  transition: all 0.35s cubic-bezier(0, 0.88, 0.52, 1.67);
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
    pointer-events: none;
  }
  .select-mask {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(10px);
    z-index: 2;
    transition: all 0.5s;
    .head {
      border-radius: 50%;
      width: 50%;
      margin-bottom: var(--gap-15);
    }
    .view {
      color: var(--blue);
      transition: all 0.5s;
      animation: scale 0.25s 0.25s forwards;
      transform: scale(0);
      font-size: var(--font-s-35);
      @keyframes scale {
        100% {
          transform: scale(1);
        }
      }
    }

    .line {
      width: 0%;
      height: 3px;
      transition: all 0.25s;
      background-color: var(--blue);
    }
    .lineActive {
      width: 10em !important;
    }
  }
  .bg {
    position: absolute;
    min-width: 100%;
    max-height: 100%;
    pointer-events: none;
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
    pointer-events: none;
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
  @media screen and (max-width: 1500px) {
    .view {
      font-size: var(--font-s-30) !important;
    }
    .select-mask {
      .lineActive {
        width: 8em !important;
      }
    }
  }
  @media screen and (max-width: 1400px) {
    .name,
    .view {
      font-size: var(--font-s-25) !important;
    }
    .mark,
    .id {
      font-size: var(--font-s-12) !important;
    }
    .select-mask {
      .lineActive {
        width: 7em !important;
      }
    }
  }
  @media screen and (max-width: 1210px) {
    .name,
    .view {
      font-size: var(--font-s-16) !important;
    }
    .select-mask {
      .lineActive {
        width: 4em !important;
      }
    }
  }
}
</style>
